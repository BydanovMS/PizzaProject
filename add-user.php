<?php

$data = json_decode(file_get_contents('data'), true);

$email = $_POST["email"];
$nickname = $_POST["nickname"];

$data[] = ["email" => $email, "nickname" => $nickname]; //push

// $data = json_encode(["email" => $email, "nickname" => $nickname]);

file_put_contents('data', json_encode($data));

echo "Hello $nickname";
