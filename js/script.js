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

function toggleMenu() {
    document.addEventListener("DOMContentLoaded", function () {
        const hamburger = document.querySelector(".hamburger-menu");
        const navLinks = document.querySelector(".nav-links");
    
        hamburger.addEventListener("click", function () {
            if (navLinks.style.display === "flex") {
                navLinks.style.display = "none";
            } else {
                navLinks.style.display = "flex";
            }
        });
    });
    
}

/* 관리자 */
function admLogout(){
    if(confirm("로그아웃 하시겠습니까?")){
        location.href="/admin/admLogin.html";
	}
}

function goPage(dirPath, fileNm){
    location.href="/admin/"+dirPath+"/"+fileNm+".html";
}
function goCommonPage(dirPath, fileNm){
    location.href= "/"+dirPath+"/"+fileNm+".html";
}

/* 리모컨 */

document.addEventListener("DOMContentLoaded", function () {
    const scrollTopBtn = document.getElementById("scrollTopBtn");

    // 스크롤 이벤트 감지
    window.addEventListener("scroll", function () {
        if (window.scrollY > 200) {
            scrollTopBtn.style.display = "flex";
        } else {
            scrollTopBtn.style.display = "none";
        }
    });

    // 버튼 클릭 시 최상단으로 스크롤
    scrollTopBtn.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});


