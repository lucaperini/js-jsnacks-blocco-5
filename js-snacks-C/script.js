/**
 * 
    A partire da un array di stringhe, crea un secondo array formattando le stringhe del primo array in minuscolo e con l'iniziale maiuscola.

    Es: ['pippo', 'PLUTO', 'Paperino'] => ['Pippo', 'Pluto', 'Paperino']

 * 
 */

const nomi = ['gianni', 'clarabella', 'Marco','VINCENZO', 'SONIA'];

const formattazioneTesto = nomi.map ((element) => {
    return element.charAt(0).toUpperCase() + element.substring(1).toLowerCase();
})

console.table(formattazioneTesto)









