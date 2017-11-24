<?php

$pdo = include("DB.php");

$email = htmlspecialchars($_POST["email"]);
$nickname = htmlspecialchars($_POST["nickname"]);

$sql = "insert into users values(?, ?)";

var_dump($sql);

$statement = $pdo->prepare($sql);
$statement->execute([$email, $nickname]);

echo "Hello $nickname";