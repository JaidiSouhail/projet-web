// Question 1
function validerDateReservation() {
  var dateReservationInput = document.getElementById("date_seance_sportive");
  var dateReservationValeur = dateReservationInput.value;
  var minDate = "2023-09-01";
  var maxDate = "2023-12-30";

  var erreurDateSeanceSportive = document.getElementById("erreurDateSeanceSportive");

  if (dateReservationValeur < minDate || dateReservationValeur > maxDate) {
    erreurDateSeanceSportive.innerHTML =
      "La date de réservation doit être comprise entre le 1er septembre 2023 et le 30 décembre 2023.";
    return false;
  } else {
    erreurDateSeanceSportive.innerHTML = "<span style='color:green'> Correct </span>";
    return true;
  }
}

// Question 2
const form = document.getElementById("form");

const nomInput = document.getElementById("nom");
const prenomInput = document.getElementById("prenom");
const telephoneInput = document.getElementById("tel");
const dateReservationInput = document.getElementById("date_seance_sportive");
const emailInput = document.getElementById("email");

form.addEventListener("submit", function (event) {
  if (!validerNom() || !validerPrenom() || !validerTelephone() || !validerDateReservation() || !validerEmail()) {
    event.preventDefault(); // Prevent form submission if there are validation errors
  }
});

function validerNom() {
  const nomValeur = nomInput.value;
  const nomRegex = /^[A-Za-z]+$/;
  const erreurNom = document.getElementById("erreurNom");

  if (!nomValeur.match(nomRegex)) {
    erreurNom.innerHTML = "Veuillez entrer un nom valide (lettres uniquement)";
    return false;
  } else {
    erreurNom.innerHTML = "<span style='color:green'> Correct </span>";
    return true;
  }
}

function validerPrenom() {
  const prenomValeur = prenomInput.value;
  const prenomRegex = /^[A-Za-z]+$/;
  const erreurPrenom = document.getElementById("erreurPrenom");

  if (!prenomValeur.match(prenomRegex)) {
    erreurPrenom.innerHTML =
      "Veuillez entrer un prénom valide (lettres uniquement)";
    return false;
  } else {
    erreurPrenom.innerHTML = "<span style='color:green'> Correct </span>";
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
    return false;
  } else {
    erreurTelephone.innerHTML = "<span style='color:green'> Correct </span>";
    return true;
  }
}

function validerEmail() {
  const emailValeur = emailInput.value.trim();
  const emailRegex = /^\S+@esprit.tn+$/;
  const erreurEmail = document.getElementById("erreurEmail");

  if (!emailValeur.match(emailRegex)) {
    erreurEmail.innerHTML = "Veuillez entrer une adresse email valide";
    return false;
  } else {
    erreurEmail.innerHTML = "<span style='color:green'> Correct </span>";
    return true;
  }
}
