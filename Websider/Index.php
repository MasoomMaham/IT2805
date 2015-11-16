
<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="../css/index.css">
		<title>Visit Bergen</title>
	</head>
	<body onload="preload()">
		<header>
			<link rel="stylesheet" type="text/css" property="stylesheet" href="../css/header.css">
			<?php include 'header.php'; ?>
		</header>
		<!--div class="silverFrame_dropDown"></div-->
		<div class="backgroundImage" id="background">
			<img src="../Images/Image_arrow.png" id="leftArrow" alt="Arrow pointing to the left side">
			<img src="../Images/Image_arrowRight.png" id="rightArrow" alt="Arrow pointing to the right side">
			<div class="content">
				<h2> Velkommen! </h2>
				<p>På denne nettsiden kan du finne mer 
				eller mindre alt som er verdt å vite eller besøke i Bergen.
				Håper du får en trivelig reise og en opplevelse for livet.</p>
			</div>
		</div>
		<!--div class="silverFrame"></div-->
		<footer>
			<?php include 'footer.php'; ?>
			</footer>
		<script type="text/javascript">
			var imageArray = new Array();

			var switchMilliseconds = 4000;


			var divID = 'background';

			imageArray = ['../Images/Bergen_by_night.jpg','../Images/Bergen.jpg','../Images/DSC_1122-bergen-norway.jpg'];

			function preload(){
				for(var i = 0; i < imageArray.length; i++){
					var x = new Image();
					x.src= imageArray[i];
				}
			}
			
			function publishPicture(i) {
				document.getElementById(divID).style.background = 'url("'+imageArray[i]+'")';
				document.getElementById(divID).style.backgroundSize = "100%";
				document.getElementById(divID).style.backgroundRepeat = "no-repeat";
				i++;
				if( i > (imageArray.length - 1) ) { i = 0; }
				setTimeout('publishPicture('+i+')',switchMilliseconds);
			}
			publishPicture(0);

		</script>
	</body>
</html>