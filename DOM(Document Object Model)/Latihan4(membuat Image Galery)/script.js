const container = document.querySelector('.container');
const jumbo = document.querySelector('.jumbo')
const thumbs = document.querySelectorAll('.thumb')

const a = document.querySelector('.a')


container.addEventListener('click', function(e){
    if (e.target.className == 'thumb'){
        jumbo.src=e.target.src;
        jumbo.classList.add('fade');
        setTimeout(function(){//ini untuk menghilangkan function dengan waktu
            jumbo.classList.remove('fade')
        }, 500)

        thumbs.forEach(function(thumb){
            // ini mengsetup ulang dan menghapus semua class
            thumb.className = 'thumb';
        })

        e.target.classList.add('active');

        // console.log(a.children[0].src);//ini untuk mengakses dari parents
    }
})