function validation(){
let passpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
let emailpattern = /[a-zA-z0-9]+@+[a-zA-z]+.+com/g;
let phonenopattern = /[0-9]{7,}$/g
let namepattern = /[a-zA-z]/g;
let email = document.getElementById("email").value
let password = document.getElementById("password").value
let name = document.getElementById("name").value
let c_password = document.getElementById("password2")
let error = document.getElementById("errorouter");
let errormsg = document.getElementById("error");
// if(!email.match(emailpattern) || !email.match(phonenopattern)){
//     errormsg.innerText = "Credentiols Are Incorrect";
//     error.style.display = 'flex';
// }
if(!email.match(emailpattern) && !email.match(phonenopattern)){
    errormsg.innerText = "E-Mail Or Phone Number Is Incorrect";
    error.style.display = 'flex';
}
else if(!name.match(namepattern)){
    errormsg.innerText = "Invalid Name";
    error.style.display = 'flex'; 
}
else if (!password.match(passpattern)) {
    errormsg.innerText = "Password must contain at least 8 characters, including a number, a lowercase letter, and an uppercase letter.";
    error.style.display = 'flex'; 
}
else if (password !== c_password) {
    errormsg.innerText = "Passwords Do No Match";
    error.style.display = 'flex'; 
}
else {
    error.style.display = 'none'; 
    window.location.href = './dashboard.html';
}
}