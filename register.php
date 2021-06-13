<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <title>Register | GOALR</title>

    <link rel="stylesheet" href="css/register.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
    <script src="js/Authregister.js"></script>
      
  </head>
  <body>
    <div class="container">
      <h1 class="G">G.</h1>  
          <form id="register" onsubmit="postRegister(event)">   
            <input type="text" name="username" placeholder="Username"/>
            <input type="text" name="email" placeholder="E-mailadress"/>  
            <input type="text" name="firstname" placeholder="Firstname"/>  
            <input type="text" name="middlename" placeholder="Middlename"/>  
            <input type="text" name="lastname" placeholder="Lastname"/> 
            <input type="date" name="birthdate" placeholder="Birthdate"/>  

            <input type="password" name="password" placeholder="Password" id="password"/>  
            <input type="password" name="confirm_password" placeholder="Confirm password"/>

            <span id="error"></span>  
            <br/><br/>
            <input id="agree" type="checkbox" required="required"><br/><br/><div id="agreetext">I agree to the <a href="terms_and_conditions">terms and conditions</a></div><input type="submit" id="registerBtn" value="Register" />  
          </form> 
        
          <div class="createOrRegister">
          </div> 
    </div>
  </body>
</html>