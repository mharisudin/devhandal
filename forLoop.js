// // // const students = {
// // //     name: 'John',
// // //     age: 20,
// // //     hobbies: ['reading', 'games', 'coding'],
// // // }
// // //
// // // for (let key in students) {
// // //     // console.log(key);
// // //     // console.log(students[key]);
// // //     console.log(students.hobbies[0])
// // // }
// //
// // // const animals = [
// // //     ['cat', 'dog', 'horse', 'sheep', 'bird'],
// // //     ['lion', 'tiger', 'bear', 'elephant', 'monkey'],
// // //     ['whale', 'dolphin', 'shark', 'octopus', 'fish']
// // // ];
// // //
// // // for (let animal of animals) {
// // //     for (let data of animal) {
// // //         console.log(data)
// // //     }
// // // }
// //
// // // const fruits = ['apple', 'banana', 'orange', 'mango', 'grape'];
// // // for (let fruit of fruits) {
// // //     console.log(fruit);
// // // }
// // //
// // // for (let x = 0; x < animals.length; x++) {
// // //     const rows = animals[x];
// // //     console.log(rows)
// // //     console.log(`Row ${x + 1} has ${rows.length} columns`)
// // //     for (let z = 0; z < rows.length; z++) {
// // //         console.log(`Column ${z + 1} is ${rows[z]}`)
// // //     }
// // // }
// //
// // // let number = 10;
// // // while (number > 12) {
// // //     console.log(number);
// // //     number--;
// // // }console.log(number);
// //
// // // do {
// // //     number--;
// // //     console.log(`ini adalah do-while ${number}`)
// // // }while (number > 2) {
// // //     console.log(`ini adalah do-while ${number}`);
// // // }
// //
// // // const password = 'secret123';
// // //
// // // let input = prompt('Masukkan password anda');
// // // while (input !== password) {
// // //     alert('Password anda salah');
// // //     input = prompt('Masukkan password anda lagi');
// // // }alert('Password anda benar')
// //
// // // game tebak angka
// // // let nilaiMax = parseInt(prompt('Masukkan nilai maksimal'));
// // // // while
// // // while (!nilaiMax) {
// // //     nilaiMax = parseInt(prompt('Masukkan nilai maksimal'));
// // // }
// // // const target = Math.floor(Math.random() * nilaiMax) + 1;
// // // console.log(target);
// // //
// // // let guess = parseInt(prompt('Masukkan angka tebakan'));
// // // while (guess !== target) {
// // //     guess = parseInt(prompt('Masukkan angka tebakan'));
// // //     if (guess > target) {
// // //         alert('Angka tebakan anda melebihi nilai maksimal');
// // //         console.log(target);
// // //     }else {
// // //         alert('Angka tebakan anda kurang dari nilai maksimal');
// // //         console.log(target);
// // //     } console.log(target);
// // // }
// // // alert('Selamat anda berhasil menebak angka');
// //
// // // const myMath = {
// // //     perkalian: function (a, b) {
// // //         return a * b;
// // //     }
// // // }
// // // const hasil = myMath.perkalian(2, 3);
// // // console.log(hasil)
// //
// // // const biodata = {
// // //     nama: 'John',
// // //     age: 20,
// // //     kenalan: function () {
// // //         return `Halo nama saya ${this.nama}, umur saya ${this.age} tahun`
// // //     }
// // // }
// // // try {
// // //     biodata.kenalan();
// // // } catch (err){
// // // console.log('error' + err)
// // // }
// // // // biodata.kenalan()
// // // console.log('setelah proses try catch')
// //
// const films = [
//     {
//         judul: 'Avengers',
//         tahun: 2012,
//     },
//     {
//         judul: 'Avengers: Age of Ultron',
//         tahun: 2015,
//     },
//     {
//         judul: 'Avengers: Infinity War',
//         tahun: 2018,
//     }
// ]
//
// const listFilm = films.map(({judul, tahun}) => {
//     const tampilFilm =  `${judul} dan ${tahun}`
//     console.log(tampilFilm)
//
// })
//
// // const newFilm = films.map((x) => x.judul);
// // // const newFilm = [...films]
// // console.log(films)
// // console.log(`ini adalah new film ${newFilm}`)
// //
// // // const judulFilm = films.filter((x) => x.tahun >2014).map((x) => x.judul) ;
// // // const mapFilm = judulFilm.map((x) => x.judul);
// // // console.log(`ini adalah judul film ${judulFilm}`)
// // // console.log(mapFilm)
// // // const filmBaru = films.map(function (film){
// // //     return film.judul.toUpperCase();
// // //     console.log(filmBaru);
// // // })
// // // console.log(films)
// // // console.log(filmBaru)
// //
//
// console.log(document.getElementsByTagName('img'))