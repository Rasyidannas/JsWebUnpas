let tanya = true;
while (tanya) {
  //menangkap pilahan player
  let p = prompt('Masukkan angka tebakkan 1 sampai 10');

  //menangkap pilahan computer
  let comp = Math.floor((Math.random() * 10) + 1);
  console.log(comp);
  //menentukan rules
  let hasil = '';

  if(p == comp){
    hasil = 'Angka yang Anda tebak benar ' + 'angka yang dicari adalah ' + comp;
  }else if (p > comp) {
    hasil = 'Angka yang Anda pilih terlalu besar';
  }else if (p < comp) {
    hasil = 'Angka yang Anda pilih terlalu kecil'
  }else {
    hasil = 'Angka yang Anda masukkan tidak valid';
  }
  //menentukan hasilnya
  alert ('Anda memilih angka ' + p + '\nMaka hasilnya ' + hasil);
  tanya = confirm('lagi?');
}
alert('terimakasih sudah bermain');
