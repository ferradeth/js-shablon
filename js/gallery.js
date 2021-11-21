import { cards } from "./gusi-lebedi.js"

export const gallery = function(){
    const modalGal = document.querySelector('.modal-gallery')
    const close = modalGal.querySelector('.close')
    const head = modalGal.querySelector('.modal-title')

    let count = 0 

    document.querySelectorAll('.card').forEach(item=>{
        item.addEventListener('click', e =>{
            count = 0
            openGallery(e.currentTarget.id, count)
            modalGal.style.display = 'flex'
        })
    })
    
    left.addEventListener('click', e=>{
        if (count>0)
            count--
        else count = 2
        openGallery(e.currentTarget.closest('.modal-body').id, count)
    })

    right.addEventListener('click', e=>{
        if (count<2)
            count++
        else count = 0
        openGallery(e.currentTarget.closest('.modal-body').id, count)
    })

    // document.addEventListener('keyup', (e) => {
    //     if(e.code == 'ArrowLeft') {
    //         if (count>0)
    //         count--
    //         else count = 2
    //     }
    //     if (e.code == 'ArrowRight'){
    //         if(count<2)
    //         count++
    //         else count = 0        }
    // })

    function openGallery(item, count){
        let {name, image, description, price, id} = cards.find(el=> el.id == item)
        modalGal.querySelector('.modal-body').id = id
        head.textContent = name
        galleryItem.src = image[count]
        galleryDes.textContent = description
        modalGal.querySelector('.modal-pricetag').textContent = `${price} ₽`
    }

    close.addEventListener('click', ()=>{
        modalGal.style.display = 'none'
    })
    document.addEventListener('keydown', e=>{
        modalGal.style.display = 'none'
    })
    modalGal.addEventListener('click', e=>{
        if (e.target == e.currentTarget)
        modalGal.style.display = 'none'
    })
}