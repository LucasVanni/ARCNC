// Estamos criando uma sessão dentro da aplicação... E não um usuário de fato...
// Tudo o que for relacionado a sessão é inserido aqui ( Login, Logout, Listagem dos usuários logados (Qualquer coisa que tenha a ver com sessão) )

// Pode apenas exportar um objeto, e dentro dele é inserido todos os métodos que temos no controller para cada uma das rotas...

/*
  Dentro do controller temos vários métodos: 

  index --> O método index é utilizado quando é necessário retornar listagem de sessões...

  show --> Serve para quando temos que listar uma única sessão...

  store --> Serve para quando quero criar uma sessão...

  update --> Serve para quando quero alterar uma sessão...

  destroy --> Serve para deletar, remover uma sessão...

  Podem ser criados mais métodos, porém por padrão da comunidade e do MVC não criamos mais do que esses dentro do controller

  Caso seja necessário a implementação de mais um método dos citados acima, devemos criar outro criar outro controller
*/

// Importando o módel de usuário
const User = require("../models/User");

module.exports = {
	// Recebe request e reponse e retorna uma resposta...
	async store(require, response) {
		// Comunicando com o banco de dados...

		/* Capturar o e-mail do usuário

    const email = require.body.email;

    utiliza desestruturação, pois tem email de um lado e email do outro

    Desestruturação -> Busca informações dentro de uma variável


    const { email } = require.body;

    */

		const { email } = require.body;

		/*
      No JavaScript temos uma funcionalidade chamada de assincronismo (tem algumas coisas que demoram para executar), por exemplo quando vamos salvar informações no Banco de Dados, isso não é instantâneo, demora um pouco para poder salvar, tudo bem que é alguns milissegundos, mas mesmo assim é um tempo que demora, para isso temos o await, que aguarda uma instrução ser finalizada. Temos um porém, toda vez que usamos o await, temos que informar que essa função é assincrôna, utilizando o async na frente da função...
    */

		/*
     Para que não seja criado dois usuários iguais, é necessário fazer uma verificação para ver se o usuário já existe...
        find -> Busca pelo id
        findOne -> Busca dentro do ID

        let user = await User.findOne({ email });

        também pode ser escrito como: 
        let user = await User.findOne({ email: email });

        Se ele encontrar alguém com esse email, ele irá salvar na variável user, com isso é possível fazer uma verificação...

     */

		let user = await User.findOne({ email });

		if (!user) {
			// Cria o usuário com a informação passada (email)
			user = await User.create({ email });
		}

		// Retorna o usuário (já será um objeto) que foi criado...
		return response.json(user);

		// id -> É um id que ele gera de forma automática dentro do banco,
		// __v -> É um contador que informa quantas vezes que o registro foi atualizado
	},
};
