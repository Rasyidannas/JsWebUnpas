//Object Literal
let mhs1 ={
    nama : 'Rasyid Nur Annas',
    nrp : '123716381623',
    email : 'rasyid.smamita1415@gmail.com',
    jurusan : 'Sistem Informasi'
}

let mhs2 = {
    nama : 'Chooki',
    nrp : '12371631312623',
    email : 'chooki@gmail.com',
    jurusan : 'Sistem Informasi'
}


//Function Declaration
function buatObjectMahasiswa (nama, nrp, email, jurusan){
    let mhs = {}
    mhs.nama = nama
    mhs.nrp = nrp
    mhs.email = email
    mhs.jurusan = jurusan
    return mhs
}

let mhs3 = buatObjectMahasiswa ('Sandhika', '120034234', 
    'sandhika@gmial.com', 'Sistem Informasi')


//Constructor (deklarasi let & return dalam properti sudah otomatis dibuat  )
function Mahasiswa (nama, nrp, email, jurusan){
    //let this = {}
    this.nama = nama
    this.nrp = nrp
    this.email = email
    this.jurusan = jurusan
    //return this
}

let mhs4 = new Mahasiswa('Erik', '09238172736', 'erik@icloud.com', 'Teknik Mesin')