<!DOCTYPE html>
<html>
<head></head>
<body>
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
error_log("ohh shit! i cant find file",3,errorlog.txt);

$x = getcwd();
echo $x;
mkdir("omages");
chdir("omags");
echo getcwd();
?>
</body>
</html>
