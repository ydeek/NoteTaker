
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

// routes

// api call response for all the notes, and sends the results to the browser as an array of object

app.get("/api/notes", function (err, res) {
    try {
        // reads the notes from json file
        notesData = fs.readFileSync("Develop/db/db.json", "utf8");
        console.log("hello!");
        // parse it so notesData is an array of objects
        notesData = JSON.parse(notesData);

        // error handling
    } catch (err) {
        console.log("\n error (in app.get.catch):");
        console.log(err);
    }
    //   send objects to the browser
    res.json(notesData);
});

// writes the new note to the json file
app.post("/api/notes", function (req, res) {
    try {
        // reads the json file
        notesData = fs.readFileSync("./Develop/db/db.json", "utf8");
        console.log(notesData);
