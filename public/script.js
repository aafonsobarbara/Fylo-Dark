const alert = document.querySelector(".alert");
console.log(alert);
alert.style.display = "none";
const btn = document.getElementById("btn");
console.log(btn);
const email = document.getElementById("email");
console.log(email);

const regex = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (!email.value.match(regex)) {
    alert.style.display = "block";
  } else alert.style.display = "none";
});
