document.getElementById('btn-withdraw').addEventListener('click',function(){
const withdrawfield=document.getElementById('withdraw-field');
const withdrawfieldString=withdrawfield.value;
const withdrawfieldAmmount=parseFloat(withdrawfieldString);

const withdrawTotalElement=document.getElementById('withdraw-total');
const withdrawTotalElementString=withdrawTotalElement.innerText;
const prevouWithdrawTotalElement=parseFloat(withdrawTotalElementString);

const currentWithdrawTotal=withdrawfieldAmmount+prevouWithdrawTotalElement;
withdrawTotalElement.innerText=currentWithdrawTotal;

const balanceTotalElement=document.getElementById('balance-total');
const balanceTotalElementString=balanceTotalElement.innerText;
const previousBalanceTotal=parseFloat(balanceTotalElementString);
const newBalanceTotal=previousBalanceTotal-withdrawfieldAmmount
balanceTotalElement.innerText=newBalanceTotal;

withdrawfield.value='';

})