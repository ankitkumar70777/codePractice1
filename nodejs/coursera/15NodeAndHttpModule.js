











//excercise

const http = require("http");
const fs = require("fs");
const path = require("path");
const hostname = "localhost";
const port = 8080;
const server = http.createServer((req, res) => {
  console.log("req.url and method :", req.url, " ", req.method);
  if (req.method == "GET") {
    var fileUrl;
    if (req.url == "/") {
        console.log('inside if');
      fileUrl = "./15Public/index.html";
    } else {
      fileUrl = req.url;
      var filePath = path.resolve("./15Public" + fileUrl);
      console.log("filePath ::", filePath);
      var fileExt = path.extname(filePath);
      console.log("fileExt ::", fileExt);
      if (fileExt == ".html") {
        fs.exists(filePath, (exists) => {
          if (!exists) {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/html");
            res.end("find not found");
            return;
          }
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html");
          fs.createReadStream(filePath).pipe(res);
        });
      } else {
            res.statusCode = 404;
            res.setHeader("Content-Type", "text/html");
            res.end("not valid file");
            return;
      }
    }
  } else {
    res.send("invalid method");
  }
});
server.listen(port, hostname, () => {
  console.log(`Server is up, running At http://${hostname}:${port} `);
});