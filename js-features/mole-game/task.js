const deadEl = document.getElementById('dead')
const lostEl = document.getElementById('lost')

let moleCounter = 0
let failCounter = 0

function eventHoleClick() {
    if(this.className.includes('hole_has-mole')) {
        deadEl.textContent = ++moleCounter

    } else {
        lostEl.textContent = ++failCounter
    }

    if(moleCounter >= 10 || failCounter >= 5) {
        let msg = ''
        if(moleCounter >= 10) {
            msg = 'Победа!'
            deadEl.textContent = moleCounter
        }
        if(failCounter >= 5) {
            msg = 'Поражение!'
            lostEl.textContent = failCounter
        }
        alert(msg)

        moleCounter = 0
        failCounter = 0
        deadEl.textContent = 0
        lostEl.textContent = 0
        stop()
    }
}

const elHoleList = document.getElementsByClassName('hole')

for(const elHole of elHoleList) {
    elHole.onclick = eventHoleClick
}

