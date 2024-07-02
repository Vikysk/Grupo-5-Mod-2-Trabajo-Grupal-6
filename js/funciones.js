document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("form").addEventListener("submit", function (event) {
        event.preventDefault();
        let valid = true;
        const inputName = document.getElementById("inputName").value.trim();
        const inputEmail = document.getElementById("inputEmail").value.trim();
        const inputMessage = document.getElementById("inputMessage").value.trim();
        if (inputName === "") {
            showError("inputName", "El nombre de usuario es obligatorio");
            valid = false;

        }

        if (inputEmail === "") {
            showError("inputEmail", "El email es obligatorio");
            valid = false;

        }

        if (inputMessage === "") {
            showError("inputMessage", "El mensaje es obligatorio");
            valid = false;

        }

        // si los campos son validos, se envia el formulario//
        if (valid) {
            this.submit();
        }


    });
    function showError(inputId, message) {
        const inputEnter = document.getElementById(inputId);
        const showErrorMessage = document.createElement("div");
        showErrorMessage.innerText = message;
        inputEnter.parentElement.appendChild(showErrorMessage);
        showErrorMessage.className = "text-danger";
    };

})