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


const backthisproject = document.getElementById('backthisproject')
const backthisprojectpopup = document.getElementById('backthisprojectpop')
const closepopup = document.getElementById('closepop')
const thanks = document.getElementById('thanks')
const input = document.getElementsByTagName('input')
backthisproject.addEventListener('click', () => {
    backthisprojectpopup.style.display = 'flex'
})
closepopup.addEventListener('click', () => {
    backthisprojectpopup.style.display = 'none'
})

const pledgeamount = document.getElementsByClassName('pledgeamount')

const pledges = document.getElementsByClassName('sub-cont')

pledges[6].style.opacity = '0.5'
pledges[2].style.opacity = '0.5'
pledges[3].addEventListener('click', () => {
    
    thanks.style.display = 'flex'
    pledges[3].style.border = '1px blue solid'
    
})
pledges[4].addEventListener('click', () => {
    

    
    pledges[4].style.border = '1px blue solid'
    pledgeamount[0].style.display = 'flex'
    
})
pledges[5].addEventListener('click', () => {
    
    pledges[5].style.border = '1px blue solid'
    pledgeamount[1].style.display = 'flex'
})



thanks.addEventListener('click', () => {
    
    thanks.style.display = 'none'
    
})


const pop = document.getElementById("pop")

pop.addEventListener('click', () => {
    thanks.style.display = 'flex'
    
})