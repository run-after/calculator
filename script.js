function add(a, b){
    return a+b;
}

function subtract(a, b){
    return a-b;
}

function multiply(a, b){
    return a*b;
}

function divide(a, b){
    return a/b;
}

function operate(a, operator, b){
    if(operator == '/'){
        tempNum =  divide(a, b);
        display();
    }
    else if(operator == '+'){
        tempNum =  add(a, b);
        display();
    }
    else if(operator == '-'){
        tempNum = subtract(a, b);
        display();
    }
    else if(operator == '*'){
        tempNum = multiply(a, b); 
        display();}
}
let tempNum = '',
    firstNums = '',
    secondNums = '',
    operator = '';

function display(){
  const display = document.querySelector('#display');
  display.textContent = tempNum;
}

let btn0 = document.querySelector("#zero");
btn0.addEventListener('click', (e) => {
    tempNum += '0';
    display();
});

let btn1 = document.querySelector("#one");
btn1.addEventListener('click', (e) => {
    tempNum += '1';
    display();
});

let btn2 = document.querySelector("#two");
btn2.addEventListener('click', (e) => {
    tempNum += '2';
    display();
});

let btn3 = document.querySelector("#three");
btn3.addEventListener('click', (e) => {
    tempNum += '3';
    display();
});

let btn4 = document.querySelector("#four");
btn4.addEventListener('click', (e) => {
    tempNum += '4';
    display();
});

let btn5 = document.querySelector("#five");
btn5.addEventListener('click', (e) => {
    tempNum += '5';
    display();
});

let btn6 = document.querySelector("#six");
btn6.addEventListener('click', (e) => {
    tempNum += '6';
    display();
});

let btn7 = document.querySelector("#seven");
btn7.addEventListener('click', (e) => {
    tempNum += '7';
    display();
});

let btn8 = document.querySelector("#eight");
btn8.addEventListener('click', (e) => {
    tempNum += '8';
    display();
});

let btn9 = document.querySelector("#nine");
btn9.addEventListener('click', (e) => {
    tempNum += '9';
    display();
});

let btnDiv = document.querySelector("#divide");
btnDiv.addEventListener('click', (e) => {
    operator = '/';
    firstNums = tempNum;
    tempNum = '';
});

let btnMult = document.querySelector("#mult");
btnMult.addEventListener('click', (e) => {
    operator = '*';
    firstNums = tempNum;
    tempNum = '';
});

let btnAdd = document.querySelector("#add");
btnAdd.addEventListener('click', (e) => {
    operator = '+';
    firstNums = tempNum;
    tempNum = '';
});

let btnSub = document.querySelector("#sub");
btnSub.addEventListener('click', (e) => {
    operator = '-';
    firstNums = tempNum;
    tempNum = '';
});

let btnEqual = document.querySelector("#equal");
btnEqual.addEventListener('click', (e) => {
    secondNums = tempNum;
    operate(firstNums, operator, secondNums);
});