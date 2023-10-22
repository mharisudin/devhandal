// const password = document.querySelector('input[type="password"]');
// const btnEvent = document.querySelector('.btn')
// password.addEventListener('focus', (event) => {
//     event.target.style.background = 'pink';
//     console.log('focus active')
// })
//
// password.addEventListener('blur', (event) => {
//     event.target.style.background = '';
//     console.log('blur active')
// })
//
// function satu() {
//     console.log('satu')
// }
//
// function dua() {
//     console.log('dua')
// }
//menjalankan event sekaligus
// btnEvent.addEventListener('click', satu)
// btnEvent.addEventListener('click', dua)

// generate color with addEventListener

// make a variable for button and h1
// const button = document.querySelector('#btnColor');
// const h1 = document.querySelector('h1');
//
// // add event listener to button
// button.addEventListener('click', () => {
//     // make variable for generate random color
//     const newColor = generateRandomColor()
//
//     // change background color
//     document.body.style.background = newColor;
//
//     // change text to new color
//     h1.innerText = newColor;
//
//     // console log new color
//     console.log(newColor)
// })

// arrow function for generate random color
const generateRandomColor = () => {
    const r = Math.floor(Math.random() * 255 + 1);
    const g = Math.floor(Math.random() * 255 + 1);
    const b = Math.floor(Math.random() * 255 + 1);

    return `rgb(${r}, ${g}, ${b})`;
}

const btnAll = document.querySelectorAll('button');

for (let btn of btnAll) {
    btn.addEventListener('click', function () {
        const newColor = generateRandomColor();
        btn.style.backgroundColor = newColor;
        console.log(newColor)
    })
}