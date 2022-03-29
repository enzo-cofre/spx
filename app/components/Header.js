export function Header() {
    const $header = document.createElement('header')
    $header.classList.add('header')
    $header.id = 'header'

    $header.innerHTML = `
    <img src='app/assets/images/shared/logo.svg' alt='logo'>

    <div class='header-line'></div>

    <button class='btnMenu' id='btnMenu'>
        <img src="app/assets/images/shared/icon-hamburger.svg" alt="menu icon">
    </button>

    <nav class='menu'>
        <a href='#/' data-page='home'><span>00</span>home</a>
        <a href='#/destination' data-page='destination'><span>01</span>destination</a>
        <a href='#/crew' data-page='crew'><span>02</span>crew</a>
        <a href='#/technology' data-page='technology'><span>03</span>technology</a>
    </nav>
    `

    const $menu = $header.querySelector('.menu')
    const $btnMenu = $header.querySelector('#btnMenu')

    const closeMenu = () => {
        $btnMenu.innerHTML = '<img src="app/assets/images/shared/icon-hamburger.svg" alt="open icon">'
        $menu.classList.remove('show')
        document.querySelector('body').classList.remove('noScroll')
    }

    const openMenu = () => {
        $btnMenu.innerHTML = '<img src="app/assets/images/shared/icon-close.svg" alt="close icon">'
        $menu.classList.add('show')
        document.querySelector('body').classList.add('noScroll')
    }

    const handleMenu = () => {
        if ($menu.classList.contains('show')) {
            closeMenu()
        } else {
            openMenu()
        }
    }

 
    window.addEventListener('hashchange', () => {
        closeMenu()
    })

    window.addEventListener('resize', (e)=>{
        if(e.target.innerWidth >= 768){
            closeMenu()
        }
    })

    $btnMenu.addEventListener('click', e => {
        handleMenu()
    })

    return $header
}