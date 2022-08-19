//step-1:ad click event handeler with the submit button
document.getElementById('btn-submit').addEventListener('click',function(){
const emailField =document.getElementById('user-email');
const email=emailField.value;
// console.log(email);
const passwordlField =document.getElementById('user-password');
const password=passwordlField.value;
// console.log(email,password);
if(email ==='Shuvoriyad20@gmail.com' && password ==='nawash10'){
    window.location.href='bank.html'
}
else{
    alert('Password Wrong');
}

})