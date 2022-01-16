<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


class Car{
    //to avoild error we set default value to veriable;
    private $model = "";
    private $color = "";
    //set default value to arguments in __constrcutor function
    public function __construct($model=null,$color=null){
        if($model){
        $this->model = $model;    
        }
        if($color){
        $this->color = $color;    
        }
        
    }
    public function getValues(){
     return $this->model.' '.$this->color ."and the class name is == ".__CLASS__."== ".__LINE__."== ".__FILE__."== ".__METHOD__."==";   
    }
}

//$car1 = new Car('bmw','red');
$car1 = new Car('bmw','red');
echo $car1->getValues();


echo "<br>";
//Magic constants

class User{
    //theInitialValue = theIniVal
    private $firstName="theIniVal";
    private $lastName="theIniVal";
    public function __construct($fName='theIniVal',$lName='theIniVal'){
        $this->firstName = $fName;
        $this->lastName = $lName;
    }
    public function getFullName(){
        return "Hi  ".$this->sayGoodMorning().", my name is $this->firstName $this->lastName ";
    }

    public function sayGoodMorning(){
        return "good Morning";
    }
}

$ankitkumar = new User('ankitkumar','ravidas');
echo $ankitkumar->getFullName();
?>
