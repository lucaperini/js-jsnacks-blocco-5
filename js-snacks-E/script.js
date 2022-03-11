/**
 *
 *
    Crea un array di oggetti che rappresentino delle persone.
    Ogni persona ha un nome, un cognome e un'età.
    
    Crea quindi un nuovo array inserendo, per ogni persona, una frase con il nome e cognome e l'indicazione se può guidare, in base all'età.
 */

const people = [
    {
    nome: 'Luca',
    cognome: 'Vercingetorige',
    età: 14,
    },
    {
    nome: 'Maria',
    cognome: 'Ciccini',
    età: 25,
    },
    {
    nome: 'Giuseppe',
    cognome: 'Carmeli',
    età: 90,
    },
    {
    nome: 'Paolo',
    cognome: 'Traviante',
    età: 17,
    },
    {
    nome: 'Luisa',
    cognome: 'Ciccibaruffi',
    età: 30,
    },
    {
    nome: 'Leonardo',
    cognome: 'Di Capra',
    età: 60,
    },
]

people.forEach((element) => {
    if (element.età >= 90 || element.età < 18){
        console.table(
            `${element.nome} non può guidare perché ha ${element.età} anni`
        );
    } else {
        console.table (
            `${element.nome} può guidare perché ha ${element.età} anni`
        );
    }
});






