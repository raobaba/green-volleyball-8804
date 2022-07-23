let url = `https://orbitz-ujjawal-api.herokuapp.com/rooms`
// let url = `http://fake-hotel-api.herokuapp.com/api/hotels`
fetch(url).then(function (res) {
    return res.json();
}).then(function (data) {
    // console.log(data)
    createRoom(data)

}).catch(function (err) {
    console.log(err)
})

// imgDiv1
let roomlocal = []

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

            let roomdatalocal = localStorage.setItem("localdataroom", JSON.stringify(elem))
            // roomlocal.push(roomdatalocal)
            // console.log(roomdatalocal)
            window.location.href = "payment.html";
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
// var arr=[
//     {
//         id: "8efc9c52-e693-4c34-8963-8c834cd6b0f4",
//         name: "deserunt sint quia",
//         country: "Martinique",
//         city: "Theaburgh",
//         price: 781,
//         images: [
//           "http://lorempixel.com/640/480/city?27536",
//           "http://lorempixel.com/640/480/city?2598",
//           "http://lorempixel.com/640/480/city?26063",
//           "http://lorempixel.com/640/480/city?40263"
//         ],
//         date_start: "2022-07-14T06:40:02.001Z",
//         date_end: "2022-10-10T15:17:18.621Z",
//         stars: 5,
//         rating: 3.553312526801492,
//         description: "Deleniti dolores et est quam consequuntur et odit quia sed. Velit animi id cumque ab earum alias voluptatem tempore tenetur. Repellat aliquam repudiandae qui. Ea eum blanditiis iure molestiae."
//     }
// ]
// var local=localStorage.setItem("nitesh",JSON.stringify(arr))

let Ldata =JSON.parse(localStorage.getItem("hoteldata"))
// console.log(Ldata)
arrayl=[]
arrayl.push(Ldata)
// console.log(arrayl)
let nameappend = (arrayl) => {
    let name = document.querySelector(".hotName")
    let name1=document.querySelector(".hotelName")
    arrayl.forEach(el => {
        
        name.innerHTML = el.hotelName
        name1.innerHTML=el.hotelName
        let img = document.querySelector("#hotimg")
        img.src = el.imgSrc
        let rating = document.querySelector("#ratings")
        rating.innerText = el.ratingNum
        let price = document.querySelector("#pricestandard")
        // price.innerText=`$ ${el.price}`;

    });
}
nameappend(arrayl)
let datecheck=JSON.parse(localStorage.getItem("searchQuery"))
let arrdate=[]
arrdate.push(datecheck) 
console.log(datecheck)
let adddate=(arrdate)=>{
    // checkin=document.querySelector("#checkindate")
    let  checkin=document.querySelector('input[type="date"]')

    // console.log(checkin)
    let checkout=document.querySelector(`input[type="date"]`)
    arrdate.forEach(e=>{
        // console.log(typeof e.from)
        checkin.value=e.from
        // checkout.innerHTML=e.to
      

    })
}
adddate(arrdate)

function hotelpage(){
    window.location.href="hotel.html"
}