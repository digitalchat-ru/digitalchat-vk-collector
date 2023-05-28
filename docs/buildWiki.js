const fs = require("fs");

async function main() {
  fs.rmSync("./wiki/generated", { recursive: true, force: true });
  await new Promise((res) => {
    fs.cp("./docs", "./wiki", { recursive: true }, res);
  });
}

main().catch(console.error);
