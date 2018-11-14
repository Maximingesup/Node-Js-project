#!/usr/bin/env node

const axios = require('axios');
const program = require('commander')

// Affichage menu
program
    .option('-i, --info', "Plus d'info?")
    .option('-p, --pays', 'info France')
    .option('-s, --saisie_pays', "Saisissez le nom d'un pays pour des informations")
    .option('-r, --saisie_region', "Saisissez le nom d'un continent pour des informations")
    .option('-c, --saisie_capitale', "Saisissez le nom d'une capitale pour des informations")

program.parse(process.argv)
if (program.info) {
    console.log("'Bienvenue sur l'Api des Pays")

    // Liste des Pays (liste faites à la main, très très longue)
} else if (program.pays) {
    console.log("Afrique du Sud Algérie Angola Bénin Botswana Burkina Burundi Cameroun Cap-Vert République centrafricaine Comores Congo République démocratique du Congo Côte d 'Ivoire Djibouti Égypte Érythrée Éthiopie Gabon Gambie Ghana Guinée Guinée - Bissau Guinée équatoriale Kenya Lesotho Libéria Libye Madagascar Malawi Mali Maroc Maurice Mauritanie Mozambique Namibie Niger Nigeria Ouganda Rwanda Sao Tomé - et - Principe Sénégal Seychelles Sierra Leone Somalie Soudan Sud - Soudan Swaziland Tanzanie Tchad Togo Tunisie Zambie Zimbabwe Antigua - et - Barbuda Argentine Bahamas Barbade Belize Bolivie Brésil Canada Chili Colombie Costa Rica Cuba République dominicaine Dominique Équateur États - Unis Grenade Guatemala Guyana Haïti Honduras Jamaïque Mexique Nicaragua Panama Paraguay Pérou Porto Rico Saint - Christophe - et - Niévès Sainte - Lucie Saint - Vincent - et - les Grenadines Salvador Suriname Trinité - et - Tobago Uruguay Venezuela Afghanistan Arabie saoudite Bahreïn Bangladesh Bhoutan Birmanie Brunei Cambodge Chine Corée du Nord Corée du Sud Émirats arabes unis Inde Indonésie Irak Iran Israël Japon Jordanie Kazakhstan Kirghizistan Koweït Laos Liban Malaisie Maldives Mongolie Népal Oman Ouzbékistan Palestine Pakistan Philippines Qatar Singapour Sri Lanka Syrie Tadjikistan Taïwan Thaïlande Timor oriental Turkménistan Turquie Viêt Nam Yémen Allemagne Albanie Andorre Arménie Autriche Azerbaïdjan Belgique Biélorussie Bosnie - Herzégovine Bulgarie Chypre Croatie Danemark Espagne Estonie Finlande France Géorgie Grèce Hongrie Irlande Islande Italie Lettonie Liechtenstein Lituanie Luxembourg République de Macédoine Malte Moldavie Monaco Monténégro Norvège Pays - Bas Pologne Portugal République tchèque Roumanie Royaume - Uni Russie Saint - Marin Serbie Slovaquie Slovénie Suède Suisse Ukraine Vatican Australie Fidji Kiribati Marshall Micronésie Nauru Nouvelle-Zélande Palaos Papouasie-Nouvelle-Guinée Salomon Samoa Tonga Tuvalu Vanuatu")
    
    // Saisie de capitale
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

    // Saisie Pays
} else if (program.saisie_pays) {
    const inquirer = require('inquirer')
    inquirer.prompt([{
            type: 'input',
            message: 'Choisisissez un pays',
            name: 'pays'
        }, ]).then((answers) => {
            return axios.get("https://restcountries.eu/rest/v2/capital/" + answers.pays)
        })
        .then((answers) => {
            console.log(answers.data)
        })
        .catch(err => console.log("Erreur, votre saisie n'est pas un pays"))

    // Saisie Continent
} else if (program.saisie_region) {
    const inquirer = require('inquirer')
    inquirer.prompt([{
            type: 'input',
            message: 'Choisisissez un continent parmis : Africa , Americas , Asia , Europe , Oceania',
            name: 'region'
        }, ]).then((answers) => {
            return axios.get("https://restcountries.eu/rest/v2/region/" + answers.region)
        })
        .then((answers) => {
            console.log(answers.data)
        })
        .catch(err => console.log("Erreur, votre saisie n'est pas une région"))
} else {
    program.help()
}


