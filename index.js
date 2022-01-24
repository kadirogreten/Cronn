const express = require("express");
const cors = require("cors");
const { success, error } = require("consola");


const app = express();
const http = require('http').Server(app);

const currencyRoutes = require('./routes/currencyRoutes');

const port = 3000;

let corsOptions = {
  origin: '*',
  optionsSuccessStatus: 200
};

const startApp =  () => {



  app.use(cors(corsOptions));
  app.use(express.static('public'));
  app.use(express.json({ limit: '50mb', extended: true }));
  app.use(express.urlencoded({ limit: '50mb', extended: true }));
  app.use(express.text({ limit: '50mb', extended: true }));


  app.use("/currency",currencyRoutes);



 ///cron service
  require("./batch/currencyBatch");

  http.listen(port, () =>
      success({
        message: `successfully connected with server`,
        badge: true,
      })
  );
};

startApp();
