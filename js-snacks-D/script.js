/**
 * 
 * 
    Crea un array di oggetti che rappresentano degli animali.
    Ogni animale ha un nome, una famiglia e una classe.
    Es:

    [
        { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
        { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
        { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    ]

    Crea un nuovo array con la lista dei mammiferi.

 * 
 */



const animali = [
    { nome: 'leone', famiglia: 'felidi', classe: 'mammiferi' },
    { nome: 'cane', famiglia: 'canidi', classe: 'mammiferi' },
    { nome: 'gallina', famiglia: 'fasianidi', classe: 'uccelli' },
    { nome: 'rana', famiglia: 'felidi', 
    classe: 'anfibi'} ,
    { nome: 'criceto', famiglia: 'roditori', classe: 'mammiferi' },
    { nome: 'gallina ', famiglia: 'fasianidi', classe: 'ovipari' },
    { nome: 'serpente ', famiglia: 'rettili', classe: 'ovipari' },

    ]

const animaliSelezionati = animali.filter ((element) => {
    if (element.classe == "mammiferi") return true;
})
console.table(animaliSelezionati);












