<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <title>Login GOALR</title>

    <link rel="stylesheet" href="css/login.css">
    <script src="js/Authlogin.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
      
  </head>
  <body>
    <div class="container">
      <h1 class="G">G.</h1>  
          <form id="login"onsubmit="postLogin(event)">  
            <p>  
              <input type="text" id="user" name="email" placeholder="E-mailadress"/>  
            </p>  
            <p>  
              <input type="password" id="password" name="password" placeholder="Password"/>  
            </p>
            <span id="errorReturn"></span>  
            <p>     
              <input type="submit" id="loginBtn" value="Login" />  
            </p>
          </form> 
          <div class="createOrRegister">
            <a href="url">Create an account</a>
            <br>
            <a id="forgotPassword" href="url">Forgot Password? </a>	
          </div> 
    </div>
  </body>
</html>