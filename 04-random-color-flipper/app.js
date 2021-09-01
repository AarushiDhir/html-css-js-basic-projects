
function colorizeRGB(){
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColor = `rgb(${r},${g},${b})`;
    return rgbColor;
}

function colorizeHex(){
    const codes = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
    let hexColor = "#";
    for (let i=0; i<6; i++) {
        hexColor += codes[Math.floor(Math.random() * codes.length)];
    }
    return hexColor;
}

const rgbBtn = document.querySelector('#rgbClicker')
const hexBtn = document.querySelector('#hexClicker')
const color = document.querySelector('#codeDisplay');
rgbBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = colorizeRGB();
    color.innerHTML = colorizeRGB();
})
hexBtn.addEventListener("click", function(){
    document.body.style.backgroundColor = colorizeHex();
    color.innerHTML = colorizeHex();
})

