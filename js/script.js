// // script.js 파일 내용
// let currentImageIndex = 0;
// const images = document.querySelectorAll('.hero-img');
// const totalImages = images.length;

// // 이미지 전환 함수
// function changeImage() {
//     // 현재 이미지는 숨기고
//     images[currentImageIndex].classList.remove('active');
    
//     // 다음 이미지로 이동
//     currentImageIndex = (currentImageIndex + 1) % totalImages;
    
//     // 새로운 이미지는 표시
//     images[currentImageIndex].classList.add('active');
// }

// // 페이지 로드 시 첫 번째 이미지를 활성화
// window.onload = () => {
//     images[currentImageIndex].classList.add('active');
//     setInterval(changeImage, 3000); // 3000ms(3초)마다 이미지 변경
// };
