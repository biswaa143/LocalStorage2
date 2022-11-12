let form = document.getElementsByClassName("userForm")[0];
console.log(form);
let store = localStorage;

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phoneNumber = document.getElementById("phoneNumber");

  let user = {
    name: name.value,
    email: email.value,
    phoneNumber: phoneNumber.value,
  };

  localStorage.setItem("user", JSON.stringify(user));
});