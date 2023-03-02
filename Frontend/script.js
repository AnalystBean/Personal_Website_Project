//Listener

window.addEventListener('domcontentloaded', (event) => {
    getVisitCount();
})    

const functionAPI =''; // API URL

const getVisitCount = () => {
    let count = 30;
    fetch(functionAPI).then(response => {
    return response.json()
    }).then(response =>{ 
        console.log("website Called function API");
        count = response.count;
        document.getElementById("count").innerHTML = count;
    }).catch(function(error) {
        console.log(error);
    });
    return count;
}
/*toggle icon navbar*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {

    menuIcon.classList.toggle('bx-x-circle');
    navbar.classList.toggle('active');
}



let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    /*sticky navbar*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

/*remove toggle icon and navbar when click navbar link (scroll)*/
    menuIcon.classList.remove('bx-x-circle');
    navbar.classList.remove('active');


};

/*scroll reveal*/
ScrollReveal({ 
    reset: true,
    distance: '120px',
    duration: 2000,
    delay: 100
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, portfolio-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, about-content', { origin: 'right' });

/*typed js*/

const typed = new Typed('.multiple-text', {
    strings: ['Pricing Analyst', 'Data Enthusiast', 'Aspiring Cloud Architect'],
    typeSpeed: 50,
    backSpeed: 50,
    backDelay: 500,
    loop: true
});