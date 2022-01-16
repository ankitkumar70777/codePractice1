<!DOCTYPE html>
<html>
<head></head>
<body>
<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);


$servername = "localhost";
$username = "ankitkumar";
$password = "ankit007";
$dbame = "exDb1";
$conn = mysqli_connect($servername,$username,$password,$dbame) or  die("connection unsuccessful".$connection->connect_error) ;
$sql = "insert into MyGuests (firstname, lastname, email ) values('1John', 'Doe', 'john@example.com');";
$sql .= "insert into MyGuests (firstname, lastname, email ) values('2ankitkumar', 'ravidas', 'ankitkumar@example.com');";
$sql .= "insert into MyGuests (firstname, lastname, email ) values('3amitkumar', 'Doe', 'john@example.com');";
if(mysqli_multi_query($conn,$sql)===TRUE){
    echo "records updated successfully";
    $lastId = $conn->insert_id;
    echo "\nletest records is $lastId ";

}else{
echo "records updation failed";
}
$conn->close();
 


?>
</body>
</html>
