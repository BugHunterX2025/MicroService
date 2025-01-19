const express = require("express");
const app = express();
const morgan = require("morgan");
const cluster = require("cluster");
const os = require("os");
if (cluster.isMaster) {
  const numCPUs = os.cpus().length;

  console.log(`Master ${process.pid} is running`);
  console.log(`frokibng ${numCPUs} workers`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  cluster.on("exit", (Worker, code, signal) => {
    console.log(`worker ${Worker.process.pid} died`);
    console.log("foring a new worker");
    cluster.fork();
  });
} else {
  app.use(morgan("dev"));
  app.get("/main", (req, res) => {
    res.send("hello stress");
  });
  app.listen(3001, () => {
    console.log("server  steresss is running on port 3001");
  });
}
