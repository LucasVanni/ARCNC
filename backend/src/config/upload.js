/*

  É necessário instalar o multer, pois com ela é possível lidar com imagens, e arquivos, já que o express não consegue lidar...
  (yarn add multer)

*/

const multer = require("multer");
const path = require("path");

module.exports = {
	storage: multer.diskStorage({
		// Informar qual pasta iremos salvar os arquivos...
		// O path.resolve é separado por vírgulas e substituirá pelo separador correto de cada sistema (No caso de "/""\")
		// __dirname -> Informa qual o nome do diretório que foi passado como parâmetro
		destination: path.resolve(__dirname, "..", "..", "uploads"),
		// É necessário informar como o nome do arquivo será formado, pois por padrão ele coloca um nome aleatório no arquivo
		filename: (request, file, callback) => {
			const ext = path.extname(file.originalname);
			const name = path.basename(file.originalname, ext);

			callback(null, `${name}-${Date.now()}${ext}`);
		},
	}),
};
