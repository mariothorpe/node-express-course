const path = require("path");

console.log(path.sep);

const filePath = path.join("/temporary/", "subfolder", "test.txt");
console.log(filePath);

const base = path.basename(filePath);
console.log(base);

const absolute = path.resolve(__dirname, "temporary", "subfolder", "test.txt");
console.log(absolute);
