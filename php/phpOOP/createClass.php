<?php
 ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

class Car{
//property are veriable in class
public $comp;
public $color = 'red'; //we can set default value to property
public $hasSunRoof = true;
//adding method
public function beepOfCar(){
    return 'beeeeeeeeeeeeeeep';
}
}

//creating objects
$bmw = new Car();
$tata = new Car();

//getting value of object
echo $bmw->color;
echo "<br>";
echo $tata->hasSunRoof;
echo "<br>";
echo "-".$bmw->comp."-";

//set value of objects
$bmw->comp = 'haha';
$bmw->color = 'blue';
$bmw->hasSunRoof = true;

echo "<br>";
echo $bmw->color;
echo "<br>";
echo $bmw->hasSunRoof;
echo "<br>";
echo "-".$bmw->comp."-";

//setting value objects tata
$tata->color = 'black';
$tata->hasSunRoof = false;
$tata->comp = 'papa';
echo "<br>";
echo $tata->color;
echo $tata->hasSunRoof;
echo $tata->comp;
echo "<br>";
//run method of class by object
echo $tata->beepOfCar();

?>
