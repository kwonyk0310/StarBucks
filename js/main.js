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







