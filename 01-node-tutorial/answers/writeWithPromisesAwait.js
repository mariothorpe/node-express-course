const { writeFile, readFile } = require("fs").promises;

const writer = async () => {
  try {
    await writeFile("temp.txt", "First line\nSecond line\nThird line", "utf8");
    console.log("File written successfully");
  } catch (err) {
    console.error("Error writing file:", err);
  }
};


const reader = async () => {
    try {
      const data = await readFile("temp.txt", "utf8");
      console.log("File content:", data);
    } catch (err) {
      console.error("Error reading file:", err);
    }
};

const readWrite = async () => {
    console.log("starting....");
    await writer();
    await reader();
    console.log("completed!");
}

readWrite();
