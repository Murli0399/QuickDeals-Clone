let userName = JSON.parse(localStorage.getItem("userName")) 
// console.log(userName)
window.addEventListener("load",() => {
    if(userName == null){
            document.getElementById("ifUserOut").style.display="block";
    }
    else{
        if(userName.length > 0){
            document.getElementById("userName").append(userName[0].uname);
            document.getElementById("ifUserIn").style.display="block";
        }
        else{
            document.getElementById("ifUserOut").style.display="block";
        }
    }
})

let refresh = document.getElementById("logout");

refresh.addEventListener("click", () => {
    userName.forEach((element,index) => {
        userName.splice(index,1);
        localStorage.setItem("userName",JSON.stringify(userName));
    });
})

let cartPage = document.getElementById("cartPage");

cartPage.addEventListener("click",() => {
    if (userName == null) {
        alert("Please Sign In First");
    }
    else {
        if (userName.length > 0) {
            location.href = "cart.html";
        }
        else {
            alert("Please Sign In First");
        }
    }
})