let url = `https://orbitz-ujjawal-api.herokuapp.com/rooms`
let url = `http://fake-hotel-api.herokuapp.com/api/hotels`
fetch(url).then(function (res) {
    return res.json();
}).then(function (data) {
    console.log(data)
    createRoom(data)

}).catch(function (err) {
    console.log(err)
})

// imgDiv1

let createRoom = (Data) => {

    Data.map(function (elem) {

        var mainDiv = document.createElement("div");
        mainDiv.style.backgroundColor = "white";
        mainDiv.setAttribute("id", "mainDiv");

        var div_1 = document.createElement("div");
        var img = document.createElement("img");
        img.setAttribute("src", elem.img);
        img.style.width = "330.667px";
        img.style.height = "141.7px";

        var headDiv = document.createElement("div");
        headDiv.setAttribute("class", "headDiv");
        headDiv.textContent = elem.roomName;
        var iconDiv = document.createElement("div");
        iconDiv.setAttribute("id", "iconDiv");

        var sqft = document.createElement("div");
        sqft.textContent = " " + elem.sqFt;
        sqft.setAttribute("class", "fas fa-vector-square");
        sqft.setAttribute("id", "const");

        var sleeps = document.createElement("div");
        sleeps.textContent = " " + elem.sleep;
        sleeps.setAttribute("class", "fas fa-user-friends");
        sleeps.setAttribute("id", "const");

        var bed = document.createElement("div");
        bed.textContent = " " + elem.bed;
        bed.setAttribute("class", "fas fa-bed");
        bed.setAttribute("id", "const");

        var parking = document.createElement("div");
        parking.textContent = " " + elem.parking;
        parking.setAttribute("class", "fas fa-parking");
        parking.setAttribute("id", "const");

        var reserve = document.createElement("div");
        reserve.textContent = " " + elem.reserve;
        reserve.setAttribute("class", "fas fa-check");
        reserve.setAttribute("id", "const");

        var refundDiv = document.createElement("div");
        refundDiv.textContent = " " + elem.refund;
        refundDiv.setAttribute("id", "refund");
        refundDiv.setAttribute("class", "fas fa-info-circle");

        var details = document.createElement("div");
        details.textContent = " " + elem.details;
        details.setAttribute("id", "details");
        details.setAttribute("class", "fas fa-chevron-right");
        var line = document.createElement("hr");
        line.style.border = "1px solid #C7C7C7";

        var extra = document.createElement("div");
        extra.textContent = elem.extra;
        extra.setAttribute("class", "headDiv");

        var extraDiv = document.createElement("div");
        extraDiv.setAttribute("id", "extraDiv");

        var flexDiv = document.createElement("div");
        var buttn = document.createElement("input");
        buttn.setAttribute("type", "radio")

        var btn_span = document.createElement("span");
        btn_span.textContent = " " + elem.inter;

        var innerPrice = document.createElement("div")
        innerPrice.textContent = "+$" + elem.interCharge;
        flexDiv.append(buttn, btn_span);
        extraDiv.append(flexDiv, innerPrice);

        var wifiDiv = document.createElement("div");
        wifiDiv.setAttribute("id", "extraDiv");
        var flexWifiDiv = document.createElement("div");
        var buttn_w = document.createElement("input");
        buttn_w.setAttribute("type", "radio")
        var btn_W_span = document.createElement("span");
        btn_W_span.textContent = " " + elem.wifi;
        var innerPrice_w = document.createElement("div")
        innerPrice_w.textContent = "+$" + elem.wifiCharge;
        flexWifiDiv.append(buttn_w, btn_W_span);
        wifiDiv.append(flexWifiDiv, innerPrice_w);

        var bfDiv = document.createElement("div");
        bfDiv.setAttribute("id", "extraDiv");
        var flexBfDiv = document.createElement("div");
        var buttn_bf = document.createElement("input");
        buttn_bf.setAttribute("type", "radio")
        var btn_bf_span = document.createElement("span");
        btn_bf_span.textContent = " " + elem.wifi_bf;
        var innerPrice_bf = document.createElement("div")
        innerPrice_bf.textContent = "+$" + elem.bfCharge;
        flexBfDiv.append(buttn_bf, btn_bf_span);
        bfDiv.append(flexBfDiv, innerPrice_bf);

        var lastReserve_mainDiv = document.createElement("div");
        lastReserve_mainDiv.setAttribute("id", "lastReserve_mainDiv");

        // final price div--------------------------------------
        var lastDiv = document.createElement("div");
        lastDiv.setAttribute("id", "lastDiv");
        var price = document.createElement("div");
        price.style.fontSize = "18px"
        price.style.color = "black"
        price.style.fontWeight = "900";
        price.textContent = "$" + elem.room_price;
        var night = document.createElement("div");
        night.textContent = elem.night;
        var total = document.createElement("div");
        total.style.fontWeight = "600"
        total.textContent = "$" + elem.total + " total";
        var tax = document.createElement("div");
        tax.textContent = elem.includes;
        lastDiv.append(price, night, total, tax)
        //----------------------------------------------------

        //reserve div-----------------------------------
        var lasrReserveDiv = document.createElement("div");
        lasrReserveDiv.setAttribute("id", "lasrReserveDiv");
        var resBtn = document.createElement("button");
        resBtn.textContent = "Reserve";
        var left_D = document.createElement("div");
        left_D.textContent = "we have 5 left";
        lasrReserveDiv.append(left_D, resBtn);
        resBtn.addEventListener("click", function () {
            // window.location.href = "payment.html";
        });
        //---------------------------------------------------
        lastReserve_mainDiv.append(lastDiv, lasrReserveDiv);
        iconDiv.append(sqft, sleeps, bed, parking, reserve)
        div_1.append(img, headDiv, iconDiv, refundDiv, details, line, extra, extraDiv, wifiDiv, bfDiv, lastReserve_mainDiv);
        mainDiv.append(div_1);
        document.querySelector("#roomList").append(mainDiv);
    });
    // document.querySelector("#leftDiv>img").style.cursor = "pointer";
    // document.querySelector("#leftDiv>img").addEventListener("click", function () {
    //     window.location.href = "signedInPage.html";
    // });
    // document.querySelector("#mainOut").addEventListener("click", function () {
    //     window.location.href = "index.html";
    // });


 
}
let localdata=JSON.parse(localStorage.getItem("nitesh"))
let nameappend=(localdata)=>{
    localdata.forEach(el => {
        let name=document.querySelector("#hotname")=null;
        name.innerText=el.hotelname
        let img=document.querySelector("#hotimg")=null;
        img.src=el.imgSrc
    });
}
nameappend()
