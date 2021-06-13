<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Profielpagina</title>
    <link rel="stylesheet" href="css/profile.css">
    <style>
    @import url('https://fonts.googleapis.com/css2?family=Changa+One&display=swap');
    </style>
  </head>
  <body>
    <div class="container">
    <aside><img src="https://cioday.com/wp-content/uploads/2018/11/avatar-placeholder.png" alt="Avatar" class="avatar"></aside>
    <h1 class="Profiel">Profiel</h1>
        <form id="profile">
            <label for="username">Gebruikernaam</label>
            <br>
            <input type="text" name="username" placeholder="username" disabled>
            <br>
            <label for="birthdate">Geboortedatum</label>
            <br>
            <input type="date" name="birthdate" placeholder="01/01/1970" disabled>
            <br>
            <label for="email">E-mailadres</label>
            <br>
            <input type="email" name="email" placeholder="email@adres.com" disabled>
        </form>
        <br>
    <h4 class="Password">Wachtwoord wijzigen</h4>
        <form id="password">
            <label for="currentpassword">Huidige wachtwoord</label>
            <br>
            <input type="password" name="currentpassword">
            <label for="newpassword">Nieuwe wachtwoord</label>
            <br>
            <input type="password" name="newpassword">
            <label for="confirmpassword">Nieuwe wachtwoord herhalen</label>
            <br>
            <input type="password" name="confirmpassword">
            <input type="submit" id="saveBtn" name="submit" value="Opslaan">
        </form> 
    </div>
  </body>
</html>