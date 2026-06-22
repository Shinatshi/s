let isLogin = false;
function handle() {
    let inputs = document.querySelectorAll("input");
    let input_values = [];

    for (let i = 0; i < inputs.length; i++) {
        input_values.push(inputs[i].value);
    }

    console.log(isLogin ? "LOGIN:" : "REGISTER:", input_values);

    window.location.href = "index.html";
}
let button = document.querySelector(".btn");
let switchBtn = document.querySelector(".switch");
button.addEventListener("click", handle);
switchBtn.addEventListener("click", function () {
    isLogin = !isLogin;

    let title = document.querySelector("h1");
    let btn = document.querySelector(".btn");

    if (isLogin) {
        title.textContent = "Вход";
        btn.textContent = "Войти";
        switchBtn.textContent = "Регистрация";
    } else {
        title.textContent = "Регистрация";
        btn.textContent = "Зарегистрироваться";
        switchBtn.textContent = "Войти";
    }
});



