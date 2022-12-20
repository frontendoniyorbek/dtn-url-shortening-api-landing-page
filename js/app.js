const nav = document.querySelector('nav')
const toggleBtn = document.querySelector('.toggle-btn')
const toggleBtnImg = document.querySelector('.toggle-btn img')

toggleBtn.addEventListener('click', () => {
    nav.classList.toggle('hidden')

    if (nav.classList.contains('hidden')) {
        toggleBtnImg.src = '../images/toggle.svg'
    } else {
        toggleBtnImg.src = '../images/close.svg'
    }
})