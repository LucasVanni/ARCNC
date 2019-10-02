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
		
		A resposta mais simples possível é o método send, que irá enviar um texto como resposta...
		
		return response.send("Hello World");
	


*/
app.get("/", (request, response) => {
	return response.json({ message: "Hello Oministeck" });
});

/* 

	Porta que quero que a aplicação seja execudada...

	Quando utilizada é possível acessar a aplicação via localhost:(número da porta)

*/
app.listen(3333);
