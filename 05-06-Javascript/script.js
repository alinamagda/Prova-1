 // This is a simple JavaScript code snippet
        /*console.log("Hello, World!");
        const nome = "Mario";
        const cognome = "Rossi";
        const eta = 30;
        console.log(nome + " " + cognome + " ha " + eta + " anni.");
        console.log("tra 10 anni avrà:" + (eta + 10) + " anni.");

        for (let i = 1; i < 10; i++) {
        let quadrato = i * i;
        console.log("il quadrato di " + i + " è " + quadrato);
        }*/

        /* i++ è un operatore di incremento che aumenta il valore di i di 1 ad ogni iterazione */
        /* i++ è equivalente a i = i + 1 */
        /* i-- è un operatore di decremento che diminuisce il valore di i di 1 ad ogni iterazione */

        /* while (condizione)*/
        /*let  n = 0;
        while (n < 10) {
            console.log(n);
            n++;
        }*/

        /* Funzioni */
        /*function saluta(nome) {
            console.log("Ciao " + nome + "!");
        }
        saluta("Mario");

        function stampa(messaggio) {
            console.log(messaggio);
        }

        stampa("Questo è un messaggio di prova.");
        stampa("Un altro messaggio di prova.");

        function somma(a, b) {
            return a + b;
        }   

        let risultato = somma(5, 10);
        console.log("La somma di 5 e 10 è: " + risultato);*/

        /* Esempi di funzioni, array e oggetti in JavaScript */
        // FUNZIONE per calcolare il quadrato di un numero
        function quadrato(numero) {
            return numero * numero;
        }
        console.log(`Il quadrato di 5 è: ${quadrato(5)}`);

        // ARRAY di nomi e stampa in maiuscolo
        let nomi = ["Anna", "Luca", "Marco"];
        for (let i = 0; i < nomi.length; i++) {
            console.log(nomi[i].toUpperCase());
}

        //OGGETTO studente e stampa delle proprietà concatenate
        const studente = {
            nome: "Mario",
            cognome: "Rossi",
            eta: 30
        };
        console.log(`Studente: ${studente.nome} ${studente.cognome}, Età: ${studente.eta}`);
    

        //Switch case
        let mese = 1;

        switch (mese) {
            case 1:
                console.log("gennaio");
                break;
            case 2:
                console.log("febbraio");
                break;
            case 3:
                console.log("marzo");
                break;
            case 4:
                console.log("aprile");
                break;
            case 5:
                console.log("maggio");
                break;
            case 6:
                console.log("giugno");
                break;
            case 7:
                console.log("luglio");
                break;
            case 8:
                console.log("agosto");
                break;
            case 9:
                console.log("settembre");
                break;
            case 10:
                console.log("ottobre");
                break;
            case 11:
                console.log("novembre");
                break;
            case 12:
                console.log("dicembre");
                break;
            default:
                console.log("Mese non valido");
                break;
        }   
        
        //OPERATORI LOGICI
        let eta = 18;
        let isSick = false;
         if (eta >= 18 && !isSick) {    
            console.log("OK per uscire");
        }

        //FUNZIONE CHE CONTROLLA SE UN NUMERO È PARI O DISPARI
    function controllaPariDispari(numero) {
        if (numero % 2 === 0) {
         return "Il numero è pari";
         } else {
         return "Il numero è dispari";
         }
    }
    console.log(controllaPariDispari(10)); // Output: Il numero è pari


for (let colore of ["rosso", "verde", "blu"]) {
    console.log(`Colore: ${colore}`);
}

let persona = {
    nome: "Luca",
    cognome: "Bianchi",
    eta: 28,
    professione: "Ingegnere",
    hobby: "Ciclismo"
}

for (let chiave in persona) {
    console.log(`${chiave}: ${persona[chiave]}`);
}

    console.error("Questo è un messaggio di errore");
    console.warn("Questo è un messaggio di avviso");
    console.info("Questo è un messaggio informativo");
    console.table([{ nome: "Mario", eta: 30 }, { nome: "Luca", eta: 25 }]);
    console.group("Gruppo di messaggi");
    console.log("Messaggio 1");
    console.log("Messaggio 2");
    console.groupEnd();
    console.time("Timer");
    for (let i = 0; i < 1000000; i++) {
        // Simulazione di un'operazione
    }
    console.timeEnd("Timer");

// Funzione per calcolare la somma di due numeri
function somma(a, b) {
    return a + b;
}
// Funzione per calcolare la differenza di due numeri
function differenza(a, b) {
    return a - b;
}       
// Funzione per calcolare il prodotto di due numeri
function prodotto(a, b) {
    return a * b;
}
// Funzione per calcolare il quoziente di due numeri
function quoziente(a, b) {
    if (b === 0) {
        return "Divisione per zero non permessa";
    }
    return a / b;
}
// Esempio di utilizzo delle funzioni
console.log("Somma: " + somma(10, 5)); // Output: Somma: 15
console.log("Differenza: " + differenza(10, 5)); // Output: Differenza: 5
console.log("Prodotto: " + prodotto(10, 5)); // Output: Prodotto: 50
console.log("Quoziente: " + quoziente(10, 5)); // Output: Quoziente: 2
// Funzione per calcolare il fattoriale di un numero
function fattoriale(n) {
    if (n < 0) {
        return "Fattoriale non definito per numeri negativi";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    let risultato = 1;
    for (let i = 2; i <= n; i++) {
        risultato *= i;
    }
    return risultato;
}
// Esempio di utilizzo della funzione fattoriale
console.log("Fattoriale di 5: " + fattoriale(5)); // Output: Fattoriale di 5: 120
// Funzione per verificare se un numero è primo
function isPrimo(numero) {
    if (numero <= 1) return false;
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) return false;
    }
    return true;
}
// Esempio di utilizzo della funzione isPrimo
console.log("Il numero 7 è primo? " + isPrimo(7)); // Output: Il numero 7 è primo? true
console.log("Il numero 10 è primo? " + isPrimo(10)); // Output: Il numero 10 è primo? false
// Funzione per calcolare la potenza di un numero
function potenza(base, esponente) {
    return Math.pow(base, esponente);
}
// Esempio di utilizzo della funzione potenza
console.log("2 elevato a 3: " + potenza(2, 3)); // Output: 2 elevato a 3: 8
// Funzione per invertire una stringa
function invertiStringa(str) {
    return str.split('').reverse().join('');
}
// Esempio di utilizzo della funzione invertiStringa
