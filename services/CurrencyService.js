let https = require('https');
let parseString = require('xml2js').parseString;



class CurrencyService {

    async xmlToJson(url, callback) {
        let req = https.get(url, function (res) {
            let xml = '';

            res.on('data', function (chunk) {
                xml += chunk;
            });

            res.on('error', function (e) {
                console.log("on error")
                console.log(e)
                callback(e, null);
            });

            res.on('timeout', function (e) {
                callback(e, null);
            });

            res.on('end', function () {
                parseString(xml, function (err, result) {
                    callback(null, result);
                });
            });
        });
    }
}

module.exports = CurrencyService;