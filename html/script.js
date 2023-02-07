var a = 0;


document.getElementById("increaseCount").onclick = ()=>{
    console.log(a);
    document.getElementById("initialText").innerHTML = a++;
}
