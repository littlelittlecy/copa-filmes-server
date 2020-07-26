const axios = require('axios');
var url = require('url');

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
                res.send(response.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }
};