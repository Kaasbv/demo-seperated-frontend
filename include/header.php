<header>
  <nav>
    <ul class="list">
      <li><a href="/"><?= $ts->home ?></a></li>
      <li><a href="/calender.php"><?= $ts->timeDisplay ?></a></li>
      <li><a href="/results.php"><?= $ts->results ?></a></li>
      <li><a href="/followers.php"><?=$ts->followers ?></a></li>
    </ul>
    <div class="languageSelector">
      <select id="languageSelect"   onchange="updateLanguage();">
        <option value="nl">Nederlands</option>
        <option value="en">English</option>
        <option value="ru">Русский</option>
      </select>
    </div>
  </nav>
  <div id="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </div>
  <h1>GOALR.</h1>
  <a href="/profile.php"><img class="profileimage" src="/images/avatar.png" size=200%></a>
</header>