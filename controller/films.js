const axios = require('axios');
var utils = require('./utils.js');
module.exports = {
    getFilms(req, res) {
        var config = {
            headers: {
                'Content-Type': "application/json"
            }
        };
        var url = 'https://copafilmes.azurewebsites.net/api/filmes';
        axios.get(url, config)
            .then((response) => {
                var dataOrder = response.data;
                dataOrder.sort(utils.dynamicSort("titulo"))
                res.send(dataOrder);
            })
            .catch((error) => {
                console.log(error);
            });

    },
    initChallenge(req, res) {
        var items = req.body;
        items.sort(utils.dynamicSort("titulo"));
        
        var finals = new Array();
        //FASE A
        //movie1 X movie8 -> winner1
        finals.push(utils.challengeBetweenTwo(items[0],items[7]));
        
        //movie2 X movie7 -> winner2
        finals.push(utils.challengeBetweenTwo(items[1],items[6]));

        //movie3 X movie6 -> winner3
        finals.push(utils.challengeBetweenTwo(items[2],items[5]));

        //movie4 X movie5 -> winner4
        finals.push(utils.challengeBetweenTwo(items[3],items[4]));
        
        //FASE B
        //winner1 X winner2 -> winA
        
        //winner3 X winner4 -> winB
        
        //final
        //winA x winB
        console.log(items);
        console.log("***************************")
        console.log(finals);
        return;
    }
};