<!doctype html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    
    <title>Goals</title>

    <link rel="stylesheet" href="css/main.css">
    <script src="js/main.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
      
  </head>

  <body>

  <div id ="editBar">
  </div>
    <main>
      <div id ="backButton"></div>
      <div id ="header"></div>
      <div id ="goals"></div> 


      

      <div class ="attributeBox">
        <form id="login" onsubmit="postLogin(event)">
          <label for="goalName">Naam goal</label>   
          <input type="text" name="goalName" placeholder="Naam van het goal"/> 
          <label for="type">Goal type</label> 
          <select id="type" name="type">
            <option value="day">day</option>
            <option value="week">week</option>
            <option value="month">month</option>
            <option value="year">year</option>
          </select>
          <label for="Date">Complete before : </label> 
          <input type="date" name="Date" placeholder="dd-mm-yyyy"/>  
          <span id="errorReturn"></span>  
          <input type="submit" id="savebtn" value="Save" />  
        </form> 

      </div>
      </div>
    </main>
  </body>
</html>