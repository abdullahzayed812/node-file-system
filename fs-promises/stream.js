const fs = require("fs");

// (createReadStream, createWriteStream)

const readableStream = fs.createReadStream("./files/lorem.txt", {
  encoding: "utf8",
});

const writableStream = fs.createWriteStream("./files/new-lorem.txt");

// readableStream.on("data", (dataChunk) => {
//   writableStream.write(dataChunk);
// });

// Efficient way to write long file

readableStream.pipe(writableStream);
