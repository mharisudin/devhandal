// document.querySelector('form').addEventListener('submit', (evt) => {
//     evt.preventDefault();
//     console.log('form submitted')
// })

// dengan variable
// const form = document.querySelector('form');
// form.addEventListener('submit', (evt) => {
//     evt.preventDefault(); // mencegah behavior pada element
//     console.log('form submitted')
// })

const form = document.querySelector('.form');
const input = document.querySelector('input');
const list = document.querySelector('#notes');

// event change akan berubah jika fokus nya berubah
// input.addEventListener('change', (evt) => {
//     console.log('change')
// })

// event input akan berubah jika value berupa inputan value
// input.addEventListener('input', (evt) => {
//     document.querySelector('h1').innerHTML = input.value; // mengubah text h1
// })

form.addEventListener('submit', (evt) => {
    evt.preventDefault(); // mencegah behavior pada element
    const noteValue = input.value; // mengambil value dari input
    const newList = document.createElement('li'); // membuat element li
    newList.innerText = noteValue; // mengisi text dari element li
    list.appendChild(newList) // menambahkan element li ke dalam ul
    input.value = ''; // mengosongkan input
})

// event delegation
list.addEventListener('click', (evt) =>{
    // evt.target.remove(); // menghapus element
    evt.target.nodeName === 'LI' && evt.target.remove(); // menghapus element jika element nya li
})

// event bubling
const container = document.querySelector('#container')
const button = document.querySelector('.changeColor')

button.addEventListener('click', (evt) => {
    container.style.backgroundColor = 'red';
    evt.stopPropagation(); // mencegah event bubling
})

container.addEventListener('click', () => {
    container.classList.toggle('hide'); // menambahkan class hide
})