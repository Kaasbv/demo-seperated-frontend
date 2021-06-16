<?php include_once(__DIR__ . "/_modules/TranslationHelper.php") ?>
<!doctype html>
<html>

<head>
  <?php include_once(__DIR__ . "/include/globalhead.php") ?>
  <?php $ts->loadJSData() ?>

  <title>Followers</title>
  <link rel="stylesheet" href="css/card.css">
  <script src="js/followers.js"></script>
</head>

<body>
  <?php include_once(__DIR__ . "/include/header.php") ?>
  <div class="bodyCover" onclick="removeUnderModal()"></div>
  <main>
    <div id="addFriendBar">
      <span class="addFriend" onclick="showUnderModal();">Add Friend</span>
    </div>
    <h1 class="header">Followers.</h1>
    <div id="friends" class="row">
      Loading...
    </div>
    <div class="undermodal" id="addFriend">
      <input id="friendName" type="text" name="name" placeholder="<?= $ts->friendName?>" required/>
      <div id="userresults"></div>
    </div>
  </main>
</body>

</html>