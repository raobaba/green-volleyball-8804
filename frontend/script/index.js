async function query() {
  let query = document.getElementById("query").value;
  let url = `https://orbitz-ujjawal-api.herokuapp.com/airports?q=${query}`;
  if (!query) {
    return append([]);
  }
  let responce = await fetch(url);
  let data = await responce.json();

  console.log(data);
  append(data);
}

let id;
function debouncing(func, delay) {
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}

function append(data) {
  let container = document.getElementById("container");
  let display = document.getElementsByClassName("search_box_third");
  display.innerHTML = null;

  container.innerHTML = null;
  data.forEach(function (el) {
    let div = document.createElement("div");
    div.style.boderbottom = "1px solid black";
    div.style.cursor = "pointer";
    div.style.margin = "5px";
    div.setAttribute("class", "search_div");

    div.addEventListener("click", function () {
      document.getElementById("query").value = `${el.name} - ${el.city}`;
      container.innerHTML = null;
    });

    let h3 = document.createElement("h5");
    h3.innerText = `${el.name} (${el.city})`;
    let p = document.createElement("p");
    p.innerText = el.state;
    div.append(h3, p);
    container.append(div);
  });
}

let search = document.getElementById("search");
search.addEventListener("click", setQueryLs);

function setQueryLs() {
  let query = document.getElementById("query").value;
  query = query.split("-")[1];
  let from = document.getElementById("date1").value;

  let to = document.getElementById("date2").value;

  let travelers = document.getElementById("travelers").value;

  let searchData = new Data(query, from, to, travelers);
  // console.log(searchData, "seach daqta");

localStorage.setItem("searchQuery", JSON.stringify(searchData));

  window.location.href = "hotel.html";
}

class Data {
  constructor(query, from, to, travelers) {
  this.query = query
    this.from =from
  this.to = to
   this.travelers = travelers
  }
}
