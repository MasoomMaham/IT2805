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
