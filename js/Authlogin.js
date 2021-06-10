function postLogin(event) {
	event.preventDefault();
	$.post("/api/user/login.php", $("#login").serialize(), function (data) {
		window.location.replace("main.php");
	})
	.fail(function() { 
		document.getElementById("ErrorReturn").innerHTML = "Verkeerd gebruikersnaam of wachtwoord";
 })
}