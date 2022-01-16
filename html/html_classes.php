<!DOCTYPE html>
<html>
<head>
    <title></title>
    <style type="text/css">
        .city{
            background-color: red;
            color:white;
            padding: 1%;
            padding-left: 2%;
            border : 2px solid black;
        }
        .bold{
            font-weight: bold;
        }
        .italic{
            font-style: italic;
        }

        #myHeader{
            padding: 10px;
            border : 2px solid blue;
            margin: 5px;
            outline : 2px solid black;
        }
    </style>
</head>
<body>
    <p id="morningMessage"></p>
<p class="bold" id="speationalBOld">this is bold and italic and top pagw</p>
<div class="city">
    <h2>disclammer</h2>
    <p>london is big city</p>
</div>
<br>


<p class="city">GOOD MORNNG</p>

<p class="bold">this is bold and italic</p>
<p class="bold">this is bold and italic</p>
<br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
<p class="bold">this is bold and italic</p>
<p class="bold">this is bold and italic</p>

<button type="button" onclick="changeColor()">change color</button>

<h2 id="myHeader">this is main header</h2>
<h2 id="myHeader">this is main header</h2>
<a href="#speationalBOld">click here to go to top page</a>
<script>
    function changeColor(){
        var allBoldInDoc = document.getElementsByClassName('bold');
        console.log("allBoldInDoc : ",allBoldInDoc);
        var i;
        for (i = 0;i < allBoldInDoc.length;i++){
            allBoldInDoc[i].style.fontStyle="italic";
               // x[i].style.display = "none";

        }
        //allBoldInDoc.style.color = "red"; 
    }

    document.getElementById("morningMessage").innerHTML = "good mroing";
</script>
</body>
</html>
