function postLogin(event) {
	event.preventDefault();
	$.post("/api/user/login.php", $("#login").serialize(), function (data) {
		window.location.replace("main.php");
	})
	.fail(function() { 
		document.getElementById("error").innerHTML = "Verkeerd gebruikersnaam of wachtwoord";
	})
}