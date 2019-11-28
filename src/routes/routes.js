const routes = require("express").Router();
const permutator = require("../permutator");

routes.get("/", (req, res) => res.redirect("/permutation-index/"));

routes.get("/permutation-index/", (req, res) => {
    try {
        res.status(200).json({
            message:
                "Please enter a word after /permutation-index/ to find the permutation index"
        });
    } catch (err) {
        res.status(500).json({ error: "There was a error with your request" });
    }
});

routes.get("/permutation-index/:string", (req, res) => {
    const { string } = req.params;

    try {
        const permIndex = permutator.findIndex(string);
        res.status(200).json({ indexOfGivenPermutation: permIndex });
    } catch (err) {
        res.status(500).json({ error: "There was a error with your request" });
    }
});

module.exports = routes;
