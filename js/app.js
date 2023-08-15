/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/
/**
 * Define Global Variables
 * 
*/
const sectionList = document.querySelectorAll("section");
const myA = document.querySelectorAll('a[href^="#"');
const navlist = document.querySelector("#navbar__list");
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/
function buildNavbar() {
    for(let section of sectionList){
        navlist.innerHTML += `<li><a  class="menu__link" href='#${section.id}'>${section.id}</a></li>`;
    }
}
  
/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav
buildNavbar();
// Add class 'active' to section when near top of viewport
function addActiveClass(){
    sectionList.forEach(section =>{
        console.log(`${section.id}`,section.getBoundingClientRect())
        if(window.scrollY > (section.getBoundingClientRect().top) && window.scrollY < (section.getBoundingClientRect().bottom) ) {
            section.classList.add("your-active-class");
            document.querySelector(`a[href^="#${section.id}"]`).parentElement.classList.add("active");
        } else {
            section.classList.remove("your-active-class");
            document.querySelector(`a[href^="#${section.id}"]`).parentElement.classList.remove("active");
        }
    })
}
        

//Scroll to anchor ID using scrollTO event
const navBar = document.querySelector("#navbar__list");
function smoothScroll () {
    navBar.querySelectorAll('a[href^="#"]').forEach(link=> {
    link.addEventListener('click', function (even) {
        even.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
}

/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click
smoothScroll();
// Set sections as active
document.addEventListener('scroll',addActiveClass);

