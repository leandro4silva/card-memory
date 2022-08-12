import {
    card01,
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
    card16,

    buttonReset
} from './elements.js'


export default function({controls}){
    
    window.addEventListener('load', function () {
        controls.randomCardsPosition()
        controls.countUp()
    })


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

    buttonReset.addEventListener('click', controls.resetGame)



    function turnCard01() {
        controls.isEqual(card01)
    }
    
    
    function turnCard02() {
        controls.isEqual(card02)
    }
    
    
    function turnCard03() {
        controls.isEqual(card03)
    }
    
    function turnCard04() {
        controls.isEqual(card04)
    }
    
    function turnCard05() {
        controls.isEqual(card05)
    }
    
    function turnCard06() {
        controls.isEqual(card06)
    }
    
    function turnCard07() {
        controls.isEqual(card07)
    }
    
    function turnCard08() {
        controls.isEqual(card08)
    }
    
    function turnCard09() {
        controls.isEqual(card09)
    }
    
    function turnCard10() {
        controls.isEqual(card10)
    }
    
    function turnCard11() {
        controls.isEqual(card11)
    }
    
    function turnCard12() {
        controls.isEqual(card12)
    }
    
    function turnCard13() {
        controls.isEqual(card13)
    }
    
    function turnCard14() {
        controls.isEqual(card14)
    }
    
    function turnCard15() {
        controls.isEqual(card15)
    }
    
    function turnCard16() {
        controls.isEqual(card16)
    }
}
