//Callback
function halo(){
    return console.log('Halo, Rasyid')
}

function tampilkanPesan(callback){
    callback()
}

tampilkanPesan(halo)


