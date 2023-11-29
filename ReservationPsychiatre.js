// Question 1
function validerDateReservation() {
  var dateReservationInput = document.getElementById("date_reservationPsy");
  var dateReservationValeur = dateReservationInput.value;
  var minDate = "2023-09-01";
  var maxDate = "2023-12-30";

  if (dateReservationValeur < minDate || dateReservationValeur > maxDate) {
    alert(
      "La date de réservation doit être comprise entre le 1er septembre 2023 et le 30 décembre 2023."
    );
  }
}

// Question 2
const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  validerNom();
  validerPrenom();
  validerTelephone();
  validerDateReservation();
  validerEmail();

  // Check for validation errors
  const errors = document.querySelectorAll('.error-message');
  if (errors.length > 0) {
    event.preventDefault(); // Prevent form submission if there are errors
  }
});


function validerNom() {
  const nomValeur = document.getElementById("nom").value;
  const nomRegex = /^[A-Za-z]+$/;
  const erreurNom = document.getElementById("erreurNom");

  if (!nomValeur.match(nomRegex)) {
    erreurNom.innerHTML = "Veuillez entrer un nom valide (lettres uniquement)";
    return false;
  } else {
    erreurNom.innerHTML = "";
    return true;
  }
}

function validerPrenom() {
  const prenomValeur = document.getElementById("prenom").value;
  const nomRegex = /^[A-Za-z]+$/;
  const erreurPrenom = document.getElementById("erreurPrenom");

  if (!prenomValeur.match(nomRegex)) {
    erreurPrenom.innerHTML = "Veuillez entrer un prenom valide (lettres uniquement)";
    return false;
  } else {
    erreurPrenom.innerHTML = "";
    return true;
  }
}

function validerTelephone() {
  const telephoneValeur = telephoneInput.value;
  const telephoneRegex = /^[0-9]{8}$/;
  const erreurTelephone = document.getElementById("erreurTelephone");

  if (!telephoneValeur.match(telephoneRegex)) {
    erreurTelephone.innerHTML =
      "Veuillez entrer un numéro de téléphone valide (8 chiffres)";
  } else {
    erreurTelephone.innerHTML = "<span style='color:green'> Correct </span>";
  }
}

function validerDateReservation() {
  const dateReservationValeur = dateReservationInput.value;
  const minDate = "2023-09-01";
  const maxDate = "2023-12-30";
  const erreurDateReservation = document.getElementById("erreurDateReservation");

  if (dateReservationValeur < minDate || dateReservationValeur > maxDate) {
    erreurDateReservation.innerHTML =
      "La date de réservation doit être comprise entre le 1er septembre 2023 et le 30 décembre 2023.";
  } else {
    erreurDateReservation.innerHTML = "<span style='color:green'> Correct </span>";
  }
}

// Question

const erreurEmail = document.getElementById("erreurEmail");

emailInput.addEventListener("keyup", function () {
  validerEmail();
});

function validerEmail() {
  const emailValeur = emailInput.value.trim();
  const emailRegex = /^\S+@esprit.tn+$/;

  if (!emailValeur.match(emailRegex)) {
    erreurEmail.innerHTML = "Veuillez entrer une adresse email valide";
  } else {
    erreurEmail.innerHTML = "<span style='color:green'> Correct </span>";
  }
}
