/*for (var i = 1; i <= 10; i++) {
  console.log('Hello World');
}*/

var jumlahAngkot = 10;
var angkotBeroperasi = 8;
var noAngkot = 1;

while (noAngkot <= angkotBeroperasi) {
  console.log('Angkot No. ' + noAngkot +' beroperasi dengan baik');
noAngkot++;
}

for (var noAngkot = angkotBeroperasi + 1; jumlahAngkot >=noAngkot; noAngkot++) {
  console.log('Angkot No. ' + noAngkot + ' sedang tidak beroperasi');
}
