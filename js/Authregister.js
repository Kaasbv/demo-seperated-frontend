$(document).ready(function(){
	let passwordselector = $("#password");

	//Password strength checker
	$(passwordselector).on("input", function(){
		let enteredvalue = passwordselector.val();

		//Array with often occurring password substrings
		let commonarray = [
			'aa', 'bb', 'cc', 'dd', 'ee', 'ff', 'gg', 
			'hh', 'ii', 'jj', 'kk', 'll', 'mm', 'nn',
			'oo', 'pp', 'qq', 'rr', 'ss', 'tt', 'uu', 
			'vv', 'ww', 'xx', 'yy', 'zz',
			
			'123', '321', '456', '00', '11', '22',
			'33', '44', '55', '66', '77', '88', '99', '00',
			
			'password', 'secret', 'qwerty', 'letmein',
			'admin', 'welcome'];

		//Array with symbols to strengthen password
		let uncommonarray = ['%', '$', '#', '@', '!', '*', '&', '^', '(', ')', '_', ' '];

		//Remove any occurances of commonarray in password string
		for(let i = 0; i < commonarray.length; i++){
			enteredvalue = enteredvalue.replaceAll(commonarray[i], "");
		}

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
		displayedstrength =  (strength / 125 * 100).toFixed(0);

		$("#strength").html("<span>Password strength: "+displayedstrength+"/100</span>")

		console.log(displayedstrength);
		passwordselector.css("background", "hsla("+strength+", 100%, 50%, 10%)");	
		
		//Password confirm field checker
		let enteredconfirmvalue = confirmpasswordselector.val();

		if(enteredvalue === enteredconfirmvalue){
			confirmpasswordselector.css("background", "hsla(125, 100%, 50%, 10%)");
		}
		else{
			confirmpasswordselector.css("background", "hsla(0, 100%, 50%, 10%");
		}
	});

	//Password confirm field checker
	let confirmpasswordselector = $("#confirm_password");

	$(confirmpasswordselector).on("input", function(){
		let enteredvalue = passwordselector.val();
		let enteredconfirmvalue = confirmpasswordselector.val();

		if(enteredvalue === enteredconfirmvalue){
			confirmpasswordselector.css("background", "hsla(125, 100%, 50%, 10%)");
		}
		else{
			confirmpasswordselector.css("background", "hsla(0, 100%, 50%, 10%");
		}
	});

});

//Post call to register
function postRegister(event) {
	event.preventDefault();
	$.post("/api/user/register.php", $("#register").serialize(), function (data) {
		window.location.replace("/");
	}).fail(function(response) {
		alert('Error: ' + response.msg);
	});
}
