//this

    // contoh this I
// console.log(this);//ini berisi window atau object global
// console.log(window === this);

    // contoh this II
// var a = 10
// console.log(this.a);
// console.log(window.a);


//membuat object

//cara I - function declaration
// function halo (){
//     console.log(this); // this mengembalikan object global
//     console.log('halo');
// }
// this.halo()


// //cara II - object literal
// let obj  = {a : 10, nama : 'Rasyid Nur Annas'}
// obj.halo = function (){
//     console.log(this); //this object yang bersangkutan
//     console.log('halo');
// }
// obj.halo()


//cara III - constructor
function Halo (){//awal nama function harus besar
    console.log(this); // this mengembalikan object yang baru dibuat Halo dibawah
    console.log('halo');
}
let obj1 = new Halo()
let obj2 = new Halo()