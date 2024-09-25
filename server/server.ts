import express from "express";
import { initDB } from "./src/dataStore";

const app = express();

// IIFE
(async () => {
  await initDB();

  app.get("/", (_, res) => {
    res.send("Hello World");
  });

  app.listen(5000, () => {
    console.log("Server is running on port 5000");
  });
})();
