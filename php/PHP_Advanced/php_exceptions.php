<!DOCTYPE html>
<html>
<head></head>
<body>
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);
function divide($dividend, $divisor){
    if($divisor == 0){
        throw new Exception("Devide by 0");
    }
    return ($dividend/$divisor);
}

try{
    echo divide(5,0);
}catch(Exception $e){
    echo "<pre>";
    echo $e;
    echo "</pre>";
}

?>
</body>
</html>
