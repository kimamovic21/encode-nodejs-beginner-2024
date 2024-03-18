import express from "express";
import bodyParser from "body-parser";
import 'dotenv/config';

import usersRoutes from "./routes/users.js";

const app = express();
const PORT = process.env.PORT;

app.use(bodyParser.json());

app.use("/users", usersRoutes);
app.get("/", (req, res) => res.send("Welcome to the Express Users App!"));
app.all("*", (req, res) => res.send("Route doesn't exist!"));

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));