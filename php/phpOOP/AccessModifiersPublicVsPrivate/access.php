<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

class Car{
    //private method
    private $model;

//setter
//// The public access modifier allows the access to
//the method from outside the class
    public function setModel($model){
        $this->model = $model;
    }
    //getter
    public function getModel(){
        return "the car model is ". $this->model;
    }
}


$bmw = new Car();
$bmw->setModel("BMW");
echo $bmw->getModel();


class User{
    private $firstName;
    public function setValue($value){
        $this->firstName = $value;
    }
    public function getValue(){
        return $this->firstName;
    }
}

$user1 = new User();
$user1->setValue("ankitkumar");
echo  $user1->getValue();
?>
