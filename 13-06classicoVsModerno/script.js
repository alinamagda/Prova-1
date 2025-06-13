// studenti di esempio
const studenti = [
{ nome: "Mario Rossi", voto: 8, presente: true },
{ nome: "Luigi Bianchi", voto: 5, presente: false },
{ nome: "Anna Verdi", voto: 9, presente: true },
{ nome: "Beatrice Neri", voto: 6, presente: true },
{ nome: "Carlo Blu", voto: 4, presente: true },
{ nome: "Davide Rosa", voto: 7, presente: false },
{ nome: "Elena Gialli", voto: 10, presente: true },
{ nome: "Federico Viola", voto: 3, presente: false },
{ nome: "Giorgia Azzurra", voto: 8, presente: true },
{ nome: "Lorenzo Marrone", voto: 2, presente: false },
{ nome: "Martina Rosa", voto: 6, presente: true },
{ nome: "Simone Nero", voto: 5, presente: true }
];
const btn = document.getElementById('run');
const out = document.getElementById('output');

// funzione per mostrare output
function log(titolo, dato) {
const h4 = document.createElement('h4');
const pre = document.createElement('pre');
h4.textContent = titolo;
pre.textContent = JSON.stringify(dato, null, 2);
out.append(h4, pre);
}
btn.addEventListener('click', () => {
out.innerHTML = ''; // reset output

/* 1. Operatore ternario - Valuta il voto del primo studente: se voto >= 6 logga "Promosso", altrimenti "Bocciato".*/
const risultato = studenti[0].voto >= 6 ? "Promosso" : "Bocciato";
log("Risultato primo studente", risultato);


/* 2. Spread - Crea un nuovo array tutti che include tutti studenti originali + altri due di tua scelta, senza modificare l’array studenti originale.
*/
const tutti = [...studenti, { nome: "Nuovo Studente 1", voto: 7, presente: true }, { nome: "Nuovo Studente 2", voto: 8, presente: true }];
log("Tutti gli studenti", tutti);

/* 3.Rest - Funzione raggruppaNomi(...nomi) che riceve un numero arbitrario di stringhe e ritorna un array di nomi. */
function raggruppaNomi(...nomi) {
  return nomi;
}
const nomiRaggruppati = raggruppaNomi("Mario", "Anna", "Elena");
log("Nomi raggruppati", nomiRaggruppati);


/* 4. map() - Trasforma l’array tutti in un array di stringhe formattate: "Nome: (voto)" .*/
const formattati = tutti.map(s => `${s.nome}: ${s.voto}`);
log("Studenti formattati", formattati);

/* 5. Filtra da tutti solo gli studenti con presente === true e logga il nuovo array. */
const presenti = tutti.filter(s => s.presente);
log("Studenti presenti", presenti);

/* 6. forEach() Crea dinamicamente un <ul> dentro #output e, per ogni studente in tutti ,
aggiungi un <li> con testo "Nome – ✔️ se presente, altrimenti ❌ .*/
const ul = document.createElement('ul');
tutti.forEach(s => {
  const li = document.createElement('li');
  li.textContent = `${s.nome} – ${s.presente ? '✔️' : '❌'}`;
  ul.appendChild(li);
});
out.appendChild(ul);

/* 7. Destructuring - Definisci una funzione presentaStudente({ nome, voto, presente }) che ritorna una
stringa tipo: "Ciao, sono Mario Rossi, ho 8 e sono presente." Applica questa funzione a tutti con map() e logga il risultato. */
function presentaStudente({ nome, voto, presente }) {
  return `Ciao, sono ${nome}, ho ${voto} e sono ${presente ? 'presente' : 'assente'}.`;
}
const presentazioni = tutti.map(presentaStudente);
log("Presentazioni studenti", presentazioni);

/* Aggiungi un form per rimuovere uno studente per nome, usando filter() . */
const form = document.createElement('form');
const input = document.createElement('input');
input.placeholder = 'Nome studente da rimuovere';
const button = document.createElement('button');
button.textContent = 'Rimuovi studente';
form.appendChild(input);
form.appendChild(button);
out.appendChild(form);

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const nomeDaRimuovere = input.value;
  const studentiAggiornati = tutti.filter(s => s.nome !== nomeDaRimuovere);
  log("Studenti dopo rimozione", studentiAggiornati);
});

/* Applica classi CSS diverse a <li> promossi/bocciati utilizzando un ternario in
classList.toggle() . */
const ulClassi = document.createElement('ul');
tutti.forEach(s => {
  const li = document.createElement('li');
  li.textContent = s.nome;
  li.classList.toggle('promosso', s.voto >= 6);
  li.classList.toggle('bocciato', s.voto < 6);
  ulClassi.appendChild(li);
});
out.appendChild(ulClassi);
});