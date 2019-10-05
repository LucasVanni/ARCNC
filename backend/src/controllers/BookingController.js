const Booking = require("../models/Booking");

module.exports = {
	async store(require, response) {
		const { user_id } = require.headers;
		const { spot_id } = require.params;
		const { date } = require.body;

		const booking = await Booking.create({
			user: user_id,
			spot: spot_id,
			date,
		});

		await booking
			.populate("spot")
			.populate("user")
			.execPopulate();

		return response.json(booking);
	},
};
