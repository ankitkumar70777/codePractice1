<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


// // The parent class has its properties and methods
// class Car {
// // A private property or method can be used only by the parent
// private $model;
// // Public methods and properties can be used
// //
// //by both the parent and the child classes
// public function setModel($model)
// {
// $this -> model = $model;
// }
// public function getModel()
// {
// return $this -> model;
// }
// }
// // The child class can use the code it inherited from the parent class,
// //
// //and it can also have its own code
// class SportsCar extends Car {
// private $style = 'fast and furious';
// public function driveItWithStyle()
// {
// return 'Drive a ' . $this -> getModel() . ' <i>' .
// $this -> style . '</i>';
// }
// }

// // Create an instance from the child class
// $sportsCar1 = new SportsCar();
// // Use a method that the child class inherited from the parent class
// $sportsCar1 -> setModel('Ferrari');
// // Use a method that was added to the child class
// echo $sportsCar1 -> driveItWithStyle();



// class Car{
//     private $model;
//     public function setModel($model){
//         $this -> model = $model;
//     }
//     public function getModel(){
//         //return "beeep ! i am $this->model ";
//         return $this -> model;
//     }
// }

// // $bmw =  new Car();
// // $bmw->setModel('--BMW--');
// // echo $bmw->hello();


// //inheritance

// class SportsCar extends Car{
//     private $style = 'fast and furious';
//     public function driveItWithStyle(){
//         //return "i am a $this->hello() and i drive $this->style ";
//         return "i am a  ".$this->getModel()." and i drive $this->style ";
//         //return 'Drive a ' . $this -> getModel() . ' <i>' .
// //$this -> style . '</i>';
//     }
// }

// $sportCar1  = new SportsCar();
// $sportCar1->setModel('FARARI');
// //echo $sportCar1->getModel();
// echo $sportCar1->driveItWithStyle();


// class Car{
//     protected $model = 'initialVal';
//     public function setModel($model){
//         $this->model = $model;
//     }
// }

// class SportsCar extends Car{
//     public function hello(){
//         return "beep i am a ".$this->model.".";
//     }
// }


// $sportsCar1 = new SportsCar();
// $sportsCar1->setModel("FARARI");
// echo $sportsCar1->hello();



// class Car{
//     final public function hello(){
//         return 'beep';
//     }
// }

// class SportsCar extends Car{
//     public function hello1(){
//         return 'hello';
//     }
// }

// $sportsCar1 = new SportsCar();
// echo $sportsCar1->hello();


class User{
    protected $username;
    public function setUsername($username){
        $this->username = $username;
    }
}

class Admin extends User{
    public function expressYourRole(){
        return strtolower(__CLASS__);
    }
    public function sayHello(){
        return 'hello admin'.$this->username;
    }
}

$admin1 = new Admin();
$admin1->setUsername('Balthazar');
echo $admin1->sayHello();
?>

