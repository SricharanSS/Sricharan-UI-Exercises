// Section - 1 Varible
const section1 = document.getElementsByClassName("section-1")[0];

// Tick Marks inside Shapes
const circleTick = document.getElementById("circle-tick");
const triangleTick = document.getElementById("triangle-tick");
const rectangleTick = document.getElementById("rectangle-tick");

// Button Next
const buttonNext = document.getElementById("btn-next");

// Section - 2 Variable
const section2 = document.getElementsByClassName("section-2")[0];

// Prompt Varibales
const circlePrompt = document.getElementById("circle-prompt");
const trianglePrompt = document.getElementById("triangle-prompt");
const rectanglePrompt = document.getElementById("rectangle-prompt");


document.getElementById("btn-circle").addEventListener("click",() => {
    circleTick.style.display = "inline-block";
    triangleTick.style.display = "none";
    rectangleTick.style.display = "none";

    buttonNext.style.display = "inline-block";
});

document.getElementById("btn-triangle").addEventListener("click",() => {
    circleTick.style.display = "none";
    triangleTick.style.display = "inline-block";
    rectangleTick.style.display = "none";

    buttonNext.style.display = "inline-block";
});

document.getElementById("btn-rectangle").addEventListener("click",() => {
    circleTick.style.display = "none";
    triangleTick.style.display = "none";
    rectangleTick.style.display = "inline-block";

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
    else if(rectangleTick.style.display == "inline-block"){
        rectanglePrompt.style.display = "inline-block";
    }

});



