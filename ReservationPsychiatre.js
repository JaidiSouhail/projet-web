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
    return false;
  } else {
    alert("La date est validée");
    return true;
  }
}

// Question 2
const form = document.querySelector("form");

const nomInput = document.getElementById("nom");
const prenomInput = document.getElementById("prenom");
const telephoneInput = document.getElementById("telephone");
const dateReservationInput = document.getElementById("date_reservationPsy");
const emailInput = document.getElementById("email");

form.addEventListener("submit", function (event) {
  validerNom();
  validerPrenom();
  validerTelephone();
  if (!validerDateReservation() || !validerEmail()) {
    event.preventDefault(); // Prevent form submission if there are 
    
  }
});


function validerNom() {
  const nomValeur = nomInput.value;
  const nomRegex = /^[A-Za-z]+$/;
  const erreurNom = document.getElementById("erreurNom");

  if (!nomValeur.match(nomRegex)) {
    erreurNom.innerHTML = "Veuillez entrer un nom valide (lettres uniquement)";
  } else {
    erreurNom.innerHTML = "<span style='color:green'> Correct </span>";
  }
}

function validerPrenom() {
  const prenomValeur = prenomInput.value;
  const prenomRegex = /^[A-Za-z]+$/;
  const erreurPrenom = document.getElementById("erreurPrenom");

  if (!prenomValeur.match(prenomRegex)) {
    erreurPrenom.innerHTML =
      "Veuillez entrer un prénom valide (lettres uniquement)";
  } else {
    erreurPrenom.innerHTML = "<span style='color:green'> Correct </span>";
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

function loadStatistics() {
  // Charger les statistiques en utilisant AJAX
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
      if (xhr.readyState == 4 && xhr.status == 200) {
          var statistics = JSON.parse(xhr.responseText);
          displayStatistics(statistics);
      }
  };

  xhr.open("GET", "getStatistics.php", true);
  xhr.send();
}

function displayStatistics(statistics) {
  // Insérer les statistiques directement après la table
  var statsContainer = document.querySelector('.stats-container');
  statsContainer.innerHTML = ""; // Effacer le contenu existant
  statsContainer.innerHTML += "<h2>Statistiques Avancées</h2>";
  statsContainer.innerHTML += "<div id='totalReservations'>Nombre total de réservations : " + statistics.totalReservations + "</div>";
  
  var psychiatreStatsHTML = "<div id='psychiatreStats'><h3>Répartition des réservations par psychiatre :</h3><ul>";
  for (var psychiatrist in statistics.reservationsByPsychiatrist) {
      psychiatreStatsHTML += "<li>" + psychiatrist + " : " + statistics.reservationsByPsychiatrist[psychiatrist] + " réservations</li>";
  }
  psychiatreStatsHTML += "</ul></div>";
  statsContainer.innerHTML += psychiatreStatsHTML;
}

// Charger les statistiques au chargement de la page
window.onload = loadStatistics;