<!DOCTYPE html>
<html>
	<head>
		<meta charset="UTF-8">
		<link rel="stylesheet" type="text/css" href="../css/kontakt_oss.css">
		<title>Kontakt oss</title>
	</head>
	<body>
		<header>
			<?php include 'header.php'; ?>
		</header>

		<div class="backgroundImage">
			<div class="content">
				<script type="text/javascript">
				function validateEmail(email) {
					var re = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
					return re.test(email);
				}
				function validateForm() {
						var e = document.forms["contactUs"]["mail"].value;
						if (!validateEmail(e)) {
								alert("Ugyldig e-postadresse!");
								return false;
						}
						var t = document.forms["contactUs"]["comments"].value;
						if(t==null || t=="") {
								alert("Du må skrive noe!");
								return false;
						}
				}
				</script>
				<h2> Kontakt oss </h2>
				<form name="contactUs" onsubmit="return validateForm()" method="post">
				<div id="email">
					<label><b>E-post:</b><br>
						<input type="email" name="mail" size="55" placeholder="Påkrevd" required>
					</label><br>
				</div>
				<div id="comment">
					<label><b>Noe du lurer på? - Skriv til oss under: </b><br>
						<textarea name="comments" rows="15" cols="60" placeholder="Påkrevd" required></textarea>
					</label>
				</div>
				<div id="submit">
				<label>
					<input type="submit" name="submit" value="Send">
				</label>
			</div>
				</form>
			</div>
		</div>

		<footer>
			<?php include 'footer.php';  ?>
		</footer>
	</body>
</html>
