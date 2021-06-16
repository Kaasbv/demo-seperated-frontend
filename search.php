<?php include_once(__DIR__ . "/_modules/TranslationHelper.php") ?>
<!doctype html>
<html>

<head>
  <?php include_once(__DIR__ . "/include/globalhead.php") ?>
  <?php $ts->loadJSData() ?>
  <title>Profielpagina</title>
  <link rel="stylesheet" href="css/search.css">
  <script src="js/search.js"></script>
</head>

<body>
  <?php include_once(__DIR__ . "/include/header.php") ?>
  <main>
    <input id="term" type="text" placeholder="<?= $ts->searchPlaceholder ?>">
    <div id="goals">
      <div class="center"><?= $ts->noGoalsFound ?></div>
    </div>
  </main>
</body>

</html>