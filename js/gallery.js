import { cards } from "./gusi-lebedi.js"

export const gallery = function(){
    const modalGal = document.querySelector('.modal-gallery')
    const close = modalGal.querySelector('.close')
    const head = modalGal.querySelector('.modal-title')

    let count = 0 

    document.querySelectorAll('.card').forEach(item=>{
        item.addEventListener('click', e =>{
            let item = cards.find(el=> el.id == e.currentTarget.id)
            count = 0
            openGallery(item, count)
            modalGal.style.display = 'flex'
        })
    })
    
    left.addEventListener('click', e=>{
        let item = cards.find(el=> el.id == e.currentTarget.closest('.modal-body').id)
        if (count>0)
            count--
        else count = item.image.length-1
        openGallery(item, count)
    })

    right.addEventListener('click', e=>{
        let item = cards.find(el=> el.id == e.currentTarget.closest('.modal-body').id)
        if (count<item.image.length-1)
            count++
        else count = 0
        openGallery(item, count)
    })

    function openGallery(item, count){
        //let {name, image, description, price, id} = cards.find(el=> el.id == item)
        modalGal.querySelector('.modal-body').id = item.id
        head.textContent = item.name
        galleryItem.src = item.image[count]
        galleryDes.textContent = item.description
        modalGal.querySelector('.modal-pricetag').textContent = `${item.price} ₽`
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