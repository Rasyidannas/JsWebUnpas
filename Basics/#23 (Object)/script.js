//contoh I
let mahasiswa ={
    nama : 'Rasyid Nur Annas',
    lulus : true,
    IPSemester : [2.90, 3.10, 3.25, 2.88, 3.04],
    IPKumulatif : function (){
        let total = 0;
        let ips = this.IPSemester
        for(let i = 0; i < ips.length; i++ ){
            total += ips[i];
        }
        return total/ips.length
    }
}
mahasiswa.IPKumulatif() //ini cara pemanggilan di console

//contoh II
let mhs = {
    nama : 'Rasyid Nur Annas',
    umur : '21',
    ips : [3.00, 2.50, 3.20],
    alamat :{
        jalan : 'Jl Jeruk 2C No. 14E',
        kota : 'Sidoarjo',
        provinsi : 'Jawa Timur'
    }
}