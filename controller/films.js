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
        const items = req.body;
        items.sort(utils.dynamicSort("titulo"));

        const finals = new Array();

        const winners = new Array();
        //FASE A
        //movie1 X movie8 -> winner1
        finals.push(utils.challengeBetweenTwo(items[0], items[7]));

        //movie2 X movie7 -> winner2
        finals.push(utils.challengeBetweenTwo(items[1], items[6]));

        //movie3 X movie6 -> winner3
        finals.push(utils.challengeBetweenTwo(items[2], items[5]));

        //movie4 X movie5 -> winner4
        finals.push(utils.challengeBetweenTwo(items[3], items[4]));

        //FASE B
        //winner1 X winner2 -> winA
        winners.push(utils.challengeBetweenTwo(finals[0], finals[1]));
        //winner3 X winner4 -> winB    
        winners.push(utils.challengeBetweenTwo(finals[2], finals[3]));

        ////IMPORTANT
        ////winner is always present on position 0 of the winners Array
        winners.push(utils.getChampion(winners[0],winners[1]));
        res.send(JSON.stringify(winners));
    }
};