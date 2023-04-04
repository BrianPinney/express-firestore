import express from "express";
import cors from "cors";

import { addNewAnimal } from "./src/animals.js";

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

// app.get("/animals", getAllAnimals);
app.get("/animals", addNewAnimal);

app.listen(PORT, () => {
  console.log(`Listening on port: http://localhost:${PORT}...`);
});
