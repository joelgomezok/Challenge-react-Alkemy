const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const morgan = require("morgan");

const port = process.env.PORT || 8080;
const host = "http://challenge-react.alkemy.org/";

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan("tiny"));

app.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const token = await axios.post(host, {
      email,
      password,
    });
    res.send(token.data.token);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/search", async (req, res) => {
  const heroName = req.query.hero;
  try {
    const heroFound = await axios.get(
      `https://superheroapi.com/api/4274027475988410/search/${heroName}`
    );

    res.send(heroFound.data);
  } catch (error) {
    res.send(error.message);
  }
});

app.get("/hero/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const hero = await axios.get(
      `https://superheroapi.com/api/4274027475988410/${id}`
    );
    res.send(hero.data);
  } catch (error) {
    res.send(error.message);
  }
});

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
