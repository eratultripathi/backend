const express = require("express");
const http = require("http");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const socketServer = require("./socketServer");
const authRoutes = require("./routes/authRoutes");
const friendInvitationRoutes = require("./routes/friendInvitationRoutes");


const screenshotRouter = require("./routes/screenshot");

const PORT = process.env.PORT || process.env.API_PORT;

const app = express();
app.use(express.json());
app.use(cors());

// register the routes
app.use("/api/auth", authRoutes);
app.use("/api/friend-invitation", friendInvitationRoutes);
// screenshot
app.use("/api/screenshot",screenshotRouter );


const server = http.createServer(app);
socketServer.registerSocketServer(server);

mongoose.set('strictQuery', false);

mongoose
  .connect('mongodb+srv://atul:ermechcoder@cluster0.fq4j3um.mongodb.net/trackercrm?retryWrites=true&w=majority'
)
  .then(() => {
    server.listen(PORT, () => {
      console.log(`Server is listening on ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("database connection failed. Server not started");
    console.error(err);
  });
