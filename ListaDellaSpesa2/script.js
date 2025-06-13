function addProduct() {
    const input = document.getElementById('productInput');
    const productName = input.value.trim();

    if (productName === '') {
        alert('Inserisci un nome prodotto!');
        return;
    }

    const productList = document.getElementById('productList');
    const li = document.createElement('li');
    li.innerHTML = `
        ${productName} <button class="remove" onclick="removeProduct(this)">Rimuovi</button>
    `;
    productList.appendChild(li);

    input.value = '';  // Resetta il campo input
}

function removeProduct(button) {
    const li = button.parentElement;
    li.remove();
}