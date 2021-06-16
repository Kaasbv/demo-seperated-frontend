<?php include_once(__DIR__ . "/_modules/TranslationHelper.php") ?>
<!doctype html>
<html>

<head>
  <?php include_once(__DIR__ . "/include/globalhead.php") ?>
  <?php $ts->loadJSData() ?>
  <title>Profielpagina</title>
  <link rel="stylesheet" href="css/profile.css">
  <script src="js/profile.js"></script>
</head>

<body>
  <?php include_once(__DIR__ . "/include/header.php") ?>
  <div class="container">
    <aside>
      <input id="hiddenUploadButton" accept="image/png, image/jpeg, image/gif" onchange="uploadImage()" type="file" style="display: none" />
      <img width="70" height="70" class="profileimage" onclick="showFileDialog()" src="/images/avatar.png" alt="Avatar" class="avatar">
    </aside>
    <h1><?= $ts->profile ?></h1>
    <form id="profile" onsubmit="updateProfile(event)">
      <label for="email"><?= $ts->email ?></label>
      <input id="email" type="email" name="email">

      <label for="firstname"><?= $ts->firstname ?></label>
      <input id="firstname" type="text" name="firstname">

      <label for="middlename"><?= $ts->middlename ?></label>
      <input id="middlename" type="middlename" name="middlename">

      <label for="lastname"><?= $ts->lastname ?></label>
      <input id="lastname" type="text" name="lastname">

      <label for="birthdate"><?= $ts->birthdate ?></label>
      <input id="birthdate" type="date" name="birthdate"">
      
      <h4><?= $ts->changePassword ?></h4>
      <label for="newpassword"><?= $ts->newPassword ?></label>
      <input id="newpassword" type="password" name="password">
      <label for="confirmpassword"><?= $ts->repeatPassword ?></label>
      <input id="confirmpassword" type="password">
      <input type="submit" id="saveBtn" name="submit" value="<?= $ts->submit ?>">
      <span class="error"></span>
    </form>
  </div>
</body>

</html>