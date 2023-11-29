<?php
include "../controller/ReservationPsyC.php";

$c = new ReservationPsyC();
$tab = $c->listReservations();

$newReservation = null;

// Récupérer l'ID du dernier psychiatre ajouté
$lastAddedReservationId = isset($_GET['lastAddedReservationId']) ? $_GET['lastAddedReservationId'] : null;

// Si l'ID du dernier psychiatre ajouté est spécifié, récupérer les informations du psychiatre
if ($lastAddedReservationId) {
    $newReservation = $c->showReservation($lastAddedReservationId);
}
?>
<div class="topnav">
  <a class="active" href="#home">Home</a>
  <a href="#about">About</a>
  <a href="addReservationPsy.php">Contact</a>
  <input type="text" id="searchInput" placeholder="Rechercher.." oninput="searchFunction()">
</div>
<center>
    <h1>Liste des réservations pour Psychiatre</h1>
    <link rel="stylesheet" href="styles.css">
    <h2>
        <a href="addReservationPsy.php">Ajouter une réservation</a>
    </h2>
    <script src="ReservationCoach.js" defer></script>
    <script src="reservation.js" defer></script>
</center>
<div class="container">
<table border="1" align="center" width="70%">
    <tr>
        <th>ID Réservation</th>
        <th>Nom</th>
        <th>Prénom</th>
        <th>Email</th>
        <th>Téléphone</th>
        <th>Date Réservation</th>
        <th>Modifier</th>
        <th>Supprimer</th>
    </tr>

    <?php
    foreach ($tab as $reservation) {
    ?>
        <tr>
            <td><?= $reservation['idReservation']; ?></td>
            <td><?= $reservation['nom']; ?></td>
            <td><?= $reservation['prenom']; ?></td>
            <td><?= $reservation['email']; ?></td>
            <td><?= $reservation['tel']; ?></td>
            <td><?= $reservation['date_reservationPsy']; ?></td>
            <td>
                <a href="updateReservationPsy.php?idReservation=<?php echo $reservation['idReservation']; ?>">Modifier</a>
            </td>
            <td align="center">
                <a href="deleteReservationPsy.php?idReservation=<?php echo $reservation['idReservation']; ?>">Supprimer</a>
            </td>
        </tr>
    <?php
    }

    // Afficher le psychiatre créé immédiatement après le formulaire
    if ($newReservation) {
    ?>
        <tr>
            <td><?= $newReservation['idReservation']; ?></td>
            <td><?= $newReservation['nom']; ?></td>
            <td><?= $newReservation['prenom']; ?></td>
            <td><?= $newReservation['email']; ?></td>
            <td><?= $newReservation['tel']; ?></td>
            <td><?= $newReservation['date_reservationPsy']; ?></td>
            <td>
                <a href="updateReservationPsy.php?idReservation=<?php echo $newReservation['idReservation']; ?>">Modifier</a>
            </td>
            <td align="center">
                <a href="deleteReservationPsy.php?idReservation=<?php echo $newReservation['idReservation']; ?>">Supprimer</a>
            </td>
        </tr>
    <?php
    }
    ?>
</table>
</div>