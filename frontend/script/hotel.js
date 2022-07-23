let hotelData = [];

let query = JSON.parse(localStorage.getItem("searchQuery"));
let searchQuery = query.query;
console.log(searchQuery)


const url = `https://orbitz-ujjawal-api.herokuapp.com/hotels?q=${
  searchQuery ? searchQuery : "mumbai"
}`;

async function getData() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data)
    append(data);
    hotelData = data;

  } catch (err) {
    console.log(err);
  }
}

getData();

function append(data) {
  let box = document.getElementById("dbox");
  box.innerHTML = null;

  data.forEach(function (el) {
    let div = document.createElement("div");
    div.addEventListener("click", function () {
      localStorage.setItem("hoteldata", JSON.stringify(el));
      window.location.href = "hotelroom.html";
    });
    div.setAttribute("class", "dflex");
    let div1 = document.createElement("div");
    let image = document.createElement("img");
    image.src = el.imgSrc;

    let div2 = document.createElement("div");
    let price = document.createElement("h2");
    price.innerText = `$${el.price}`;
    price.setAttribute("class", "dprice");

    let hotel = document.createElement("h2");
    hotel.innerText = el.hotelName;

    let refund = document.createElement("h5");
    refund.innerText = el.refund;
    refund.setAttribute("class", "dgreen");
    let reserve = document.createElement("h5");
    reserve.innerText = el.reserve;
    reserve.setAttribute("class", "dgreen");

    let rating = document.createElement("h4");
    rating.innerText = el.ratingNum;
    rating.setAttribute("class", "drating");

    let ratingWord = document.createElement("h4");
    ratingWord.innerText = el.ratingWord;
    ratingWord.setAttribute("class", "dratingWord");

    var left = document.createElement("div");
    left.setAttribute("class", "leftItem");
    left.textContent = el.left;

    div1.setAttribute("class", "dimage");
    div2.setAttribute("class", "details");
    document.querySelector("#dbox").append(div);
    div.append(div1, div2);
    div1.append(image);
    div2.append(hotel, refund, reserve, price, left, ratingWord, rating);
  });
}

function changeHighToLow() {
  soreted = hotelData.sort(function (x, y) {
    if (x.price < y.price) {
      return 1;
    }
    if (x.price > y.price) {
      return -1;
    }
    return 0;
  });
  append(soreted);
  console.log(sorted);
  console.log(hotelData);
}

function changeLowToHigh() {
  soreted = hotelData.sort(function (x, y) {
    if (x.price < y.price) {
      return -1;
    }
    if (x.price > y.price) {
      return 1;
    }
    return 0;
  });
  append(soreted);
}

function changeFunc() {
  var value = document.querySelector("#dsortBy").value;
  console.log(value);
  if (value == "distance") {
    hotelData.sort(function (a, b) {
      return a.distance - b.distance;
    });
  } else if (value == "price") {
    hotelData.sort(function (a, b) {
      return a.price - b.price;
    });
  } else if (value == "rating") {
    hotelData.sort(function (a, b) {
      return b.ratingNum - a.ratingNum;
    });
  } else if (value == "recommended") {
    window.location.reload();
  }
  append(hotelData);
}

const api_key = "15cfe6d6afaacb073072f6ef67c295e9";
async function getingData() {
  let city = document.getElementById("city").value;
  let url = `https://api.openweathermap.org/data/2.5/weather?q=mumbai&appid=${api_key}`;

  let res = await fetch(url);
  let data = await res.json();
  append(data);
  console.log(data);
}

function appending(data) {
  let container = document.getElementById("container");
  container.innerHTML = null;
  let h3 = document.createElement("h3");
  h3.innerText = data.name;
  let sunr = document.createElement("img");
  sunr.src =
    "https://cdn-icons.flaticon.com/png/128/3920/premium/3920688.png?token=exp=1653738018~hmac=18369a64885124f81e80afc0e48fed78";

  container.append(h3, p1, p2, p3, p4, p5, sunr);

  let iframe = document.getElementById("gmap_canvas");
  iframe.src = `https://maps.google.com/maps?q=mumbai&t=&z=13&ie=UTF8&iwloc=&output=embed`;
}
