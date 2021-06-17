<?php include_once(__DIR__ . "/_modules/TranslationHelper.php") ?>
<!doctype html>
<html>

<head>
  <?php include_once(__DIR__ . "/include/globalhead.php") ?>
  <?php $ts->loadJSData() ?>

  <title>Goals</title>
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/edit.css">
  <script src="js/index.js"></script>
  <script defer src="js/edit.js"></script>
</head>

<body>
  <div class="bodyCover" onclick="removeUnderModal()"></div>
  <?php include_once(__DIR__ . "/include/header.php") ?>

  <div id="editBar">
  </div>
  <main>
    <div id="backButton"></div>
    <div id="header"></div>
    <div id="goals"></div>
    <div class="undermodal" id="addGoal">
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
            <input type="date" name="end_date" required/>
          </div>
          <input type="hidden" id="parentId" name="parent_goal_id" value="">
          <span id="errorReturn"></span>
          <input type="submit" id="savebtn" value="<?= $ts->save?>" />
        </form>
      </div>
    </div>
  </main>
  <div class="container">

    <div id="cancel">
      <span onclick="toggleEdit()"><?= $ts->cancel?></span>
    </div>

    <div class="goal-buttons">
      <button data-modal-target="#modal" class="goal-buttons-edit"><img src="images/plus.png"></button>
      <div class="modal" id="modal">
        <div class="modal-header">
          <div class="title"><?= $ts->addAttribute?></div>
          <button data-close-button class="close-button">&times;</button>
        </div>
        <div class="modal-body">
          <form id="attribute" onsubmit="postAttribute(event)">
            <input type="text" name="id_goal"><br>
            <label for="name"><?= $ts->name_?></label><br>
            <input type="text" name="name"><br>
            <input type="submit" value="Submit">
          </form>
        </div>
      </div>
      <div id="overlay"></div>
      <button class="goal-buttons-edit" onclick="saveContent(event)"><img src="images/save.png"></button>
    </div>
    <br>

    <div id="main">
      <h2>Properties</h2>
      <form id="goaleditform" onsubmit="saveContent(event)">
        <label>Name</label>
        <input type="text" name="name" placeholder="<?= $ts->goalName?>" required />
        <label>End date</label>
        <input type="date" name="end_date" required />
        <input type="hidden" id="goalEditId" name="ID_goal" value="">
      </form>
      <h2><?= $ts->attributes?></h2>
      <div id="attributes"></div>
    </div>

    <div>
      <button id="complete-goal" onclick="completeGoal()"><?= $ts->completeMainGoal?></button>
    </div>
  </div>
</body>
</html>