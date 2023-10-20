// //with DOM Traversal
// const close = document.querySelectorAll('.close');
// close.forEach(function (el) {
//     el.addEventListener('click', function(e){
//         console.log(e);
//         e.target.parentElement.style.display='none'; // parentElement = div yang memiliki class card
//         e.preventDefault();//ini untuk menghilangkan perilaku default
//         e.stopPropagation();//ini untuk menghentikan even yang ada di induk yang sama
//     })
// })



// const cards = document.querySelectorAll('.card')
// cards.forEach(function(card){
//     card.addEventListener('click', function(){
//         alert("ok");
//     })
// })


const container = document.querySelector('.container')
container.addEventListener('click', function(e){
    e.preventDefault();
    if(e.target.className=='close'){
        e.target.parentElement.style.display='none';
    }
})



// const close = document.querySelector('.close');
// const card = document.querySelector('.card');

// close.addEventListener('click', function(){
//     card.style.display = 'none';
// })

//Cara pertama
// const closeBtn = document.querySelector('.close');
// closeBtn.addEventListener('click', function(){
//     document.querySelector('.card').remove()
// })

//Cara kedua
// const closeBtn = document.querySelector('.close');
// closeBtn.addEventListener('click', function(){
//     const removeCard = document.querySelector('.card');
//     document.querySelector('.container').removeChild(removeCard);
// })
