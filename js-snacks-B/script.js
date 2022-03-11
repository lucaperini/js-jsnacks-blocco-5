/**
 *
 *
    Crea un array composto da 12 automobili.
    Ogni oggetto automobile avrà le seguenti proprietà: marca, modello e alimentazione (benzina, diesel, gpl, elettrico, metano).

    Dividi le automobili in 3 array separati: nel primo array solo le auto a benzina, nel secondo solo le auto a diesel, nel terzo il resto delle auto.

    Infine stampa separatamente i 3 array.

 *
 */
const automobili = [
    {
    marca: 'ford',
    modello: 'fiesta',
    alimentazione: 'benzina',  
    },
    {
    marca: 'citroen',
    modello: 'c3',
    alimentazione: 'gpl', 
    },
    {
    marca: 'chevrolet',
    modello: 'jeep',
    alimentazione: 'elettrico'  
    },
    {
    marca: 'citroen',
    modello: 'c3',
    alimentazione: 'diesel', 
    },
    {
    marca: 'ford',
    modello: 'ka',
    alimentazione: 'diesel', 
    },
    {
    marca: 'ferrari',
    modello: 'testarossa',
    alimentazione: 'metano', 
    },
    {
    marca: 'innocenti',
    modello: 'a112',
    alimentazione: 'diesel',  
    },
    {
    marca: 'honda',
    modello: 'civic',
    alimentazione: 'elettrico', 
    },
    {
    marca: 'fiat',
    modello: 'panda',
    alimentazione: 'benzina', 
    },
    {
    marca: 'peugeot',
    modello: 'pincopallo',
    alimentazione: 'elettrico', 
    },
    {
    marca: 'wolkswagen',
    modello: 'polo',
    alimentazione: 'metano',  
    },
    {
    marca: 'maserati',
    modello: 'top',
    alimentazione: 'metano', 
    },
    
]
const benz = automobili.filter((element) => {
    if (element.alimentazione == 'benzina') return true; 
});
const diesel = automobili.filter((element) => {
    if (element.alimentazione == 'diesel') return true; 
});
const altreAuto = automobili.filter((element) => {
if ((element.alimentazione != 'benzina') && (element.alimentazione != 'diesel')) return true; 
});

console.table(benz);
console.table(diesel);
console.table(altreAuto);


