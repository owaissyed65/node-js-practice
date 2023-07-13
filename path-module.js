const path = require("path");
console.log(path.sep);
const filePath = path.join(__dirname, "forpath", "test.txt");
console.log(filePath);
const absolute = path.resolve(__dirname, "forpath", "test.txt");
console.log(path.basename(absolute));
