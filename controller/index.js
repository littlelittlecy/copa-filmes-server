const axios = require('axios');
const url = require('url');

module.exports = {
    index(req, res){
        res.send({express: "Server belezinha =D"});
    }
}