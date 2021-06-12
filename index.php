<!doctype html>
<html>

  <head>
    <?php include_once(__DIR__ . "/include/globalhead.php") ?>

    <title>Goals</title>
    <link rel="stylesheet" href="css/main.css">
    <script src="js/main.js"></script>
  </head>
  <body>
    <?php include_once(__DIR__ . "/include/header.php") ?>
    <div id="editBar">
    </div>
    <main>
      <div id="backButton"></div>
      <div id="header"></div>
      <div id="goals"></div>
      <div class="attributeBox">
        <form id="addGoalForm" onsubmit="postLogin(event)">
          <label for="goalName">Naam goal</label>
          <input type="text" name="goalName" placeholder="Naam van het goal" />
          <label for="type">Goal type</label>
          <select id="type" name="type">
            <option value="day">day</option>
            <option value="week">week</option>
            <option value="month">month</option>
            <option value="year">year</option>
          </select>
          <label for="Date">Complete before : </label>
          <input type="date" name="Date" placeholder="dd-mm-yyyy" />
          <span id="errorReturn"></span>
          <input type="submit" id="savebtn" value="Save" />
        </form>
      </div>
      </div>
    </main>
  </body>
</html>