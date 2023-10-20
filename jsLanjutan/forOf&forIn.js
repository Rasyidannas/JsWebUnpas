
const mhs = ['rasyid', 'ciko', 'coki']
//forEach->hanya untuk array
mhs.forEach((m, i) => {
    console.log(`${m} adalah mahasiswa ke-${1+i}`);    
});

//for..of & penambahan index
for(const [i, m] of mhs.entries()){
    console.log(`${m} adalah mahasiswa ke-${1+i}`);
}

//for..of
const nama = 'rasyid'
for(const n of nama){
    console.log(n);
}


//for..in
const mhs1 = {
    nama: 'rasyid',
    umur: 22
}

for(m in mhs1){
    console.log(m);
    console.log(mhs1[m]);
}