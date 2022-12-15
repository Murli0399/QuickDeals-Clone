let productDetail = JSON.parse(localStorage.getItem("productDetail"));
let container = document.getElementById("container");
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
        qutText.innerText = "QTY:";
        let increment = document.createElement("button");
        increment.innerText = "-";
        let quantity = document.createElement("h4");
        quantity.innerText = "0";
        let decrement = document.createElement("button");
        decrement.innerText = "+";
        qutdiv.append(qutText, increment, quantity, decrement);

        let addTocart = document.createElement("button");
        addTocart.setAttribute("id", "addTocart");
        addTocart.innerText = "Add to Cart";

        let buyNow = document.createElement("button");
        buyNow.setAttribute("id", "buyNow");
        buyNow.innerText = "Buy Now";

        let linediv = document.createElement("div");
        linediv.setAttribute("class", "linediv");
        let firstlinediv = document.createElement("div");
        firstlinediv.setAttribute("class", "firstlinediv");

        let img1 = document.createElement("img");
        img1.setAttribute("src","https://css.gbtcdn.com/imagecache/gbw/img/site/paypal@.png");
        let img2 = document.createElement("img");
        img2.setAttribute("src","https://uidesign.gbtcdn.com/GB/images/others/GB_brandpic/mm/VISA.png?imbypass=true");
        let img3 = document.createElement("img");
        img3.setAttribute("src","https://uidesign.gbtcdn.com/GB/images/others/GB_brandpic/mm/mc_vrt_opt_pos_73_2x.png?imbypass=true");
        firstlinediv.append(img1,img2,img3);

        let secondlinediv = document.createElement("div");
        secondlinediv.setAttribute("class", "secondlinediv");
        let supportsys1 = document.createElement("p");
        supportsys1.innerText = "Tax Info";
        supportsys1.addEventListener("click",() => {
            document.getElementById("supportsys1").style.display="block";
        })
        let supportsys2 = document.createElement("p");
        supportsys2.innerText = "Price Protection";
        let supportsys3 = document.createElement("p");
        supportsys3.innerText = "Price Disclaimer";
        let supportsys4 = document.createElement("p");
        supportsys4.innerText = "Report Item";

        secondlinediv.append(supportsys1,supportsys2,supportsys3,supportsys4);

        linediv.append(firstlinediv,secondlinediv);

        descdiv.append(detaildiv, flashSale, pricediv, shipdiv, qutdiv, addTocart, buyNow,linediv)
        imgdiv.append(image);
        container.append(imgdiv, descdiv);
    });
}

showData(productDetail);