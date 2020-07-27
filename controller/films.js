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
    initChallenge(req, res) {
        const itens = req.body;
        itens.sort(utils.dynamicSort("titulo"));

        const finalistas = new Array();

        const escolhidos = new Array();
        //FASE A
        //filme1 X filme8 -> escolhido1
        finalistas.push(utils.batalhaEntreFilmes(itens[0], itens[7]));

        //filme2 X filme7 -> escolhido2
        finalistas.push(utils.batalhaEntreFilmes(itens[1], itens[6]));

        //filme3 X filme6 -> escolhido3
        finalistas.push(utils.batalhaEntreFilmes(itens[2], itens[5]));

        //filme4 X filme5 -> escolhido4
        finalistas.push(utils.batalhaEntreFilmes(itens[3], itens[4]));

        //FASE B
        //escolhido1 X escolhido2 -> winA
        escolhidos.push(utils.batalhaEntreFilmes(finalistas[0], finalistas[1]));
        //escolhido3 X escolhido4 -> winB    
        escolhidos.push(utils.batalhaEntreFilmes(finalistas[2], finalistas[3]));

        ////IMPORTANTE
        ////escolhido é sempre o presente no index 0 do array
        escolhidos.push(utils.getVencedor(escolhidos[0],escolhidos[1]));
        res.send(JSON.stringify(escolhidos));
    }
};