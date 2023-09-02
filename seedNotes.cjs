// Cargar los datos de prueba en la base de datos

const mongoose = require('mongoose');
require('dotenv').config();
const notes = require('./notes.json');
const Notes = require('./database.cjs');

const port = process.env.PORT || 3000;
const {MONGO_DB_USR, MONGO_DB_PWD, MONGO_DB_HOST, MONGO_DB_PORT} =
    process.env;
const credentials = MONGO_DB_USR ? `${MONGO_DB_USR}:${MONGO_DB_PWD}@` : '';
const mongoURI = `mongodb://${credentials}${MONGO_DB_HOST}:${MONGO_DB_PORT}/`;

mongoose
    .connect(mongoURI, {useNewUrlParser: true, useUnifiedTopology: true, family: 4,})
    .then(() => {
        for(var i in notes) {
            const Note = new Notes({});
            Note.title = notes[i].title;
            Note.description = notes[i].description;
            Note.save((err, product) => {
                if (err) console.log(err);
            });
        }
    })
    .catch((err) => {
        console.log(err);
    });
