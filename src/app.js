import express from "express";
import usersRoute from "../routes/users.route.js";

const app = express();

app.use(express.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.use("/api/users", usersRoute);

export default app;
