const express = require("express");

const multer = require("multer");
const uploadConfig = require("./config/upload");

const SessionController = require("./controllers/SessionController");
const SpotController = require("./controllers/SpotController");
const DashboardController = require("./controllers/DashboardController");
const BookingController = require("./controllers/BookingController");

// Pegando o responsável pelas rotas do express e o separando dentro de uma variável
const routes = express.Router();

const upload = multer(uploadConfig);

/* 
Ao invés de colocar:
routes.post("/users/", (require, response) => {
	return response.json(require.body);
});

Iremos separá-lo em arquivos separados e importar para o controller para cá: 

"/sessions" -> pois está sendo criado uma sessão

routes.post("/sessions", SessionController.store);

*/

routes.post("/sessions", SessionController.store);

routes.post("/spots", upload.single("thumbnail"), SpotController.store);
routes.get("/spots", SpotController.index);

routes.get("/dashboard", DashboardController.show);

routes.post("/spots/:spot_id/bookings", BookingController.store);

// Exportando as rotas do arquivo, para que a aplicação conheca essas rotas...
module.exports = routes;
