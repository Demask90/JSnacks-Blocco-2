//Inserisci un numero, se è pari stampa il numero,
// se è dispari stampa il numero successivo


var user_number = parseInt(prompt("inserisci un numero"));

if ( user_number % 2 == 0) {
    console.log(user_number);
} 
else {
    console.log(user_number + 1);
}