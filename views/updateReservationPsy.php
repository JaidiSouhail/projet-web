<?php
include '../controller/ReservationPsyC.php';
include '../model/PsychiatreReservation.php';

$reservationC = new ReservationPsyC();

if (
    isset($_POST["nom"]) &&
    isset($_POST["prenom"]) &&
    isset($_POST["email"]) &&
    isset($_POST["tel"]) &&
    isset($_POST["date_reservationPsy"])
) {
    if (
        !empty($_POST['nom']) &&
        !empty($_POST["prenom"]) &&
        !empty($_POST["email"]) &&
        !empty($_POST["tel"]) &&
        !empty($_POST["date_reservationPsy"])
    ) {
        $reservation = new PsychiatreReservation(
            null,  // Leave the database to manage the ID automatically
            $_POST['nom'],
            $_POST['prenom'],
            $_POST['email'],
            $_POST['tel'],
            $_POST['date_reservationPsy']
        );
        $idReservation = isset($_GET['idReservation']) ? $_GET['idReservation'] : null;
        $reservationC->updateReservation($reservation, $idReservation);
        header('Location: listReservationsPsy.php');
        exit();
    }
}

// The rest of the HTML code for the update form
?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Modifier la réservation pour Psychiatre</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
<div class="container">
    <button><a href="listReservationsPsy.php">Retour à la liste</a></button>
    <hr>

    <?php
    if (isset($_GET['idReservation'])) {
        $oldReservation = $reservationC->showReservation($_GET['idReservation']);
    ?>

        <form action="" method="POST">
            <table>
                <tr>
                    <td><label for="nom">Nom :</label></td>
                    <td>
                        <input type="text" id="nom" name="nom" required pattern="[A-Za-z]+" value="<?php echo $oldReservation['nom'] ?>" />
                       <span id="erreurNom"></span>
                    </td>
                </tr>
                <tr>
                    <td><label for="prenom">Prénom :</label></td>
                    <td>
                        <input type="text" id="prenom" name="prenom" required pattern="[A-Za-z]+" value="<?php echo $oldReservation['prenom'] ?>" />
                        <span id="erreurNom"></span>
                    </td>
                </tr>
                <tr>
                    <td><label for="email">Email :</label></td>
                    <td>
                        <input type="text" id="email" name="email" required value="<?php echo $oldReservation['email'] ?>" />
                        <span id="erreurEmail"></span>
                    </td>
                </tr>
                <tr>
                    <td><label for="tel">Téléphone :</label></td>
                    <td>
                        <input type="text" id="tel" name="tel" required value="<?php echo $oldReservation['tel'] ?>" />
                        <span id="erreurTelephone"></span>
                    </td>
                </tr>
                <tr>
                    <td><label for="date_reservationPsy">Date Reservation :</label></td>
                    <td>
                        <input type="date" id="date_reservationPsy" name="date_reservationPsy" required value="<?php echo $oldReservation['date_reservationPsy'] ?>" />
                        <span id="erreurDateReservationPsy"></span>
                    </td>
                </tr>

                <td>
                    <input type="submit" value="Enregistrer">
                </td>
                <td>
                    <input type="reset" value="Réinitialiser">
                </td>
            </table>

        </form>
    <?php
    }
    ?>
    </div>
</body>

</html>
