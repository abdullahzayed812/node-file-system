const fs = require("fs");
const path = require("path");

// (read, write, append, rename, unlink)

fs.readFile(
  path.join(__dirname, "files", "starter.txt"),
  "utf8",
  (error, data) => {
    if (error) throw error;
    console.log(data);
  }
);

console.log("Hello...");

fs.writeFile(
  path.join(__dirname, "files", "replay.txt"),
  "Nice to meet you.",
  (error) => {
    if (error) throw error;
    console.log("Write complete");

    fs.appendFile(
      path.join(__dirname, "files", "replay.txt"),
      "\n\nYes it is.",
      (error, data) => {
        if (error) throw error;
        console.log("Append complete");

        fs.rename(
          path.join(__dirname, "files", "replay.txt"),
          path.join(__dirname, "files", "newReplay.txt"),
          (error) => {
            if (error) throw error;
            console.log("Rename complete");
          }
        );
      }
    );
  }
);

process.on("uncaughtException", (error) => {
  console.error(`There was uncaughtError: ${error}`);
  process.exit(1);
});
