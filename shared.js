const backdrop = document.querySelector('.backdrop');
const selectPlanButtons = document.querySelectorAll('.plan button')
const modal = document.querySelector('.modal')
const modalButton = document.querySelector('.modal__action--negative')

console.dir(modalButton)

// backdrop.style.display = 'block'

for (let i = 0; i < selectPlanButtons.length; i++ ) {
    selectPlanButtons[i].addEventListener('click', function() {
        modal.style.display = 'block';
        backdrop.style.display = 'block';
    })
}

backdrop.addEventListener('click', function() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
})

modalButton.addEventListener('click', function() {
    modal.style.display = 'none';
    backdrop.style.display = 'none';
})