function Announcer(){
    this.announce = announce
    this.announceBoardStatus = announceBoardStatus

    function announceBoardStatus(board){
        let annoucement = ""
        if(board.filter((tile) => tile.flag === "").length === 9){
            annoucement = "No flags added yet."
        }
        else{
            let flags = ["X", "O"]

            annoucement = flags.map((flag) => {
                let tilesWithFlag = board.filter((tile) => tile.flag === flag)
                
                if(tilesWithFlag.length === 0){
                    return "No " + flag + " flags yet"
                }
                return flag + " flag on " + tilesWithFlag.map((tile) => {
                    return tile.verticalPosition  + " " + tile.horizontalPosition
                }).join(", ")
            }).join(". ")           
            
            annoucement = annoucement + ". No flag on " + board.filter((tile) => tile.flag === "").map((tile) => {
                return tile.verticalPosition + " " + tile.horizontalPosition
            }).join(", ")
        }
        this.announce(annoucement)
        
    }

    function announce(announcement){
        let announcer = document.querySelector("#announcer")
        announcer.innerHTML = announcement
    }
}