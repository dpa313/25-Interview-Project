const hexBtn = document.querySelector(".hex-btn")
const hexColorBtn = document.querySelector(".hex-color-value")
const hexColorContainer = document.querySelector(".hex-color-container")
hexBtn.addEventListener('click', ()=>{
    let charSet = "0123456789ABCDEF";
    let hexColorOutput = ""

    for(let i=0, charSetLength = charSet.length; i<6; ++i){
        hexColorOutput += charSet.charAt(Math.floor(Math.random()*charSetLength))
    }
    hexColorBtn.textContent = `#${hexColorOutput}`
    hexColorContainer.style.backgroundColor = `#${hexColorOutput}`
    hexBtn.style.color = `#${hexColorOutput}`
})