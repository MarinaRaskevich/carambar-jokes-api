const express = require("express");
const router = express.Router();
const jokeController = require("../controllers/jokeController");

router.get("/jokes/random", jokeController.getRandomJoke);

router.get("/jokes/:id", jokeController.getJokeById);

router.post("/jokes", jokeController.addJoke);
router.get("/jokes", jokeController.getAllJokes);

module.exports = router;
