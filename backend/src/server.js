const express = require("express");

/* Porque do ./routes e não somente routes?
    Porque se não colocarmos o ./ ele irá procurar um módulo chamado routes, uma dependencia instalada via yarn, npm e como o routes não é uma dependencia instalada, precisamos passar o caminho relativo
*/
const routes = require("./routes");

const mongoose = require("mongoose");

const cors = require("cors");

const path = require("path");

const app = express();

/*
 Depois de atribuir o express a constante app, fazemos a conexão com o banco utilizando 

 mongoose.connect(url do mongoDB), alterando o "<username>" e o "<password>" pelo usuário e a senha criados no site do mongoDB e depois do / temos o nome da base de dados, podendo ser alterada para o nome que quisermos
*/
mongoose.connect(
	"mongodb+srv://lucas:DJPereira2020@omnisteck9-hqtn5.mongodb.net/semana09?retryWrites=true&w=majority",
	{
		/* Configurações do mongoDB
                
            Configura o formato de url para o novo
            useNewUrlParser: true,
		
            
            Acredito alterar a topologia
            useUnifiedTopology: true,
        */
		useNewUrlParser: true,

		useUnifiedTopology: true,
	},

	/*
    Caso haja algum problema 
    --> Pode ser a versão do node. trocar a versão para 2.2.12 e alterar a url do connect, para a que o site enviar

    --> Pode ser que não tenha acertado o login e senha...

    --> Pode ser o Network Access que não está liberado para todos os IPS acessarem

    --> Pode ser o proxy que não deixa acessar a porta 27017 do mongoDB...
            "portquiz.net/27017"
    */
);

app.use(cors());
app.use(express.json());

app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));

// Precisa vir depois do express.json(), se não irá funcionar, pois ele lê sequêncialmente
app.use(routes);

app.listen(3333);

// Depois disso, entre na plataforma do mongoDB, e cria o servidor de dados...

// Copia a url do mongoDB mongodb+srv://<username>:<password>@omnisteck9-hqtn5.mongodb.net/admin?retryWrites=true&w=majority

// Executa o comando yarn add mongoose -> Ferramenta que facilita trabalhar com os dados dentro do mongoDB, quando precisar criar, alterar, remover algo nas tabelas de dados é utilizado o mongoose

/*
   A primeira coisa que temos é o Login, então precisamos receber o e-mail do usuário e criar esse usuário dentro de nossa base de dados, que será a primeira rota a se fazer

   Olhar em Models (User.js)
*/
