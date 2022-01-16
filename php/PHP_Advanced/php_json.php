<!DOCTYPE html>
<html>
<head></head>
<body>
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$employee = array("name"=>"ankit","age"=>12,"location"=>"mumbai");
print_r($employee);
echo "<br>";
var_dump($employee);

$jsonEmployee = json_encode($employee);
echo "<br>";
echo $jsonEmployee;
echo "<br>";
var_dump($jsonEmployee);
echo "<br>";
print_r($jsonEmployee);
echo "<br>";
$brothers = array("ankitlumar","anilkumar","amitkumar");
$brothersJson =  json_encode($brothers);

$decodeBrothers = json_decode($brothersJson);
$decodeEmployee = json_decode($jsonEmployee,true);
var_dump($decodeEmployee);
echo $decodeEmployee['location'];
?>
</body>
</html>
