const axios = require('axios');
var utils = require('./utils.js');
module.exports = {
    getFilms(req, res) {
        const config = {
            headers: {
                'Content-Type': "application/json"
            }
        };
        const url = 'https://copafilmes.azurewebsites.net/api/filmes';
        axios.get(url, config)
            .then((response) => {
                const dataOrder = response.data;
                dataOrder.sort(utils.dynamicSort("titulo"))
                res.send(dataOrder);
            })
            .catch((error) => {
                console.log(error);
            });

    },
    iniciarBatalha(req, res) {
        const itens = req.body;
        itens.sort(utils.dynamicSort("titulo")); //ordenação alfabética

        //função que faz a primeira frase, ou seja, as eliminatórias
        this.eliminatorias(itens, (finalistas) => {
            const escolhidos = new Array();
            escolhidos[0] = utils.batalhaEntreFilmes(finalistas[0], finalistas[1]);
            escolhidos[1] = utils.batalhaEntreFilmes(finalistas[2], finalistas[3]);
            //o vencedor é sempre o ítem da posição 0 do array
            res.send(JSON.stringify(utils.getVencedor(escolhidos[0], escolhidos[1])));
        });

    },
    eliminatorias(filmes) {
        const finalistas = new Array();
        finalistas[0] = utils.batalhaEntreFilmes(filmes[0], filmes[7]);
        finalistas[1] = utils.batalhaEntreFilmes(filmes[1], filmes[6]);
        finalistas[2] = utils.batalhaEntreFilmes(filmes[2], filmes[5]);
        finalistas[3] = utils.batalhaEntreFilmes(filmes[3], filmes[4])
        return finalistas;
    }
};