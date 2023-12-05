import express from "express";
import { createServer } from "node:http";
import { msgWs } from "./wss.js";
import helmet from "helmet";
import cookie from "cookie-parser";
import route from "./route.js";

const app = express();
const server = createServer(app);
app.set("view engine", "ejs");
app.use(
  helmet({
    contentSecurityPolicy: {
      directives: {
        defaultSrc: ["'self'"],
      },
      //   reportOnly: true,
    },
  })
);
app.use(cookie());
app.use(express.static("public"));
app.use(route);
app.use((req, res) => {
  res.sendStatus(404);
});

server.on("upgrade", (req, socket, head) => {
  //   console.log(head);
  switch (req.url) {
    case "/":
      msgWs.handleUpgrade(req, socket, head, (ws) => msgWs.emit("connection", ws, req));
      break;
    default:
      socket.write("HTTP/1.1 426 Upgrade Required\r\n\r\n");
      socket.destroy();
      break;
  }
});
server.listen(3000, () => console.log("App Running 🚀"));
