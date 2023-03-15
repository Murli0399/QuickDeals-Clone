let arr = [
    "images/banner3.jpg",
    "images/banner1.jpg",
    "images/banner6.jpg",
    "images/banner5.webp",
    "images/banner2.jpg"
];

let i = 0;
setInterval(() => {
    let img = document.createElement("img");
    img.setAttribute("src", arr[i]);
    document.getElementById("slideshow").innerHTML = null;
    document.getElementById("slideshow").append(img);
    i++;
    if (i == arr.length) i = 0;
}, 2000)
///////////////////////////////////////////////////////////
let newData = [];
let promise = fetch("./Scripts/apiData.json")
    .then((responseData) => {
        return responseData.json();
    })
    .then((acctualData) => {
        newData = acctualData.data;
        displayData(newData);
    })
    .catch((error) => {
        console.log(error);
    })

let cont = document.getElementById("container");
let productDetail = JSON.parse(localStorage.getItem("productDetail")) || [];
// console.log(productDetail.length)
if (productDetail.length != 0) {
    productDetail.splice(0, productDetail.length);
}

function displayData(data) {
    cont.innerHTML = null;
    data.forEach((element, index) => {
        let cart = document.createElement("div");
        let image = document.createElement("img");
        image.setAttribute("src", element.image);
        let ankar = document.createElement("a");

        ankar.addEventListener("click", () => {
            productDetail.push(element);
            localStorage.setItem("productDetail", JSON.stringify(productDetail));
            ankar.setAttribute("href", "product.html");
        })

        let detail = document.createElement("p");
        detail.innerText = element.detail;
        let price = document.createElement("h3");
        price.innerText = "$" + element.price;
        let discount = document.createElement("h5");
        discount.innerText = element.discount + "%";
        let spanTag = document.createElement("span");
        spanTag.innerText = "OFF";
        let divfor = document.createElement("div");
        divfor.append(discount, spanTag);
        let sale = document.createElement("h4");
        sale.innerText = element.sale

        ankar.append(image, detail);
        cart.append(ankar, price, divfor, sale);
        cont.append(cart);
    })
}
// displayData(productlist)

////////////////////////////////////////////////////////////
document.getElementById("bordery").addEventListener("input", (e) => {
    let input = e.target.value.toLowerCase();
    let filterData = newData.filter((el, index) => {
        return el.detail.toLowerCase().includes(input);
    })
    displayData(filterData);
})

////////////////////////////////////////////////////////////////
const mainhead = document.getElementById("navbar");
const lastEle = document.querySelector(".copyright");

const scrollElement = document.createElement("div");

scrollElement.classList.add("scrollTop_style");

scrollElement.innerHTML = `<i class="fa-solid fa-arrow-up scorll-top"></i>`;

lastEle.after(scrollElement);

scrollElement.addEventListener("click", () => {
    mainhead.scrollIntoView({ behavior: "smooth" })
})