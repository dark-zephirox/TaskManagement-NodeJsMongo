import app from "./app.js";
import "./database.js";
import {PORT} from './config.js'

app.listen(PORT);

console.log("Server in http://localhost:"+PORT);
