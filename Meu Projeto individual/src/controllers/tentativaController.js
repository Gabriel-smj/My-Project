var tentativaModel = require("../models/tentativaModel");


function registrarTentativa(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertos = req.body.acertos;
    var erros = req.body.erros;
    var pontuacao = req.body.pontuacao;
    var totalQuestoes = req.body.totalQuestoes;
    var fkQuiz = req.body.fkQuiz;
    var fkUsuario = req.body.fkUsuario;
    // var fkEmpresa = req.body.idEmpresaVincularServer;

    // Faça as validações dos valores
    if (acertos == undefined) {
        res.status(400).send("Seus acertos está undefined!");
    } else if(erros == undefined) {
        res.status(400).send("Seus erros está undefined!");
    } else if(pontuacao == undefined) {
        res.status(400).send("Sua pontuação está undefined!");
    } else if(totalQuestoes == undefined) {
        res.status(400).send("O total das questões está undefined!");
    }else if(fkQuiz == undefined) {
        res.status(400).send("O fkQuiz está undefined!");
    }else if(fkUsuario == undefined) {
        res.status(400).send("O fkUsuario está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        tentativaModel.registrarTentativa(fkQuiz, fkUsuario, acertos, erros, pontuacao, totalQuestoes)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}



function buscarResultados(req, res) {
    var idUsuario = req.params.idUsuario;

    tentativaModel.buscarResultadosPorUsuario(idUsuario)
        .then(function (resultado) {
            res.status(200).json(resultado);
        })
        .catch(function (erro) {
            console.log("Erro ao buscar resultados:", erro);
            res.status(500).json(erro);
        });
}

module.exports = {
    registrarTentativa,
    buscarResultados
}