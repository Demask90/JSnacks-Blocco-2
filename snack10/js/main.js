//Crea due array che hanno un numero di elementi diversi.
//Aggiungi elementi all’array che ha meno elementi fino a quando ne avrà tanti quanti l’altro.

var first_array = [ "topolino", "pluto", "pippo", "paperino", "17", "ananas", "mela"];
var second_array = ["aria", "acqua", "fuoco", "terra"];
var push_element;

// if (first_array.length < second_array.length) {
        
    while (first_array.length < second_array.length) {
        do {
            push_element = prompt("inserisci un elemento nel primo array");
        } while (!isNaN(push_element));
        first_array.push(push_element);  
    }

// } else if (second_array.length < first_array.length) { 

    while (second_array.length < first_array.length) {
        do {
            push_element = prompt("inserisci un elemento nel secondo array");
        } while (!isNaN(push_element));
        second_array.push(push_element);  
    }
// }

console.log(first_array);
console.log(second_array);
