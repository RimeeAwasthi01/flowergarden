document.addEventListener("DOMContentLoaded", function () {

    // ORDER BUTTON
    const orderBtn = document.querySelector("#home .btn");

    if (orderBtn) {
        orderBtn.addEventListener("click", function () {
            alert("Thank you! Your order request has been received.");
        });
    }

    // CONTACT FORM
    const form = document.querySelector(".contact-form");

    if (form) {
        form.addEventListener("submit", function (e) {
            e.preventDefault();

            let inputs = document.querySelectorAll(".contact-form input, .contact-form textarea");
            let isEmpty = false;

            inputs.forEach(input => {
                if (input.value.trim() === "") {
                    isEmpty = true;
                }
            });

            if (isEmpty) {
                alert("Please fill all fields!");
            } else {
                alert("Message sent successfully!");
                form.reset(); // clears form after success
            }
        });
    }

});