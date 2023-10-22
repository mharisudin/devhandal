// membuat variabel penampung untuk button
const button = document.querySelectorAll('button') //menggunakan querySelectorAll agar semua button terpilih

// membuat event listener untuk setiap button sebelum menggunakan function
// for (let btn of button) {
//     btn.addEventListener('click', () => {
//         btn.style.backgroundColor = changeColor(); //mengubah warna button
//     })
// }

// membuat event listener untuk setiap button setelah menggunakan callback function
for (let btn of button) {
    btn.addEventListener('click', colorize);
}

// membuat function untuk mengubah warna
const changeColor = (() => {
    const r = Math.floor(Math.random() * 255 + 1); //membuat variabel r untuk menampung nilai random dari 1-255
    const g = Math.floor(Math.random() * 255 + 1); //membuat variabel g untuk menampung nilai random dari 1-255
    const b = Math.floor(Math.random() * 255 + 1); //membuat variabel b untuk menampung nilai random dari 1-255
    return `rgb(${r}, ${g}, ${b})`; //mengembalikan nilai rgb
})

// membuat function colorize untuk mengubah warna
function colorize() {
    this.style.backgroundColor = changeColor(); //mengubah warna button
    this.style.color = changeColor(); //mengubah warna text
    this.style.borderColor = changeColor(); //mengubah warna border
}