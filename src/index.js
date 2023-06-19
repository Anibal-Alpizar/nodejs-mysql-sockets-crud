import app from "./app.js";
import { Server as Websocketserver } from "socket.io";
import http from "http";
import { connectDB } from "./db.js";

connectDB();

const server = http.createServer(app);
const httpServer = server.listen(3000);
const io = new Websocketserver(httpServer);

console.log("Server is running on port 3000");
