const username = document.getElementById("username");
const password = document.getElementById("password");
const login = document.getElementById("login");
const signup = document.getElementById("signup");
const confirmPassword = document.getElementById("confirmpassword");

if (login) {
  login.addEventListener("click", function (e) {
    e.preventDefault();

    if(username.value == "" || password.value =="" ) showAlert("Fields can't be empty");
    else{
       
    if (
      getFromLocalStorage("username") === username.value &&
      getFromLocalStorage("password") === password.value
    ) {
      window.location.href = "./login.html";
    } else {
      showAlert("Invalid credentials");
    }
    }
  });
}

if (signup) {
  signup.addEventListener("click", function () {    
    if(username.value == "" || password.value =="" ) showAlert("Fields can't be empty");
    else{
      
    if (password.value !== confirmPassword.value) {
      showAlert("password Doesn't match");
    } else {
      setInLocalStorage("username", username.value);
      setInLocalStorage("password", password.value);

      showAlert("Sign up Completed");
      username.value = "";
      password.value = "";
      confirmPassword.value = "";
    }

    }

  });
}

const setInLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};
const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

function showAlert(msg) {
	if (document.querySelector(".alert")) {
	} else {
		const alertDiv = document.createElement("div");
		alertDiv.classList.add("alert");
		const textnode = document.createTextNode(`${msg}`);
		alertDiv.appendChild(textnode);
		const box = document.querySelector(".box");
		box.insertBefore(alertDiv, username);

		setTimeout(() => {
			alertDiv.remove();
		}, 3000);
	}
}
