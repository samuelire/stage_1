//To get data 
const nameinput = document.querySelector(".contact-name");
const email = document.querySelector(".contact-email");
const subject = document.querySelector(".contact-subject");
const message = document.querySelector(".contact-message");
const errorNodes = document.querySelectorAll(".contact-error");
const success = document.querySelector(".contact-success");


// to validate data
function validateform(){

  clearMessage();
  let errorFlag = false;

  if(nameinput.value.length< 1){
    errorNodes[0].innerText = "Name cannot be blank";
    nameinput.classList.add("error-border");
    errorFlag= true;
     
  } 
  if(!emailisvalid(email.value)){
    errorNodes[1].innerText = "Invalid Email";
    email.classList.add("error-border");
    errorFlag= true;

  }
  if(subject.value.length<1){
    errorNodes[2].innerText = "No Subject";
    subject.classList.add("error-border");
    errorFlag= true;

  }
  if(message.value.length< 1){
    errorNodes[3].innerText = "Please enter a message";
    message.classList.add("error-border");
    errorFlag= true;

  }

  if(!errorFlag){
    success.innerText ="Success!";
  }
}

function clearMessage(){  
  for(let i = 0; i < errorNodes.length; i++){
    errorNodes[i].innerText="";
  }
  success.innerText="";
  nameinput.classList.remove("error-border");
  email.classList.remove("error-border");
  subject.classList.remove("error-border");
  message.classList.remove("error-border");
}

function emailisvalid(email){
  let pattern = /\S+@\S+\.\S+/;
  return pattern.test(email);
}