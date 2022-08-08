
let allSpan = document.querySelectorAll('span')
let divColor = document.querySelector('.local-color')
if (window.localStorage.color) {
  divColor.style.backgroundColor = window.localStorage.color
  allSpan.forEach(function (span) {
    span.classList.remove('active')
  })
  document
    .querySelector(`[data-color=${window.localStorage.color}]`)
    .classList.add('active')
}

allSpan.forEach(function (span) {
  span.addEventListener('click', function (e) {
    // console.log(e.currentTarget.dataset.color)
    // remove active class form all spans
    allSpan.forEach(function (span) {
      span.classList.remove('active')
    })
    e.currentTarget.classList.add('active')
    // add current color to loacal storage
    window.localStorage.setItem('color', e.currentTarget.dataset.color)
    divColor.style.backgroundColor = window.localStorage.color
  })
})
