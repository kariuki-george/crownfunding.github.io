const navButton = document.getElementById('hamburger')
let navButtonclicked = false
navButton.addEventListener('click', () => {
    const mobileMenu = document.getElementById('nav-links-mobile');
    if (navButtonclicked == false) {
        
        mobileMenu.style.display = 'flex';
        navButtonclicked = true
    }
    else {
        mobileMenu.style.display = 'none';
        navButtonclicked= false
    }
    
});