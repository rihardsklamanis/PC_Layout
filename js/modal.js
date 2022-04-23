const modalBtn = document.querySelectorAll('.modal__button')
const modal = document.querySelector('.modal')
const cross = document.createElement('img')
const modalContent = document.querySelector('.modal__inner')

modalContent.style.cssText = 'position: relative;'

// Создание крестика
cross.src = "./img/exitIcon.png"
cross.style.cssText = "cursor: pointer; height: 5rem; width: 5rem; position: absolute; top: 3rem; right: 3rem;"
modalContent.prepend(cross);

// Включатель модального окна
modalBtn.forEach(btn => {
    btn.addEventListener('click', () => {
        modal.style.display = 'flex'
    })
})

// Закрытие модального окна
modal.addEventListener('click', (event) => {
    const modalContent = event.target.closest('.modal__inner')
    if (!modalContent) {
        modal.style.display = ''
    }
})

// Закрымие модального окна на крестик
cross.addEventListener('click', (event) => {
    modal.style.display = ''
})