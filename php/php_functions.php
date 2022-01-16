<!DOCTYPE html>
<html>
<head></head>
<body>
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


function sayHello($name,$age=15){
    $msg = "hello $name and i am $age year OLD" ;
    return $msg;
}

echo sayHello("ankitkumar",23);
echo "<br>";
echo sayHello("amitkumar");

?>
</body>
</html>
