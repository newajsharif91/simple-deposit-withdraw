document.getElementById('btn-deposit').  addEventListener('click',function(){
    const depositField =document.getElementById('deposit-field');
    const newDepositAmmoutString=depositField.value; 
    const newDepositAmmout=parseFloat(newDepositAmmoutString);
    

const depositTotal=document.getElementById('deposit-total');

const previousDepositTotalString=depositTotal.innerText;
const previousDepositTotal=parseFloat(previousDepositTotalString);
const currentDepositTotal=previousDepositTotal+newDepositAmmout;
depositTotal.innerText=currentDepositTotal;
// console.log(currentDepositTotal);
const balanceTotalElement=document.getElementById('balance-total');
const balanceTotalElementString=balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(balanceTotalElementString);
const newBalanceTotal=previousBalanceTotal+currentDepositTotal;
balanceTotalElement.innerText=newBalanceTotal;

depositField.value='';

})