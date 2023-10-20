// menambah isi Array
// let arr = []
// arr[0] = 'Sandhika'
// arr[1] = 'Galih'
// arr[2] = 'Nofa'
// arr[3] = 'Doddy'

// console.log(arr)


//menghapus isi Array
// let arr = ['Sandika', 'Galih', 'Nofa']
// arr [1] = undefined
// console.log(arr);


//menampilkan isi Array
// let arr = ['Sandika', 'Galih', 'Nofa']

// for (let i = 0; i < arr.length; i++){
//     console.log('Mahasiswa ke-' + (i + 1) + ' :' + arr[i]);
// }


//method pada array
// let arr = ['Sandika', 'Galih', 'Nofa', 'Bambang', 'Rasyid'] // ini deklarasi untuk join sampai slice
    
    //join | menggabungkan isi array menjadi string
// console.log(arr.join('-'));

    //push | manambahkan elemen baru di akhir array
// arr.push('Doddy', 'Fitri')

    //pop | menghilankan elemen terakhir pd array
// arr.pop();

    //unshift | menambahkan elemen baru di awal array
// arr.unshift('Doddy')

    //shift | menghilankan elemen di awal array
// arr.shift()

// console.log(arr.join('-'));

    //splice | menyisispkan eleman di tengah array
        //penlasan |splice(indexAwal, mauDihapusBerapa, elemenBaru)
// arr.splice(2, 0, 'Doddy', 'Fitri')
// console.log(arr.join('-'))

    //slice | memotong array menjad array yang baru
        //penulisan | slice(awal, akhir)
// let arr2 = arr.slice(1,3)
// console.log(arr2.join('-'));

    //forEach | u/ looping pada array
//contoh pertama dengan integer
// let angka = [1,2,3,4,5,6,7,8]
        //cara I
    // angka.forEach(function(e){
    //     console.log(e);
    // })

        //cara II menggunakan function expression
    // let cetak = function(e){
    //     console.log(e);
    // }
    // angka.forEach(cetak)

// contoh kedua dengan string
    // nama.forEach(function(e, i){
    //     console.log('Mahasiswa ke-' + (i + 1) + ' adalah : ' + e);
    // })

    //map | u/ looping dan dia mengembalikannya
// let angka = [1,2,3,4,5,6,7,8,9]
// let angka2 = angka.map(function(e){
//     return e * 2
// })
// console.log(angka2.join('-'));

    //sort | u/ mengurutkan elemen pada array
// let angka = [1,5,3,2,7,9,8,10,40,20]
// angka.sort(function(a,b){ //function disini untuk mengurutkan angka puluhan
//     return a-b;
// })
// console.log(angka.join('-'));

    //filter | ini untuk mencari elemen dan bisa mengurutkan karena bisa menampilkan semua elemen
// let angka = [1,2,5,10,19,18,13,7]
// let angka2 =  angka.filter(function(e){
//     return e > 5
// })
// console.log(angka2.join('-'));

    //find | ini untuk mencari eleman dan hanya bisa menampilkan satu elemen saja
// let angka = [1,2,5,10,19,18,13,7]
// let angka2 =  angka.find(function(e){
//     return e > 5
// })
// console.log(angka2);
    