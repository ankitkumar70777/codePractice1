const next = require("next");
const routes = require("./routes");
const app = next({ dev: process.env.NODE_ENV !== "production" });
const handler = routes.getRequestHandler(app);
const { createServer } = require("http");
const hostname = "127.0.0.1";
const port = 3000;

app
  .prepare()
  .then(() => {
    const server = createServer(handler);
    server.listen(port, hostname, () => {
      console.log("Server running at http://" + hostname + ":" + port + "\n");
    });
  })
  .catch((error) => {
    console.log("error while preparing app", error);
  });
