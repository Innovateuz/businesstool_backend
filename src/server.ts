import express from "express";
import http from "http";
import cors from "cors";
import { json, urlencoded } from "body-parser";
import fileUpload from "express-fileupload";


import routes from "./routes";

const app = express();
const server = http.createServer(app);

app.use(cors({ origin: "*" }));
app.use(fileUpload({}));
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(routes);

process.on("SIGINT", function () {
    console.log("\nGracefully shutting down from SIGINT (Ctrl-C)");

    process.exit(0);
});

export default server;
