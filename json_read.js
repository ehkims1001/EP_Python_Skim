// Reading JSON data file

// Assume the json data file and script are in the same folder
// Assume name of the json data file is 'data.json'

// Synchronous read
const Persons = require('./data.json');
console.log(Persons);


// Asynchronous read
const fs = require('fs');
fs.readFile('./data.json', 'utf-8', function(err, jsonString) {
    if (err) {
        console.log(err);
    } else {
        const Persons = JSON.parse(jsonString);
        console.log(Persons);
    }
});