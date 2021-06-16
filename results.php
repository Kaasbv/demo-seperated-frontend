<?php include_once(__DIR__ . "/_modules/TranslationHelper.php") ?>
<!doctype html>
<html>
  <head>    
    <title>Results</title>
    <?php include_once(__DIR__ . "/include/globalhead.php") ?>
    <link rel="stylesheet" href="css/results.css">
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/chartjs-adapter-date-fns@next/dist/chartjs-adapter-date-fns.bundle.min.js"></script>
    <script src="js/results.js"></script>
    <body>
    <?php include_once(__DIR__ . "/include/header.php") ?>
    <main>
      <div id="tabs">
        <span id="totalButton">Total</span>
        <span id="weekButton" class="active">Week</span>
      </div>
      <div id="controls">
        <div id="datecontrols">
          <i class="backicon"></i>
          <span>W1</span>
          <i class="nexticon"></i>
        </div>
      </div>

      <canvas id="chart" width="100" height="100"></canvas>
      <table id="goalTable">
        <thead>
          <tr>
            <td>Goalnaam</td>
            <td>Points</td>
          <tr>
        </thead>
        <tbody>
        </tbody>
      </table>
    </main>
  </body>
</html>