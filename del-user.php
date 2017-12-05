<?php
echo "Пользователь $email удален!";
$pdo = include("DB.php");

$email = htmlspecialchars($_POST["email"]);
$nickname = htmlspecialchars($_POST["nickname"]);

//$sql = "insert into users values(?, ?)";
$sql = "delete users where email = ?";
echo $sql;
var_dump($sql);

$statement = $pdo->prepare($sql);
// $statement->execute([$email, $nickname]);

echo "Пользователь $email удален!";