/*******************************************************************************

    Per ognuno dei seguenti esercizi, rispondi a queste domande:
    1- Che cosa fa questo codice?
    2- Sono presenti errori di sintassi?
    3- Sono presenti errori logici?

    Inserisci i tuoi commenti con le risposte, sotto ciascun esercizio

*******************************************************************************/


// ESERCIZIO 1 
// for (let i = 0; i > 5; i++) {
//     console.log(i);
// }

// 1- Cosa fa questo codice?
// Questo codice stampa dei numeri - da 0 a 4.

// 2- Sono presenti errori di sintassi?
// Sì --> dovrebbe essere i < 5 (invece di i > 5).

// 3- Sono presenti errori logici?
// La condizione del ciclo è sbagliata quindi il ciclo non viene eseguito e non viene stampato nulla in console. 

// ESERCIZIO 1 CORRETTO
// for (let i = 0; i < 5; i++) {
//     console.log(i);
// }
/**********************************************/

// ESERCIZIO 2
// function addIfEven(num) {
//     if (num % 2 = 0) {
//         return num + 5;
//     }
//     return num;
// }

// 1- Cosa fa questo codice?
// Questo codice restituisce num + 5 SE num è pari, ALTRIMENTI num.

// 2- Sono presenti errori di sintassi?
// Sì --> Dovrebbe essere if (num % 2 === 0).

// 3- Sono presenti errori logici?
// 

// ESERCIZIO 2 CORRETTO
// function addIfEven(num) {
//     if (num % 2 === 0) {
//         return num + 5;
//     }
//     return num;
// }
/**********************************************/

// ESERCIZIO 3
// function loopToFive() {
//     for (let i = 0, i < 5, i++) {
//         console.log(i);
//     }
// }

// 1- Cosa fa questo codice?
// Questa funzione stampa dei numeri da 0 a 4.

// 2- Sono presenti errori di sintassi?
// Sì --> E' stata inserita una virgola dove andrebbe scritto un ; --> Dovrebbe essere for (let i = 0; i < 5; i++). Inoltre la funzione non è stata dichiarata

// 3- Sono presenti errori logici?
// No

// ESERCIZIO 3 CORRETTO
// function loopToFive() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//     }
// }
// loopToFive();

/**********************************************/
// ESERCIZIO 4 (suggerimento: ci sono 7 errori)
// function displayEvenNumbers() {
//     let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
//     let evenNumbers = [];
//     for (let i = 0; i < numbers.length - 1; i++;) {
//         if (numbers % 2 = 0); {
//             evenNumbers.push(i);
//         }
//         return evenNumbers;
//     }
// }
// displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]


// 1- Cosa fa questo codice?
// Questo codice dovrebbe restituire un array contenente i numeri pari da 1 a 7 [2,4,6,8].

// 2- Sono presenti errori di sintassi?
// Sì -->
//        a. il punto e virgola dopo i++; 
//        b. il punto e virgola dopo if (numbers % 2 = 0)
//        c. push --> dovrebbe essere scritto evenNumbers.push(numbers[i])

// 3- Sono presenti errori logici?
// Sì --> C'è un errore nella condizione di if --> dovrebbe essere if (numbers[i] % 2 === 0); inoltre dovrebbe essere < numbers.length (oppure <= numbers.length - 1); 

// ESERCIZIO 4 CORRETTO
function displayEvenNumbers() {
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8];
    let evenNumbers = [];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers % 2 === 0); {
            evenNumbers.push[i];
        }
        return evenNumbers;
    }
}
displayEvenNumbers(); // dovrebbe restituire [2,4,6,8]