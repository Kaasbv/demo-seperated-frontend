<!doctype html>
<html>
  <head>    
    <title>Calender</title>
    <?php include_once(__DIR__ . "/include/globalhead.php") ?>
    <link rel="stylesheet" href="css/calender.css">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.10.5/dayjs.min.js" integrity="sha512-n6mJ6AqoohFfbgx3x7N162B/zRNs5x8uvsStlHC+LCvqwKW7oiucE07Ehatg62ybx6Vo1ctaZwm/4sSRUTSIQA==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/dayjs/1.10.5/plugin/weekOfYear.min.js" integrity="sha512-r6PdM7UHea0mdHsME1+5kfQdZLoxsFFOqFUXJ/9mf6lIhVtF2NGivqK7pS1IW9FRyRv/OS8U1NSRJ68qZv7Sug==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
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
          <span data-type="day">Day</span>
          <span data-type="week">Week</span>
          <span data-type="month">Month</span>
          <span data-type="year">Year</span>
        </div>
      </div>
      <div id="goals"></div>
    </main>
  </body>
</html>