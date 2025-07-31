const hexBtn = document.querySelector(".hex-btn")
const hexColorValue = document.querySelector(".hex-color-value")
const hexColorContainer = document.querySelector(".hex-color-container")
const hexColorCopyBtn = document.querySelector('.hex-copy-btn')

hexBtn.addEventListener('click', ()=>{
    let charSet = "0123456789ABCDEF";
    let hexColorOutput = ""

    for(let i=0, charSetLength = charSet.length; i<6; ++i){
        hexColorOutput += charSet.charAt(Math.floor(Math.random()*charSetLength))
    }
    hexColorValue.textContent = `#${hexColorOutput}`
    hexColorContainer.style.backgroundColor = `#${hexColorOutput}`
    hexBtn.style.color = `#${hexColorOutput}`
})


const rgbBtn = document.querySelector('.rgb-btn')
const getRedInputRange = document.querySelector('#red')
const getGreenInputRange = document.querySelector('#green')
const getBlueInputRange = document.querySelector('#blue')
const rgbColorContainer = document.querySelector('.rgb-color-container')
const rgbColorCopyBtn = document.querySelector('.rgb-copy-btn')
const rgbColorValue = document.querySelector('.rgb-color-value')

rgbBtn.addEventListener('click',()=>{
    let extractRedValue = getRedInputRange.value
    let extractGreenValue = getGreenInputRange.value
    let extractBlueValue = getBlueInputRange.value

    rgbColorValue.textContent = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`
    rgbColorContainer.style.backgroundColor = `rgb(${extractRedValue}, ${extractGreenValue}, ${extractBlueValue})`
})


function copyHexColorToClipboard(){
    navigator.clipboard.writeText(hexColorValue.textContent)
    alert("Hex color copied")
}
hexColorCopyBtn.addEventListener('click', copyHexColorToClipboard)

function copyRgbColorToClipboard(){
    navigator.clipboard.writeText(rgbColorValue.textContent)
    alert('RGB color copied')
}
rgbColorCopyBtn.addEventListener('click', copyRgbColorToClipboard)