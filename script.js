function add(a, b){
    return (a*1)+(b*1);//avoids concantination.
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
        display(tempNum);
        
    }
    else if(operator == '+'){
       tempNum =  add(a, b);
        display(tempNum);
        
    }
    else if(operator == '-'){
        tempNum = subtract(a, b);
        display(tempNum);
        
    }
    else if(operator == '*'){
       tempNum = multiply(a, b); 
        display(tempNum);
        
    }
    
    
}
let tempNum = '',
    firstNums = '',
    secondNums = '',
    operator = '';

function display(num){
  const display = document.querySelector('#display');
  if(num<10){
  display.textContent = Math.round(num *10000000)/10000000;  //rounds decimal to 7 spots.
  }
  else if(num<100){
    display.textContent = Math.round(num *1000000)/1000000; // 6places
  }
  else if(num<1000){
    display.textContent = Math.round(num *100000)/100000; // 5
  }
  else if(num<10000){
    display.textContent = Math.round(num *10000)/10000; // 4
  }
else if(num<100000){
    display.textContent = Math.round(num *1000)/1000; //3
}
else if(num<1000000){
    display.textContent = Math.round(num *100)/100;//2
}
else if(num<10000000){
    display.textContent = Math.round(num *10)/10;//1
}
else if(num<100000000){
    display.textContent = Math.round(num *1)/1;
}
else{
    display.textContent = "Error!";
}
  if(display.textContent == "NaN"){
      display.style.fontSize = "40px";
      display.textContent = "Can't do that, dummy";
    }
}

let btn0 = document.querySelector("#zero");
btn0.addEventListener('click', (e) => {
    if(tempNum.length<8){//keeps numbers in the display
    tempNum += 0;
    }
    display(tempNum);
});

let btn1 = document.querySelector("#one");
btn1.addEventListener('click', (e) => {
    if(tempNum.length<8){//keeps numbers in the display
    tempNum += 1;
    }
    display(tempNum);
});

let btn2 = document.querySelector("#two");
btn2.addEventListener('click', (e) => {
    if(tempNum.length<8){//keeps numbers in the display
    tempNum += 2;
    }
    display(tempNum);
});

let btn3 = document.querySelector("#three");
btn3.addEventListener('click', (e) => {
    if(tempNum.length<8){//keeps numbers in the display
    tempNum += 3;
    }
    display(tempNum);
});

let btn4 = document.querySelector("#four");
btn4.addEventListener('click', (e) => {
    if(tempNum.length<8){//keeps numbers in the display
    tempNum += 4;
    }
    display(tempNum);
});

let btn5 = document.querySelector("#five");
btn5.addEventListener('click', (e) => {
    if(tempNum.length<8){//keeps numbers in the display
    tempNum += 5;
    }
    display(tempNum);
});

let btn6 = document.querySelector("#six");
btn6.addEventListener('click', (e) => {
    if(tempNum.length<8){//keeps numbers in the display
    tempNum += 6;
    }
    display(tempNum);
});

let btn7 = document.querySelector("#seven");
btn7.addEventListener('click', (e) => {
    if(tempNum.length<8){//keeps numbers in the display
    tempNum += 7;
    }
    display(tempNum);
});

let btn8 = document.querySelector("#eight");
btn8.addEventListener('click', (e) => {
    if(tempNum.length<8){//keeps numbers in the display
    tempNum += 8;
    }
    display(tempNum);
});

let btn9 = document.querySelector("#nine");
btn9.addEventListener('click', (e) => {
    if(tempNum.length<8){ //keeps numbers in the display
    tempNum += 9;
}
    display(tempNum);
});

let btnDot = document.querySelector("#dot");
btnDot.addEventListener('click', (e) => {
    
    tempNum += '.';

    display(tempNum);
});

let btnDiv = document.querySelector("#divide");
btnDiv.addEventListener('click', (e) => {
    
    if(firstNums != ''){
        operate(firstNums, operator, tempNum); 
       
    }
    operator = '/';
    firstNums = tempNum;
    tempNum = '';
});

let btnMult = document.querySelector("#mult");
btnMult.addEventListener('click', (e) => {
    if(firstNums != ''){
        operate(firstNums, operator, tempNum); 
       
    }
    operator = '*';
    firstNums = tempNum;
    tempNum = '';
});

let btnAdd = document.querySelector("#add");
btnAdd.addEventListener('click', (e) => {
    if(firstNums != ''){
        operate(firstNums, operator, tempNum); 
        
    }
    operator = '+';
    firstNums = tempNum;
    tempNum = '';

});

let btnSub = document.querySelector("#sub");
btnSub.addEventListener('click', (e) => {
    if(firstNums != ''){
        operate(firstNums, operator, tempNum); 
        
    }
    operator = '-';
    firstNums = tempNum;
    tempNum = '';
});

let btnEqual = document.querySelector("#equal");
btnEqual.addEventListener('click', (e) => {
    secondNums = tempNum;
    operate(firstNums, operator, secondNums);
    firstNums = tempNum;
    secondNums = '';
    operator = '';
    
    });

let btnClear = document.querySelector("#clear");
btnClear.addEventListener('click', (e) => {
    secondNums = '';
    firstNums = '';
    operator = '';
    tempNum = '';
    display(0);
});