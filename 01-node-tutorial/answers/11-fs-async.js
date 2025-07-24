const { readFile, writeFile } = require("fs");
console.log("at start");
readFile("./content/first.txt", "utf8", (err1, result) => {
  if (err) {
    console.log(err1);
    return;
  }
  const first = result;
  readFile("./content/second.txt", "utf8", (err2, result) => {
    if (err) {
      console.log(err2);
      return;
    }
    const second = result;
    writeFile(
      "./content/result-async.txt",
      `Here Is The Result : ${first}, ${second}`,
      (err, result) => {
        if (err) {
          console.log(err);
          return;
        }
        console.log("Done with this task!");
      }
    );
  });
});
console.log("Starting the next task");
