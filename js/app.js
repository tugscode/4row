const game = new Game()

let btn = document.getElementById('begin-game')

document.getElementById("begin-game").addEventListener('click' , () =>{
    game.startGame()
    document.getElementById('play-area').style.opacity = '1'
    btn.style.display = 'none'
})

document.addEventListener('keydown' , function(event){
    game.handleKeyDown(event)
})