export const cart = function(){
    
    const cartBtn = document.querySelector('#cart-button')
    const closeCart = document.querySelector('.close')
    const modalCart = document.querySelector('.modal-cart')
    
    function createCartList(data) {
        data.forEach(item => {
            const cartItem = document.createElement('div')
            cartItem.classList.add('food-row')
            cartItem.id = item.id
            cartItem.innerHTML = createItem(item)
            document.querySelector('.modal-body').append(cartItem)
        })
    }

    cartBtn.addEventListener('click', ()=>{
        let array = JSON.parse(localStorage.getItem('card'))
        modalCart.style.display = 'flex'
        document.querySelector('.modal-body').innerHTML = ""
        createCartList(array)
    })
    closeCart.addEventListener('click', ()=>{
        modalCart.style.display = 'none'
    })
    document.addEventListener('keydown', e=>{
        modalCart.style.display = 'none'
    })
    document.querySelector('.modal-cart').addEventListener('click', e=>{
        if (e.target == e.currentTarget)
        modalCart.style.display = 'none'
    })
    document.querySelector('.clear-cart').addEventListener('click', ()=>{
        localStorage.removeItem('card')
        document.querySelector('.modal-body').innerHTML = ""
    })

    function createItem (item){
        const {name, price, count} = item
        return `
			<span class="food-name">${name}</span>
			<strong class="food-price">${price} ₽</strong>
			<div class="food-counter">
				<button class="counter-button">-</button>
				<span class="counter">${count}</span>
				<button class="counter-button">+</button>
			</div>
		`
    }
}
