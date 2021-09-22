let num1 = parseInt(window.prompt)("Introduce un número:");
let num2 = parseInt(window.prompt)("Introduce otro número:");

if (num1 < num2) {
    let menor = num1;
    let mayor = num2;
}   else if (num1 > num2) {
    menor = num2;
    mayor = num1;
    } else {
      menor ="son iguales";
      mayor = "son iguales";
    }

    console.log (
        `la suma es` num1+num2
        `la resta es ${num1-num2}`
        `la multiplicación es num1*num2`
        `la media es` (num1+num2) /2
        `El más grande es ${mayor}`
        `El más pequeño es ${menor}`
    )