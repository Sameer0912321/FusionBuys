// function validation() {
//     let passpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/g;
//     let password = document.getElementById("password").value;
//     let error = document.getElementById("errorouter");
//     let errormsg = document.getElementById("error");
    
//     if (!password.match(passpattern)) {
//         errormsg.innerText = "Password must contain at least 8 characters, including a number, a lowercase letter, and an uppercase letter.";
//         error.style.display = 'flex';
//         return false ;
//     } else {
//         error.style.display = 'none';
//         window.location.href = './dashboard.html';
//         return true;
//     }

// }
function validation() {
    let passpattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    let password = document.getElementById("password").value;
    let email = document.getElementById("email").value;
    let emailpattern = /[a-zA-z0-9]+@+[a-zA-z]+.+com/g;
    let error = document.getElementById("errorouter");
    let errormsg = document.getElementById("error");
    if(!password.match(passpattern) && !email.match(emailpattern) ){
        errormsg.innerText = "Credentiols Are Incorrect";
        error.style.display = 'flex';
    }
    else if (!password.match(passpattern)) {
        errormsg.innerText = "Password must contain at least 8 characters, including a number, a lowercase letter, and an uppercase letter.";
        error.style.display = 'flex'; 
    }
    else if(!email.match(emailpattern)){
        errormsg.innerText = "The Mail You've Entered Is Incorrect";
        error.style.display = 'flex';
    }
    else {
        error.style.display = 'none'; 
        window.location.href = './dashboard.html';
    }
}
