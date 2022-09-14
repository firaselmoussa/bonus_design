<?php
include("connection.php");

if(isset($_POST["full_name"]) && isset($_POST["email"]) && isset($_POST["phone_number"]) && isset($_POST["message"])){
    if(filter_var($_POST["email"], FILTER_VALIDATE_EMAIL)){

        
$full_name = $_POST["full_name"];
$email = $_POST["email"];
$phone_number = $_POST["phone_number"];
$message = $_POST["message"];


$query = $mysqli->prepare("INSERT INTO message_info(full_name, email, phone_number, message) VALUE (?, ?, ?, ?)");
$query->bind_param("ssss", $full_name, $email, $phone_number, $message);
$query->execute();

$response = [];
$response["success"] = true;

echo json_encode($response);


    };
};

?>