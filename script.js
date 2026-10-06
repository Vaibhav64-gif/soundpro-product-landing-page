/* =========================================
   PRODUCT DATA
========================================= */

const products = {
    standard: {
        name: "Standard",
        price: 7999
    },

    pro: {
        name: "Pro",
        price: 10999
    },

    elite: {
        name: "Elite",
        price: 13999
    }
};


/* =========================================
   PRODUCT ELEMENTS
========================================= */

const variantSelect = document.getElementById("variant");
const quantityElement = document.getElementById("quantity");
const totalPriceElement = document.getElementById("totalPrice");

const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");


let quantity = 1;


/* =========================================
   PRICE CALCULATION
========================================= */

function updateTotalPrice() {

    const selectedVariant = variantSelect.value;

    const productPrice = products[selectedVariant].price;

    const totalPrice = productPrice * quantity;

    totalPriceElement.textContent =
        `₹${totalPrice.toLocaleString("en-IN")}`;

}


/* =========================================
   VARIANT CHANGE
========================================= */

variantSelect.addEventListener("change", function () {

    updateTotalPrice();

});


/* =========================================
   INCREASE QUANTITY
========================================= */

increaseButton.addEventListener("click", function () {

    if (quantity < 10) {
        quantity++;

        quantityElement.textContent = quantity;

        updateTotalPrice();
    }

});


/* =========================================
   DECREASE QUANTITY
========================================= */

decreaseButton.addEventListener("click", function () {

    if (quantity > 1) {
        quantity--;

        quantityElement.textContent = quantity;

        updateTotalPrice();
    }

});


/* =========================================
   MOBILE NAVIGATION
========================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {

    const isOpen = mainNav.classList.toggle("active");

    menuToggle.setAttribute("aria-expanded", isOpen);

});


/*
 * Close mobile navigation after clicking
 * a navigation link.
 */

const navLinks = document.querySelectorAll("#mainNav a");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        mainNav.classList.remove("active");

        menuToggle.setAttribute("aria-expanded", "false");

    });

});


/* =========================================
   FORM VALIDATION
========================================= */

const enquiryForm = document.getElementById("enquiryForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const messageInput = document.getElementById("message");

const nameError = document.getElementById("nameError");
const emailError = document.getElementById("emailError");
const phoneError = document.getElementById("phoneError");
const messageError = document.getElementById("messageError");

const successMessage = document.getElementById("successMessage");


function setError(input, errorElement, message) {

    input.classList.add("invalid");

    errorElement.textContent = message;

}


function clearError(input, errorElement) {

    input.classList.remove("invalid");

    errorElement.textContent = "";

}


function validateForm() {

    let isValid = true;


    /* Name */

    const name = nameInput.value.trim();

    if (name === "") {

        setError(
            nameInput,
            nameError,
            "Please enter your name."
        );

        isValid = false;

    } else if (name.length < 2) {

        setError(
            nameInput,
            nameError,
            "Name must contain at least 2 characters."
        );

        isValid = false;

    } else {

        clearError(nameInput, nameError);

    }


    /* Email */

    const email = emailInput.value.trim();

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {

        setError(
            emailInput,
            emailError,
            "Please enter your email."
        );

        isValid = false;

    } else if (!emailPattern.test(email)) {

        setError(
            emailInput,
            emailError,
            "Please enter a valid email address."
        );

        isValid = false;

    } else {

        clearError(emailInput, emailError);

    }


    /* Phone */

    const phone = phoneInput.value.trim();

    const phonePattern = /^[6-9]\d{9}$/;

    if (phone === "") {

        setError(
            phoneInput,
            phoneError,
            "Please enter your phone number."
        );

        isValid = false;

    } else if (!phonePattern.test(phone)) {

        setError(
            phoneInput,
            phoneError,
            "Enter a valid 10-digit mobile number."
        );

        isValid = false;

    } else {

        clearError(phoneInput, phoneError);

    }


    /* Message */

    const message = messageInput.value.trim();

    if (message === "") {

        setError(
            messageInput,
            messageError,
            "Please enter a message."
        );

        isValid = false;

    } else if (message.length < 10) {

        setError(
            messageInput,
            messageError,
            "Message must contain at least 10 characters."
        );

        isValid = false;

    } else {

        clearError(messageInput, messageError);

    }


    return isValid;
}


/* =========================================
   FORM SUBMISSION
========================================= */

enquiryForm.addEventListener("submit", function (event) {

    event.preventDefault();

    successMessage.classList.remove("show");

    const isValid = validateForm();

    if (!isValid) {
        return;
    }


    /*
     * In a real application this is where
     * fetch/AJAX would send the form data
     * to a backend API.
     */

    const selectedVariant = variantSelect.value;

    const enquiryData = {
        name: nameInput.value.trim(),
        email: emailInput.value.trim(),
        phone: phoneInput.value.trim(),
        message: messageInput.value.trim(),

        product: products[selectedVariant].name,

        quantity: quantity,

        total:
            products[selectedVariant].price * quantity
    };


    console.log("Enquiry submitted:", enquiryData);


    successMessage.classList.add("show");

    enquiryForm.reset();

    /*
     * Reset product quantity after
     * successful submission.
     */

    quantity = 1;

    quantityElement.textContent = quantity;

    variantSelect.value = "standard";

    updateTotalPrice();

});


/* =========================================
   INITIAL PRICE
========================================= */

updateTotalPrice();
