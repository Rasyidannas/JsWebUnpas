/*var angka = prompt('Masukkan angka');
if(angka % 2 == 0){
  alert(angka + ' adalah bilangan GENAP')
}else if (angka % 2 == 1) {
  alert(angka + ' adalah bilangan GANJIL')
}else {
  alert('yang anda masukkan bukan angka!!')
}*/

// challenge I
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= 6) {
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
//   }else if (noAngkot === 8) {
//     console.log('Angkot No. ' + noAngkot + ' sedang lembur');
//   }else {
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
//   }
// }

// // challenge II
// var jmlAngkot = 10;
// var angkotBeroperasi = 6;
// for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
//   if (noAngkot <= 6) {
//     console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
//   }else if (noAngkot === 8 || noAngkot === 10) { //ini memakai OR karena noAngkot hnaya bernilai satu
//     console.log('Angkot No. ' + noAngkot + ' sedang lembur');
//   }else {
//     console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
//   }
// }

// challenge III
var jmlAngkot = 10;
var angkotBeroperasi = 6;
for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6 && noAngkot !== 5) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
  }else if (noAngkot === 7 || noAngkot === 9) { //ini memakai OR karena noAngkot hnaya bernilai satu
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
  }else {
    console.log('Angkot No. ' + noAngkot + ' sedang lembur');
  }
}
// Atau cara kedua
var jmlAngkot = 10;
var angkotBeroperasi = 6;
for (var noAngkot = 1; noAngkot <= jmlAngkot; noAngkot++) {
  if (noAngkot <= 6 && noAngkot !== 5) {
    console.log('Angkot No. ' + noAngkot + ' beroperasi dengan baik');
  }else if (noAngkot === 8 || noAngkot === 10 || noAngkot === 5) { //ini memakai OR karena noAngkot hnaya bernilai satu 
    console.log('Angkot No. ' + noAngkot + ' sedang lembur');
  }else {
    console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
  }
}
