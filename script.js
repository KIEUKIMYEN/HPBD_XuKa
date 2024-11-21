const correctPassword = "8683";

function checkPassword() {
    const inputPassword = document.getElementById("password").value;
    const lockScreen = document.getElementById("lock-screen");
    const birthdayContent = document.getElementById("birthday-content");
    const errorMessage = document.getElementById("error-message");

    if (inputPassword === correctPassword) {
        // Ẩn màn hình khóa và hiển thị nội dung sinh nhật
        lockScreen.classList.add("hidden");
        birthdayContent.classList.remove("hidden");

        // Khởi tạo hiệu ứng pháo bông
        const fireworks = new Fireworks({
            speed: 3,
            acceleration: 2,
            friction: 0.98,
            gravity: 1.5,
            particles: 100,
            trace: 3,
            explosion: 5,
            brightness: 1,
        });

        fireworks.start(); // Bắt đầu hiệu ứng pháo bông

        // Tạo hiệu ứng bong bóng
        createBubbles(); // Tạo bong bóng
    } else {
        errorMessage.textContent = "Sai mật khẩu! Thử lại nhé.";
    }
}

// Tạo hiệu ứng bong bóng
function createBubbles() {
    const balloonElement = document.createElement('div');
    balloonElement.className = 'balloon';
    document.body.appendChild(balloonElement);

    // Tạo nhiều bong bóng ngẫu nhiên
    for (let i = 0; i < 20; i++) {
        setTimeout(() => {
            balloonElement.style.left = `${Math.random() * 100}%`;
            balloonElement.style.animationDuration = `${Math.random() * 4 + 3}s`; // Độ lâu của bong bóng nổi
            balloonElement.style.animationDelay = `${Math.random() * 3}s`; // Độ trễ của bong bóng
        }, i * 100); 
    }
}


