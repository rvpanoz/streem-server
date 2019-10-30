import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import config from "./config";

const isProduction = process.env.NODE_ENV === "production";
const { port } = config;
const app = express();

// express config defaults
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const server = app.listen(process.env.PORT || port, function () {
    console.log(`Listening on port ${server.address().port}`);
});
