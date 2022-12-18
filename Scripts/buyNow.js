let userName = JSON.parse(localStorage.getItem("userName"));
let userData = JSON.parse(localStorage.getItem("userData"));
let matData = JSON.parse(localStorage.getItem(userName[0].uname));


let iname = document.getElementById("name");
let iemail = document.getElementById("email");
let iaddress = document.getElementById("add");
let icity = document.getElementById("city");
let istate = document.getElementById("state");
let icardHolder = document.getElementById("holder");
let icard_number = document.getElementById("cnum");
let iexpMonth = document.getElementById("month");
let iexpYear = document.getElementById("year");
let icvv = document.getElementById("cvv");

document.getElementById("checkOTP").addEventListener("click", () => {
    if (document.getElementById("otp").innerText == document.getElementById("inputOTP").value) {
        alert("Payment Successful");
        document.getElementById("myModal").style.display = "none";
        document.getElementById("orderMSG").style.display = "block";
        matData.forEach((el,ind) => {
            matData.splice(ind,matData.length);
            localStorage.setItem(`${userName[0].uname}`,JSON.stringify(matData));
        })
        
    } else {
        alert("Please Enter Correct OTP");
        document.getElementById("inputOTP").value = null;
    }
})

document.getElementById("closeOrder").addEventListener("click",() => {
    document.getElementById("orderMSG").style.display = "none";
    location.href = "index.html";
})

function generateOTP() {
    var digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < 4; i++) {
        OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
}
document.getElementById("otp").innerText = generateOTP();

window.addEventListener("load", () => {
    for (let i = 0; i < userData.length; i++) {
        if (userName[0].uname == userData[i].email) {
            let count = 0;

            for (let key in userData[i]) {
                count++;
            }
            if (count < 5) {
                document.getElementById("checkOut").addEventListener("click", () => {
                    if (userData[i].email == iemail.value) {
                        let identity = userData[i].id;
                        let mob = userData[i].mobile;
                        let pass = userData[i].psw;
                        let obj = {
                            id: identity,
                            name: iname.value,
                            email: iemail.value,
                            mobile: mob,
                            psw: pass,
                            address: iaddress.value,
                            city: icity.value,
                            state: istate.value,
                            cardHolder: icardHolder.value,
                            card_number: icard_number.value,
                            expMonth: iexpMonth.value,
                            expYear: iexpYear.value,
                            cvv: icvv.value,
                        }
                        userData.splice(i, 1);
                        userData.push(obj);
                        localStorage.setItem("userData", JSON.stringify(userData));
                        document.getElementById("myModal").style.display = "block";
                    }
                })
                break;
            }else{
                document.getElementById("myModal").style.display = "block";
            }
        }
    }
})














if (userName == null) {
    document.getElementById("ifUserIn").style.display = "none";
} else {
    document.getElementById("userNameIs").innerText = userName[0].uname;
    document.getElementById("ifUserIn").style.display = "block";
}
let refresh = document.getElementById("logout");

refresh.addEventListener("click", () => {
    userName.forEach((element, index) => {
        userName.splice(index, 1);
        localStorage.setItem("userName", JSON.stringify(userName));
    });
})
// -----------------------------------------

const mainhead = document.getElementById("navbar");
const lastEle = document.querySelector(".copyright");

const scrollElement = document.createElement("div");

scrollElement.classList.add("scrollTop_style");

scrollElement.innerHTML = `<i class="fa-solid fa-arrow-up scorll-top"></i>`;

lastEle.after(scrollElement);

scrollElement.addEventListener("click", () => {
    mainhead.scrollIntoView({behavior: "smooth"})
})