const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 3000;

app.use(cors());

app.use(bodyParser.json());

app.post("/login", (req, res) => {
  const { usuario, senha } = req.body;
  if (!usuario || !senha) {
    return res
      .status(400)
      .json({ mensagem: "Usuário e senha são obrigatórios." });
  }

  if (usuario === "adm" && senha === "123") {
    res.status(200).json({ mensagem: "Credenciais corretas!" });
  } else {
    res.status(401).json({ mensagem: "Credenciais incorretas!" });
  }
});

app.get("/login", (req, res) => {
  res.status(405).json({ mensagem: "Método não permitido! Use POST." });
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
