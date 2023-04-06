// searchEl 변수 선언, .search라는 클래스를 가진 요소
const searchEl = document.querySelector('.search');
// const searchInputEl = document.querySelector('.search input')
// 아래와 같이 바꿔줄 수 있다. 이미 위에서 찾아놓은 요소를 활용하는 것이기 때문에 훨씬 더 효율적
const searchInputEl = searchEl.querySelector('input')

searchEl.addEventListener('click', function () {
    searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function () {
    searchEl.classList.add('focused');
    searchInputEl.setAttribute('placeholder', '통합검색')
});
searchInputEl.addEventListener('blur', function () {
    searchEl.classList.remove('focused');
    searchInputEl.setAttribute('placeholder', '')
});

const badgeEl = document.querySelector('header .badges')

window.addEventListener('scroll', _.throttle(function (){
    console.log(window.scrollY);
    if(window.scrollY > 500){
        //배지 숨기기
        // gsap.to(요소, 지속시간, 옵션);
        gsap.to(badgeEl, .6, {
            opacity : 0,
            display : 'none'
        });
    }else {
        //배지 보이기
        gsap.to(badgeEl, .6, {
            opacity : 1,
            display: 'block'
        });
    }
}, 300));
//_.throttle(함수, 시간)


const fadeEls = document.querySelectorAll('.visual .fade-in')
fadeEls.forEach(function (fadeEl, index){
    // gsap.to(요소, 지속시간, 옵션);
    gsap.to(fadeEl, 1, {
        delay : ( index+1 ) * .7,
        opacity : 1
    });
});

//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container', {
    direction: 'vertical',
    autoplay: true,
    loop: true
});
new Swiper('.promotion .swiper-container', {
    direction: 'horizontal', // default, 작성 안해도 됨
    slidesPerView: 3, //한 번에 보여줄 슬라이드 갯수
    spaceBetween: 10, //슬라이드 사이 간격 (px)
    centeredSlides: true, //1번 슬라이드가 가운데 오도록
    loop: true,
    autoplay: { // 딜레이 5초
        delay: 5000
    },
    pagination: {
        el: '.promotion .swiper-pagination',// 페이지 번호 요소 선택자
        clickable: true // 사용자 페이지 번호 요소 제어 가능 여부
    },
    navigation: {
        prevEl: '.promotion .swiper-prev',
        nextEl: '.promotion .swiper-next'
    }
});





