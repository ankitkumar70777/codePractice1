<!DOCTYPE html>
<html>
<head></head>
<body>
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$x =  fopen("goodmorningankit.txt","r") or die("unable to open file");
$a = fread($x,filesize("goodmorningankit.txt"));
$y = "/morning/i";
$result = preg_match($y , $a);
var_dump($result);
fclose($a);
?>
</body>
</html>
