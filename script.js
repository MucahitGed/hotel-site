const submit_btn = document.querySelector(".contact-btn");
const contact_output = document.querySelector(".contact-output")
const contact_name = document.querySelector("#contact .form-control #name")
const contact_email =document.querySelector("#contact .form-control #email")
const contact_phone = document.querySelector("#contact .form-control #phone")

submit_btn.addEventListener("click" , ()=> {
    if(contact_name.innerHTML == "" || 
    contact_email.innerHTML == "" ||
    contact_phone.innerHTML == ""){
        contact_output.innerHTML = "Fill your information if you want us to contact you"
        contact_output.style.color = "red"
    }if(!contact_name.value == "" && 
    !contact_email.value == "" &&
    !contact_phone.value == ""){
        contact_output.innerHTML="We will contact to you as soon as possible"
        contact_output.style.color = "green"
    }})
