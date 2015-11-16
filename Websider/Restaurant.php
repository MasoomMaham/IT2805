<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="../css/restaurant.css">
		<title>Restauranter</title>
	</head>
	<body>
		<header>
			<?php include 'header.php'; ?>
		</header>
		<div class="backgroundImage">
			<div id="knappene">
				<button id="sortNa" type="button">Sortér etter name</button>
				<button id="sortPr" type="button">Sortér etter pris</button>
				<button id="sortCa" type="button">Sortér etter kategori</button>
			</div>
	    <div id="rests"></div>
	    <script src="../prosedyrer/sortRestaurants.js"> </script>
			<script>
			initRestaurants();
			showRestaurants();
			</script>
		</div>
		<footer>
			<?php include 'footer.php';  ?>
		</footer>
	</body>
</html>
