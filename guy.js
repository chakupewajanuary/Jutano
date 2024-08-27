console.log("mmama");
console.log("yaya");
alert("ugonjwa");
// from html file dom(document object model)
const form=document.querySelector('.form');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
const Name=document.querySelector('#name');
const massage=document.getElementById('tst');
const submit=document.getElementById('btn');
const msg=document.querySelector('.msg');

form.addEventListener('submit',onsubmit)

function onsubmit(e){
    e.preventDefault();
    
    if(Name.value===''||email.value===''){
        msg.innerHTML("please fill all the fields");
        setTimeout(()=>msg.remove(),3000)

    }
    else{
        console.log(`this entered name ${Name.value}`)
        console.log(`this entered name ${email.value}`)
        console.log(`this entered name ${phone.value}`)
        console.log(`this entered name ${massage.value}`)
    }

}