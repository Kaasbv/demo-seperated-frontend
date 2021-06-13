function postLogin(event) {
	event.preventDefault();
	$.post("/api/user/login.php", $("#login").serialize(), function (data) {
		window.location.replace("/index.php");
		alert("succes");
	})
	.fail(function() { 
		document.getElementById("error").innerHTML = "Verkeerd gebruikersnaam of wachtwoord";
	})
}