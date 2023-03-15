let userName = JSON.parse(localStorage.getItem("userName"));
let matData = JSON.parse(localStorage.getItem(userName[0].uname)) || [];
let cont = document.getElementById("showCartData");
let total_price = document.getElementById("total_price");
let disCount = document.getElementById("disCount");
let bill = document.getElementById("bill");

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

function showData(data) {
    cont.innerHTML = null;

    let total = 0;
    // console.log(typeof(total))
    data.forEach((element, index) => {
        let amount = 0;
        let cartDiv = document.createElement("div");
        cartDiv.setAttribute("class", "carttable");

        let item_1 = document.createElement("div");
        item_1.setAttribute("class", "head-1")
        let item_2 = document.createElement("div");
        item_2.setAttribute("class", "head-2")
        let item_3 = document.createElement("div");
        item_3.setAttribute("class", "head-3")
        let item_4 = document.createElement("div");
        item_4.setAttribute("class", "head-4")
        let item_5 = document.createElement("div");
        item_5.setAttribute("class", "head-5")

        let imagediv = document.createElement("div");
        imagediv.setAttribute("class", "imagediv")
        let image = document.createElement("img");
        image.setAttribute("src", element.image);

        let detaildiv = document.createElement("div");
        detaildiv.setAttribute("class", "detaildiv");
        let detail = document.createElement("h3");
        detail.innerText = element.detail;

        let extra_1 = document.createElement("p");
        extra_1.innerText = "Ships From: China";
        let extra_2 = document.createElement("p");
        extra_2.innerText = "Color Temperature: 6500K";
        let extra_3 = document.createElement("p");
        extra_3.innerText = "Socket Type: H4";
        let extra_4 = document.createElement("p");
        extra_4.innerText = "Color: F2 Plus";
        let extra_5 = document.createElement("p");
        extra_5.innerText = "In Stock: P-1000";

        let category = document.createElement("p");
        category.setAttribute("class", "catp")
        category.innerText = "Category:  " + element.category;

        let qutdiv = document.createElement("div");
        qutdiv.setAttribute("class", "qutdiv");
        let decrement = document.createElement("button");
        decrement.innerText = "-";
        decrement.addEventListener("click", () => {
            element.quantity--;
            // amount = amount+(1*element.price);
            localStorage.setItem(`${userName[0].uname}`, JSON.stringify(matData));
            showData(matData);
        })

        let quantity = document.createElement("h4");
        quantity.innerText = element.quantity;

        let increment = document.createElement("button");
        increment.innerText = "+";
        increment.addEventListener("click", () => {
            element.quantity++;
            // amount = amount-(1*element.price);
            localStorage.setItem(`${userName[0].uname}`, JSON.stringify(matData));
            showData(matData);
        })

        qutdiv.append(decrement, quantity, increment);

        detaildiv.append(detail, extra_1, extra_2, extra_3, extra_4, extra_5, category);
        imagediv.append(image);
        item_1.append(imagediv, detaildiv);

        item_2.append("$ " + element.price);

        item_3.append(qutdiv);

        amount += Math.round(element.quantity * element.price);
        total += Math.round(element.quantity * element.price);
        item_4.append("$" + amount);

        let deleteBtn = document.createElement("p");
        deleteBtn.setAttribute("class", "catp")
        deleteBtn.innerText = "Delete";

        deleteBtn.addEventListener("click", () => {
            data.splice(index, 1);
            localStorage.setItem(`${userName[0].uname}`, JSON.stringify(matData));
            showData(matData);
        })

        item_5.append(deleteBtn);


        cartDiv.append(item_1, item_2, item_3, item_4, item_5)
        cont.append(cartDiv);
    });

    total_price.innerText = "$" + total;
    let disPrice = Math.round(total * 3 / 100);
    disCount.innerText = "$" + disPrice;
    bill.innerText = "$" + (Math.round(total - disPrice));
}

showData(matData);

// ----------------------------------

const mainhead = document.getElementById("navbar");
const lastEle = document.querySelector(".copyright");

const scrollElement = document.createElement("div");

scrollElement.classList.add("scrollTop_style");

scrollElement.innerHTML = `<i class="fa-solid fa-arrow-up scorll-top"></i>`;

lastEle.after(scrollElement);

scrollElement.addEventListener("click", () => {
    mainhead.scrollIntoView({ behavior: "smooth" })
})