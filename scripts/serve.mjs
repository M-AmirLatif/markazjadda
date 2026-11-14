import http from "http";
import fs from "fs";
import path from "path";
import zlib from "zlib";

const PORT = 3334;
const OUT_DIR = path.resolve(process.cwd(), "out");

const mimeTypes = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "application/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".svg": "image/svg+xml",
  ".mp4": "video/mp4",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
};

const server = http.createServer((req, res) => {
  let reqPath = decodeURIComponent(req.url.split("?")[0]);
  if (reqPath.endsWith("/")) reqPath += "index.html";
  else if (!path.extname(reqPath)) {
    if (fs.existsSync(path.join(OUT_DIR, reqPath, "index.html"))) {
      reqPath = path.join(reqPath, "index.html");
    } else if (fs.existsSync(path.join(OUT_DIR, reqPath + ".html"))) {
      reqPath = reqPath + ".html";
    }
  }

  const filePath = path.join(OUT_DIR, reqPath);
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    res.writeHead(404, { "Content-Type": "text/plain" });
    res.end("Not Found");
    return;
  }

  const ext = path.extname(filePath).toLowerCase();
  const contentType = mimeTypes[ext] || "application/octet-stream";
  const stat = fs.statSync(filePath);

  // Video streaming support (Range requests)
  if (ext === ".mp4") {
    const range = req.headers.range;
    if (range) {
      const parts = range.replace(/bytes=/, "").split("-");
      const start = parseInt(parts[0], 10);
      const end = parts[1] ? parseInt(parts[1], 10) : stat.size - 1;
      res.writeHead(206, {
        "Content-Range": `bytes ${start}-${end}/${stat.size}`,
        "Accept-Ranges": "bytes",
        "Content-Length": end - start + 1,
        "Content-Type": contentType,
      });
      fs.createReadStream(filePath, { start, end }).pipe(res);
      return;
    }
  }

  const acceptEncoding = req.headers["accept-encoding"] || "";
  const isCompressible = /^(text\/|application\/javascript|application\/json|image\/svg)/.test(contentType);

  const cacheControl = ext === ".html" ? "no-cache" : "public, max-age=31536000, immutable";

  if (isCompressible && acceptEncoding.includes("gzip")) {
    res.writeHead(200, {
      "Content-Type": contentType,
      "Content-Encoding": "gzip",
      "Cache-Control": cacheControl,
    });
    fs.createReadStream(filePath).pipe(zlib.createGzip()).pipe(res);
  } else {
    res.writeHead(200, {
      "Content-Type": contentType,
      "Content-Length": stat.size,
      "Cache-Control": cacheControl,
    });
    fs.createReadStream(filePath).pipe(res);
  }
});

server.listen(PORT, () => {
  console.log(`Optimized static server running on http://localhost:${PORT}`);
});
