export default (io) => {
  io.on("connection", (socket) => {
    console.log(socket.handshake);
  });
};
