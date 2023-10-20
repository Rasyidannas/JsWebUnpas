//higher order function adalah function yang memiliki function callback

function kerjakanTugas(matakuliah, selesai){
    console.log(`Mulai mengerjakan TUgas ${matakuliah}`);
    selesai() //in callback function
}

function selesai(){
    console.log(`Tugas telah diselesaikan dengan baik!`)
}

kerjakanTugas('Web Development', selesai)

