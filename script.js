//Write a JavaScript function that takes a number as input and
//displays the multiplication table for that number (up to 10).

function multiplicationTable(number){
    for(let i = 1 ; i <= 10 ; i++){
        alert(`${number} x ${i} = ${number * i}`);
    }
}



// Write a JavaScript function that takes input for a temperature in
// Celsius from the user and converts it into Fahrenheit using the
// formula: Fahrenheit=(Celsius×9/5)+32

function celsiusToFahrenheit(celsius){
    let fahrenheit = (celsius * 9/5) + 32;
    alert(`${celsius}°C is equal to ${fahrenheit}°F.`);
}


// Write a JavaScript function that takes a number as input and
// displays whether the number is positive or negative.

function positiveOrnegative(number){
    if(number>=0){
        alert('Is Positive');
    }else{
        alert('Is Negative');
    }
}

