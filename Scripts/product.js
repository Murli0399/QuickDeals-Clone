let productDetail = JSON.parse(localStorage.getItem("productDetail")) || [];
let container = document.getElementById("container");
let userName = JSON.parse(localStorage.getItem("userName"));
let matData = JSON.parse(localStorage.getItem(`${userName[0].uname}`)) || [];

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

function showData(data) {
    data.forEach((element, index) => {
        let imgdiv = document.createElement("div");
        imgdiv.setAttribute("class", "imgdiv");
        let image = document.createElement("img");
        image.setAttribute("src", element.image);

        let descdiv = document.createElement("div");
        descdiv.setAttribute("class", "descdiv");

        let detaildiv = document.createElement("div");
        detaildiv.setAttribute("class", "detaildiv")
        let detail = document.createElement("p");
        detail.innerText = element.detail;
        detaildiv.append(detail);

        let flashSale = document.createElement("div");
        flashSale.setAttribute("class", "flashSale");
        let sale = document.createElement("strong");
        sale.innerText = "FLASH SALE";
        flashSale.append(sale);

        let pricediv = document.createElement("div");
        pricediv.setAttribute("class", "pricediv");
        let priceText = document.createElement("p");
        priceText.innerText = "Price:";
        let price = document.createElement("h3");
        price.innerText = "$" + element.price;
        let discount = document.createElement("h5");
        discount.innerText = element.discount + " % OFF";
        pricediv.append(priceText, price, discount);

        let shipdiv = document.createElement("div");
        shipdiv.setAttribute("class", "shipdiv");
        let shipText = document.createElement("p");
        shipText.innerText = "Shipping:";
        let shiping = document.createElement("h4");
        shiping.innerText = "$1.99 to United States Via Registered Air Mail Ship between: Dec 19 - Dec 23, Estimated Shipping Time: 20-60 business days";
        shipdiv.append(shipText, shiping);

        let qutdiv = document.createElement("div");
        qutdiv.setAttribute("class", "qutdiv");
        let qutText = document.createElement("p");
        qutText.innerText = "Category:";
        let Category = document.createElement("h4");
        Category.innerText = element.category;
        qutdiv.append(qutText,Category);

        let addTocart = document.createElement("button");
        addTocart.setAttribute("id", "addTocart");
        addTocart.innerText = "Add to Cart";

        addTocart.addEventListener("click", () => {
            if (userName == null) {
                alert("Please Sign In First");
            }
            else {
                if (userName.length > 0) {
                    matData.push({...element,quantity:1});
                    localStorage.setItem(`${userName[0].uname}`, JSON.stringify(matData));
                    location.href = "cart.html";
                }
                else {
                    alert("Something is Wrong");
                }
            }
        })


        let buyNow = document.createElement("button");
        buyNow.setAttribute("id", "buyNow");
        buyNow.innerText = "Buy Now";
        buyNow.addEventListener("click", () => {
            if (userName == null) {
                alert("Please Sign In First");
            }
            else {
                if (userName.length > 0) {
                    matData.push({...element,quantity:1});
                    localStorage.setItem(`${userName[0].uname}`, JSON.stringify(matData));
                    location.href = "cart.html";
                }
                else {
                    alert("Something is Wrong");
                }
            }
        })

        let linediv = document.createElement("div");
        linediv.setAttribute("class", "linediv");
        let firstlinediv = document.createElement("div");
        firstlinediv.setAttribute("class", "firstlinediv");

        let img1 = document.createElement("img");
        img1.setAttribute("src", "https://css.gbtcdn.com/imagecache/gbw/img/site/paypal@.png");
        let img2 = document.createElement("img");
        img2.setAttribute("src", "https://uidesign.gbtcdn.com/GB/images/others/GB_brandpic/mm/VISA.png?imbypass=true");
        let img3 = document.createElement("img");
        img3.setAttribute("src", "https://uidesign.gbtcdn.com/GB/images/others/GB_brandpic/mm/mc_vrt_opt_pos_73_2x.png?imbypass=true");
        firstlinediv.append(img1, img2, img3);

        let secondlinediv = document.createElement("div");
        secondlinediv.setAttribute("class", "secondlinediv");
        let supportsys1 = document.createElement("p");
        supportsys1.innerText = "Tax Info";
        supportsys1.addEventListener("click", () => {
            document.getElementById("supportsys1").style.display = "block";
        })
        let supportsys2 = document.createElement("p");
        supportsys2.innerText = "Price Protection";
        supportsys2.addEventListener("click", () => {
            document.getElementById("supportsys2").style.display = "block";
        })
        let supportsys3 = document.createElement("p");
        supportsys3.innerText = "Price Disclaimer";
        supportsys3.addEventListener("click", () => {
            document.getElementById("supportsys3").style.display = "block";
        })
        let supportsys4 = document.createElement("p");
        supportsys4.innerText = "Report Item";
        supportsys4.addEventListener("click", () => {
            document.getElementById("supportsys4").style.display = "block";
        })

        secondlinediv.append(supportsys1, supportsys2, supportsys3, supportsys4);

        linediv.append(firstlinediv, secondlinediv);

        descdiv.append(detaildiv, flashSale, pricediv, shipdiv, qutdiv, addTocart, buyNow, linediv)
        imgdiv.append(image);
        container.append(imgdiv, descdiv);
    });
}

showData(productDetail);
// ---------------------------------------

const mainhead = document.getElementById("navbar");
const lastEle = document.querySelector(".copyright");

const scrollElement = document.createElement("div");

scrollElement.classList.add("scrollTop_style");

scrollElement.innerHTML = `<i class="fa-solid fa-arrow-up scorll-top"></i>`;

lastEle.after(scrollElement);

scrollElement.addEventListener("click", () => {
    mainhead.scrollIntoView({behavior: "smooth"})
})