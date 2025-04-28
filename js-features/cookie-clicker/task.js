const counterEl = document.getElementById("clicker__counter");
const cookieEl = document.getElementById("cookie");

let counter = parseInt(counterEl.textContent)

const NORMAL_WIDTH = cookieEl.width
const LARGE_WIDTH = cookieEl.width * 1.1

let isNormal = true

cookieEl.onclick = function () {
    counter++
    counterEl.textContent = counter

    if(isNormal) {
        cookieEl.width = LARGE_WIDTH
        isNormal = false
        setTimeout(function () {
            cookieEl.width = NORMAL_WIDTH
            isNormal = true
        }, 200)
    }
}