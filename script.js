document.getElementById('celebrateBtn').addEventListener('click', function() {
    // Bắn pháo hoa hiệu ứng
    launchFireworks();
    // Bóng bay hiệu ứng
    releaseBalloons();
});

function launchFireworks() {
    // Tạo hiệu ứng bắn pháo hoa
    const fireworks = document.createElement('div');
    fireworks.style.position = 'absolute';
    fireworks.style.top = `${Math.random() * 100}%`;
    fireworks.style.left = `${Math.random() * 100}%`;
    fireworks.style.width = '10px';
    fireworks.style.height = '10px';
    fireworks.style.backgroundColor = '#FFD700';
    fireworks.style.borderRadius = '50%';
    fireworks.style.animation = 'fireworkExplosion 1s forwards';
    document.body.appendChild(fireworks);

    setTimeout(() => {
        fireworks.remove();
    }, 1000);
}

function releaseBalloons() {
    for (let i = 0; i < 5; i++) {
        let balloon = document.createElement('div');
        balloon.classList.add('balloon');
        balloon.style.left = `${Math.random() * 100}%`;
        balloon.style.animationDuration = `${Math.random() * 3 + 3}s`;
        document.getElementById('balloons').appendChild(balloon);
    }

    setTimeout(() => {
        document.getElementById('balloons').innerHTML = '';
    }, 5000);
}

// Hiệu ứng pháo hoa
@keyframes fireworkExplosion {
    0% {
        transform: scale(0);
        opacity: 1;
    }
    100% {
        transform: scale(10);
        opacity: 0;
    }
}

// Hiệu ứng bóng bay
@keyframes floatBalloons {
    0% {
        transform: translateY(0) rotate(0);
    }
    100% {
        transform: translateY(-100vh) rotate(360deg);
    }
}
