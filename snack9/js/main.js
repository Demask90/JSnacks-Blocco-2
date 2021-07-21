//Crea un array di numeri interi e fai la somma di tutti gli elementi 
//che sono in posizione dispari


var array_number = [5, 37, 4, 54, 6, 28, 8, 55, 44, 10];
var array_sum = 0;

for (var i = 0; i < array_number.length; i++) {
    
    if ( i % 2 != 0 ) {
        array_sum += array_number[i];
    }
}

console.log(array_sum);