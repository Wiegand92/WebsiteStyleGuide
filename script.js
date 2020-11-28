//The DOM

const dom = document.querySelector('body');

//For the Colors
const bgColor = document.querySelector('#bg-hex');
const fgColor = document.querySelector('#fg-hex');
const bg2Color = document.querySelector('#bg2-hex');
const bdColor = document.querySelector('#bd-hex');

//Event Listener for Background Color
bgColor.addEventListener('keyup', () =>{
    const bgBox = document.querySelector('.colorOne');
    bgBox.style.backgroundColor = bgColor.value;
    dom.style.backgroundColor = bgColor.value;
});

//Event Listener for Font Color
fgColor.addEventListener('keyup', () => {
    dom.style.setProperty('color', `${fgColor.value}`, 'important');
});

//Event Listener for Secondary Background
bg2Color.addEventListener('keyup', () => {
    let contentBox = document.querySelectorAll('.container');
    document.querySelector('h1').style.backgroundColor = bg2Color.value;
    contentBox.forEach(box => {
        box.style.setProperty('background-color', `${bg2Color.value}`, 'important');
    });
});

//Event Listener for Border Color
bdColor.addEventListener('keyup', () => {
    const borders = document.querySelectorAll('.color, .colorBox, .container, h1');
    borders.forEach(border => {
        border.style.borderColor = bdColor.value;
    });
});

//For The Fonts
const fontBoxOne = document.getElementById('font-one-name');
const fontBoxTwo = document.getElementById('font-two-name');
const fontBoxThree = document.getElementById('font-three-name');
const fontLink = document.getElementById('font-link-name');

//Add a Google font link
fontLink.addEventListener('keyup', () =>{
    document.querySelector('head').innerHTML += fontLink.value;
});

//Change Font Tree 1
fontBoxOne.addEventListener('keyup', ()=>{
    const siblings = document.querySelectorAll('.text-one');
    siblings.forEach(sibling => {
        sibling.style.cssText = `font-family: \'${fontBoxOne.value}\'`;
        document.querySelector('h1').style.fontFamily = fontBoxOne.value;
    });
});

//Chang Font Box 2
fontBoxTwo.addEventListener('keyup', () =>{
    const siblings = document.querySelectorAll('.text-two');
    const headers = document.querySelectorAll('h2, h3')
    siblings.forEach(sibling => {
        sibling.style.cssText = `font-family: \'${fontBoxTwo.value}\'`;
    });
    headers.forEach(header => {
        header.style.fontFamily = fontBoxTwo.value;
    });
});

//Change Font Box 3
fontBoxThree.addEventListener('keyup', () =>{
    const siblings = document.querySelectorAll('.text-three');
    siblings.forEach(sibling => {
        sibling.style.cssText = `font-family: \'${fontBoxThree.value}\'`;
    });
});
