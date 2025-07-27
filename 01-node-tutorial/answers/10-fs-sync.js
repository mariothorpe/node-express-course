const { readFileSync, writeFileSync } = require("fs");
console.log("start");
const first = readFileSync("./content/first.txt", "utf8");
const second = readFileSync("./content/second.txt", "utf8");

writeFileSync(
  "./temporary/result-sync.txt",
  `Here Is The Result : ${first}, ${second}`,
  { flag: "a" }
);
console.log("Started this task");
console.log("Task in Progress...");
console.log("Task Completed");
