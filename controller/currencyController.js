
const CurrencyService = require("../services/CurrencyService");
const currencyService = new CurrencyService();

class CurrencyController {

    async getLastCurrencies(req, res, next) {
        return new Promise((resolve) => {
            try {
                currencyService.xmlToJson("https://www.tcmb.gov.tr/kurlar/today.xml", async function (err, data) {
                    if (err) {
                        res.send({
                            success: false,
                            error: err
                        })
                    }

                    res.send({
                        success : true,
                        data : JSON.parse(JSON.stringify(data))
                    })
                })
            } catch (error) {
                res.send({
                    success: false,
                    logMessage: "Döviz kurları getirilemedi. => " + JSON.stringify(error),
                    error: error
                })
            }
        })
    };
}

module.exports = CurrencyController;
