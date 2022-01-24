const CronJob = require('cron').CronJob;
const fs = require("fs");
const https = require("https");
let parseString = require('xml2js').parseString;

const CurrencyService = require("../services/CurrencyService");

const currencyService = new CurrencyService();


let job = new CronJob("*/1 * * * *", callBack);




async function callBack() {

  try {

    let serviceResult = currencyService.xmlToJson("https://www.tcmb.gov.tr/kurlar/today.xml",function (err,data) {
      console.log(JSON.stringify(data));
      console.log(err);
    })
    let data = `\n${new Date().toLocaleString()}\n`;

    fs.appendFile("logs/logs.txt", data, function (err) {
      if (err) {
        console.log(err)
      }
    });

  } catch (e) {
    console.error(e);
  }
}




job.start();