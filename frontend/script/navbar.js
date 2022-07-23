import { navbar, footer_main, end } from "../components/navbar.js";


document.getElementById("navbar").innerHTML = navbar();
document.getElementById("footer_main").innerHTML = footer_main();
document.getElementById("end").innerHTML = end();

document.querySelector("#bt").addEventListener("click", () => {
  document.getElementById("myDropdown").classList.toggle("show");
});

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

// document.querySelector(".Dropbtn").addEventListener("click", ()=>{
//   document.getElementById("MyDropdown").classList.toggle("show");
//   })
//   window.onclick = function(event) {
//     if (!event.target.matches('.Dropbtn')) {
//       var dropdowns = document.getElementsByClassName("Dropdown-content");

//       for (var j = 0; j < dropdowns.length; j++) {
//         var openDropdown = dropdowns[j];
//         if (openDropdown.classList.contains('show')) {
//           openDropdown.classList.remove('show');
//         }
//       }
//     }
//   }
