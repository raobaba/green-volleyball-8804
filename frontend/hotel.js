
let wallet=JSON.parse(localStorage.getItem("user"))

const url=`https://orbitz-ujjawal-api.herokuapp.com/hotels`
async function getData() {
    try {
        let res = await fetch(url);
        let data=await res.json();
        append(data)
     console.log(data)
    }
catch (err){
    console.log(err)
}

}

getData()

// let arr=JSON.parse(localStorage.getItem("purchase"))||[]

function append(data){
let box=document.getElementById("box");
// let details=document.getElementById("dfilter");
// data.sort(function(a,b){
//     return a.price-b.price;
// })

// data=data.filter(function(el){
//     console.log(data)
// })

data.forEach(function(el){

    let div=document.createElement("div")
    div.addEventListener("click", function(){
        localStorage.setItem("nitesh",JSON.stringify(el));
    })
    div.setAttribute("class", "dflex")
    let div1=document.createElement("div")
let image=document.createElement("img");
image.src=el.imgSrc;


let div2=document.createElement("div")
let price=document.createElement("p");
price.innerText=`$ ${el.price}`

let hotel=document.createElement("h1")
hotel.innerText=el.hotelName;

let refund=document.createElement("h5")
refund.innerText=el.refund;
let reserve=document.createElement("h5")
reserve.innerText=el.reserve;


let rating=document.createElement("p");
rating.innerText=el.ratingNum;


let ratingWord=document.createElement("p")
ratingWord.innerText=el.ratingWord;

div1.setAttribute("class","dimage")   
 div2.setAttribute("class","details")    
 document.querySelector("#box").append(div)
 div.append(div1,div2)
div1.append(image)
div2.append(hotel,price,refund,reserve,ratingWord,rating,);


 })


}

