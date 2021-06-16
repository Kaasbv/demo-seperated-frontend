<?php include_once(__DIR__ . "/_modules/TranslationHelper.php") ?>
<!doctype html>
<html>
  <head>    
    <title>Calender</title>
    <?php include_once(__DIR__ . "/include/globalhead.php") ?>
    <link rel="stylesheet" href="css/calender.css">
    <script src="js/calender.js"></script>
  <body>
    <?php include_once(__DIR__ . "/include/header.php") ?>
    <main>
      <div id="controls">
        <div id="datecontrols">
          <i class="backicon"></i>
          <span>W1</span>
          <i class="nexticon"></i>
        </div>
        <div class="sideicon">
          <i class="selecticon"></i>
        </div>
        <div class="options">
          <span data-type="day"><?= $ts->day ?></span>
          <span data-type="week"><?= $ts->week ?></span>
          <span data-type="month"><?= $ts->month ?></span>
          <span data-type="year"><?= $ts->year ?></span>
        </div>
      </div>
      <div id="goals"></div>
    </main>
  </body>
</html>