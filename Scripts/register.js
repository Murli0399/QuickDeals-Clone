let myform = document.getElementById("form");
let userData = JSON.parse(localStorage.getItem("userData"))||[];
myform.addEventListener("submit",(event) => {
    event.preventDefault();
    let name = myform.name.value;
    let email = myform.email.value;
    let cpsw = myform.cpsw.value;
    let rpsw = myform.rpsw.value;
    // console.log(name,email,cpsw,rpsw);
    let flag = false;
    for(let i=0;i<userData.length;i++){
        if(email==userData[i].email){
            flag = true;
            break;
        }
    }
    if(flag==true){
        alert("Email is Already Registered");
    }
    else if(cpsw != rpsw){
        alert("Passwords did not match");
    }
    else{
        let obj = {
            name: name,
            email:email,
            psw:cpsw,
        }
        userData.push(obj);
        localStorage.setItem("userData",JSON.stringify(userData));
        alert("Register Successfully");
    }
})