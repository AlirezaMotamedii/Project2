let BarsBtn = document.querySelector('.bars');
let menu = document.querySelector('.nav__menu');
let ResumeItems = document.querySelectorAll('.resume__item');
let PortItems = document.querySelectorAll('.port__item');
let navItems = document.querySelectorAll('.nav__item');
let ChangeThemeBtn = document.querySelector('.change--theme');

BarsBtn.addEventListener('click',function(){
    this.classList.toggle('bars--open');
    menu.classList.toggle('nav__menu--open')
})

ResumeItems.forEach(ResumeItem => {
    ResumeItem.addEventListener('click' , function() {
        document.querySelector('.resume__item--active').classList.remove('resume__item--active')
        document.querySelector('.resume__content--show').classList.remove('resume__content--show')
        this.classList.add('resume__item--active')
        let content = this.getAttribute('data_content_id')
        document.querySelector(content).classList.add('resume__content--show')
    })
})

PortItems.forEach(PortItem => {
    PortItem.addEventListener('click',function() {
        document.querySelector('.port__item--active').classList.remove('port__item--active')
        document.querySelector('.swiper__content--show').classList.remove('swiper__content--show')
        this.classList.add('port__item--active')
        let contentID = this.getAttribute('data-port-id')
        document.querySelector(contentID).classList.add('swiper__content--show')
    })
})

navItems.forEach(navItem => {
    navItem.addEventListener('click' ,function(){
        // e.preventDefault()
        document.querySelector('.nav__item--active').classList.remove('nav__item--active')
        this.classList.add('nav__item--active')
        let content = navItem.getAttribute('data-nav-id')
        let contentOffsetTop = document.querySelector(`${content}`).offsetTop

        window.scroll({
            top: contentOffsetTop -120,
            behavior: "smooth"
        })
    })
})

ChangeThemeBtn.addEventListener('click' , function(){
    document.documentElement.classList.toggle('dark--theme');
    if (document.documentElement.classList.contains('dark--theme')){
        this.innerHTML = `<svg fill="#000" class="change--theme__icon" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      `
    } else {
        this.innerHTML = `<svg viewBox="0 0 24 24" fill="#000" class="change--theme__icon">
        <path fill-rule="evenodd" d="M9.528 1.718a.75.75 0 01.162.819A8.97 8.97 0 009 6a9 9 0 009 9 8.97 8.97 0 003.463-.69.75.75 0 01.981.98 10.503 10.503 0 01-9.694 6.46c-5.799 0-10.5-4.701-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 01.818.162z" clip-rule="evenodd" />
      </svg>`
    }
})