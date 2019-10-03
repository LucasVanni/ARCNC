/*
	Backend -> É tudo o que o usuário não encherga diretamente, tudo o que vai ficar do lado do servidor, como por exemplo, conexões com o banco de dados, as regras de negócio das nossas aplicações...

	Frontend -> É tudo o que o usuário interage, a interface da aplicação.
	
	API REST => É uma forma de criação de backend, que não tem a parte de interface integrada...

	Conseguimos construir um backend com uma interface, porém iremos criar a interface em react, react native de uma forma separada e o backend de uma forma que apenas sirva dados para que o frontend consuma esses dados...

	Temos uma série de vantagens por construir os dois separados...

	Package.json -> Arquivo de configurações do projeto, aqui ficará armazenado a referencia de todas as dependências adicionadas no projeto...

	Yarn.lock -> Guarda um cache de nossas dependências e é gerado automaticamente,

	node_modules -> É onde está o código de nossas dependências...
	*/

// Esse é o arquivo inicial, onde iremos inicializar o servidor...

/*
	Import do express, é definido como constante por que é uma variável que nunca irá mudar...

	Require -> Usado para importar uma dependências externas...

*/
const express = require("express");

/*
	O express é micro-framework dentro do node...

	Ajuda a obter definições de rotas com o método get...

	Framework --> Conjunto de funcionalidades prontas, para não ter que fazer tudo do zero...
*/

// Cria a aplicação
const app = express();

// Intenção de mostrar a aplicação rodando

