<!DOCTYPE html>
<html>
<head></head>
<body>
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$x = 5;

// function display(){
//     global $x;
//     return ($x + $x);
// }

// echo display();

//local scope

// function displayName(){
//     $y = 10;
//     echo $y;
// }

// displayName();

echo "<pre>";
var_dump($x);

$a = false;
$b = true;

if ($a==false){
    $a = "false";
}

echo "<br>";

if ($b==true){
    $b = "true";
}


print("a ::: ".$a);
echo "<br>";
print("b ::: ".$b);

echo "<br>";

//php array 
$cars = array("Volvo","BMW","Toyota");
print_r($cars);

echo "<br>";
echo ("null ::: ".null);

echo "<br>";
echo "<br>";

$c = 12.555555;
var_dump($c);

define("wish","good Morning",true);
echo wish;

echo "<br>";echo "<br>";

function wishDisplay(){
    echo wish;
}

wishDisplay();
echo "<br>";echo "<br>";

$d = 10;
echo $d;
echo "<br>";
++$d;

$d++;
echo $d;



?>
</body>
</html>
