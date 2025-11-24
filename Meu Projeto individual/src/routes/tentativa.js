var express = require("express");
var router = express.Router();

var tentativaController = require("../controllers/tentativaController");

router.post("/registrarTentativa", function (req, res) {
    tentativaController.registrarTentativa(req, res);
});


router.get("/buscarResultados/:idUsuario", function (req, res) {
    tentativaController.buscarResultados(req, res);
});

module.exports = router;