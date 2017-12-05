<?php
// $pdo = new PDO('mysql:host=localhost;dbname=c9', 'root', '');
// $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
$pdo = include "DB.php";
$data = $pdo->query("select * from users")->fetchAll(PDO::FETCH_ASSOC);

var_dump($data);
// $data = json_decode(file_get_contents('data'), true);
?>

<!DOCTYPE html>
<!-- HTML5 Hello world by kirupa - http://www.kirupa.com/html5/getting_your_feet_wet_html5_pg1.htm -->
<html lang="en-us">

      <script src="https://code.jquery.com/jquery-3.1.1.min.js" integrity="sha256-hVVnYaiADRTO2PzUGmuLJr8BLUSjGIZsDYGmIJLv2b8=" crossorigin="anonymous"></script>
      <script src="main.js"></script>
        <script src="js/bootstrap.js"></script>
<head>
<meta charset="utf-8">

<!--старое оформление-->
  <title>Пиццерия</title>
  <link rel="stylesheet" href="style.css">
<!--старое оформление-->

  <title>Bootstrap</title>
  <link href="css/bootstrap.css" rel="stylesheet">
</head>

<body>
    <h1>Пиццерия</h1> 
    <nav id="navigation">
        <a class="nav-link" href="main.php">Главная</a>
        <a class="nav-link" href="menu.html">Ассортимент</a>
    </nav>
    <img src="http://my-ideya.ru/wp-content/uploads/2014/05/photo_original_2544.jpg"></img>

<table border="1">
  <thead>
    <tr>
      <td>Адрес</td>
      <td>Телефон доставки</td>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://www.google.ru/maps/vt/data=WOhSilE_hpZBLAqyANfC4odNO3QIHeRhENb4vrQ8Xx11BGZHEDLdey_KYjc1adb-oZXlmM4UupqzktAu9gDavE0qdPcoFmgkMinDD84F7ZM_15uUCbNRWGeRhjhcMZMAiB_lTOE">ул. Республики, д. 1</a></td>
      <td>35-46-79</td>
    </tr>
    <tr>
      <td><a href="https://www.google.ru/maps/vt/data=dM63ExRE4-j8Osi4tc3xsqp3Iu9P_ajnssr7Q-T-3tLMEoFDMLSXRU6e57X3IUT_or5stG3Dq5lxHgTof7ieLkLCzSZdoPeYBah72oCcPEG04JAI210iuqTg39t7J2i9nuzab5Gja4mWk3Q0ufkU60BEg-uC32lHDoKe7jaqm4dP7iFyDOLuq5TU-aETNyCeQfIOy7gd4E81cg">ул. Мельникайте, д.135</a></td>
      <td>35-77-77</td>
    </tr>
  </tbody>
</table>

	<ol>
		<?php foreach ($data as $user): ?>
		<li><a href="mailto:<?php echo $user["email"] ?>">
				<?php echo htmlspecialchars($user["nickname"]); ?>
			</a>
		</li>
		<?php endforeach; ?>
	</ol>

	<form>
		<div>
			<label>введите email</label>
			<input id='email' type="email"></input>
		</div>
		
		<div>
			<label>введите никнейм</label>
			<input id="nickname" type="text"></input>
		</div>
		
		<div>
			<button id='user-add-btn' class="btn btn-success">создать</button>
		  <button id='user-del-btn' class="btn btn-warning">удалить</button>
		</div>
	</form>

</body>
</html>
