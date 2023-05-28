const fs = require("fs");

async function main() {
  await new Promise((res) => {
    fs.cp("./docs/pages", "./wiki", { recursive: true }, () => {});
    fs.cp("./docs/Index.md", "./wiki/README.md", {}, () => {});
    res();
  });
}

main().catch(console.error);
