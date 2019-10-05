const mongoose = require("mongoose");

const SpotSchema = new mongoose.Schema(
	{
		// Thumbnail que irá receber o caminho da imagem
		thumbnail: String,
		// Company que irá receber o nome da Companhia
		company: String,
		// Preço que irá receber um valor
		price: Number,
		// Tecnologias, que irá receber um vetor com várias strings
		techs: [String],
		// Salva qual usuário criou essa informação (Spot) no banco de dados
		user: {
			/*
      O ObjectId é o id que é gerado automaticamente no início da criação do usuário (ID único), podendo ser utilizado para pegar informações do usuário
    */
			type: mongoose.Schema.Types.ObjectId,

			/*
      Referência para qual model essa informação é...
      No caso ela se refere ao model User...
    */
			ref: "User",
		},
	},
	{
		toJSON: {
			virtuals: true,
		},
	},
);

SpotSchema.virtual("thumbnail_url").get(function() {
	return `http://localhost:3333/files/${this.thumbnail}`;
});

module.exports = mongoose.model("Spot", SpotSchema);
