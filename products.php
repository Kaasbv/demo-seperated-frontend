<!doctype html>
<html>
  <head>
    <title>Dit is een titel</title>
    <!-- Laad Jquery in -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js" integrity="sha512-894YE6QWD5I59HgZOGReFYm4dnWc1Qt5NtvYSaNcOP+u1T9qYdvdihz0PPSiiqn/+/3e7Jo4EaG7TubfWGUrMQ==" crossorigin="anonymous"></script>
    <!-- Onze eigen bestanden -->
    <link rel="stylesheet" href="css/main.css">
    <script src="js/products.js"></script>
  </head>
  <body>
    <!-- Laad the header in -->
    <?php include("header.php") ?> 
    <!-- Ul element om bij laden producten in te tonen -->
    <ul id="products">Loading...</ul>
    <!-- Laad the footer in -->
    <?php include("footer.php") ?> 
  </body>
</html>

