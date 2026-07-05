function add(val1,val2){
    debugger;
    let sum = val1 + val2;
    return sum;
}

function onClickToAdd(){
    debugger;
    let num1 = Number(document.getElementById("txtValue1").value);
    let num2 = Number(document.getElementById("txtValue2").value);
    let addition = add(num1, num2);
    document.getElementById("divResult").innerHTML = addition;
}