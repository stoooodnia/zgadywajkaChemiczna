//pobieranie odpowiedzi
const lefttop = document.getElementById("lefttop").value;
const middletop = document.getElementById("middletop").value;
const righttop = document.getElementById("righttop").value;
 
const leftmid = document.getElementById("leftmid").value
const middlemid = document.getElementById("middlemid").value
const rightmid = document.getElementById("rightmid").value

const leftbottom = document.getElementById("leftbottom").value
const middlebottom = document.getElementById("middlebottom").value
const rightbottom = document.getElementById("rightbottom").value

const correctCoords = (playingTile) => {
    console.log(playingTile)
    if(playingTile.length == 2) {
        const playingObject = dane.find(obj => {
            return obj.symbol === playingTile
        })
        console.log(JSON.stringify(playingObject))
    } else {
        const playingObject = dane.find(obj => {
            return obj.name === playingTile
        })
        console.log(JSON.stringify(playingObject))
    }
    // c = [playingTile.c - 1, playingTile.c, playingTile.c + 1]
    // r = [playingTile.r - 1, playingTile.r, playingTile.r + 1]
    // console.log(c[0], c[1], c[2],r[0], r[1], r[2])
} 
const checker = (playingTile) => {
    console.log("Test", correctCoords(playingTile))
    console.log("sprawdzilem")
}

