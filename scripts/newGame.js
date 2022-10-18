// const dane = [
//     {
//         c: 1,
//         r: 1,
//         name: "wodór", 
//         symbol: "H"
//     },
//     {
//         c: 1,
//         r: 2,
//         name: "lit", 
//         symbol: "Li"
//     },
//     {
//         c: 1,
//         r: 3,
//         name: "sód", 
//         symbol: "Na"
//     },
//     {
//         c: 1,
//         r: 4,
//         name: "potas", 
//         symbol: "K"
//     },
//     {
//         c: 1,
//         r: 5,
//         name: "rubid", 
//         symbol: "Rb"
//     },
//     {
//         c: 2,
//         r: 2,
//         name: "beryl", 
//         symbol: "Be"
//     },
//     {
//         c: 2,
//         r: 3,
//         name: "magnez", 
//         symbol: "Mg"
//     },
//     {
//         c: 2,
//         r: 4,
//         name: "wapń", 
//         symbol: "Ca"
//     },
//     {
//         c: 2,
//         r: 5,
//         name: "stront", 
//         symbol: "Sr"
//     },
//     {
//         c: 3,
//         r: 4,
//         name:"skand",
//         symbol:"Sc"
//     },    
//     {
//         c: 3,
//         r: 5,
//         name:"itr",
//         symbol:"Y"
//     },
//     {
//         c: 4,
//         r: 4,
//         name:"tytan",
//         symbol:"Ti"
//     },
//     {
//         c: 4,
//         r: 5,
//         name:"cyrkon",
//         symbol:"Zr"
//     },
//     {
//         c: 4,
//         r: 6,
//         name:"hafn",
//         symbol:"Hf"
//     },
//     {
//         c: 4,
//         r: 7,
//         name:"ruterford",
//         symbol:"Rf"
//     },
//     {
//         c: 5,
//         r: 4,
//         name:"wanad",
//         symbol:"V"
//     },
//     {
//         c: 5,
//         r: 5,
//         name:"niob",
//         symbol:"Nb"
//     },
//     {
//         c: 5,
//         r: 6,
//         name:"tantal",
//         symbol:"Ta"
//     },
//     {
//         c: 5,
//         r: 7,
//         name:"dubn",
//         symbol:"Db"
//     },
//     {
//         c: 6,
//         r: 4,
//         name:"chrom",
//         symbol:"Cr"
//     },
//     {
//         c: 6,
//         r: 5,
//         name:"molibden",
//         symbol:"Mo"
//     },
//     {
//         c: 6,
//         r: 6,
//         name:"wolfram",
//         symbol:"W"
//     },
//     {
//         c: 6,
//         r: 7,
//         name:"seaborg",
//         symbol:"Sg"
//     },
//     {
//         c: 7,
//         r: 4,
//         name:"mangan",
//         symbol:"Mn"
//     },
//     {
//         c: 7,
//         r: 5,
//         name:"technet",
//         symbol:"Tc"
//     },
//     {
//         c: 7,
//         r: 6,
//         name:"ren",
//         symbol:"Re"
//     },
//     {
//         c: 7,
//         r: 7,
//         name:"bohr",
//         symbol:"Bh"
//     },
//     {
//         c: 8,
//         r: 4,
//         name:"żelazo",
//         symbol:"Fe"
//     },
//     {
//         c: 8,
//         r: 5,
//         name:"ruten",
//         symbol:"Ru"
//     },
//     {
//         c: 8,
//         r: 6,
//         name:"osm",
//         symbol:"Os"
//     },
//     {
//         c: 8,
//         r: 7,
//         name:"has",
//         symbol:"Hs"
//     },
//     {
//         c: 9,
//         r: 4,
//         name:"kobalt",
//         symbol:"Co"
//     },
//     {
//         c: 9,
//         r: 5,
//         name:"rod",
//         symbol:"Rh"
//     },
//     {
//         c: 9,
//         r: 6,
//         name:"iryd",
//         symbol:"Ir"
//     },
//     {
//         c: 9,
//         r: 7,
//         name:"meitner",
//         symbol:"Mt"
//     },    {
//         c: 10,
//         r: 4,
//         name:"nikiel",
//         symbol:"Ni"
//     },    {
//         c: 10,
//         r: 5,
//         name:"pallad",
//         symbol:"Pd"
//     },    {
//         c: 10,
//         r: 6,
//         name:"platyna",
//         symbol:"Pt"
//     },    {
//         c: 10,
//         r: 7,
//         name:"darmstadt",
//         symbol:"Ds"
//     },
//     {
//         c: 11,
//         r: 4,
//         name:"miedź",
//         symbol:"Cu"
//     },
//     {
//         c: 11,
//         r: 5,
//         name:"srebro",
//         symbol:"Ag"
//     },
//     {
//         c: 11,
//         r: 6,
//         name:"złoto",
//         symbol:"Au"
//     },
//     {
//         c: 11,
//         r: 7,
//         name:"roentgen",
//         symbol:"Rg"
//     },
//     {
//         c: 12,
//         r: 4,
//         name:"cynk",
//         symbol:"Zn"
//     },
//     {
//         c: 12,
//         r: 5,
//         name:"kadm",
//         symbol:"Cd"
//     },
//     {
//         c: 12,
//         r: 6,
//         name:"rtęć",
//         symbol:"Hg"
//     },
//     {
//         c: 12,
//         r: 7,
//         name:"kopernik",
//         symbol:"Cn"
//     },
//     {
//         c: 13,
//         r: 2,
//         name:"bor",
//         symbol:"B"
//     },
//     {
//         c: 13,
//         r: 3,
//         name:"glin",
//         symbol:"Al"
//     },
//     {
//         c: 13,
//         r: 4,
//         name:"gal",
//         symbol:"Ga"
//     },
//     {
//         c: 13,
//         r: 5,
//         name:"ind",
//         symbol:"In"
//     },
//     {
//         c: 13,
//         r: 6,
//         name:"tal",
//         symbol:"Tl"
//     },
//     {
//         c: 13,
//         r: 7,
//         name:"nihon",
//         symbol:"Nh"
//     },
//     {
//         c: 14,
//         r: 2,
//         name:"węgiel",
//         symbol:"C"
//     },
//     {
//         c: 14,
//         r: 3,
//         name:"krzem",
//         symbol:"Si"
//     },
//     {
//         c: 14,
//         r: 4,
//         name:"german",
//         symbol:"Ge"
//     },
//     {
//         c: 14,
//         r: 5,
//         name:"cyna",
//         symbol:"Sn"
//     },
//     {
//         c: 14,
//         r: 6,
//         name:"ołów",
//         symbol:"Pb"
//     },
//     {
//         c: 14,
//         r: 7,
//         name:"flerow",
//         symbol:"Fl"
//     },
//     {
//         c: 15,
//         r: 2,
//         name:"azot",
//         symbol:"N"
//     },
//     {
//         c: 15,
//         r: 3,
//         name:"fosfor",
//         symbol:"P"
//     },
//     {
//         c: 15,
//         r: 4,
//         name:"arsen",
//         symbol:"As"
//     },
//     {
//         c: 15,
//         r: 5,
//         name:"antymon",
//         symbol:"Sb"
//     },
//     {
//         c: 15,
//         r: 6,
//         name:"bizmut",
//         symbol:"Bi"
//     },
//     {
//         c: 15,
//         r: 7,
//         name:"moskow",
//         symbol:"Mc"
//     },
//     {
//         c: 16,
//         r: 2,
//         name:"tlen",
//         symbol:"O"
//     },
//     {
//         c: 16,
//         r: 3,
//         name:"siarka",
//         symbol:"S"
//     },
//     {
//         c: 16,
//         r: 4,
//         name:"selen",
//         symbol:"Se"
//     },
//     {
//         c: 16,
//         r: 5,
//         name:"tellur",
//         symbol:"Te"
//     },
//     {
//         c: 16,
//         r: 6,
//         name:"polon",
//         symbol:"Po"
//     },
//     {
//         c: 16,
//         r: 7,
//         name:"liwermor",
//         symbol:"Lv"
//     },
//     {
//         c: 17,
//         r: 2,
//         name:"fluor",
//         symbol:"F"
//     },
//     {
//         c: 17,
//         r: 3,
//         name:"chlor",
//         symbol:"Cl"
//     },
//     {
//         c: 17,
//         r: 4,
//         name:"brom",
//         symbol:"Br"
//     },
//     {
//         c: 17,
//         r: 5,
//         name:"jod",
//         symbol:"J"
//     },
//     {
//         c: 17,
//         r: 6,
//         name:"astat",
//         symbol:"At"
//     },
//     {
//         c: 17,
//         r: 7,
//         name:"tenes",
//         symbol:"Ts"
//     },
//     {
//         c: 18,
//         r: 1,
//         name:"hel",
//         symbol:"He"
//     },
//     {
//         c: 18,
//         r: 2,
//         name:"neon",
//         symbol:"Ne"
//     },
//     {
//         c: 18,
//         r: 3,
//         name:"argon",
//         symbol:"Ar"
//     },
//     {
//         c: 18,
//         r: 4,
//         name:"krypton",
//         symbol:"Kr"
//     },
//     {
//         c: 18,
//         r: 5,
//         name:"ksenon",
//         symbol:"Xe"
//     },
//     {
//         c: 18,
//         r: 6,
//         name:"Radon",
//         symbol:"Rn"
//     },
//     {
//         c: 18,
//         r: 7,
//         name:"oganeson",
//         symbol:"Og"
//     }
// ]


