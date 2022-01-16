    <?php
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    $fName = $_POST['fName'];
    $lName = $_POST['lName'];
    $gender = $_POST['gender'];

    echo "my name is $fName $lName and i am $gender";



    ?>
