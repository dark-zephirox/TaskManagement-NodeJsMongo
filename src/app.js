import express from "express";
import exphbs from "express-handlebars";
import indexRoutes from "./routes/index.router.js";
import path from "path";
import { fileURLToPath } from "url";
import { dirname } from "path";
import morgan from "morgan";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();

app.set("views", path.join(__dirname + "/views"));

app.engine(
  ".hbs",
  exphbs.engine({
    layoutsDir: path.join(app.get("views"), "layouts"),
    defaultLayout: "main",
    extname: ".hbs",
  })
);

app.set("view engine", ".hbs");

app.use(morgan("dev"));

app.use(express.urlencoded({ extended: false }));

app.use(indexRoutes);

app.use(express.static(path.join(__dirname, "public")));

export default app;
