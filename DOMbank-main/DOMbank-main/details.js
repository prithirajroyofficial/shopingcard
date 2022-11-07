document.getElementById('Dipositbutton').addEventListener('click', function(){

const getResult = document.getElementById('diposutAmount') ;
const getDepositValue = getResult.value;
const getConvertValue = parseFloat(getDepositValue);


const liveDiposit = document.getElementById('dipositamount') ;
const totalDiposit = parseFloat(liveDiposit.innerText);
liveDiposit.innerText =  totalDiposit + getConvertValue;
getResult.value="";



const totalAmoutt = document.getElementById('totalAmount') ;
const  libeTotalAmount = parseFloat(totalAmoutt.innerText);
totalAmoutt.innerText =  libeTotalAmount  + getConvertValue;




})




document.getElementById('withdrawButton').addEventListener('click', function(){

    
const getWithdrow = document.getElementById('form2Example2') ;
const getwithdrows = getWithdrow.value;

const getConvertValueforWithdrow = parseFloat(getwithdrows);
console.log(getConvertValueforWithdrow);
    
    
const livewithdrwAmount = document.getElementById('withdrawAmount') ;
const totalwithdrwAmount = parseFloat(livewithdrwAmount.innerText);
livewithdrwAmount.innerText =  getConvertValueforWithdrow + totalwithdrwAmount ;
getWithdrow.value="";
console.log(totalwithdrwAmount);
    
    
    
    })



