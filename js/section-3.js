// Function to display numbers from 1 to 100
function displayNumber() {
    for(let i=1; i<=100; i++) {
        console.log(i);
    }
}

// Function to display date
function printDate() {
    let date = new Date();
    console.log(date.getDate()+"/"+date.getMonth()+"/"+date.getFullYear());
}

// Celcius to Farenheit
function convertToFahrenheit(celcius) {
    let farenheit = 0;
    farenheit = ( (celcius*9)/5) + 32;
    return farenheit;
}

// Returns average of an Array
function getAVG(arr) {
    let sum = 0;
    for(let i=0; i<arr.length; i++) {
        sum += arr[i];
    }

    return (sum/arr.length);
}

// Reverse a String
function reverseString(str) {
    revstr = str.split("");
    revstr.reverse();
    return revstr.toString().replaceAll(",","");
}


// Function Calls

displayNumber();

printDate();

console.log(convertToFahrenheit(40));

let arr = [1,2,3,4,5];
console.log(getAVG(arr));

let str = "sricharan";
console.log(reverseString(str));