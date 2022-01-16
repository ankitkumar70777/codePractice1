<!DOCTYPE html>
<html>
<head></head>
<body>
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$x = 10;
do{
    $x++;
    echo $x;
}while($x <  15);
?>
</body>
</html>
