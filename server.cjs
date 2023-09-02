const mongoose = require('mongoose');
const app = require('./app.cjs');

const port = process.env.PORT || 3000;
let {MONGO_DB_USR, MONGO_DB_PWD, MONGO_DB_HOST, MONGO_DB_PORT} =
  process.env;
const credentials = MONGO_DB_USR ? `${MONGO_DB_USR}:${MONGO_DB_PWD}@` : '';
const host = MONGO_DB_HOST ? `${MONGO_DB_HOST}` : 'localhost';
const portdb = MONGO_DB_PORT ? `${MONGO_DB_USR}` : '27017';
const mongoURI = `mongodb://${credentials}${host}:${portdb}/`;

mongoose
    .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, family: 4,})
    .then(() => {
      app.listen(port, (arg) => {
        console.log(`Server started @ ${port}.`);
      });
    })
    .catch((err) => {
      console.log(err);
    });
