/* 
let colori = ["rosso", "verde", "blu"];

colori[1] = "giallo";

colori[5]

"arancione";

colori.push("viola");

let ultimo = colori.pop(); console.log(ultimo);

colori.unshift("nero");

console.table(colori);

let primo = colori.shift();

console.log(colori.indexOf("blu"));
console.log(colori.includes("giallo"));

colori.splice(2, 1, "bianco");
console.table(colori);

colori.splice(2, 0, "grigio", "nero");
console.table(colori);

let parte = colori.slice(1, 4);
console.table(parte);

let matrice = [[1,2,3],
     [4,5,6],
     [7,8,9]];  
console.log (matrice[1][2]); // 6
matrice[1][2] = 10; // Modifica il valore 6 in 10 */



let colori = ["rosso", "verde", "blu"];

/*Esercizio 1 — Aggiungi due colori e rimuovi l’ultimo*/
colori.push("giallo", "arancione");
colori.pop();
console.log(colori);

/*Esercizio 2 — Verifica se "verde" è presente e stampa indice*/

console.log(colori.includes("verde"));
console.log(colori.indexOf("verde"));

/* Esercizio 3 — Cambia il colore in seconda posizione*/
colori[1] = "bianco";

console.log(colori);

/* Esercizio 4 — Rimuovi il primo elemento e stampa l’array aggiornato */
colori.shift();
console.log(colori);