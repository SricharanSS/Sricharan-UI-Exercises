let currentDate = new Date();

const buttonSubmit = document.getElementById("btn-submit");
const inputBox = document.getElementsByTagName("input");

const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const email = document.getElementById("email");
const contactNumber = document.getElementById("contact-number");
const pinCode = document.getElementById("pin-code");
const cardNumber = document.getElementById("card-number");
const cardExpiry = document.getElementById("card-expiry");
const cvv = document.getElementById("cvv");

buttonSubmit.addEventListener("click", (clickeEvent) => {
    clickeEvent.preventDefault();

    // First Name
    if(firstName.value === "") {
        document.getElementById("first-name-error").innerHTML = "First Name is required";
        inputBox[0].style.borderRadius = "5px";
        inputBox[0].style.borderColor = "#B22523";
    }
    else if(!/^[a-zA-Z]{1,30}$/.test(firstName.value)) {
        document.getElementById("first-name-error").innerHTML = "First Name is Not Valid";
        inputBox[0].style.borderRadius = "5px";
        inputBox[0].style.borderColor = "#B22523";
    }
    else {
        document.getElementById("first-name-error").innerHTML = "";
        inputBox[0].style.borderColor = "";
    }

    // Last Name
    if(lastName.value === "") {
        document.getElementById("last-name-error").innerHTML = "Last Name is required";
        inputBox[1].style.borderRadius = "5px";
        inputBox[1].style.borderColor = "#B22523";
    }
    else if(!/^[a-zA-Z]{1,30}$/.test(lastName.value)) {
        document.getElementById("last-name-error").innerHTML = "Last Name is Not Valid";
        inputBox[1].style.borderRadius = "5px";
        inputBox[1].style.borderColor = "#B22523";
    }
    else {
        document.getElementById("last-name-error").innerHTML = "";
        inputBox[1].style.borderColor = "";
    }

    // Email
    if(email.value === "") {
        document.getElementById("email-error").innerHTML = "Email Address is required";
        inputBox[2].style.borderRadius = "5px";
        inputBox[2].style.borderColor = "#B22523";
    }
    else if(!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email.value)) {
        document.getElementById("email-error").innerHTML = "Email Address is Not Valid";
        inputBox[2].style.borderRadius = "5px";
        inputBox[2].style.borderColor = "#B22523";
    }
    else {
        document.getElementById("email-error").innerHTML = "";
        inputBox[2].style.borderColor = "";
    }

    // Contact Number
    if(contactNumber.value === "") {
        document.getElementById("contact-number-error").innerHTML = "Contact Number is required";
        inputBox[3].style.borderRadius = "5px";
        inputBox[3].style.borderColor = "#B22523";
    }
    else if(!/^[0-9]\d{9}$/.test(contactNumber.value)) {
        document.getElementById("contact-number-error").innerHTML = "Contact Number is Not Valid";
        inputBox[3].style.borderRadius = "5px";
        inputBox[3].style.borderColor = "#B22523";
    }
    else {
        document.getElementById("contact-number-error").innerHTML = "";
        inputBox[3].style.borderColor = "";
    }

    // Pin Code
    if(pinCode.value === "") {
        document.getElementById("pin-code-error").innerHTML = "PIN Code is required";
        inputBox[4].style.borderRadius = "5px";
        inputBox[4].style.borderColor = "#B22523";
    }
    else if(!/^[0-9]\d{5}$/.test(pinCode.value)) {
        document.getElementById("pin-code-error").innerHTML = "PIN Code is Not Valid";
        inputBox[4].style.borderRadius = "5px";
        inputBox[4].style.borderColor = "#B22523";
    }
    else {
        document.getElementById("pin-code-error").innerHTML = "";
        inputBox[4].style.borderColor = "";
    }

    // Card Number
    if(cardNumber.value === "") {
        document.getElementById("card-number-error").innerHTML = "Card Number is required";
        inputBox[5].style.borderRadius = "5px";
        inputBox[5].style.borderColor = "#B22523";
    }
    else if(!/^[0-9]\d{15}$/.test(cardNumber.value)) {
        document.getElementById("card-number-error").innerHTML = "Card Number is Not Valid";
        inputBox[5].style.borderRadius = "5px";
        inputBox[5].style.borderColor = "#B22523";
    }
    else {
        document.getElementById("card-number-error").innerHTML = "";
        inputBox[5].style.borderColor = "";
    }

    // Card Expiry
    if(cardExpiry.value === "") {
        document.getElementById("card-expiry-error").innerHTML = "Card Expiry is required";
        inputBox[6].style.borderRadius = "5px";
        inputBox[6].style.borderColor = "#B22523";
    }
    else if(!/^[0-9]\d{3}$/.test(cardExpiry.value) || cardExpiry.value < currentDate.getFullYear()) {
        document.getElementById("card-expiry-error").innerHTML = "Card Expiry is Not Valid";
        inputBox[6].style.borderRadius = "5px";
        inputBox[6].style.borderColor = "#B22523";
    }
    else {
        document.getElementById("card-expiry-error").innerHTML = "";
        inputBox[6].style.borderColor = "";
    }

    // CVV
    if(cvv.value === "") {
        document.getElementById("cvv-error").innerHTML = "CVV is required";
        inputBox[7].style.borderRadius = "5px";
        inputBox[7].style.borderColor = "#B22523";
    }
    else if(!/^[0-9]\d{2,3}$/.test(cvv.value)) {
        document.getElementById("cvv-error").innerHTML = "CVV is Not Valid";
        inputBox[7].style.borderRadius = "5px";
        inputBox[7].style.borderColor = "#B22523";
    }
    else {
        document.getElementById("cvv-error").innerHTML = "";
        inputBox[7].style.borderColor = "";
    }
});