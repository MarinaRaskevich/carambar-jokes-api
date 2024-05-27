const Joke = require("../models/joke");

exports.addJoke = async (req, res) => {
  const { content } = req.body;
  try {
    const joke = await Joke.create({ content });
    res.status(201).json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getAllJokes = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    res.status(200).json(jokes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getJokeById = async (req, res) => {
  const { id } = req.params;
  try {
    const joke = await Joke.findByPk(id);
    if (!joke) return res.status(404).json({ error: "Joke not found" });
    res.status(200).json(joke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getRandomJoke = async (req, res) => {
  try {
    const jokes = await Joke.findAll();
    if (jokes.length === 0)
      return res.status(404).json({ error: "No jokes found" });
    const randomIndex = Math.floor(Math.random() * jokes.length);
    const randomJoke = jokes[randomIndex];
    res.status(200).json(randomJoke);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
