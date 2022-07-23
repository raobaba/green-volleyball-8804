

var container = document.getElementById("container");
container.style.width = "100%";
container.style.height = "650px";
setTimeout(function(){
    var img = document.createElement("img");
    img.src = "https://c.tenor.com/xnZaQ3O98dMAAAAC/thinking-processing.gif";
    img.style.width = "100%"
    img.style.height = "650px";
    img.style.marginLeft = "20px";
    container.append(img);
 },0);
 setTimeout(function(){
   container.innerText = null;
  var img = document.createElement("img");
  img.src = "https://c.tenor.com/xVfFIHxAzW4AAAAC/success.gif";
  img.style.width = "100%"
  img.style.height = "650px";
  img.style.marginLeft = "20px";
  container.append(img);
 },4000)