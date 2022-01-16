<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class Car{
    public $comp;
    public $color =   'red';
    public $hasRoof = true;

    public function hello(){
    return "Beep I am a ".$this->comp."and i am ".$this->color;
    }
}

$bmw = new Car();

$bmw->comp = "ankit";
echo $bmw->hello();
?>
