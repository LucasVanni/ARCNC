const Spot = require("../models/Spot");

module.exports = {
	async show(require, response) {
		const { user_id } = require.headers;

		const spots = await Spot.find({ user: user_id });

		return response.json(spots);
	},
};
