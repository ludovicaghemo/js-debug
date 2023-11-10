/*******************************************************************************
​
    Per questo esercizio, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?
​
    Inserisci i tuoi commenti con le risposte alla fine dell'esercizio
​
*******************************************************************************/


// ESERCIZIO 1
function checkAge() {
    const myAge = 32;
    const message = '';

    if (myAge < 18) {
        message = `Sei troppo giovane! Hai ${myAge} anni!`;
    } else {
        message = 'Hai più di 18 anni!';
    }
}
checkAge();

// 1- Che cosa fa questo codice?
// Questo codice definisce una funzione checkAge.

// 2- Sono presenti errori di sintassi?
// No

// 3- Sono presenti errori logici?
// Sì, la funzione non restituisce o stampa alcun risultato perchè non c'è return

// ESERCIZIO 2
function printColorsNumber() {
    const colors = ['blue', 'red', 'yellow', 'green', 'black'];
    console.log(`Nella mia palette ci sono ${colors.lenght} colori!`);
}
printColorsNumber();

// 1- Che cosa fa questo codice?
// Questo codice dovrebbe stampare il numero di colori nella palette

// 2- Sono presenti errori di sintassi?
// Sì --> c'è un errore di battitura. Dovrebbe essere colors.length (invece di colors.lenght).

// 3- Sono presenti errori logici?
// No


// ESERCIZIO 3
function addNumbers() {
    const userNumber = prompt('Inserisci un numero');
    const total = userNumber + 12;

    console.log(`Il risultato finale è ${total}`);
}
addNumbers();

// 1- Che cosa fa questo codice?
// Questo codice chiede all'utente di inserire un numero, somma 12 e stampa il risultato.

// 2- Sono presenti errori di sintassi?
// No

// 3- Sono presenti errori logici?
// Sì, c'è un errore logico perché userNumber è una stringa --> dovrebbe essere convertito in numero tramite parseInt (per esempio). 


// ESERCIZIO 4
function checkAccess() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];
    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    if (addresses.includes(userEmail)) {
        grantAccess = 'true';
    }

    if (grantAccess === true) {
        console.log('Accesso consentito!');
    } else {
        console.log('Accesso negato!');
    }
}
checkAccess();

// 1- Che cosa fa questo codice?
// Questo codice chiede all'utente di inserire un indirizzo email; verifica se l'indirizzo inserito è presente nell'array addresses, e poi stampa un messaggio di accesso consentito o accesso negato.

// 2- Sono presenti errori di sintassi?
// No.

// 3- Sono presenti errori logici?
// No



// ESERCIZIO 5 (suggerimento: c'è un solo errore)
function checkAccessImproved() {
    const addresses = ['mymail@mail.com', 'yourmail@mail.com', 'hermail@mail.com', 'hismail@mail.com'];

    const userEmail = prompt('Inserisci il tuo indirizzo email');

    let grantAccess = 'false';

    for (let i = 0; i < addresses.length; i++) {
        const email = addresses[i];

        if (userEmail.length > 5) {

            if (email === userEmail) {
                grantAccess = 'true';

            }

        }

        if (grantAccess) {
            console.log('Accesso consentito!');
        } else {
            console.log('Accesso negato!');
        }
    }
    checkAccessImproved();



// 1- Che cosa fa questo codice?
// Questo codice chiede all'utente di inserire un indirizzo email, verifica se la lunghezza è maggiore di 5 e se corrisponde a uno degli indirizzi email nell'array addresses, e poi un messaggio di accesso consentito o negato.

// 2- Sono presenti errori di sintassi?
// La funzione non ha la parentesi graffa di chiusura

// 3- Sono presenti errori logici?
// No