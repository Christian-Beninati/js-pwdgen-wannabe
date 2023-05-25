// console.log('JS OK')

// Recuperare il placeholder dal DOM" 
const passwordPlaceholder = document.getElementById("password-result");
console.log(passwordPlaceholder);

// Chiedere all'utente il suo nome
const username = prompt("Inserisci il tuo nome:");
console.log(username);

// Chiedere all'utente il suo cognome
const usersurname = prompt("Inserisci il tuo cognome:");
console.log(usersurname);

// Chiedere all'utente il suo colore preferito
const favouritecolour = prompt("Inserisci il tuo colore preferito:");
console.log(favouritecolour);

// Creare la password combinando le informazioni inserite dall'utente
const password = `${username}${usersurname}${favouritecolour}21`;
console.log(password);

// Inserire il risultato nell'elemento del DOM
passwordPlaceholder.innerText = password;
