<!DOCTYPE html>
<html>
<head>
    <title>html tables</title>
    <style type="text/css">
        table,td,th{
            border:1px solid black;
            border-collapse: collapse;
        }
        td,th{
            padding: 5px;
            text-align: center;
        }
        table{
            width:50% ;
            border:1px solid black";
        }
     /*   tr:nth-child(even){
            background-color: #eee;
        }
        tr:nth-child(odd){
            background-color: #fff;
        }*/

        #ankitSpeational{
            background-color: yellow;
        }
    </style>
</head>
<body>
<table   >
    <caption>employee data</caption>
    <tr>
        <th>name</th>
        <th colspan="2">contact</th>
        <th>gender</th>
    </tr>
    <tr>
        <td>ankitkumar</td>
        <td>9209497562</td>
        <td>9209497562</td>
        <td>male</td>
    </tr>
    <tr>
        <td>ankitkumar</td>
        <td>9209497562</td>
        <td>9209497562</td>
        <td>male</td>
    </tr>
     <tr>
        <td>ankitkumar</td>
        <td>9209497562</td>
        <td>9209497562</td>
        <td>male</td>
    </tr>
     <tr>
        <td>ankitkumar</td>
        <td>9209497562</td>
        <td>9209497562</td>
        <td>male</td>
    </tr>
</table>

<br>
<table id="ankitSpeational">
    <tr>
        <th>name</th>
        <td>ankitkumar</td>
    </tr>
    <tr>
        <th rowspan="2">contact</th>
        <td>9209497562</td>     
    </tr>
    <tr>
    <td>9209497562</td>
    </tr>

</table>
</body>
</html>
