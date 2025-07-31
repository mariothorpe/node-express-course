const fs = require("fs");

const stream = fs.createReadStream("../content/big.txt", {
  encoding: "utf8",
  highWaterMark: 200,
});

let chunkCount = 0;

stream.on("data", (chunks) => {
  chunkCount++;
  console.log(chunks);
});

stream.on("end", () => {
  console.log(`Total Chunks: ${chunkCount}`);
});

stream.on("error", (err) => {
  console.log("Stream error:", err);
});