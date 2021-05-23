function postLogin(event) {
	event.preventDefault();
	$.post("/api/user/login.php", $("#login").serialize(), function (data) {
		window.location.replace("HOMEPAGINAKOMTHIER");
	})
	.fail(function() { 
		document.getElementById("ErrorReturn").innerHTML = "Verkeerd gebruikersnaam of wachtwoord";
 })
}