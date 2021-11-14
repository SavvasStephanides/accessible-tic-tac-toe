function GameView(){
    this.displayBoard = displayBoard

    function displayBoard(){
        let boardElement = document.querySelector("#board")
        boardElement.innerHTML = ""

        game.board.forEach((tile) => {
            let tileElement = document.createElement("div")
            tileElement.classList.add("tile")
            tileElement.setAttribute("horizontal", tile.horizontalPosition)
            tileElement.setAttribute("vertical", tile.verticalPosition)

            let flagElement = document.createElement("div")
            flagElement.classList.add("tile-flag")
            flagElement.innerHTML = tile.flag

            tileElement.addEventListener("click", () => {
                tileClickEvent(tile)
            })

            tileElement.appendChild(flagElement)
            boardElement.appendChild(tileElement)
        })
    }

    function tileClickEvent(tile){
        game.playNextRound({
            horizontal: tile.horizontalPosition,
            vertical: tile.verticalPosition
        })
        
        displayBoard()

        if(game.gameHasEnded()){
            alert(`Game over!`)
        }
    }
}