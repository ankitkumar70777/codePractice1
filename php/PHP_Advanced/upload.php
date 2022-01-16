<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

$dir = "uploads/";
$target_file = $dir.basename($_FILES['fileupload']['name']);
$uploadOk = 1;
$imageFileType = strtolower(pathinfo($target_file,PATHINFO_EXTENSION));

echo $target_file;

echo $imageFileType;

?>
