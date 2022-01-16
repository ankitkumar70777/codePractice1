<!DOCTYPE html>
<html>
<head></head>
<body>
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$myFile = fopen("uploads/letter.txt","w") or die("unable to open file");

$fname = "ankitkumar\n";
fwrite($myFile, $fname);
$lname = "ravidas";
fwrite($myFile,$lname);
fclose($myFile); 
?>
</body>
</html>
