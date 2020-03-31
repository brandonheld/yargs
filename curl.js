const fetch = require('node-fetch');
const fs = require('fs');
const yargs = require('yargs');
const argv = yargs
    .options('curl',  {
            alias: 'c',
            describe: 'copies the curl into a file',
            type:"string",
            demandOption: true
        })

    .help()
    .alias('help', 'h')
    .argv

fetch(argv.curl)
    .then((response) => {
        return response.text();
    })
    .then((data) => {
        console.log(data);
        return fs.writeFile('output.txt', data, () => {
            return;
        })
    })
    .catch(err => {
        console.error('Request failed', err.message);
    });
