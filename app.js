let menu_btn = document.getElementById('menu-btn');
let header_links= document.getElementById('header-links');
var menu_hidden = true;

menu_btn.addEventListener('click', ()=>{
    if(menu_hidden){
        menu_hidden = false
        header_links.classList.add('menu-show');
    }else{
        menu_hidden = true
        header_links.classList.add('menu-hide');
    }
    
});