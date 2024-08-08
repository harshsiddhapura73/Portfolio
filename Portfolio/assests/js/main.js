// ================ SHOW MENU ================
const navMenu = document.getElementById('nav-menu'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close');

// ========== MENU SHOW ==========
// validate if constant exists
if(navToggle){
    navToggle.addEventListener('click',() => {
        navMenu.classList.add('show-menu');
    })
}

// ========== MENU HIDDEN ==========
// validate if constant exists
if(navClose){
    navClose.addEventListener('click',() => {
        navMenu.classList.remove('show-menu');
    })
}


// ================ REMOVE MENU MOBILE ================
const navLink = document.querySelectorAll('.nav__link');
function linkAction(){
    const navMenu = document.getElementById('nav-menu');
    //when we click on each nav__link,we remove the show-menu class
    navMenu.classList.remove('show-menu');
}
navLink.forEach((n) => { n.addEventListener('click',linkAction)})



// ================ CHANGE BACKGROUND HEADER ================

function scrollHeader(){
    const header = document.getElementById('header')
    //when the scroll is greater than 80 view height,add the scroll-header class to header tag
    if (this.scrollY >= 80) header.classList.add('scroll-header');
    else header.classList.remove('scroll-header');
}
window.addEventListener('scroll',scrollHeader)

// ================ SHOW SCROLL UP ================

function scrollUp(){
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is greater than 350 view height,add the scroll-up class to scroll-top class
    if (this.scrollY >= 350) scrollUp.classList.add('show-scroll');
    else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll',scrollUp)


// ================ ABOUT TABS ================
const tabs = document.querySelectorAll('[data-target]'),
tabContents = document.querySelectorAll('[data-content]');
tabs.forEach((tab)=>{
    tab.addEventListener('click',()=>{
        const target = document.querySelector(tab.dataset.target);
        
        tabContents.forEach((tabContent)=>{
            tabContent.classList.remove('tab__active');
        })
        target.classList.add('tab__active');

        tabs.forEach((tab)=>{
            tab.classList.remove('tab__active');
        })
        tab.classList.add('tab__active');
    })
})


// ================ CONFIRM FORM ================
const contactForm = document.getElementById('contact-form'),
contactName = document.getElementById('contact-name'),
contactEmail = document.getElementById('contact-email'),
contactSubject = document.getElementById('contact-subject'),
contactMessage = document.getElementById('contact-message'),
errorMessage = document.getElementById('error-message');

const sendEmail = (e) =>{
    e.preventDefault();

    //check if the field has a value 
    if(contactName.value === '' || contactEmail.value === '' || contactSubject.value === '' || contactMessage.value === '' ){
        // show message
        errorMessage.textContent = 'Write all the input fields'
    }
    else{
        // servicesID - templateID - #form - publickey
        emailjs.sendForm('service_pzkq8tq','template_z705xkb','#contact-form','7l1K-HfhGMhiVBydX').then(() => {
            //show message and add color, window + dot to open emoji
            errorMessage.classList.add('color-first');
            errorMessage.textContent = 'Message Sent ✔';

            //remove message after 5 second 
            setTimeout(() =>{
                errorMessage.textContent = ' ';
            },5000)
        },(error)=>{
            alert('OOPs! SOMETHING WENT WRONG...',error)
        });
        //clear input field
        contactName.value = '';
        contactEmail.value = '';
        contactSubject.value = '';
        contactMessage.value = '';
    }
}

contactForm.addEventListener('submit',sendEmail);

// ================ MENU ACTIVE LINK ================

var header = document.getElementById("nav-list");
var btns = header.getElementsByClassName("nav__link");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName("active-link");
    current[0].className = current[0].className.replace(" active-link", "");
    this.className += " active-link";
    });
  }


//   ================ ONSCROLL SECTION ACTIVE LINK ================

  document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section[data-section]");
    const navLinks = document.querySelectorAll(".nav__link");

    const changeActiveLink = () => {
        let currentSection = "";
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 50) {
                currentSection = section.getAttribute("data-section");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active-link");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active-link");
            }
        });
    };

    window.addEventListener("scroll", changeActiveLink);
});
