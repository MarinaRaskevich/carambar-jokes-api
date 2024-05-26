const express = require("express");
const router = express.Router();
const jokeController = require("../controllers/jokeController");

router.post("/jokes", jokeController.addJoke);
router.get("/jokes", jokeController.getAllJokes);
router.get("/jokes/:id", jokeController.getJokeById);
router.get("/jokes/random", jokeController.getRandomJoke);

module.exports = router;
