<!-- php include -->
<html>

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Edit</title>
  <link rel="stylesheet" href="css/edit.css">
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
  <script defer src="js/edit.js"></script>
</head>

<body>
  <main>
    <div class="container">

      <div id="cancel">
        <h1 href="">Cancel</h1>
      </div>

      <div class="goal-buttons">
        <button data-modal-target="#modal" class="goal-buttons-edit"><img src="images/plus.png"></button>
        <div class="modal" id="modal">
          <div class="modal-header">
            <div class="title">Add attribute</div>
            <button data-close-button class="close-button">&times;</button>
          </div>
          <div class="modal-body">
            <form id="attribute" onsubmit="postAttribute(event)">
              <input type="text" name="id_goal"><br>
              <label for="name">Name:</label><br>
              <input type="text" name="name"><br>
              <input type="submit" value="Submit">
            </form>
          </div>
        </div>
        <div id="overlay"></div>
        <button class="goal-buttons-edit" onclick="saveContent()"><img src="images/save.png"></button>
      </div>
      <br>

      <div id="main">
        <h1>Goal attributes</h1>
        <p>Description</p>
        <form>
          <textarea name="description"></textarea>
        </form>
        <div id="attributes"></div>
      </div>

      <div>
        <button id="complete-goal" onclick="completeGoal()">Complete main goal</button>
      </div>
    </div>
  </main>
</body>

</html>