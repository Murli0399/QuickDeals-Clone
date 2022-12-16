let myform = document.getElementById("form");
let userData = JSON.parse(localStorage.getItem("userData")) || [];
let userName = JSON.parse(localStorage.getItem("userName")) || [];

myform.addEventListener("submit", (event) => {
    event.preventDefault();
    let email = myform.email.value;
    let psw = myform.psw.value;
    // console.log(email,psw);
    console.log(userName);
    if (userName.length > 0) {
        alert("User is alredy login");
    }
    else {
        if (userData.length == 0) {
            alert("User is not registered. Please register the user first");
        }
        else {
            for (let i = 0; i < userData.length; i++) {
                if (email == userData[i].email) {
                    if (psw == userData[i].psw) {
                        alert(`welcome ${email}`);
                        let obj = { uname: email }
                        userName.push(obj);
                        localStorage.setItem("userName",JSON.stringify(userName));
                        location.href="index.html";
                        break;
                    }
                    else {
                        alert("Password Incorrect");
                        break;
                    }
                }
                else {
                    if (i == userData.length - 1) {
                        alert("User is not registered. Please register the user first");
                    }
                }
            }
        }
    }
})