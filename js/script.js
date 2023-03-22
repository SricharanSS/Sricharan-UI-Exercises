const circleTick = document.getElementById("circle-tick");
const triangleTick = document.getElementById("triangle-tick");
const rectangleTick = document.getElementById("rectangle-tick");

const buttonNext = document.getElementById("btn-next");

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

