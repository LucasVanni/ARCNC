// Coloca-se a informação de quais campos o usuário irá ter, quais campos irá ser gravado no banco de dados

const mongoose = require("mongoose");

// É basicamente qual o esquema do usuário, que é a estrutura do usuário (Quais campos o usuário vai ter, quais são esses tipos de campos)
const UserSchema = new mongoose.Schema({
	// nome do campo: tipo primitivo (Nativos do JavaScript (String, Number, Boolean, Array, Objetos JSON)) do campo.

	// Por ser a única informação a ser guardada do usuário somente será introduzido o email
	email: String,
	/*
    Se o usuário tivesse um nome
      name: String

    Se o usuário tivesse uma idade
      age: Number

    Se tivesse a informação de estar ativo ou não
      active: Boolean
  */
});

/* 

  module.exports -> Exporta o módulo criado

  mongoose.model -> Estamos efetivamente criando o Model, passando o nome do Model e em seguida o Schema dele

  module.exports = mongoose.model("User", UserSchema);

  Assim o mongo já sabe que ao criar um usuário ele só terá um campo de e-mail...

*/
module.exports = mongoose.model("User", UserSchema);

/*

  Agora, como queremos criar um usuário, devemos criar um controller que é em primeiro momento, onde iremos colocar a regra de negócio da nossa aplicação...

  Em um segundo momento a regra de negócio deve ser abstraida para um design patern qualquer, por exemplo... Um repositório patern, um service patern, existem vários paterns para poder fazer qualquer tipo de coisa...

  Patern -> É uma estrutura de arquivos, é como organizamos o código...

  Mas quando estamos nos primeiros passos é legal sim colocar as regras de negócios em um controller...

  Objetivo do controller -> Receber a requisição, que deve ser informada pela rota, tratar a requisição recebida(fazer toda regra de negócio que ele precisa), e devolver uma resposta

  O controller é exatamente o trecho (request, response) => { return response...}
*/
