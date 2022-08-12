import { displayMinutes, displaySeconds, displayAttemps, star01, star02, star03 } from './elements.js'


export default function () {
    let cardSelected01
    let cardSelected02
    let timerTimeout
    let stars = 3

    let array = [card01,
        card02,
        card03,
        card04,
        card05,
        card06,
        card07,
        card08,
        card09,
        card10,
        card11,
        card12,
        card13,
        card14,
        card15,
        card16,]

    function randomCardsPosition() {

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


    function disableClickCards(cardSelected01, cardSelected02) {

        array.forEach(card => {
            card.classList.add('disable')
        });

    }

    function enableClickCards() {
        array.forEach(card => {
            card.classList.remove('disable')
        });
    }


    function resetGame() {
        clearTimeout(timerTimeout)

        array.forEach(card => {
            card.classList.remove('active')
        });

        randomCardsPosition()
        displaySeconds.textContent = '0'.padStart(2, '0')
        displayMinutes.textContent = '0'.padStart(2, '0')
        displayAttemps.textContent = 0
        setStarts(3)
        countUp()
    }


    function checkEnd() {
        let i = 0

        array.forEach(card => {
            if (card.classList.contains('active')) {
                i++
            }
        });

        if (i == 16) {
            alert(`Parabens, voce conseguiu terminar em ${displayMinutes.textContent}:${displaySeconds.textContent}! Com ${displayAttemps.textContent} tentativas`)
            resetGame()
        }
    }


    function setStarts(num){
        
        stars = stars + num

        if(stars < 0){
            stars = 0
        }

        if(stars > 3){
            stars = 3
        }

        switch(stars){
            case 0: 
                star01.src = './assets/icon/control/star-outline.svg'
                star02.src = './assets/icon/control/star-outline.svg'
                star03.src = './assets/icon/control/star-outline.svg'
            break;

            case 1: 
                star01.src = './assets/icon/control/star.svg'
                star02.src = './assets/icon/control/star-outline.svg'
                star03.src = './assets/icon/control/star-outline.svg'
            break;

            case 2: 
                star01.src = './assets/icon/control/star.svg'
                star02.src = './assets/icon/control/star.svg'
                star03.src = './assets/icon/control/star-outline.svg'
            break;

            case 3: 
                star01.src = './assets/icon/control/star.svg'
                star02.src = './assets/icon/control/star.svg'
                star03.src = './assets/icon/control/star.svg'
            break;
            
        }
    }

    function isEqual(card) {

        if (!cardSelected01) {
            cardSelected01 = card
            cardSelected01.classList.add('active')
        } else if (!cardSelected02) {
            cardSelected02 = card
            cardSelected02.classList.add('active')
        }


        disableClickCards()

        let timeout = setTimeout(function () {
            if (cardSelected01 && cardSelected02) {
                if (cardSelected01.firstChild.src === cardSelected02.firstChild.src) {
                    checkEnd()
                    setStarts(1)
                } else {
                    setStarts(-1)
                    displayAttemps.textContent = Number(displayAttemps.textContent) + 1
                    
                    cardSelected01.classList.remove('active')
                    cardSelected02.classList.remove('active')
                }

                cardSelected01 = null
                cardSelected02 = null
            }

        }, 300)

        enableClickCards()


    }


    function countUp() {
        timerTimeout = setTimeout(function () {
            displaySeconds.textContent = String(Number(displaySeconds.textContent) + 1).padStart(2, '0')

            if (displaySeconds.textContent == 60) {
                displayMinutes.textContent = String(Number(displayMinutes.textContent) + 1).padStart(2, '0')
                displaySeconds.textContent = '0'.padStart(2, '0')
            }


            countUp()
        }, 1000)

    }

    return {
        randomCardsPosition,
        isEqual,
        countUp,
        resetGame
    }
}


