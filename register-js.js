var errorMsgs = [];
var wrongFname = false;
var wrongLname = false;
var passwordMatch = false;
var abtEmpty = false;

function isEmpty(element) {
    var data = regForm.elements[element].value
    if (data.trim().length === 0){
        return true;
    } 
    else{
        return false;
    }
}

function isValidName(name){
    var acceptableChars = /^[A-Za-z]{1,20}$/;
    return acceptableChars.test(name);
}

function isValidPassword(password) {
    var acceptablePassword = /^(?=.*\d)(.{8,20})$/;
    return acceptablePassword.test(password);
}

function isPasswordMatching(rPassword){
    if (regForm.elements['passw'].value === rPassword) {
        passwordMatch = true;
        return true;
    }
    else if((regForm.elements['passw'].value.length === 0) && (rPassword.length === 0)){
        passwordMatch = true;
        return false;
    }
    else {
        passwordMatch = false;
        return false;
    }
}
//USTAWIENIA MAKSYMALNEJ I MINIMALNEJ DATY
function setDateMinMax() {
    var dateField = document.getElementById("bdate");
    dateField.setAttribute("min", "1900-01-01");
    //MINIMALNA DATA URODZENIA = DZISIEJSZA DATA - 13 LAT
    var currentDate = new Date();
    currentDate.setFullYear(currentDate.getFullYear() - 13);
    var maxDate = currentDate.toISOString().split('T')[0];
    dateField.setAttribute("max", maxDate);
}
//SPRAWDZANIE MAKSYMALNEJ LICZBY ZNAKOW W SEKCJI ABT
function isValidAbt(abt) {
    if (abt.length < 1){
        abtEmpty = true;
        return false;
    } 
    else if (abt.length > 20){
        abtEmpty = false;
        return false;
    }
    return true;
}
function showErrorDiv(errors) {
    var errorDiv = document.getElementById("errors");
    errorDiv.innerHTML = "<p><b>Znaleziono błędy:</b></p>";
    
    if (errors.length > 0) {
        //Ramka staje sie widoczna
        errorDiv.style.display = "block";
        //Lista
        errorDiv.innerHTML += "<ul>";
        //Dodaje kolejne bledy
        for (var i = 0; i < errors.length; i++) {
            errorDiv.innerHTML += "<li>" + errors[i] + "</li>";
        }

        errorDiv.innerHTML += "</ul>";
        //Jesli nie ma bledow, nie pokazuje ramki
    } else {
        errorDiv.style.display = "none";

    }
}

