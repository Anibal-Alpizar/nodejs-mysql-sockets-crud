import Note from "./models/Note";

export default (io) => {
  io.on("connection", (socket) => {
    const emitNotes = async () =>{
      const notes = await Note.find();
      console.log(notes)
      socket.emit(notes);
    }
    emitNotes();
  });
};
