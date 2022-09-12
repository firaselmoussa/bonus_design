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

// CONTACT FORM INPUTS VALIDATION
let send_btn = document.getElementById('send-btn');
let error_container = document.getElementById('error-container');
let error_popup = document.createElement('p');
error_popup.classList.add('contact-error')
let name_input = document.getElementById('name-input');

send_btn.addEventListener('click', ()=>{

    // Name validation
    if(name_input.value.length < 5){
        error_popup.innerText = 'name too short(minimum 5characters)';
        error_container.append(error_popup);
    }


})
