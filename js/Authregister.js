$(document).ready(function(){
	let passwordselector = $("#password");
	$(passwordselector).on("input", function(){
		let enteredvalue = passwordselector.val();

		//Array with often occurring password substrings
		let commonarray = ['aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', '123', '321', '456', '00', '11', '22', '33', '44', '55', '66', '77', '88', '99', 'password', 'secret', 'qwerty', 'letmein', 'admin', 'welcome'];
		//Array with symbols to strengthen password
		let uncommonarray = ['%', '$', '#', '@', '!', '*', '&', '^', '(', ')', '_'];

		//Remove any occurances of commonarray in password string
		for(let i = 0; i < commonarray.length; i++){
			enteredvalue = enteredvalue.replaceAll(commonarray[i], "");
		}

		console.log(enteredvalue);

		//Get length and set strength of the password string
		let passwordlength = enteredvalue.length;
		let strength = passwordlength * 4;

		for(let i = 0; i < uncommonarray.length; i++){
			let enteredvaluenew = enteredvalue.replaceAll(uncommonarray[i], "");
			if(enteredvalue.length - enteredvaluenew.length === 1){
				strength = strength * 1.2;
			}
		}

		//Strength can't be higher than 125 or lower than 0 (due to green hue at 125)
		if(strength > 125){
			strength = 125;
		}
		else if(strength < 0 || passwordlength < 5){
			strength = 0;
		}
			
		//Calculate new strength to display on screen (0 to 100)
		displayedstrength =  strength / 125 * 100;

		console.log(displayedstrength);
		passwordselector.css("background", "hsla("+strength+", 100%, 50%, 10%)");		
	})
});

function postRegister(event) {
	event.preventDefault();
	$.post("/api/user/register.php", $("#register").serialize(), function (data) {
		window.location.replace("/");
	})
	.fail(function() { 
		document.getElementById("error").innerHTML = "Er ging iets verkeerd, probeer het opnieuw";
	})
}
