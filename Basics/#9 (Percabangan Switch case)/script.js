
// ini contoh sederhana dari switch case
// var angka = parseInt(prompt('Masukkan angka')); // perintah parseInt untuk mengonversi string menjadi Interger
//
// if (angka === 1) {
//     alert('anda memasukkan angka 1');
// } else if (angka === 2) {
//     alert('anda memasukkan angka 2');
// } else if (angka === 3) {
//     alert('anda memasukkan angka 3');
// }else {
//     alert('anda memasukkan angka yang salah')
// }

// //contoh I dari switch
// var angka = prompt('Masukkan angka :');
//
// switch(angka){
//   case '1': // ini dibei petik karena prompt diatas dibaca string
//     alert('anda memasukkan angka 1');
//     break;
//   case '2':
//     alert('anda memasukkan angka 2');
//     break;
//   case '3':
//     alert('anda memasukkan angka 3');
//     break;
//   default:
//     alert('angka yang anda masukkan salah');
// }

//contoh II dari switch (ini cara paling sederhana atau singkat)
var item = prompt('Masukkan nama makanan/minuman: \n (contoh: nasi, daging, susu, hamburger, softdrink)');
switch (item) {
  case 'nasi':
  case 'daging':
  case 'susu':
    alert('makanan/minuman SEHAT');
    break;
  case 'hamburger':
  case 'softdrink':
    alert('makanan/minuman TIDAK SEHAT');
    break;
  default:
    alert('makanan/minuman yang anda masukkan SALAH');

}
