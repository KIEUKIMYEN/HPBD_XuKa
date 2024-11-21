// Thêm hiệu ứng động cho các đoạn văn chúc
document.addEventListener('DOMContentLoaded', function() {
    const message = document.querySelector('.birthday-message');
    const wishes = document.querySelectorAll('.wishes');

    // Thêm hiệu ứng cho từng câu chúc sau khi tiêu đề xuất hiện
    setTimeout(function() {
        wishes.forEach(function(wish, index) {
            setTimeout(function() {
                wish.style.animation = 'fadeIn 3s ease-out forwards';
            }, index * 1000); // Delay hiệu ứng theo thứ tự
        });
    }, 3000); // Sau khi tiêu đề xuất hiện 3s
});
