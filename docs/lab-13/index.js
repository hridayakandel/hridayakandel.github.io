/**
 * index.js
 */
"use strict";

const express = require("express");
const path = require("path");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
    console.log(`This middleware is always run`);
    next();
});
app.post("/calculate", (req, res) => {
    let result = 0;
    const first = parseInt(req.body.first);
    const second = parseInt(req.body.second);
    switch (req.body.operation) {
        case 'add':
            result = first + second;
            break;
        case 'subtract':
            result = first - second;
            break;
        case 'multiply':
            result = first * second;
            break;
        case 'division':
            result = first / second;
            break;
        default:
            result = "Operation not handled"
    }
    const queryString = `first=${req.body.first}&second=${req.body.second}&operation=${req.body.operation}&result=${result}`;
    const redirectUrl = `/result?${queryString}`;
    res.redirect(303, redirectUrl)
});
app.use("/result", (req, res) => {
    const resultConent = `
        <!doctype html>
        <html lang="en">
        <head>
            <title>Calculater</title>
        </head>
        <body>
            <h1> soln : ${req.query.result}</h1>
            <footer>
                <a href="/">homepage</a>
            </footer>
        </body>
        </html>
    `;
    res.send(resultConent);
    res.end();
});

app.use("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"))
});

const PORT_NUMBER = 3000;

app.listen(PORT_NUMBER, () => {
    console.log(`Listening on port ${PORT_NUMBER}`);
})