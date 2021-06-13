<!doctype html>
<html>

  <head>
    <?php include_once(__DIR__ . "/include/globalhead.php") ?>
    <?php include_once(__DIR__ . "/_modules/TranslationHelper.php") ?>
    <?php $ts->loadJSData() ?>


    <title>Goals</title>
    <link rel="stylesheet" href="css/main.css">
    <script src="js/index.js"></script>
  </head>
  <body><div id="bodyCover" onclick="removeAddScreen()"></div>
    <?php include_once(__DIR__ . "/include/header.php") ?>

    <div id="editBar">
    </div>
    <main>
      <div id="backButton"></div>
      <div id="header"></div>
      <div id="goals"></div>
      <div id="addGoal">
        <form id="addGoalForm" onsubmit="CreateGoal(event)">
          <input id="goalName" type="text" name="name" placeholder="<?= $ts->goalName?>" required/>
          <div id="goalType">
            <label for="type"><?= $ts->goalType?></label>
            <select id="type" name="type">
              <option value="day"><?= $ts->day?></option>
              <option value="week"><?= $ts->week ?></option>
              <option value="month"><?= $ts->month ?></option>
              <option value="year"><?= $ts->year ?></option>
            </select>
          </div>
            <div id="completeBefore">
            <label for="Date"><?= $ts->completeBefore?></label>
            <input type="date" name="end_date" placeholder= <?= $ts->dateFormat ?> required/>
          </div>
          <input type="hidden" id="parentId" name="parent_goal_id" value="">
          <span id="errorReturn"></span>
          <input type="submit" id="savebtn" value="<?= $ts->save?>" />
        </form>
      </div>
      </div>
    </main>
  </body>
</html>