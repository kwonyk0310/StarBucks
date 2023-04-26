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

const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); // 2023
