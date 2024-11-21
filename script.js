const correctPassword = "8683";

function checkPassword() {
    const inputPassword = document.getElementById("password").value;
    const lockScreen = document.getElementById("lock-screen");
    const birthdayContent = document.getElementById("birthday-content");
    const errorMessage = document.getElementById("error-message");

    if (inputPassword === correctPassword) {
        lockScreen.classList.add("hidden");
        birthdayContent.classList.remove("hidden");
    } else {
        errorMessage.textContent = "Sai mật khẩu! Thử lại nhé.";
    }
}
