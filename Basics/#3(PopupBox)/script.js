// alert('Hello World!');

// ini contoh untuk PROMPT
// var nama = prompt('Masukkan nama: ');//kita buat var untuk data yang kita input agar bisa dipanggil ke allart yang dibawah
// alert(nama);

// ini contoh 1 untuk CONFIRM
// var tes = confirm ('kamu yakin??');
// if(tes === true){
//   alert('user menekan OK!');
// } else{
//   alert('user menekan CANCEL!');
// }

// Ini contoh dari ketiganya
alert('Selamat Datang');
var lagi = true;

while(lagi === true) {
  var nama = prompt('masukkan nama');
  alert('halo ' + nama);

  lagi = confirm('coba lagi?');
}

alert('Terima Kasih');
