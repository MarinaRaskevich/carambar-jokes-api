const express = require("express");
const bodyParser = require("body-parser");
const jokeRoutes = require("./routes/jokeRoutes");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerDocument = require("./swagger.json");
const sequelize = require("./database");
const Joke = require("./models/joke");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.json());
app.use("/api", jokeRoutes);

// Swagger setup
const options = {
  definition: swaggerDocument,
  apis: ["./routes/*.js"],
};
const swaggerSpec = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.get("/", (req, res) => {
  res.render("index");
});

// Initialisation de la base de données
sequelize.sync({ force: true }).then(async () => {
  await Joke.bulkCreate([
    { content: " Quel est le comble pour un marin ? Avoir le nez qui coule" },
    {
      content:
        "Qu'est ce que les enfants usent le plus à l'école ? Le professeur",
    },
    {
      content:
        "Quel est l'animal le plus heureux ? Le hibou, parce que sa femme est chouette.",
    },
    {
      content:
        " Quel est le sport le plus fruité ? La boxe, parce que tu te prends des pêches dans la poire et tu tombes dans les pommes.",
    },
    {
      content: " Quelle est la femelle du hamster ? L’Amsterdam.",
    },
    {
      content: " Que dit un oignon quand il se cogne ? Aïe.",
    },
  ]);
  console.log("Database & tables created!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