/*

	Como primeiro parâmetro é a rota do usuário (Rota é tudo aquilo que é encontrado depois da primeira barra / no navegador).
	
	Entre aspas coloca-se qual a rota quero acessar...
	
	Quando está apenas com a barra, "/", é como se fosse se estivessemos ouvindo qunado o usuário está tentado acessar apenas pelo endereço localhost/3333.

	Como segundo parãmetro, é uma função que recebe sempre dois parânetros 
	--> request (requisição -> Com ele é possível pegar qualquer tipo de parâmetro que o usuário esteja enviando nessa requisição)
		Pense em uma rota de produtos / criação de pedidos / fechamento de compra => No request eu irei capturar as informações de quais produtos 
			estão no carrinho do usuário, a quantidade desses produtos, qual foi o valor do frete, enfim todas as informações que o usuário
			está enviando para a requisição...
			
	--> response -> Serve para devolver uma resposta para a requisição, se nada for introduzido ele irá ficar esperando a resposta,
		e ficará executando e não irá devolver nada ao cliente (navegador)... Para isso temos que implementar o retorno da resposta(response).
		
		
		"return response." -> teremos vários tipos de respostas... 
		
		A resposta mais simples possível é o método send, que envia um texto como resposta...
		
		return response.send("Hello World");


			Como estamos desenvolvendo uma api rest, que é um serviço que irá disponibilizar dados para o frontend, seja ele em React/React-Native, nós nunca iremos devolver uma resposta na forma de texto, temos que utilizar uma estrutura de dados(É um formato que conseguimos enviar e receber dados, de forma que tanto o backend quanto o frontend consegue interpretar, entender, manipular os dados da melhor forma possível)
			O padrão mais utilizado atualmente é o JSON (JavaScript Object Notation / Notação de Objeto em JavaScript). Ele aceita tanto objetos literais quanto arrays.

			Para mudar o estilo de ver o JSON na página web é utilizado o JSON Viewer

			Se quiser que o servidor reinicie toda vez que fizermos uma alteração, é necessário instalar a dependencia chamada de nodemon( yarn add nodemon -D )

			A flag "-D" informa para o projeto que essa dependência será utilizada somente no ambiente de desenvolvimento, sendo descartada no ambiente de produção, será utilizado o node mesmo, pois o projeto não precisará ficar ouvindo alterações

			"devDependencies" significa -> dependências que serão utilizadas somente quando estivermos em desenvolvimento...


			"scripts": {
				"dev": "nodemon src/server.js"
			}

			É usado para dizer que o comando "yarn dev" deverá executar os comandos nodemon src/server.js

			Se estiver utilizando o npm, o comando a ser inserido no terminal é "npm run dev"

			Além do método get, existem outros que podemos utilizar...
			Dentre os métodos mais importantes estão:

			Get (Buscar) -> Método utilizado para buscar informações no backend... Pense que precisamos de uma listagem dos usuários da aplicação, para isso é necessário utilizar o método Get na rota...

			Post (Criar) -> Método utilizado para criar uma nova informação no backend, por exemplo um cadastro de usuário...
			
			Put (Alterar) -> Método utilizado para informar ao backend que queremos editar alguma informação, por exemplo editar um usuário
			
			Delete (Deletar) -> Método utilizado para deletar uma informação...

			Mais um detalhe: Rotas do tipo Post, não conseguimos executá-las pelo navegador, por que... Por padrão quando o navegador vai acessar uma rota da aplicação, ele sempre irá executar um método Get 

				Por isso é necessário outra ferramenta para conseguirmos testar as rotas que estão utilizando outros métodos que não são get, e é claro que usaremos a mesma ferramenta para utilizar o get... Com o objetivo de centralizar tudo em uma única ferramenta e não precisarmos utilizar o navegador...

			Essa ferramenta recebe o nome de Insomnia

			Para sistemas 64 bits --> Insomnia

			Para sistemas 32 bits --> Postman

			Para criar um request novo, abra o Insomnia clique no mais, e vá até New Request, e então digite o nome do request

// EXEMPLO ==> Pegando informações
app.get("/", (request, response) => {
	return response.json({ message: "Hello React" });
});


// EXEMPLO ==> Criando usuários
app.post("/users", (request, response) => {
	return response.json({ message: "Hello Omnisteck" });
});

		Se tentar executar com outro método, não irá funcionar, pois o app.método, só escuta esse tipo de método no momento da requisição...

		Temos várias maneiras de enviar parâmetros/informações para nosso backend...

		Quando estamos utilizando o método get, a maneira mais tradicional de enviar algum tipo de parâmetro, é através dos query params (são parâmetros introduzidos na url), por exemplo listar a idade usuários...
		
				O comando na url seria mais ou menos isso:

					http://localhost:3333/users?idade=20

				Geralmente os parâmetros são colocados na rota get para informar algum tipo de filtro, 

				Para testes é possível colocar o parâmetro, tanto na url, quanto na aba Query (New name New Value)

				Para a api pegar o parâmetro é necessário utilizar o request que é onde temos todas as informações da rota

// EXEMPLO ==> Pegando parêmetros
app.get("/users", (request, response) => {
	// request.query => Acessar parametros da query ( para filtros)
	return response.json({ idade: request.query.idade });
});


	Os query params são utilizados mais para filtrar, para enviar parâmetros que irão ficar expostos na url da aplicação...

	Quando fazemos uma requisição do tipo post ou put
 (editar ou criar um usuário), a primeira coisa que devemos fazer é informar qual usuário queremos alterar 

	No caso do método put e do delete, devemos informar qual será o usuário que queremos deletar ou alterar informações (editar) sendo assim é utilizada um tipo de parâmetro que é denominado "route params" (Vai dentro da url)...

	Por exemplo, quero editar um usuário com o id 1

	Método put "http://localhost/users/1"

	Para capturar o dado passado como parametro pela query params:
	
	É necessário informar na string da rota que depois da rota usuário terei uma informação, no caso do exemplo é o id do usuário
 
	// EXEMPLO ==> Pegando parêmetros
app.put("/users/:id", (request, response) => {
	// request.params => Acessar parametros da rota (para edição e deletar)
	return response.json({ id: request.params.id });
});

	
	


*/

// EXEMPLO ==> Pegando parêmetros
app.put("/users/:id", (request, response) => {
	// request.params => Acessar parametros da rota
	return response.json({ id: request.params.id });
});

/* 

	Porta que quero que a aplicação seja execudada...

	Quando utilizada é possível acessar a aplicação via localhost:(número da porta)

*/
app.listen(3333);
