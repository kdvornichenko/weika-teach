export function menu() {
    window.addEventListener('DOMContentLoaded', () => {
        const iconMenu = document.querySelector('.menu');
        const menuBody = document.querySelector('.menu__body');
        const body = document.querySelector('body');
        
        if (iconMenu){
            iconMenu.addEventListener("click", function(e){
                iconMenu.classList.toggle('menu__active');
                menuBody.classList.toggle('menu__active');
                body.classList.toggle('body__active');
            });
        }
    
        // Прокрутка при клике
    
        const menuLinks = document.querySelectorAll('.menu-link[data-goto]');
    
        if(menuLinks.length > 0) {
            menuLinks.forEach(menuLinks => {
                menuLinks.addEventListener('click', onmenuLinkClick);
    
            });
        }
        
        function onmenuLinkClick(e) {
            const menuLink = e.target;
            if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
                const gotoBlock = document.querySelector(menuLink.dataset.goto);
                const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight;
    
                window.scrollTo({
                   top: gotoBlockValue,
                   behavior: "smooth"
                });
                e.preventDefault();
            }
        }
        
        });
}