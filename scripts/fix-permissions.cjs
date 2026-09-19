const fs = require("fs");
const path = require("path");

const binDir = path.join(__dirname, "..", "node_modules", ".bin");

try {
  if (fs.existsSync(binDir)) {
    for (const file of fs.readdirSync(binDir)) {
      try {
        fs.chmodSync(path.join(binDir, file), 0o755);
      } catch {}
    }
  }
} catch {}