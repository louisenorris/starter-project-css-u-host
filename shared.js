const backdrop = document.querySelector('.backdrop');
const selectPlanButtons = document.querySelectorAll('.plan button');
const modal = document.querySelector('.modal');
const modalButton = document.querySelector('.modal__action--negative');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

console.dir(modalButton)

// backdrop.style.display = 'block'

for (let i = 0; i < selectPlanButtons.length; i++ ) {
    selectPlanButtons[i].addEventListener('click', function() {
        // modal.style.display = 'block';
        // backdrop.style.display = 'block';
        modal.classList.add('open');
        backdrop.classList.add('open');
    })
}

backdrop.addEventListener('click', function() {
    // mobileNav.style.display = 'none';
    mobileNav.classList.remove('open')
    closeModal()
})

modalButton.addEventListener('click', closeModal)

function closeModal() {
    // modal.style.display = 'none';
    // backdrop.style.display = 'none';
    modal.classList.remove('open');
    backdrop.classList.remove('open');
}

toggleButton.addEventListener('click', function() {
    // mobileNav.style.display = 'block';
    // backdrop.style.display = 'block';
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
})