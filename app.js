let menu_btn = document.getElementById('menu-btn');
let header_links= document.getElementById('header-links');
var menu_hidden = true;

menu_btn.addEventListener('click', ()=>{
    if(menu_hidden){
        menu_hidden = false
        header_links.style.animation = 'show-menu 1s ease-out forwards';
        console.log('show')
    }else{
        menu_hidden = true
        header_links.style.animation = 'hide-menu 1s ease-out forwards';
        console.log('hide')
    }
    
});