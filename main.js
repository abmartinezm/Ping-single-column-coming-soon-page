const Mail = document.getElementById('mail');
const errorMsg=document.querySelector('.error-msg');
const Btn=document.querySelector('#btn');


var regMail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


Btn.addEventListener('click',()=>{
    if (regMail.test(Mail.value)) {
        console.log("La dirección de email  es correcta!.");
        errorMsg.classList.remove('active');
    
    }else{
        errorMsg.classList.add('active');
    }
})