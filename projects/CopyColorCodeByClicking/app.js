/*
* Project Requirments:
@ -- Change the background color by generating random hex color by clicking a button
* Also display the hex  code to a disabled input field 
* add a button to copy color code
*/

// steps

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
    });

}

//step 2: hex color generator function

function generateHexColor(){
    const red = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    return `#${red.toString(16)}${green.toString(16)}${blue.toString(16)}`
}

// step 3: collect all necessary references

// step 4 : handal the change button click event
//