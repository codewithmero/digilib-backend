import dotenv from 'dotenv';
import app from './app.js';
dotenv.config({ path: './.env' });
import { dbConnect } from "./db/index.js";

let PORT = process.env.PORT || 3000;
let DB_URI = process.env.DB_URI;
dbConnect(DB_URI)
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server listening on http://localhost:${PORT}`);
    })
  })
  .catch(err => {
    console.log("Error::: while connecting to the DB", err);
  });