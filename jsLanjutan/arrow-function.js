//ini implisit return -> tanpa menulis return
const tampilNama = nama=>`Halo ${nama}`
console.log(tampilNama('rasyid'))

// const tampilNama = (nama, waktu) => `Selamat ${waktu}, ${nama}`
// console.log(tampilNama('rasyid', 'Pagi'))

let mahasiswa = ['rasyid', 'coki', 'ciko']

const jumlahHuruf = mahasiswa.map(nama=> nama.length)
console.log(jumlahHuruf);

const jmlhHurufNama = mahasiswa.map(nama=>({nama:nama, jumlahHuruf:nama.length}))
console.table(jmlhHurufNama);//ini mencetak dengan table


//KONSEP THIS PADA ARROW FUNCTION -> arrow function tidak menyimpan this
const Mahasiswa = function(){
    this.nama = 'rasyid';
    this.umur = 22;
    
    // this.sayHello = ()=>{//ini aman menggunakan arrow function -> this ini mengakses dari luar
    //     console.log(`Halo, nama saya ${this.nama}, daya saya ${this.umur} tahun`)
    // }

    this.sayHello = function(){
        console.log(`Halo, nama saya ${this.nama}, daya saya ${this.umur} tahun`)
    }

    // setInterval(()=>{//ini harus menggunakan arrow function agar bisa mengakses umur di mahasiswa function 
    //     console.log(this.umur++);
    // }, 300)
}

const rasyid = new Mahasiswa()
rasyid.sayHello()






