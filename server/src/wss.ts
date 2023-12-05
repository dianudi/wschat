import { WebSocketServer } from "ws";
import { CustomWebsocket } from "./types.js";

const msgWs = new WebSocketServer({ noServer: true, clientTracking: true });

msgWs.on("connection", (ws: CustomWebsocket, req) => {
  ws.on("error", (e) => console.error(e.message));
  ws.isAlive = true;
  console.log(msgWs.clients);
});

msgWs.on("error", (e) => console.error(e.message));
setInterval(() => {
  msgWs.clients.forEach((ws: CustomWebsocket) => {
    if (ws.isAlive === false) return ws.terminate();
    ws.isAlive = false;
    ws.ping;
  });
});
export { msgWs };
