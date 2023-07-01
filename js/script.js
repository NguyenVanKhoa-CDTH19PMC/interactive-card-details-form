window.onload = function () {
    let form = document.getElementById("card-form");

    function formatCardNumber(number) {
        if (number == '')
            return null;
        let numberFormated;
        number = number.replace(/\s/g, '');
        numberFormated = number.substr(0, 4);
        if (numberFormated.length >= 4)
            numberFormated += ' ' + number.substr(4, 4);
        if (numberFormated.length > 8)
            numberFormated += ' ' + number.substr(8, 4);
        if (numberFormated.length > 13)
            numberFormated += ' ' + number.substr(12, 4);
        // numberFormated += '' || null;
        // numberFormated = number.substr(0, 4) + ' ' + number.substr(4, 4) + ' ' + number.substr(8, 4) + ' ' + number.substr(12, 4) || null;
        return numberFormated;
    }

    function review() {
        document.getElementById("name-review").innerHTML = form.elements['name'].value || "Jane Appleseed";
        document.getElementById("card-numer-review").innerHTML = formatCardNumber(form.elements['card-number'].value) || "0000 0000 0000 0000";
        form.elements['card-number'].value = formatCardNumber(form.elements['card-number'].value);
        document.getElementById("exp-date-review").innerHTML = (form.elements['month'].value || "00") + "/" + (form.elements['year'].value || '00');
        document.getElementById("cvc-review").innerHTML = form.elements['cvc'].value || "000";
    }
    form.addEventListener('keyup', function () {
        review();
    });
    form.addEventListener('reset', function () {

        review();
    });

    form.addEventListener("submit", e => {
        let valid = true;
        let cardNumberError = document.getElementById("card-number-error");
        e.preventDefault();
        let nameError = document.getElementById("name-error");
        let expDateError = document.getElementById("exp-date-error");
        let cvcEror = document.getElementById("cvc-error");
        // valdation
        /// card number validation 
        if (form.elements["card-number"].value == '') {
            cardNumberError.innerHTML = "Can't be blank";
            cardNumberError.style.display = "block";
            form.elements["card-number"].style.borderColor = "red";
            valid = false
        }
        else if (!form.elements["card-number"].value.match("^[0-9]*$")) {
            cardNumberError.innerHTML = "Wrong format,number only";
            cardNumberError.style.display = "block";
            form.elements["card-number"].style.borderColor = "red";
            valid = false
        }
        else {
            cardNumberError.style.display = "none";
            form.elements["card-number"].style.borderColor = null;
            valid = true;
        }
        /// name validation
        if (form.elements["name"].value == '') {
            nameError.innerHTML = "Can't be blank";
            nameError.style.display = "block";
            form.elements["name"].style.borderColor = "red";
            valid = false
        }

        else {
            nameError.style.display = "none";
            form.elements["name"].style.borderColor = null;
            valid = true
        }
        /// exp date validation 
        //// month validation
        if (form.elements["month"].value == '') {

            form.elements["month"].style.borderColor = "red";

            expDateError.innerHTML = "Can't be blank";
            expDateError.style.display = "block";
            valid = false
        }
        else if (!form.elements["month"].value.match("^[0-9]*$") || (form.elements["month"].value <= 0 || form.elements["month"].value > 12)) {

            form.elements["month"].style.borderColor = "red";
            expDateError.innerHTML = "Wrong format,number only";
            expDateError.style.display = "block";
            valid = false
        }
        else {
            expDateError.style.display = "none";
            form.elements["month"].style.borderColor = null;
            valid = true
        }
        //// year valodation
        if (form.elements["year"].value == '') {

            form.elements["year"].style.borderColor = "red";

            expDateError.innerHTML = "Can't be blank";
            expDateError.style.display = "block";
            valid = false
        }
        else if (!form.elements["year"].value.match("^[0-9]*$") || (form.elements["year"].value < Date().year)) {

            form.elements["year"].style.borderColor = "red";
            expDateError.innerHTML = "Wrong format,number only";
            expDateError.style.display = "block";
            valid = false
        }
        else {
            expDateError.style.display = "none";
            form.elements["year"].style.borderColor = null;
            valid = true
        }
        /// cvc validation
        if (form.elements["cvc"].value == '') {
            cvcEror.innerHTML = "Can't be blank";
            cvcEror.style.display = "block";
            form.elements["cvc"].style.borderColor = "red";
            valid = false
        }
        else if (!form.elements["cvc"].value.match("^[0-9]*$")) {
            cvcEror.innerHTML = "Wrong format,number only";
            cvcEror.style.display = "block";
            form.elements["cvc"].style.borderColor = "red";
            valid = false
        }
        else {
            cvcEror.style.display = "none";
            form.elements["cvc"].style.borderColor = null;
            valid = true
        }
        if (valid) {
            document.getElementById("card-form").style.display = "none";
            document.getElementById("completed").style.display = "block";
        }
    })
}

function continute() {
    document.getElementById("completed").style.display = "none";
    document.getElementById("card-form").style = null;

    document.getElementById("card-form").submit();

}