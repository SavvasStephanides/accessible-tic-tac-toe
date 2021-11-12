function Game(){
    var tileLabels = {
        horizontal: ["left", "center", "right"],
        vertical: ["top", "center", "bottom"]
    }

    let flags = ["X", "O"]

    this.flagTurn = flags[0]
    this.board = getEmptyBoard()
    this.playNextRound = playNextRound
    this.gameHasEnded = gameHasEnded

    function getEmptyBoard(){
    
        let board = []
    
        for(let x = 0 ; x < tileLabels.horizontal.length ; x++){
            for(let y = 0 ; y < tileLabels.vertical.length ; y++){
                board.push({
                    horizontalPosition: tileLabels.horizontal[x],
                    verticalPosition: tileLabels.vertical[y],
                    flag: ""
                })
            }
        }
        
        return board
    }

    function playNextRound(position){
        let tileAtPosition = this.board.find((tile) => 
            tile.horizontalPosition === position.horizontal && tile.verticalPosition === position.vertical)

        if(tileAtPosition.flag === ""){
            tileAtPosition.flag = this.flagTurn
            this.flagTurn = this.flagTurn === flags[0] ? flags[1] : flags[0]
        }
    }

    function gameHasEnded(){
        let isEnded = false

        let winningCombinations = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ]

        flags.forEach((flag) => {
            winningCombinations.forEach((combination) => {
                let combinationTiles = []
                combinationTiles.push(this.board[combination[0]])
                combinationTiles.push(this.board[combination[1]])
                combinationTiles.push(this.board[combination[2]])
                
                let tilesWithFlag = combinationTiles.filter((tile) => tile.flag === flag)
                if(tilesWithFlag.length === 3){
                    isEnded = true
                }

            })
        })
        return isEnded
    }
}