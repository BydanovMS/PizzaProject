<?php
    $pdo = new PDO('mysql:host=localhost;dbname=c9', 'root', '');
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    
    return $pdo;