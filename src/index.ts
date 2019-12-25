import express from "express";
import socketio from "socket.io";

const PORT: number = 3000 || process.env.PORT;

// use this if you want also serve regular http request
// const app = express();
// const appServer = app.listen(PORT, () =>
//   console.log(`Listening on PORT ${PORT}`)
// );

// const io = socketio().listen(appServer);

// app.get("/", (req, res) => {
//   console.log("Connected from get");
//   res.end();
// });

// use this plain line to initialize it, without express
const io = socketio(PORT);

io.on("connect", socket => {
  console.log(`there's a socket of id ${socket.id} connected`);
  // socket.on("clicked", data => {
  //   console.log(`kena klik`);
  //   console.log(data);
  // });
});

io.on("connection", (socket: socketio.Socket) => {
  socket.on("clicked", data => {
    console.log(data);
  });

  socket.on("disconnect", data => {
    console.log(`socket with id of ${socket.id} is disconnected`);
    
  });
});
