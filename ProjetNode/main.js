#!/usr/bin/env node

const axios = require('axios');
const program = require('commander')

program
    .option('-i, --info', "Plus d'info?")
    .option('-p, --pays', 'info France')
    .option('-c, --saisie_capitale', "Saisissez le nom d'une capitale pour des informations")

program.parse(process.argv)
if (program.info) {
    console.log("'Bienvenue sur l'Api des Pays")
} else if (program.pays) {
    axios.get("https://restcountries.eu/rest/v2/all?fields=name;capital;currencies")
        .then(res => console.log(res.data))
        .catch(err => console.log(err.message))
} else if (program.saisie_capitale) {
    const inquirer = require('inquirer')
    inquirer.prompt([{
            type: 'input',
            message: 'Choisisissez une capitale',
            name: 'capital'
        }, ]).then((answers) => {
            return axios.get("https://restcountries.eu/rest/v2/capital/" + answers.capital)
        })
        .then((answers) => {
            console.log(answers.data)
        })
        .catch(err => console.log("Erreur, votre saisie n'est pas une capitale"))
} else {
    program.help()
}