function five() {
    return 5
}
console.log(five())
console.log(five)

function argument(a) {
    return a
}
console.log(argument(10))

function x2(a) {
    return a * 2
}
console.log(x2(10))

// сума трьох  різних чисел
function sum3(a, b, c) {
    return a + b + c
}
console.log(sum3(5, 7, 10))

function mul(a, b) {
    return a * b
}
console.log(mul(3, 5))

function sub(a, b) {
    return a - b
}
console.log(sub(6, 9))

// функція,яка повертає мінімальне значенна із двох аргументів
function min(a, b) {
    return a < b ? a : b
}
console.log(min(3, 5))



function showMessage(from, text) {
    if (text === undefined) {
        text = 'text not'
    }
    console.log(from + ": " + text)
}
showMessage()
showMessage("Vasya")
showMessage('Vasya', "hello")

