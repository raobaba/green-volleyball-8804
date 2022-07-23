var first = JSON.parse(localStorage.getItem("localdataroom"));
var second = JSON.parse(localStorage.getItem("hoteldata"));
var third = JSON.parse(localStorage.getItem("searchQuery"));
console.log(first);
console.log(second);
let box = document.createElement("div");
let img = document.createElement("img");
img.style.width = "100%";
img.style.borderRadius = "5px";
img.style.height = "200px";
img.src = second.imgSrc;
let box1 = document.createElement("div");
let ratingNum = document.createElement("h3");
ratingNum.style.marginLeft = "20px";
ratingNum.style.marginTop = "-1px"
let ratingWord = document.createElement("p");
ratingWord.style.fontSize = "20px";
ratingWord.style.marginTop = "-1px"
ratingWord.style.color = "grey";
ratingNum.innerText = `${second.ratingNum}/5`;
ratingWord.innerText = second.ratingWord;
box1.append(ratingNum,ratingWord);
box1.style.display = "flex";
box1.style.gap = "10px";
let clean = document.createElement("p")
clean.innerText = "Guest rated this property 4.7/5 for cleaniness";
clean.style.marginLeft = "40px";
clean.style.color = "grey";
clean.style.marginTop = "-5px";
let box2 = document.createElement("div");
let room = document.createElement("p");
room.style.color = "grey";
room.innerText = `1Room: ${first.bed}`;
let benefit = document.createElement("p");
benefit.style.color = "grey";
benefit.innerText = first.wifi_bf;
box2.append(room,benefit);
box2.style.display = "flex";
box2.style.gap = "20px"
box2.style.marginLeft = "40px";
box2.style.marginTop = "-25px";
let box3 = document.createElement("div");
let checkin = document.createElement("h4");
checkin.innerText = "Check in";
checkin.style.marginTop = "-1px"
let checkindate = document.createElement("p");
checkindate.innerText = "Mon, july 18";
checkindate.style.marginTop = "-1px"
box3.append(checkin,checkindate);
box3.style.display = "flex";
box3.style.gap = "10px";
box3.style.marginLeft = "30px";
let box4 = document.createElement("div");
let checkout = document.createElement("h4");
checkout.innerText = "Check Out";
checkout.style.marginTop = "-1px";
let checkoutdate = document.createElement("p");
checkoutdate.innerText = "Sat, july 23";
checkoutdate.style.marginTop = "-1px";
box4.append(checkout,checkoutdate);
box4.style.display = "flex";
box4.style.gap = "10px";
box4.style.marginLeft = "30px";
let stay = document.createElement("p");
stay.innerText = "5 night stay";
stay.style.marginTop = "-5px";
stay.style.marginLeft = '27px';
stay.style.color = "grey";
box.append(img,box1,clean,box2,box3,box4,stay);
document.getElementById("appendone").append(box);


let div = document.createElement("div");
let h2 = document.createElement("h2");
h2.innerText = "Price Details";
h2.style.marginLeft = "40px";
let div1 = document.createElement("div");
div1.style.width = "90%";
div1.style.height = "130px";
div1.style.margin = "auto";
div1.style.borderLeft = "none";
div1.style.borderRight = "none";
div1.style.boxShadow = "rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgb(209, 213, 219) 0px 0px 0px 1px inset"
let div2 = document.createElement("div");
let roomnight = document.createElement("p");
roomnight.innerText = "1 room * 5 night";
roomnight.style.color = "greyblack";
roomnight.style.fontSize = "19px";
let price = document.createElement("p");
price.innerText = `$ ${+(second.price)*5}`;
price.style.fontSize = "19px";
div2.append(roomnight,price);
div2.style.display = "flex";
div2.style.gap = "233px";
let average = document.createElement("p");
average.innerText = `$ ${second.price} average per night`;
average.style.marginTop = "-5px";
average.style.color = "grey";
let div3 = document.createElement("div");
let tax = document.createElement("p");
tax.innerText = "Taxes";
tax.style.fontSize = "19px";
let taxprice = document.createElement("p");
taxprice.innerText = "$ 20%";
taxprice.style.fontSize = "19px";
div3.style.display = "flex";
div3.style.gap = "315px";
div3.style.marginTop = "-20px"
div3.append(tax,taxprice);
div1.append(div2,average,div3);
let div4 = document.createElement("div");
let total = document.createElement("h3");
total.innerText = "Total";
let taxprices = ((+(second.price)*20)/100)*5;
let totalPrice = document.createElement("h3");
totalPrice.innerText = `$ ${taxprices+second.price*5}`;
div4.append(total,totalPrice);
div4.style.display = "flex";
div4.style.gap = "290px";
div4.style.marginLeft = "40px";
let div5 = document.createElement("div");
let pay = document.createElement("p");
pay.innerText = "Pay Now";
pay.style.fontSize = "19px";
pay.style.color = "rgb(47,112,0)";
let doller = document.createElement("p");
doller.innerText = "$ 0.00";
doller.style.fontSize = "19px";
doller.style.color = "rgb(47,112,0)";
div5.append(pay,doller);
div5.style.display = "flex";
div5.style.gap = "260px";
div5.style.marginLeft = "40px";
div5.style.marginTop = "-25px";
let div6 = document.createElement("div");
let payat = document.createElement("p");
payat.innerText = "Pay at Property";
let totalAgain = document.createElement("p");
totalAgain.innerText = `$ ${taxprices+second.price*5}`;
div6.append(payat,totalAgain);
div6.style.display = "flex";
div6.style.gap = "240px";
div6.style.marginLeft = "40px";
div6.style.marginTop = "-25px";
let ptag = document.createElement("p");
ptag.innerText = "Rates quoted in US dollars are based on current exchange rates, which may vary at the time of travel. The property will charge you the full amount of $546.71 in Indian rupees (₹43,660.00)."
ptag.style.fontSize = "13px";
ptag.style.width = "400px";
ptag.style.marginLeft = "35px";
ptag.style.color = "grey";
div.append(h2,div1,div4,div5,div6,ptag);
document.getElementById("appendtwo").append(div);




   


// https://c.tenor.com/xnZaQ3O98dMAAAAC/thinking-processing.gif
// https://c.tenor.com/xVfFIHxAzW4AAAAC/success.gif
var payNav = document.getElementById("payNav");
var paypage = document.getElementById("paypage");

function roomBooking(){
   window.location.href = "success.html";
}