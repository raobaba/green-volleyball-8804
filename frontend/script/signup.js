const togglePassword = document.querySelector('#togglePassword');
  const password = document.querySelector('#password');
  togglePassword.addEventListener('click', function (e) {
    const type = password.getAttribute('type') === 'password' ? 'text' : 'password';
    password.setAttribute('type', type);
    this.classList.toggle('fa-eye-slash');
});

function myFunction() {
  var checkBox = document.getElementById("myCheck");
  var text = document.getElementById("text");
  if (checkBox.checked == true){
    text.style.display = "block";
  } else {
     text.style.display = "none";
  }
}

class EnterData {
  constructor(email,first,last,password){
      this.email = email,
      this.first = first,
      this.last = last,
      this.password = password
  }
}
let submitFun = () =>{
  let email = document.getElementById("email").value;
  let first = document.getElementById("first").value;
  let last = document.getElementById("last").value;
  let password = document.getElementById("password").value;
  let p1 = new EnterData(email,first,last,password);
  console.log(p1);
  localStorage.setItem("user",JSON.stringify(p1));
  document.getElementById("email").value = "";
  document.getElementById("first").value = "";
  document.getElementById("last").value = "";
  document.getElementById("password").value = "";
}
document.getElementById("continue").addEventListener("click",submitFun);
