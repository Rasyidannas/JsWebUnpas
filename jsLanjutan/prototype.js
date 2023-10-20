//cara membuat Object pada Javascript
// //1.Object Literal
//     //ini Property
// let mahasiswa = {
//     nama: "Sandhika",
//     energi: 10,

//     // method (function dialam properti)
//     makan(porsi){
//         this.energi = this.energi + porsi
//         console.log(`Hallo ${this.nama}, Selamat Makan`);
//     }
// } 

// const makan = mahasiswa.makan(10)
// console.log(makan);

// console.log(mahasiswa)



// 2.Function Declaration
// const methodMahasiswa = {
//     makan : function (porsi){
//         this.energi += porsi
//         console.log(`Hallo ${this.nama}, Selamat Makan`);
//     },

//     main : function (jam){
//         this.energi -= jam
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     }
// }

// function mahasiswa2(nama, energi){
//     let mahasiswa = Object.create(methodMahasiswa);//ini tanpa memangil satu per satu object methodMahasiswa
//     mahasiswa.nama = nama; //ini untuk mendeklarsikan&mengakses diatas 
//     mahasiswa.energi = energi;
//     //mamangngil stu per satu methodMahasiswa
//     // mahasiswa.makan = methodMahasiswa.makan
//     // mahasiswa.main = methodMahasiswa.main

//     return mahasiswa
// } 

// const rasyid = mahasiswa2('rasyid', 10)
// rasyid.main(5)
// console.log(rasyid);



// Cunstructor Function
// function Mahasiswa2(nama, energi){
//     this.nama = nama;
//     this.energi = energi;

//     this.makan = function (porsi){
//         this.energi += porsi
//         console.log(`Hallo ${this.nama}, Selamat Makan`);
//     }

//     this.main = function (jam){
//         this.energi -= jam
//         console.log(`Halo ${this.nama}, selamat bermain`);
//     }
// } 

// let rasyid = new Mahasiswa2('rasyid', 40)
// rasyid.main(10)
// console.log(rasyid);

    // prototype -> ini seperti inheritance pada Cunstructor function
    // function Mahasiswa2(nama, energi){
    //         this.nama = nama;
    //         this.energi = energi;
    //     } 

    // Mahasiswa2.prototype.makan = function(porsi){
    //     this.energi += porsi;
    //     return `Halo ${this.nama}, selamat makan!`;
    // }

    // Mahasiswa2.prototype.main = function (jam){
    //     this.energi -= jam
    //     return `Halo ${this.nama}, selamat main!`;
    // }

    // Mahasiswa2.prototype.tidur = function (jam){
    //     this.energi -= jam * 2
    //     return `Halo ${this.nama}, selamat tidur!`;
    // }

    // const rasyid = new Mahasiswa2('rasyid', 10);
    // rasyid.makan(15);
    // rasyid.tidur(5);
    // console.log(rasyid);


//Class ini versi terbaru function costruct
class Mahasiswa{
    constructor(nama, energi){
        this.nama = nama;
        this.energi = energi;
    }

    makan(porsi){
        this.energi += porsi;
        return `Halo ${this.nama}, selamat makan!`;
    }

    main(jam){
        this.energi -= jam
        return `Halo ${this.nama}, selamat main!`;
    }

    tidur(jam){
        this.energi -= jam * 2
        return `Halo ${this.nama}, selamat tidur!`;
    }
}

const rasyid = new Mahasiswa('rasyid', 10);
console.log(rasyid);