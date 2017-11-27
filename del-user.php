<?php
echo "Пользователь $email удален2!";
$pdo = include("DB.php");

$email = htmlspecialchars($_POST["email"]);
$nickname = htmlspecialchars($_POST["nickname"]);

//$sql = "insert into users values(?, ?)";
 $sql = "delete users where $email in (?)";

var_dump($sql);

$statement = $pdo->prepare($sql);
$statement->execute([$email, $nickname]);

echo "Пользователь $email удален!";