<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class Car{
    public $tank;

    //fule inserted
    public function fill($fuel){
        $this->tank += $fuel; 
        return $this;
    }

    //subtract
    public function ride($fuel1){
        $miles = $fuel1;
        $gallons = $miles/50;
        //return $gallons;
        $this->tank -= $gallons;
        return  $this;
    }


}

$bmw = new Car();
// $bmw->fill(10);
// echo $bmw->tank;
// echo $bmw->ride(40);
$tank = $bmw->fill(10)->ride(40)->tank;
echo $tank;



//practice 

class User{
    public $firstName;
    public $lastName;
    public function hello(){
        return "hello {$this->firstName}";
    }
    public function register(){
        echo $this->firstName." ".$this->lastName. "REGISTRED";
        return $this;
    }
    public function mail(){
        echo "emailed";
        // return $this;
    }
}

$ankitkumar = new User();
$ankitkumar->firstName = 'ankitkumar';
$ankitkumar->lastName = 'ravidas';
// echo $ankitkumar->firstName;
// echo "<br>";
// echo $ankitkumar->register();
$ankitkumar -> register()->mail();
?>
