let email = document.querySelector("email");
let phone = document.querySelector("phone");
let zipcode = document.querySelector("zip-code");
let postcode = document.querySelector("post-code");
let button = document.querySelector("#generate-btn");
//let userInput = document.querySelector("#user-input").value;

//Event Listener

button.addEventListener("click", validateExpression);

function getRegex(type) {
    switch (type) {
        case 'email':
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        case 'phone':
            return /^(?:\+88|01)?\d{11}\r?$/;
        case 'postcode':
            return /^\d{4}$/;
        case 'zipcode':
            return /^[1-9][0-9]{3} ?(?!sa|sd|ss)(?:[a-z]{2})?$/;
        default:
            return null;
    }

}

// return /^(?:\+88|01)?\d{11}\r?$/;
function validateExpression(e) {
    const type = document.querySelector('#expression-type').value;
    const userInput = document.querySelector("#user-input").value;
    const regex = getRegex(type);

    if (regex) {
        let isValid = regex.test(userInput);
        document.querySelector("#result").textContent = isValid ? "Valid" : "Invalid";

    } else {
        document.querySelector("#result").textContent = "Invalid Expression input";
    }



}