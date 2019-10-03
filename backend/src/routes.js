const express = require("express");

// Pegando o responsável pelas rotas do express e o separando dentro de uma variável
const routes = express.Router();

routes.post("/users/", (require, response) => {
	return response.json(require.body);
});

// Exportando as rotas do arquivo, para que a aplicação conheca essas rotas...
module.exports = routes;
