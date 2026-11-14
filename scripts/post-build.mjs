import fs from "fs";
import path from "path";

const outDir = path.resolve(process.cwd(), "out");

function processDirectory(dir, lang, dirAttr) {
  if (!fs.existsSync(dir)) return;
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      processDirectory(fullPath, lang, dirAttr);
    } else if (entry.isFile() && entry.name.endsWith(".html")) {
      let content = fs.readFileSync(fullPath, "utf-8");
      // Replace <html ...> with correct lang and dir attributes
      content = content.replace(/<html(\s+[^>]*)?>/i, `<html lang="${lang}" dir="${dirAttr}">`);
      fs.writeFileSync(fullPath, content, "utf-8");
    }
  }
}

if (fs.existsSync(outDir)) {
  console.log("Running post-build locale attribute processor...");
  processDirectory(path.join(outDir, "ar"), "ar", "rtl");
  processDirectory(path.join(outDir, "en"), "en", "ltr");
  
  // Also process root index.html if present
  const rootIndex = path.join(outDir, "index.html");
  if (fs.existsSync(rootIndex)) {
    let content = fs.readFileSync(rootIndex, "utf-8");
    content = content.replace(/<html(\s+[^>]*)?>/i, `<html lang="ar" dir="rtl">`);
    fs.writeFileSync(rootIndex, content, "utf-8");
  }
  console.log("Post-build completed successfully: html[lang] and [dir] updated.");
}
