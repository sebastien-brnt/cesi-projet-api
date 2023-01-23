const express = require("express");
const app = express();
// app.use(bodyParser.json());

const contacts = [
  {
    id: 1,
    prenom: "Sébastien",
    nom: "Burnet",
    telephone: ["0234545456"],
  },
  {
    id: 2,
    prenom: "Youenn",
    nom: "Rialet",
    telephone: ["0234545456"],
  },
  {
    id: 3,
    nom: "Vermonden",
    prenom: "Daniel",
    telephones: ["0454565433"],
  },
  {
    id: 4,
    nom: "Dubois",
    prenom: "Jean",
    telephones: ["0234545456"],
  },
];

app.get("/", function (req, res) {
  res.send("Hello EPSI");
});

app.get("/api/contacts", function (req, res) {
  // res.send(contacts);
  res.status(200).json(contacts);
});

app.listen(3002);
