
const express = require("express");
const path = require("path");
const fs = require("fs");

const app = express();

const PORT = process.env.PORT || 9001;

//  Initialize notesData
let notesData = [];

// Set up body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "Develop/public")));
