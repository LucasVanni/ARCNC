const User = require("../models/User");
const Spot = require("../models/Spot");

module.exports = {
	async index(require, response) {
		const { tech } = require.query;

		const spots = await Spot.find({ techs: tech });

		return response.json(spots);
	},

	async store(require, response) {
		const { filename } = require.file;
		const { company, techs, price } = require.body;

		// serve para definir o contexto da requisição, geralmente é usado para enviar contexto sobre autenticação, idioma do usuário pois a resposta pode vir em ingles ou em portugues
		const { user_id } = require.headers;

		// Verificando se o usuário (user_id) realmente existe...

		const user = await User.findById(user_id);

		if (!user) {
			return response.status(400).json({ error: "User does not exists" });
		}

		const spot = await Spot.create({
			user: user_id,
			thumbnail: filename,
			company,
			techs: techs.split(",").map((tech) => tech.trim()),
			price,
		});

		return response.json(spot);
	},
};
