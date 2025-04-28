const timerEl = document.getElementById('timer')

let timeCounter = parseInt(timerEl.textContent)

const timer = setInterval(function () {
    timerEl.textContent = --timeCounter

    if (timeCounter <= 0) {
        clearInterval(timer)
        setTimeout(function () {
            alert('Вы победили в конкурсе!')
        }, 0)
    }
}, 100)