<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

// abstract class Car{
//     protected $tankVolumn;
//     public function setTankValumn($volumn){
//         $this->tankVolumn = $volumn;
//     }
//     abstract public function calcNumMilesOnFullTank();
// }

// class Honda extends Car{
//     public function calcNumMilesOnFullTank(){
//         $miles = $this->tankVolumn*30;
//         return $miles; 
//     }
// }

// class Toyota extends Car{
//     public function calcNumMilesOnFullTank(){
//         return $miles = $this->tankVolumn*33;
//     }
//     public function getColor(){
//         return 'red';
//     }
// }


// $toyota1 = new Toyota();
// $toyota1 -> setTankValumn(10);
// echo $toyota1 -> calcNumMilesOnFullTank();
// echo $toyota1 -> getColor();


// //example

// class User{
    
// }

abstract class Car{
    protected $tank;
    public function setTankVolumn($volumn){
        $this->tank = $volumn;
    }
    abstract public function calcNumMilesOnFullTank();
}

class Honda extends Car{
    public function calcNumMilesOnFullTank(){
        $miles = $this->tank*30;
        return $miles;
    }
}

class Tayota extends Car{
    public function calcNumMilesOnFullTank(){
        return $miles = $this->tank*30;
    }
    public function getColor(){
        return "beige";
    }
}

$toyota1 = new Tayota();
$toyota1->setTankVolumn(10);
echo $toyota1->calcNumMilesOnFullTank();
echo "<br>";
echo $toyota1->getColor();


//--------------------------------------------------------------------------------------
abstract class User{
    protected $username;
    public function setUserName($username){
        $this->username = $username;
    }
    public function getUserName(){
        return $this->username;
    }
    abstract public function stateYourRole();
}
class Admin extends User{
    public function stateYourRole(){
        return "admin";
    }
}
class Viewer extends User{
    public function stateYourRole(){
        return "Viewer";
    }
}

$admin1 = new Admin();
$admin1->setUserName("Balthazar");
echo $admin1->getUserName();
?>
