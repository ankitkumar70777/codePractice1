<!DOCTYPE html>
<html>
<head></head>
<body>
    <form method="post" action="server.php">
        <label for="fName">name</label>
        <input type="text" name="fName" value="" placeholder="first name">
        <br>
        <label for="lName">name</label>
        <input type="text" name="lName" value="" placeholder="last name">
        <br>
        <label for="gender">gender</label>
        Male : <input type="radio" name="gender" value="male" >
        FeMale : <input type="radio" name="gender" value="female" >
        Other : <input type="radio" name="gender" value="other" >
        <br>
        <input type="submit" value="submit">
    </form>

    <?php include '../PHP_Advanced/include1.php'; ?>
</body>
</html>
