// function init(){
//     // let nama = "Rasyid"
//     function tampilNama(nama){ //ini adalah closure karena meminta akses nama dari luar
//         console.log(nama);
//     }
//     return tampilNama
//     // console.dir(tampilNama);//ini akan bekerja jika dibuka di browser
// }


// let panggilNama = init()
// panggilNama('rasyid')


// function ucapkanSalam(waktu){
//     return function (nama){
//         console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
//     }
// }

// let selamatPagi = ucapkanSalam('Pagi')
// let selamatSiang = ucapkanSalam('Siang')
// let selamatMalam = ucapkanSalam('Malam')

// selamatPagi('Rasyid')
// selamatSiang('Ciko')


let add = function(){
    let counter = 0
    return ()=>{return counter++}
}

let a = add()
console.log(a());
console.log(a());

