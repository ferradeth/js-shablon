export const auth = function(){
    const open = document.querySelector('.button-auth')
    const out = document.querySelector('.button-out')
    const modalWindow = document.querySelector('.modal-auth')
    const close = document.querySelector('.close-auth')
    const cart = document.getElementById('cart-button')
    //const closeAuth = document.querySelector('.button-login')
    
    if (localStorage.getItem('user')){
        document.querySelector('.user-name').style.display = 'block' 
        document.querySelector('.user-name').textContent = JSON.parse(localStorage.getItem('user')).name
        open.style.display = 'none'
        out.style.display = 'flex'
        cart.style.display = 'flex'
    }
    
    function openModal(){
        modalWindow.style.display = 'flex'
    }

    function logOut(e){
        e.target.style.display = 'none'
        document.querySelector('.user-name').style.display = 'none' 
        localStorage.removeItem('card')
        localStorage.removeItem('user')
        open.style.display = 'flex'
        out.style.display = 'none'
        cart.style.display = 'none'
        login.value = ""
        password.value = ""
    }
    out.addEventListener('click', e => {
        logOut(e)
    })
    // #region closing auth
    modalWindow.addEventListener('click', (e)=>{
        if(e.target==e.currentTarget){
            modalWindow.style.display = 'none'
        }
    })
    
    document.addEventListener('keydown', e=>{
        if (e.key=="Escape"){
            modalWindow.style.display = 'none'
        }
    })
    // #endregion
    
    
    function valid(el){
        return el.value.trim().length <=0
    }
    
    function closM(){
        modalWindow.style.display = 'none';
        open.style.display = 'none';
        out.style.display = 'flex';
        cart.style.display = 'flex';
        localStorage.setItem('user', JSON.stringify({name: login.value, password: password.value}))
        //localStorage.setItem('cart', [])
        document.querySelector('.user-name').style.display = 'block'
        document.querySelector('.user-name').textContent = JSON.parse(localStorage.getItem('user')).name
        document.querySelector('.login').textContent = ""
        document.querySelector('.pass').textContent = ""
    }
    
    function closeModal(){
        if (valid(login)){
            document.querySelector('.login').textContent = 'username must contain more than 0 symbols'
            if (valid(password))
            document.querySelector('.pass').textContent = 'password must contain more than 0 symbols'
            else document.querySelector('.pass').textContent = ""
        }
        else if (valid(password)){
            document.querySelector('.login').textContent = ""
            document.querySelector('.pass').textContent = 'password must contain more than 0 symbols'
        }
        else closM()
    }

    logInForm.addEventListener('submit', e=>{
        e.preventDefault()
        closeModal()
        out.style.display = 'flex'
        document.querySelector('.button-text').style.display = 'block'
        //console.log(localStorage['user'])
    })
    
    open.addEventListener('click', openModal)
    close.addEventListener('click',()=> modalWindow.style.display = 'none')
    //closeAuth.addEventListener('click', closeModal)
}