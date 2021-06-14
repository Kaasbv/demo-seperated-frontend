<?php

class TranslationHelper {
  private static string $translationPaths = __DIR__ . "/../_translations";
  private static string $defaultLanguage = "en";
  private array $dictionary;

  function loadJSData(){
    $json = json_encode($this->dictionary);
    echo "<script>var ts = JSON.parse('{$json}');</script>";
  }

  function __construct()
  {
    //Grab language from cookie otherwise its english
    $language = isset($_COOKIE["language"]) ? $_COOKIE["language"] : self::$defaultLanguage;
    //Grab language file
    $json = file_get_contents(self::$translationPaths . "/{$language}.json");
    if(!$json) throw new Exception("Translation file missing!", 500);
    //Turn into array and set on class
    $decodedJson = json_decode($json, true);
    if($decodedJson === null) throw new Exception("Invalid json in language file {$language}.json!", 500);

    $this->dictionary = $decodedJson;
  }

  function __get($name){
    return $this->dictionary[$name];
  }
}

$ts = new TranslationHelper();