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
const prompt = document.getElementById("prompt");

// Input Variable
const section2Input = document.getElementById("section-2-input");

// Button Calculate
const buttonCalculate = document.getElementById("btn-calculate");

/*
    Section - 2
**/

/**
    Section - 3
*/ 

const section3 = document.getElementsByClassName("section-3")[0];

const section3Circle = document.getElementById("section-3-circle");
const section3Triangle = document.getElementById("section-3-triangle");
const section3Square = document.getElementById("section-3-square");

/*
    Section - 3
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

    prompt.style.display = "inline-block";

    if(circleTick.style.display == "inline-block") {
        prompt.innerHTML = "2. Enter Radius";
    }
    else if(triangleTick.style.display == "inline-block") {
        prompt.innerHTML = "2. Enter Side(Base & Height)";
    }
    else if(squareTick.style.display == "inline-block"){
        prompt.innerHTML = "2. Enter Side";
    }

});

let area = 0;
let perimeter = 0;

function calculateForCircle(radius) {
    area = 0;
    perimeter = 0;

    area = area + (22/7)*(radius*radius);
    area = area.toFixed(2);

    perimeter = perimeter + 2*((22/7)*radius);
    perimeter = perimeter.toFixed(2);
}

function calculateForTriangle(side) {
    area = 0;
    perimeter = 0;

    area = area + (0.433*side*side);
    area = area.toFixed(2);

    perimeter = perimeter + 3*side;
}

function calculateForsquare(side) {
    area = 0;
    perimeter = 0;

    area = area + (side*side);
    perimeter = perimeter + (4*side);
}

document.getElementById("btn-calculate").addEventListener("click", () => {
    let value = document.getElementById("section-2-input").value;
    document.getElementsByClassName("section-2")[0].style.display = "none";
    document.getElementsByClassName("section-3")[0].style.display = "block";

    if(circleTick.style.display == "inline-block") {
        document.getElementById("section-3-circle").style.display = "inline-block";
        document.getElementById("title").innerHTML = "Circle";

        calculateForCircle(value);

        document.getElementById("r1-c1").innerHTML = "RADIUS";
        document.getElementById("r1-c2").innerHTML = "r";
        document.getElementById("r1-c3").innerHTML = value+" cm";

        document.getElementById("r2-c2").innerHTML = "𝞹r²";
        document.getElementById("r2-c3").innerHTML = area + " sq cm";

        document.getElementById("r3-c2").innerHTML = "2𝞹r";
        document.getElementById("r3-c3").innerHTML = perimeter + " cm";

    }
    else if(triangleTick.style.display == "inline-block") {
        document.getElementById("section-3-triangle").style.display = "inline-block";
        document.getElementById("title").innerHTML = "Equilateral Triangle";

        calculateForTriangle(value);

        document.getElementById("r1-c1").innerHTML = "SIDE";
        document.getElementById("r1-c2").innerHTML = "s";
        document.getElementById("r1-c3").innerHTML = value+" cm";

        document.getElementById("r2-c2").innerHTML = "0.433*s*s";
        document.getElementById("r2-c3").innerHTML = area + " sq cm";

        document.getElementById("r3-c2").innerHTML = "3*s";
        document.getElementById("r3-c3").innerHTML = perimeter + " cm";
    }
    else if(squareTick.style.display == "inline-block"){
        document.getElementById("section-3-square").style.display = "inline-block";
        document.getElementById("title").innerHTML = "Square";

        calculateForsquare(value);

        document.getElementById("r1-c1").innerHTML = "SIDE";
        document.getElementById("r1-c2").innerHTML = "s";
        document.getElementById("r1-c3").innerHTML = value+" cm";

        document.getElementById("r2-c2").innerHTML = "s*s";
        document.getElementById("r2-c3").innerHTML = area + " sq cm";

        document.getElementById("r3-c2").innerHTML = "4*s";
        document.getElementById("r3-c3").innerHTML = perimeter + " cm";
    }

});

document.getElementById("btn-start-again").addEventListener("click", () => {
    
    section1.style.display = "inline-block";
    circleTick.style.display = "none"
    triangleTick.style.display = "none"
    squareTick.style.display = "none"
    buttonNext.style.display = "none";

    section2.style.display = "none";
    section2Input.value = "";

    section3.style.display = "none";
    section3Circle.style.display = "none";
    section3Triangle.style.display = "none";
    section3Square.style.display = "none";
});