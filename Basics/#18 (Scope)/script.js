// ini untuk contoh 'var'

  //ini bukti var tidak 'block scope'
var i = 2 // global scope atau window scope

if (i % 2 == 0){
  var genap = true  // ini local scope karena didalam tanda {}
}

if(genap) {
  console.log('genap')
}

  //ini bukti var adalah function scope
  //perilaku di dalam function kita dapat mengakses variabel global
var a = 1

function tes (){
  var a = 4 //ini contoh name conflict | name conflict yaitu nama sama tetapi scope berbeda
  var b = 2 
  console.log(b + ' ini local scope dari variabel b')
  console.log(a + ' ini local scope dari variabel a'); // ini memanggil variabel local
  console.log(window.a); //ini u/ memanggil yang ada di window scope
}

tes() //ini u/ menjalankan function, jika tidak dijalankan console log tidak tercetak 
console.log(a + ' ini window scope dari variabel a'); //ini memanggil variabel di window scope



//ini untuk contoh 'let'

  // ini bukti let 'block scope'
/* let x = 3

if (x % 2 == 1){
  let ganjil = true
}

if(ganjil){
  console.log('ganjil')
}  */    // ini tidak bisa di cetak di console karena let 'block scope

  // jadi let bisa di cetak diconsole dengan cara memasukan console.log didalam tanda {}
  //perilaku di dalam {} kita dapat mengakses variabel global
let x = 3
 
if (x % 2 == 1){
  let ganjil = true
  let x = 2   //ini contoh name conflict | name conflict yaitu nama sama tetapi scope berbeda
  console.log('ganjil');
  console.log(x + ' ini local scope dari variabel x');
}


/* kesimpulan untuk membuat 'block scope' di javascript Anda harus menggunakan let,
dan untuk vara anda harus mengunakan function */

//PERBEDAAN LET & VAR
  // Let
  /*tidak bisa redeclare global scope ataupun local scope, tetapi bisa name confict
    bersifat block scope, karena tidak perlu menggunakan function u/ memisahakan scope
     */

  // Var
  /*Bisa redeclare global scope ataupun local scope, dan juga bisa name confict
    bersifat function scope, karena perlu menggunakan perintah function u/ memisahakan scope */