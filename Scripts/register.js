let myform = document.getElementById("form");
let userData = JSON.parse(localStorage.getItem("userData")) || [];
myform.addEventListener("submit", (event) => {
    event.preventDefault();
    let name = myform.name.value;
    let email = myform.email.value;
    let mobile = myform.mobile.value;
    let cpsw = myform.cpsw.value;
    let rpsw = myform.rpsw.value;
    // console.log(name,email,mobile,cpsw,rpsw);
    let flag = false;
    for (let i = 0; i < userData.length; i++) {
        if (email == userData[i].email) {
            flag = true;
            break;
        }
    }
    if (flag == true) {
        alert("Email is Already Registered");
    }
    else if (cpsw != rpsw) {
        alert("Passwords did not match");
    }
    else if (mobile.length < 10 || mobile.length > 10) {
        alert("Mobile Number is Incorrect");
    }
    else if(cpsw.length < 6){
        alert("Password should be Minimum 6 digitas")
    }
    else if(cpsw.length > 8){
        alert("Password should be Maximum 8 digits")
    }
    else {
        let obj = {
            id: userData.length + 1,
            name: name,
            email: email,
            mobile: mobile,
            psw: cpsw,
        }
        userData.push(obj);
        localStorage.setItem("userData", JSON.stringify(userData));
        document.getElementById("registerMSG").style.display = "block";
    }
})

document.getElementById("registerOk").addEventListener("click", () => {
    document.getElementById("registerMSG").style.display = "none";
    location.href = "login.html";
})