// odświeżanie strony

const newGame = () => {
    const position = whichOne(randomPosition())
    const playing_tile = document.getElementById(position)
    clearAllTextarea()
    if(ZeroOrOne() <= 1) {
        playing_tile.value = dane[randomTile()].symbol
    } else {
        playing_tile.value = dane[randomTile()].name
    }
    checker(playing_tile.value)
    // var tile = dane[randomTile()]
    // console.log(JSON.stringify(tile))
}

//losowanie liczb
const getRandomInt = (max) => {
    return Math.floor(Math.random() * max)
}

const randomTile = () => {
    const x = getRandomInt(84)+1
    console.log(x)
    return x
}

const randomPosition = () => {
    return getRandomInt(9)+1
}

const ZeroOrOne = () => {
    return getRandomInt(4)
}
const whichOne = (position) => {
    switch (position) {
        case 1 : return "lefttop"
        case 2 : return "middletop"
        case 3 : return "righttop"
        case 4 : return "leftmid"
        case 5 : return "middlemid"
        case 6 : return "rightmid"
        case 7 : return "leftbottom"
        case 8 : return "middlebottom"
        case 9 : return "rightbottom"
    } 
}
const clearAllTextarea = () => {
    document.getElementById("lefttop").value = ""
    document.getElementById("middletop").value = ""
    document.getElementById("righttop").value = ""
    document.getElementById("leftmid").value = ""
    document.getElementById("middlemid").value = ""
    document.getElementById("rightmid").value = ""
    document.getElementById("leftbottom").value = ""
    document.getElementById("middlebottom").value = ""
    document.getElementById("rightbottom").value = ""
}