//CZERWONA OBRAMOWKA JESLI BLAD
function markFieldRed(field) {
    field.style.border = "2px solid red";
    field.style.borderRadius = "3px";
}
//CZERWONA GWIAZDA JESLI BLAD
function putAsterisk(element, asterisk){
    var asteriskName = element + 'Asterisk';
    var asteriskElement = document.getElementById(asteriskName);
    if (asterisk){
        asteriskElement.style.display = 'inline';
        }
        else {
            asteriskElement.style.display = 'none';
        }
}
// SPRAWDZANIE CZY POLA NIE SA PUSTE
function checkIfCorrect(element){
    var isCorrect = true;    
    // SPRAWDZANIE IMIENIA
    if (element === 'fname') {
        if (!isValidName(regForm.elements[element].value)) {
            markFieldRed(regForm.elements[element], element, true);
            putAsterisk(element, true);
            isCorrect = false;
            wrongFname = true;
        }
        else {
            regForm.elements[element].style.border = "1px solid rgb(118, 118, 118)";
            regForm.elements[element].style.borderRadius = "3px";
            putAsterisk(element, false);
            wrongFname = false;
        }   
    }
    // SPRAWDZANIE NAZWISKA
    if ((element === 'lname')){
        if (!isValidName(regForm.elements[element].value)) {
            markFieldRed(regForm.elements[element], element, true);
            putAsterisk(element, true);
            isCorrect = false;
            wrongLname = true;
        }
        else {
            regForm.elements[element].style.border = "1px solid rgb(118, 118, 118)";
            regForm.elements[element].style.borderRadius = "3px";
            putAsterisk(element, false);
            wrongLname = false;
        }   
    }
    //SPRAWDZANIE POPRAWNOSCI HASLA
    if (element === 'passw') {
        if (!isValidPassword(regForm.elements[element].value)) {
            markFieldRed(regForm.elements[element], element);
            putAsterisk(element, true);
            isCorrect = false;
            
        }
        else {
            regForm.elements[element].style.border = "1px solid rgb(118, 118, 118)";
            regForm.elements[element].style.borderRadius = "3px";
            putAsterisk(element, false);
           
        } 
    }
    //SPRAWDZANIE ZGODNOSCI HASEL
    if (element === 'rpassw') {
        if (isEmpty(element) || !isPasswordMatching(regForm.elements[element].value)) {
            markFieldRed(regForm.elements[element], element);
            putAsterisk(element, true);
            isCorrect = false;
        }
        else {
            regForm.elements[element].style.border = "1px solid rgb(118, 118, 118)";
            regForm.elements[element].style.borderRadius = "3px";
            putAsterisk(element, false);
        } 
    }

    //SPRAWDZANIE POPRAWNOSCI DATY
    if (element === 'bdate') {
         if (isEmpty(element)) {
            markFieldRed(regForm.elements[element], element);
            putAsterisk(element, true);
            isCorrect = false;
        }
        else {
            regForm.elements[element].style.border = "1px solid rgb(118, 118, 118)";
            regForm.elements[element].style.borderRadius = "3px";
             putAsterisk(element, false);
        } 
    }

    //SPRAWDZANIE POPRAWNOSCI SEKCJI ABT
    if (element === 'abt') {
        if (!isValidAbt(regForm.elements[element].value)) {
            markFieldRed(regForm.elements[element], element);
            putAsterisk(element, true);
            isCorrect = false;

        }
        else {
            regForm.elements[element].style.border = "1px solid rgb(118, 118, 118)";
            regForm.elements[element].style.borderRadius = "3px";
            putAsterisk(element, false);
        } 
    }

    return isCorrect;   
}

function validate(formname) {
    var isValid = true;
    errorMsgs = [];

    if (!checkIfCorrect('fname')){
        if (isEmpty('fname')){
            errorMsgs.push("Nie podałes imienia");
            isValid = false;
    }
        else if (wrongFname) {
            errorMsgs.push("Podane imie zawiera niedozwolone znaki");
            isValid = false;
        }
    }
    if (!checkIfCorrect('lname')){
        if (isEmpty('lname')){
            errorMsgs.push("Nie podałes nazwiska");
            isValid = false; 
        }
        else if (wrongLname) {
            errorMsgs.push("Podane nazwisko zawiera niedozwolone znaki");
            isValid = false;
        }
    }

    if (!checkIfCorrect('bdate')){
        errorMsgs.push("Nie podałes daty urodzenia");
        isValid = false;
    }

    if (!checkIfCorrect('passw')){
        errorMsgs.push("Hasło musi składać sie z conajmnije 8 znaków, w tym 1 cyfry");
        isValid = false;
    }
    if (!checkIfCorrect('rpassw')){
        if (!isPasswordMatching(regForm.elements['rpassw'].value)){
            if (!passwordMatch) {
                errorMsgs.push("Hasła nie są takie same");
            }
            isValid = false;
        }
    }
    if (!checkIfCorrect('abt')) {
        if (!abtEmpty){
            errorMsgs.push("Opis może zawierać max 20 znaków");
            isValid = false;
        }    
        else if (abtEmpty) {
            errorMsgs.push("Opis nie może być pusty");
            isValid = false;
        }
    }

   showErrorDiv(errorMsgs);
   if (isValid){
    window.location.reload();
   }
   return isValid;
   
}


