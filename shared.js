const backdrop = document.querySelector('.backdrop');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');
const ctaButton = document.querySelector('.main-nav__item--cta')

// console.dir(modalButton)

for (let i = 0; i < selectPlanButtons.length; i++ ) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.classList.add('open');
        backdrop.style.display = 'block';
        setTimeout(function() {
            backdrop.classList.add('open');
        }, 10);
    })
}

backdrop.addEventListener('click', function() {
    mobileNav.classList.remove('open')
    closeModal()
})

if (modalButton) {
    modalButton.addEventListener('click', closeModal)
}

function closeModal() {
    if (modal) {
        modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    backdrop.style.display = 'none';
    setTimeout(function() {
        backdrop.style.display = 'none';
    }, 200);
}

toggleButton.addEventListener('click', function() {
    mobileNav.classList.add('open');
    backdrop.style.display = 'block';
    setTimeout(function() {
        backdrop.classList.add('open');
    }, 10);
})

ctaButton.addEventListener('animationstart', function() {
    console.log('Animation started', event)
})

ctaButton.addEventListener('animationend', function() {
    console.log('Animation end', event)
})

ctaButton.addEventListener('animationiteration', function() {
    console.log('Animation iteration', event)
})