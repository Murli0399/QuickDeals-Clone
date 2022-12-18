let userName = JSON.parse(localStorage.getItem("userName"));

if (userName == null) {
    document.getElementById("ifUserIn").style.display = "none";
}else{
    document.getElementById("userNameIs").innerText = userName[0].uname;
    document.getElementById("ifUserIn").style.display = "block";
}
let refresh = document.getElementById("logout");

refresh.addEventListener("click", () => {
    userName.forEach((element,index) => {
        userName.splice(index,1);
        localStorage.setItem("userName",JSON.stringify(userName));
    });
})