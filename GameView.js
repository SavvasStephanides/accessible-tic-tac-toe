function GameView(){
    this.displayBoard = displayBoard
    this.tileClickEvent = tileClickEvent

    function displayBoard(){
        let boardElement = document.querySelector("#board")
        
        boardElement.innerHTML = game.board.map((tile) => 
            `<div class="tile" horizontal="${tile.horizontalPosition}" vertical="${tile.verticalPosition}" onclick="gameView.tileClickEvent(event)">
                <div class="tile-flag">
                    ${tile.flag}
                    <button class="action-button">Add flag to ${tile.horizontalPosition} ${tile.verticalPosition}</button>
                </div>
            </div>`)
            .join("")
    }

    function tileClickEvent(e){
        let tile = e.target

        game.playNextRound({
            horizontal: tile.getAttribute("horizontal"),
            vertical: tile.getAttribute("vertical"),
        })

        displayBoard()

        if(game.gameHasEnded()){
            alert(`Game over!`)
        }
    }
}