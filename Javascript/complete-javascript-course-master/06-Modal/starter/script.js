'use strict';


const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnopenOpenModal = document.querySelectorAll('.show-modal');

// console.log(btnopenOpenModal)


// btnopenOpenModal.addEventListener('click',function(){

//     console.log('clicked')


// })


const closeModal=  function() {


    modal.classList.add('hidden')
    overlay.classList.add('hidden')

}



    const OpenModal=  function() {
    modal.classList.remove('hidden')
        overlay.classList.remove('hidden')
        }
    
for(let i = 0 ; i < btnopenOpenModal.length;i++ )
    btnopenOpenModal[i].addEventListener('click',OpenModal)

btnCloseModal.addEventListener('click',closeModal)
overlay.addEventListener('click',closeModal)

document.addEventListener('keydown',function(e){
    console.log('keyy press  ',e.key);

    if(e.key==='Escape' && !modal.classList.contains('hidden')){
        console.log('ESC')
    
            closeModal();
        
    }

})
