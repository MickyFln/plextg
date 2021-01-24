"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const multer = require("multer");
const env = require("dotenv");
env.config();
const upload = multer();
// Initialize express and define a port
const app = express();
app.post('/event', upload.none(), (req, res) => {
    console.log(req.body); // Call your action on the request here
    const bodyJson = JSON.parse(req.body);
    console.log(bodyJson);
    res.status(200).end();
});
// Start express on the defined port
app.listen(process.env.PORT, () => console.log(`🚀 Server running on port ${process.env.PORT}`));
