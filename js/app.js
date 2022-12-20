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

const elUrlShortener = document.querySelector('.url-shortner');
const elUrlShortnerForm = document.querySelector('.js-url-shortner-form');
const elUrlShortnerResults = document.querySelector('.url-shortner__results');


if (elUrlShortnerForm) {
    elUrlShortnerForm.addEventListener('submit', function (evt) {
        evt.preventDefault();

        elUrlShortnerResults.classList.add('url-shortner__results--open');
    });
}

if (elUrlShortener) {
    elUrlShortener.addEventListener('click', function (evt) {
        if (evt.target.matches('.js-copy-short-link-button')) {
            //Change button text
            evt.target.textContent = 'Copied!';

            // Change button bgcolor
            evt.target.classList.add('url-shortner__copy-button-copied');

            // Copy short link to clipboard
            navigator.clipboard.writeText(evt.target.previousElementSibling.textContent);

            // Reset button text and class after 1 secund
            setTimeout(function () {
                evt.target.textContent = 'Copy';
                evt.target.classList.remove('url-shortner__copy-button-copied');
            }, 1000);
        }

    });
}