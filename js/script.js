var n = Number (prompt('Введіть n-не число послідовності'));

//function fib(n){
//    var number;
    
//    if (n >=2) {
//    number = fib (n-1) + fib (n-2);
//  } 
//  else {
//  number = n;
// }
    //return number;
// }
//document.write ('Число fib = ' + fib(n));

    var a, b, result;
        a = 0;
        b = 1;
        result = b;
    for (var i = 1; i <= n; i++) {
    
        document.write(result + '<br>');
        result = a+b;
        a = b;
        b = result;
}
