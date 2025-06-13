/* /* function somma() {
    let numero1 = Number(document.getElementById("n1").value);
    let numero2 = Number(document.getElementById("n2").value);
    let somma = numero1 + numero2;
    document.getElementById("result").textContent= `La somma di ${numero1} e ${numero2} è: ${somma}`;
}

function differenza() {
    let numero1 = Number(document.getElementById("n1").value);
    let numero2 = Number(document.getElementById("n2").value);
    let differenza = numero1 - numero2;
    document.getElementById("result2").textContent= `La differenza tra ${numero1} e ${numero2} è: ${differenza}`;
}

function prodotto() {
    let numero1 = Number(document.getElementById("n1").value);
    let numero2 = Number(document.getElementById("n2").value);
    let prodotto = numero1 * numero2;
    document.getElementById("result3").textContent= `Il prodotto tra ${numero1} e ${numero2} è: ${prodotto}`;
}

*/
/*Funzione per calcolare la somma, differenza, prodotto o divisione di due numeri inseriti in un form*/
function calcola(operazione) {
    const n1 = parseFloat(document.getElementById("n1").value);
    const n2 = parseFloat(document.getElementById("n2").value);

    let risultato;

    // Controllo se i numeri inseriti sono validi
    if (isNaN(n1) || isNaN(n2)) {
        document.getElementById("result").textContent = "Errore: inserisci due numeri validi.";
        return;
    }

    // Esegui l'operazione richiesta
    switch (operazione) {
        case "somma":
            risultato = n1 + n2;
            break;
        case "differenza":
            risultato = n1 - n2;
            break;
        case "prodotto":
            risultato = n1 * n2;
            break;
        case "divisione":
            if (n2 === 0) {
                document.getElementById("result").textContent = "Errore: divisione per zero!";
                return;
            }
            risultato = n1 / n2;
            break;
        default:
            alert("Operazione non valida");
            return;
    }

    document.getElementById("result").textContent = "Risultato: " + risultato;
    document.getElementById("n1").value = "";
    document.getElementById("n2").value = "";
}   

/*Funzione per calcolare la somma di due numeri e stamparla nella console con template literal*/
let a = 10;
let b = 20;
console.log(`La somma di ${a} e ${b} è: ${a + b}`);