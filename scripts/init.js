import Game from "./Game.js"

let canvasHTML = document.querySelector(".gameCanvas")
let myGame = new Game({element:canvasHTML});

(function (){
    myGame.init()
})()