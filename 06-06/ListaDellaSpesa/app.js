let listaSpesa = [];

function aggiungiElemento() {
    let input = document.getElementById("inputItem");
    let valore = input.value.trim();
    
    if (valore !== "") {
        listaSpesa.push(valore);
        input.value = "";
        aggiornaLista();
    } else {
        alert("Inserisci un prodotto!");
    }
}

function aggiornaLista() {
    let ul = document.getElementById("lista");
    ul.innerHTML = "";
    
    for (let item of listaSpesa) {
        let li = document.createElement("li");
        li.textContent = item;
        ul.appendChild(li);
    }
}
