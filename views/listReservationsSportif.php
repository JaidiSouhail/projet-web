<?php
include "../controller/ReservationCoachC.php";

$c = new ReservationCoachC();
$tab = $c->listReservations();

$newReservation = null;

// Récupérer l'ID de la dernière réservation ajoutée
$lastAddedReservationId = isset($_GET['lastAddedReservationId']) ? $_GET['lastAddedReservationId'] : null;

// Si l'ID de la dernière réservation ajoutée est spécifié, récupérer les informations de la réservation
if ($lastAddedReservationId) {
    $newReservation = $c->showReservation($lastAddedReservationId);
}
?>
    <center>
        <h1>Liste des réservations pour Coach Sportif</h1>
        <link rel="stylesheet" href="styles.css">
        <h2>
            <a href="addReservationCoach.php">Ajouter une réservation</a>
        </h2>
    </center>
    <div class="container">
        <table border="1" align="center" width="70%">
            <tr>
                <th>ID Réservation</th>
                <th>Nom</th>
                <th>Prénom</th>
                <th>Email</th>
                <th>Téléphone</th>
                <th>Date Séance Sportive</th>
                <th>Modifier</th>
                <th>Supprimer</th>
            </tr>

            <?php
            foreach ($tab as $reservation) {
            ?>
                <tr>
                    <td><?= $reservation['id_reservation_coach']; ?></td>
                    <td><?= $reservation['nom']; ?></td>
                    <td><?= $reservation['prenom']; ?></td>
                    <td><?= $reservation['email']; ?></td>
                    <td><?= $reservation['tel']; ?></td>
                    <td><?= $reservation['date_seance_sportive']; ?></td>
                    <td>
                        <a href="updateReservationSportif.php?idReservation=<?php echo $reservation['id_reservation_coach']; ?>">Modifier</a>
                    </td>
                    <td align="center">
                        <a href="deleteReservationSportif.php?idReservation=<?php echo $reservation['id_reservation_coach']; ?>">Supprimer</a>
                    </td>
                </tr>
            <?php
            }

            // Afficher la réservation créée immédiatement après le formulaire
            if ($newReservation) {
            ?>
                <tr>
                    <td><?= $newReservation['id_reservation_coach']; ?></td>
                    <td><?= $newReservation['nom']; ?></td>
                    <td><?= $newReservation['prenom']; ?></td>
                    <td><?= $newReservation['email']; ?></td>
                    <td><?= $newReservation['tel']; ?></td>
                    <td><?= $newReservation['date_seance_sportive']; ?></td>
                    <td>
                        <a href="updateReservationSportif.php?idReservation=<?php echo $newReservation['id_reservation_coach']; ?>">Modifier</a>
                    </td>
                    <td align="center">
                        <a href="deleteReservationSportif.php?idReservation=<?php echo $newReservation['id_reservation_coach']; ?>">Supprimer</a>
                    </td>
                </tr>
            <?php
            }
            ?>
        </table>
    </div>