const express = require("express");
const permutator = require("./permutator");
const app = express();

app.get("/", (req, res) => res.redirect("/permutation-index"));

app.listen(3000, () => console.log("Listening on port 3000!"));

app.get("/permutation-index/", (req, res) => {
    try {
        res.status(200).json({
            message:
                "Please enter a word after /permutation-index/ to find the permutation index"
        });
    } catch (err) {
        res.status(500).json({ error: "There was a error with your request" });
    }
});

app.get("/permutation-index/:string", (req, res) => {
    const { string } = req.params;

    try {
        const permIndex = permutator.findIndex(string);
        res.status(200).json({ indexOfGivenPermutation: permIndex });
    } catch (err) {
        res.status(500).json({ error: "There was a error with your request" });
    }
});
