window.addEventListener('load', function () {
    randomPosition()
    timerStart()
})

const card01 = document.querySelector('#card01')
const card02 = document.querySelector('#card02')
const card03 = document.querySelector('#card03')
const card04 = document.querySelector('#card04')
const card05 = document.querySelector('#card05')
const card06 = document.querySelector('#card06')
const card07 = document.querySelector('#card07')
const card08 = document.querySelector('#card08')
const card09 = document.querySelector('#card09')
const card10 = document.querySelector('#card10')
const card11 = document.querySelector('#card11')
const card12 = document.querySelector('#card12')
const card13 = document.querySelector('#card13')
const card14 = document.querySelector('#card14')
const card15 = document.querySelector('#card15')
const card16 = document.querySelector('#card16')


card01.addEventListener('click', turnCard01)
card02.addEventListener('click', turnCard02)
card03.addEventListener('click', turnCard03)
card04.addEventListener('click', turnCard04)
card05.addEventListener('click', turnCard05)
card06.addEventListener('click', turnCard06)
card07.addEventListener('click', turnCard07)
card08.addEventListener('click', turnCard08)
card09.addEventListener('click', turnCard09)
card10.addEventListener('click', turnCard10)
card11.addEventListener('click', turnCard11)
card12.addEventListener('click', turnCard12)
card13.addEventListener('click', turnCard13)
card14.addEventListener('click', turnCard14)
card15.addEventListener('click', turnCard15)
card16.addEventListener('click', turnCard16)


/*variaveis */

let score = 0
let attemps = 0
let cardSelected01
let cardSelected02


function randomPosition() {

    const imgCard01 = document.querySelector('#imgCard01')
    const imgCard02 = document.querySelector('#imgCard02')
    const imgCard03 = document.querySelector('#imgCard03')
    const imgCard04 = document.querySelector('#imgCard04')
    const imgCard05 = document.querySelector('#imgCard05')
    const imgCard06 = document.querySelector('#imgCard06')
    const imgCard07 = document.querySelector('#imgCard07')
    const imgCard08 = document.querySelector('#imgCard08')
    const imgCard09 = document.querySelector('#imgCard09')
    const imgCard10 = document.querySelector('#imgCard10')
    const imgCard11 = document.querySelector('#imgCard11')
    const imgCard12 = document.querySelector('#imgCard12')
    const imgCard13 = document.querySelector('#imgCard13')
    const imgCard14 = document.querySelector('#imgCard14')
    const imgCard15 = document.querySelector('#imgCard15')
    const imgCard16 = document.querySelector('#imgCard16')

    let cards = [
        './assets/icon/cards/tower.svg',
        './assets/icon/cards/skate.svg',
        './assets/icon/cards/moustache.svg',
        './assets/icon/cards/diamond.svg',
        './assets/icon/cards/comb.svg',
        './assets/icon/cards/bicycle.svg',
        './assets/icon/cards/bag.svg',
        './assets/icon/cards/arrow.svg',
        './assets/icon/cards/tower.svg',
        './assets/icon/cards/skate.svg',
        './assets/icon/cards/moustache.svg',
        './assets/icon/cards/diamond.svg',
        './assets/icon/cards/comb.svg',
        './assets/icon/cards/bicycle.svg',
        './assets/icon/cards/bag.svg',
        './assets/icon/cards/arrow.svg'
    ]

    let newArray = []

    while (cards.length > 0) {
        let randomNumber = Math.floor(Math.random() * cards.length)
        newArray.unshift(cards[randomNumber]);
        cards.splice(randomNumber, 1)
    }

    imgCard01.src = newArray[0]
    imgCard02.src = newArray[1]
    imgCard03.src = newArray[2]
    imgCard04.src = newArray[3]
    imgCard05.src = newArray[4]
    imgCard06.src = newArray[5]
    imgCard07.src = newArray[6]
    imgCard08.src = newArray[7]
    imgCard09.src = newArray[8]
    imgCard10.src = newArray[9]
    imgCard11.src = newArray[10]
    imgCard12.src = newArray[11]
    imgCard13.src = newArray[12]
    imgCard14.src = newArray[13]
    imgCard15.src = newArray[14]
    imgCard16.src = newArray[15]
}

function isEqual(card) {

    if (!cardSelected01) {
        cardSelected01 = card
        cardSelected01.classList.add('active')
    } else if (!cardSelected02) {
        cardSelected02 = card
        cardSelected02.classList.add('active')
    }

    setTimeout(function () {
        if (cardSelected01 && cardSelected02) {
            if (cardSelected01.firstChild.src === cardSelected02.firstChild.src) {
                cardSelected01 = null
                cardSelected02 = null
            } else {
                cardSelected01.classList.remove('active')
                cardSelected02.classList.remove('active')

                cardSelected01 = null
                cardSelected02 = null
            }
        }

    }, 1000)

}

function turnCard01() {
    isEqual(card01)
}


function turnCard02() {
    isEqual(card02)
}


function turnCard03() {
    isEqual(card03)
}

function turnCard04() {
    isEqual(card04)
}

function turnCard05() {
    isEqual(card05)
}

function turnCard06() {
    isEqual(card06)
}

function turnCard07() {
    isEqual(card07)
}

function turnCard08() {
    isEqual(card08)
}

function turnCard09() {
    isEqual(card09)
}

function turnCard10() {
    isEqual(card10)
}

function turnCard11() {
    isEqual(card11)
}

function turnCard12() {
    isEqual(card12)
}

function turnCard13() {
    isEqual(card13)
}

function turnCard14() {
    isEqual(card14)
}

function turnCard15() {
    isEqual(card15)
}

function turnCard16() {
    isEqual(card16)
}