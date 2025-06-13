/* const elementi = document.querySelectorAll('li');
for (const item of elementi) {
    console.log(item.textContent);
}
*/

/* 1. Selezionare tutti gli elementi `<a>` nella pagina*/
const tuttiLink = document.querySelectorAll('a');
console.log('Tutti i link:', tuttiLink);

/* 2. Contare quanti paragrafi ci sono */
const paragrafi = document.querySelectorAll('p');
console.log('Numero di paragrafi:', paragrafi.length);

/* 3. Trovare tutti gli elementi che hanno un attributo `data-id`  */
const elementiConDataId = document.querySelectorAll('[data-id]');
console.log('Elementi con data-id:', elementiConDataId);

/*4. Selezionare solo i link che portano a sezioni interne (href inizia con #)*/
const linkSezioniInterne = document.querySelectorAll('a[href^="#"]');
console.log('Link interni:', linkSezioneInterne);