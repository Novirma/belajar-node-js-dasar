const os = require("os");

console.info(os.platform());
console.table(os.cpus());

console.info(os.freemem());
console.info(os.hostname());