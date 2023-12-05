import { WebSocket } from "ws";

interface CustomWebsocket extends WebSocket {
  isAlive?: boolean;
}

export { CustomWebsocket };
