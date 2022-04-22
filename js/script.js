const contents = document.querySelectorAll('.program-line__content');
const descrs = document.querySelectorAll('.program-line__descr')

contents.forEach((elem) => {
    const title = elem.querySelector('.program-line__title')
    const descr = elem.querySelector('.program-line__descr')

    // Переключатель
    title.addEventListener('click', () => {
        // Убирает у всех описаний класс active при нажатии на title
        descrs.forEach((elem) => {
            elem.classList.remove('active')
        })
        descr.classList.toggle('active')
    })

})