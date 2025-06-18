// Funzione che crea e mostra la card utente nel DOM
function mostraCardUtente(user) {
  // Seleziona il contenitore della card
  const card = document.getElementById('userCard');

  // Inserisce dinamicamente i dati dell'utente nell'HTML
  card.innerHTML = `
    <h2>${user.name}</h2>
    <p>Username: ${user.username}</p>
    <p>Email: ${user.email}</p>
    <p>Città: ${user.address.city}</p>
    <p>Azienda: ${user.company.name}</p>
  `;
}

// Effettua una richiesta GET all'API per ottenere i dati dell'utente con ID 1
fetch('https://jsonplaceholder.typicode.com/users/1')
  .then(response => {
    // Se la risposta non è OK (status code diverso da 200), genera un errore
    if (!response.ok) throw new Error('Errore nella richiesta');
    // Converte la risposta in formato JSON
    return response.json();
  })
  .then(data => {
    // Chiama la funzione per mostrare la card con i dati ricevuti
    mostraCardUtente(data);
  })
  .catch(error => {
    // In caso di errore (es. rete o API non disponibile), mostra il messaggio nella card
    document.getElementById('userCard').innerHTML = `<p>Errore: ${error.message}</p>`;
  });
