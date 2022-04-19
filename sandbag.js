

let mobileMenuIcon = document.getElementById('burger');
let mobileMenu = document.getElementById('mobile-menu');

let ismobileMenuOpen = 0;

mobileMenuIcon.addEventListener('click', openMobileMenu);

function openMobileMenu() {
  
  if(ismobileMenuOpen === 0) {
     mobileMenuIcon.src = "./images/icon-close.svg";  
     mobileMenu.classList.toggle('hidden');
     mobileMenu.classList.toggle('flex');
     ismobileMenuOpen++;
  } else {
    mobileMenuIcon.src = "./images/icon-hamburger.svg";
    mobileMenu.classList.toggle('hidden');
    mobileMenu.classList.toggle('flex');
    ismobileMenuOpen--;
  }
   
}

