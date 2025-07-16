const btnpopup=document.querySelector('.popup-login');
const cover_box=document.querySelector('.cover-box');
const loginLink=document.querySelector('.login-link');
const registerLink=document.querySelector('.register-link');
const iconClose=document.querySelector('.icon-close');

function activateCoverBox(){
    cover_box.classList.add('active');
}

function deactivateCoverBox(){
    cover_box.classList.remove('active');
}

function activatePopup(){
    cover_box.classList.add('active-popup');
}

function deactivateCoverPopup(){
    cover_box.classList.remove('active-popup');
}
registerLink.addEventListener('click', activateCoverBox);
loginLink.addEventListener('click',deactivateCoverBox);
btnpopup.addEventListener('click',activatePopup)
iconClose.addEventListener('click',deactivateCoverPopup);




