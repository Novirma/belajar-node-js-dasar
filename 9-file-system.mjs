import fs from "fs/promises";

const buffer = await fs.readFile("9-file-system.mjs");

console.info(buffer.toString());

await fs.writeFile("temp.txt", "Hello chika NodeJS");