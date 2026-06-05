// Minimal zero-dependency static server for previewing the exported ./out folder.
const http = require("http");
const fs = require("fs");
const path = require("path");

const ROOT = path.join(__dirname, "..", "out");
const PORT = process.env.PORT || 4321;

const TYPES = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".json": "application/json",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
};

function send(res, status, buf, type) {
  res.writeHead(status, { "Content-Type": type || "text/plain" });
  res.end(buf);
}

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
  let filePath = path.join(ROOT, urlPath);

  try {
    let stat = fs.existsSync(filePath) && fs.statSync(filePath);
    if (stat && stat.isDirectory()) filePath = path.join(filePath, "index.html");
    else if (!stat && !path.extname(filePath)) {
      const idx = path.join(filePath, "index.html");
      filePath = fs.existsSync(idx) ? idx : path.join(ROOT, "index.html");
    }
    if (!fs.existsSync(filePath)) {
      const nf = path.join(ROOT, "404.html");
      if (fs.existsSync(nf)) return send(res, 404, fs.readFileSync(nf), TYPES[".html"]);
      return send(res, 404, "Not found");
    }
    const ext = path.extname(filePath).toLowerCase();
    send(res, 200, fs.readFileSync(filePath), TYPES[ext] || "application/octet-stream");
  } catch (e) {
    send(res, 500, "Server error");
  }
});

server.listen(PORT, () => console.log(`static-server listening on http://localhost:${PORT}`));
