<?php

include('client.php');
include('Database.php');

define('CLIENTS', __DIR__ . '/clients.csv');
define('COOKIE_LIFETIME', time()+60*60*24*30);

$errors = validate($_POST);

$pdo = new Database;
$pdo->conntect();

if($errors){
    echo json_encode($errors);
} else{
    $client = new Client($_POST);

    $SESSION['name']= $_POST['name'];
    $SESSION['phone']=$_POST['phone'];

    setcookie('name', $_POST['name'], COOKIE_LIFETIME);
    setcookie('phone', $_POST['phone'], COOKIE_LIFETIME);
}