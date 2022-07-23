const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");
togglePassword.addEventListener("click", function (e) {
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  this.classList.toggle("fa-eye-slash");
});

function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true) {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}

var regdUsers = JSON.parse(localStorage.getItem("user"));

let loginFun = () => {
  var enteremail = document.querySelector("#email").value;
  var enterpass = document.querySelector("#password").value;
  // console.log(enteremail,enterpass);
  // console.log(regdUsers);
  if (regdUsers === null) {
    alert("User doesn't Exists,SignUp First !");
    window.location.href = "signup.html";
    return;
  }

  let isUSerrExist = regdUsers.find(
    (elem) => elem.email === enteremail && elem.password === enterpass
  );
  if (!isUSerrExist) return alert("User Doesn't Exist");
  else {
    localStorage.setItem(
      "isAuth",
      JSON.stringify({ logged: true, userName: isUSerrExist?.first })
    );
    alert("You have successfully logged in.");
    window.location.href = "index.html";
  }
};
document.getElementById("continue").addEventListener("click", loginFun);
let forgotPass = () => {
  document.getElementById("loging").innerText = "";
  console.log("object");
  let box = document.createElement("div");
  box.style.display = "grid";
  let reset = document.createElement("h1");
  reset.innerText = "Reset Your Password";
  let pTag = document.createElement("p");
  pTag.style.fontSize = "20px";
  pTag.style.color = "grey";
  pTag.innerText = "Enter your email, and we’ll send you a link to reset";
  let ptag = document.createElement("p");
  ptag.innerText = " your password.";
  ptag.style.color = "grey";
  ptag.style.fontSize = "20px";
  ptag.style.marginTop = "-15px";
  let input = document.createElement("input");
  input.style.width = "400px";
  input.style.height = "45px";
  input.placeholder = "Email address";
  let botton = document.createElement("button");
  botton.innerText = "reset password";
  botton.style.width = "408px";
  botton.style.height = "45px";
  botton.style.marginTop = "20px";
  botton.style.backgroundColor = "rgb(235,182,196)";
  botton.style.color = "rgb(250,238,241)";
  botton.style.border = "none";
  botton.style.cursor = "pointer";
  botton.addEventListener("click", function () {
    resetPass();
  });
  box.append(reset, pTag, ptag, input, botton);
  document.getElementById("loging").append(box);
};
document.getElementById("forgot").addEventListener("click", forgotPass);

function resetPass() {
  clg;
}
