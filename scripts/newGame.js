// odświeżanie strony

const newGame = () => {
    location.reload()
    const x = losujx()
    const y = losujy()
    
}

const losujx = () => {
    const x = Math.random(8)+1
}
const losujy = () => {
    const y = Math.random(8)+1
}
