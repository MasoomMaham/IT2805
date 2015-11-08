<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="../css/kart.css">
		<title>Kart over Bergen</title>
		<script type="text/javascript" src="https://maps.googleapis.com/maps/api/js"></script>
		<script type="text/javascript" src="maps.js"></script>
		<script type="text/javascript">
      	function initialize() {
        	var mapCanvas = document.getElementById('kart');
        	var mapOptions = {
          	center: new google.maps.LatLng( 60.3925, 5.323333),
          	zoom: 15,
          	mapTypeId: google.maps.MapTypeId.ROADMAP
        	}
        var map = new google.maps.Map(mapCanvas, mapOptions)
      	}
      	google.maps.event.addDomListener(window, 'load', initialize);
		</script>
	</head>
	<body >
		<header>
			<?php include 'header.php'; ?>
		</header>

		<div class="backgroundImage">
			<div class="content">
				<h2> Kart </h2>
				<div id="kart">
					
				</div>
			</div>
		</div>

		<footer>
			<?php include 'footer.php';  ?>
		</footer>
	</body>
</html>