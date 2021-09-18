// Задание 1
let myName = "Сергей";
// Задание 2
const myBirthYear = 2002;

// Задание 3
function sayHello(name = null) {
    let trueName = name == null ? myName : name;
    alert('Hello, ' + trueName + '!');
}

// Задание 4
function range(start, end) {
    let result = [];
    let index = 0;
    for (let i = start; i <= end; i++, index++)
        result[index] = i;
    return result;
}

// Задание 5
function rangeOdd(start, end) {
    let result = range(start, end);
    for (let i = 0; i < result.length; i++) {
        if (result[i] % 2 === 0)
        {
            result.splice(i, 1);
            i--;
        }
    }
    return result;
}

// Задание 6
function average(a, b) {
    return (a + b) / 2;
}

// Задание 7
function square(x) {
    return x * x;
}

// Задание 8
function cube(x) {
    return x * x * x;
}

// Задание 9
function calculate(numbers = 9) {
    let result = [];
    for (let i = 0; i <= numbers; i++)
        result[i] = average(square(i), cube(i));
    return result;
}

sayHello();
document.writeln('Задание 1: ' + myName + '<br>');
document.writeln('Задание 2: ' + myBirthYear + '<br>');
let arr = range(15, 30);
document.writeln('Задание 4: ' + arr + '<br>');
arr = rangeOdd(15, 30);
document.writeln('Задание 5: ' + arr + '<br>');
document.writeln('Задание 6 (4, 2): ' + average(4, 2) + '<br>');
document.writeln('Задание 7 (8): ' + square(8) + '<br>');
document.writeln('Задание 8 (1): ' + cube(1) + '<br>');
document.writeln('Задание 9: ' + calculate() + '<br>');
