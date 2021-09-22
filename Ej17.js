let num1 = parseInt(window.prompt("DAme un numero"));
let num2 = parseInt(window.prompt("Dame otro numero"));
let num3 = parseInt(window.prompt("Dame Otro"));
if (num1 > num2)
{
        if (num1 > num3) {window.alert(`El mayor es ${num1}');}
    }
else if (num2 > num1)
{
    if (num1>num3) {window.alert(`El mayor es ${num2}`);}

}
else if(num3 > num1){
    if (num1>num2)  
        {window.alert(`El mayor es ${num3}');}
}   
