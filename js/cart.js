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

            cartItem.querySelector('.minus').addEventListener('click', ()=>{
                // alert(cartItem.querySelector('.counter'))
                minusCount(cartItem.querySelector('.counter'), item)
            })
            cartItem.querySelector('.plus').addEventListener('click', ()=>{
                plusCount(cartItem.querySelector('.counter'), item)
            })

            document.querySelector('.modal-body').append(cartItem)
        })
    }

    function updateText(amount, count){
        amount.textContent = count
    } 

    function updatePricetag(arr){
        document.querySelector('.modal-pricetag').textContent = arr.reduce((sum, item) => sum + item.price * item.count, 0) +  '₽'
    }

    function minusCount(amount, cartitem){
        const arr = JSON.parse(localStorage.getItem('card'))
        let currentItem = arr.findIndex(item => cartitem.id === item.id)
        if (arr[currentItem].count>0) arr[currentItem].count--
        else arr[currentItem].count = 0
        localStorage.setItem('card', JSON.stringify(arr))

        updateText(amount, arr[currentItem].count)
        updatePricetag(arr)
    }
    function plusCount(amount, cartitem){
        const arr = JSON.parse(localStorage.getItem('card'))
        let currentItem = arr.findIndex(item => cartitem.id === item.id)
        arr[currentItem].count++
        localStorage.setItem('card', JSON.stringify(arr))

        updateText(amount, arr[currentItem].count)
        updatePricetag(arr)
    }
  
    cartBtn.addEventListener('click', ()=>{
        let array = JSON.parse(localStorage.getItem('card'))
        modalCart.style.display = 'flex'
        document.querySelector('.modal-body').innerHTML = ""
        createCartList(array)
        updatePricetag(array)
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
        document.querySelector('.modal-pricetag').textContent = "0 ₽"
    })

    function createItem (item){
        const {name, price, count} = item
        return `
			<span class="food-name">${name}</span>
			<strong class="food-price">${price} ₽</strong>
			<div class="food-counter">
				<button class="counter-button minus">-</button>
				<span class="counter">${count}</span>
				<button class="counter-button plus">+</button>
			</div>
		`
    }
}