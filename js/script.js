/**  
    Section - 1 
*/

// Section - 1 Varible
const section1 = document.getElementsByClassName("section-1")[0];

// Tick Marks inside Shapes
const circleTick = document.getElementById("circle-tick");
const triangleTick = document.getElementById("triangle-tick");
const squareTick = document.getElementById("square-tick");

// Button Next
const buttonNext = document.getElementById("btn-next");

/* 
    Section - 1 
**/


/** 
    Section - 2
*/

// Section - 2 Variable
const section2 = document.getElementsByClassName("section-2")[0];

// Prompt Varibales
const circlePrompt = document.getElementById("circle-prompt");
const trianglePrompt = document.getElementById("triangle-prompt");
const squarePrompt = document.getElementById("square-prompt");

// Button Calculate
const buttonCalculate = document.getElementById("btn-calculate");

/*
    Section - 2
**/

document.getElementById("btn-circle").addEventListener("click",() => {
    circleTick.style.display = "inline-block";
    triangleTick.style.display = "none";
    squareTick.style.display = "none";

    buttonNext.style.display = "inline-block";
});

document.getElementById("btn-triangle").addEventListener("click",() => {
    circleTick.style.display = "none";
    triangleTick.style.display = "inline-block";
    squareTick.style.display = "none";

    buttonNext.style.display = "inline-block";
});

document.getElementById("btn-square").addEventListener("click",() => {
    circleTick.style.display = "none";
    triangleTick.style.display = "none";
    squareTick.style.display = "inline-block";

    buttonNext.style.display = "inline-block";
});

document.getElementById("btn-next").addEventListener("click", () => {

    section1.style.display = "none";

    section2.style.display = "inline-block";

    if(circleTick.style.display == "inline-block") {
        circlePrompt.style.display = "inline-block";
    }
    else if(triangleTick.style.display == "inline-block") {
        trianglePrompt.style.display = "inline-block";
    }
    else if(squareTick.style.display == "inline-block"){
        squarePrompt.style.display = "inline-block";
    }

});


buttonCalculate.addEventListener("click", () => {
    let value = document.getElementById("section-2-input").value;

});


let area = 0;
let perimeter = 0;

function calculateForCircle(radius) {
    area = 0;
    perimeter = 0;

    area = area + (22/7)*(radius*radius);
    perimeter = perimeter + 2*((22/7)*radius);
}

function calculateForTriangle(side) {
    area = 0;
    perimeter = 0;

    area = area + (0.433*side*side);
    perimeter = perimeter + 3*side;
}

function calculateForsquare(side) {
    area = 0;
    perimeter = 0;

    area = area + (side*side);
    perimeter = perimeter + (4*side);
}