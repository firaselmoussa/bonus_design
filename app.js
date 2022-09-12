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
let error_popup= document.getElementById('error-popup')
let name_input = document.getElementById('name-input');
let email_input = document.getElementById('email-input');
let phone_input = document.getElementById('phone-input');
let message_input = document.getElementById('message-input');

send_btn.addEventListener('click', ()=>{

    // Name validation
    if(name_input.value.length < 5){
        error_popup.innerText = 'name too short(minimum 5 characters)';
        error_popup.style.display = 'flex';
    }else{
        error_popup.style.display = 'none';
    }

    // Email validation

    let email_list = email_input.value.split('');

    // spliting the email into two parts to check the length of each before and after the '@' sign
    let email_parts = email_input.value.split('@', 2);
    let is_email = false;

    // checking for the '@' sign
    email_list.forEach(element => {
        if(element == '@'){
            is_email = true;
        }
    });

    if(!is_email){
        error_popup.innerText = 'email invalid (include "@")';
        error_popup.style.display = 'flex';
    }else{

        
        if(email_parts[0].length < 3){
            error_popup.innerText = 'gmail name is too short (minimum 3 characters)';
            error_popup.style.display = 'flex';
        }
        else if(email_parts[1].length <5){
            error_popup.innerText = 'gmail extension is too short (minimum 5 characters)';
            error_popup.style.display = 'flex';
        };

    }

    // Phone Number Validation
    let country_code = phone_input.value.slice(0, 4);
    
    // validating country code
    if(country_code == '+961'){
        
        
        if( phone_input.value.slice(4)[0] == '3'){
            // validating number's length
            if(phone_input.value.slice(4).length <7){
                error_popup.innerText = 'phone number too short (i.e: +9613456789)';
                error_popup.style.display = 'flex';
            }
        }else{
            // validating number's length
            if(phone_input.value.slice(4).length <8){
                error_popup.innerText = 'phone number too short (i.e: +96171456789)';
                error_popup.style.display = 'flex';
            };
        };

    }else{
        error_popup.innerText = 'country code must be "+961"';
        error_popup.style.display = 'flex';
    };

    // Message validation
    if(message_input.value.length <100){
        error_popup.innerText = 'message too short (minimum 100 characters)';
        error_popup.style.display = 'flex';
    };

});
