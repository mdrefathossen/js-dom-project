/*
* Project Requirments:
@ -- Change the background color by generating random hex color by clicking a button
* Also display the hex  code to a disabled input field 
* add a button to copy color code
* add a toast message when copyed
* user can type theri own hex code too
*/

// steps

// Globals
let div = null;

//step 1: crate onload handler

window.onload = () => {
    main();
}

function main() {
    const root = document.getElementById('root');
    const output = document.getElementById('output');
    const Changebtn = document.getElementById('change-bg-btn');
    const copyBtn = document.getElementById('copy-btn')
    

    Changebtn.addEventListener('click',function (){
        const bgColor = generateHexColor();
        root.style.backgroundColor = bgColor;
        output.value = bgColor;
    });
    copyBtn.addEventListener('click',function (){
        navigator.clipboard.writeText(output.value)

        if(div != null){
            div.remove()
            div = null
        }

        if(isValidHex(output.value)){
            generateToastMessage(`${output.value} copied`)
        } else{
            alert("Invalid Color Code")
        }
    });
    output.addEventListener("keyup", function (e) {
        const color = e.target.value;
        if(color && isValidHex(color)){
            root.style.backgroundColor = color;
        }
    })

}

//step 2: hex color generator function

function generateHexColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

function generateToastMessage(msg){
    div = document.createElement('div');
    div.innerText = msg;
    div.className = 'toast-message toast-message-side-in';

    div.addEventListener('click', function () {
        div.classList.remove('toast-message-side-in');
        div.classList.add('toast-message-side-out')

        div.addEventListener('animationend', function(){
            div.remove();
            div = null;
        })
    })

    

    document.body.appendChild(div);
}

/**
 * 
 * @param {string} color 
 */

function isValidHex (color){
    if(color.length != 7) return false;
    if(color[0] != '#') return false;

    color = color.substring(1)
    return /^[0-9A-fa-f]{6}$/i.test(color);
    
}

// step 3: collect all necessary references

// step 4 : handal the change button click event
// step 5 : handal the copy button click event
// step 6 : active toast message
// step 7 : create dynamic toast  message
// step 8 : clear toast message
// step 9 : create ishexcode is valid
// step 10: impelment change handaler on input filed
// step 11: prevent copying hex code if its not valid