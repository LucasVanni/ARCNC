const express = require("express");

/* Porque do ./routes e não somente routes?
    Porque se não colocarmos o ./ ele irá procurar um módulo chamado routes, uma dependencia instalada via yarn, npm e como o routes não é uma dependencia instalada, precisamos passar o caminho relativo
*/
const routes = require("./routes");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

// Precisa vir depois do express.json(), se não irá funcionar, pois ele lê sequêncialmente
app.use(routes);

app.listen(3333);

// Depois disso, entre na plataforma do mongoDB, e cria o servidor de dados...

// Copia a url do mongoDB mongodb+srv://<username>:<password>@omnisteck9-hqtn5.mongodb.net/admin?retryWrites=true&w=majority

// Executa o comando yarn add mongoose -> Ferramenta que facilita trabalhar com os dados dentro do mongoDB, quando precisar criar, alterar, remover algo nas tabelas de dados é utilizado o mongoose
