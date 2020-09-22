let enter = document.querySelector('#enter')
let bg = document.querySelector('.bg')
let enterBar = document.querySelector('.enter-bar')
let about = document.querySelector('.about')
let projects = document.querySelector('.projects')
let contact = document.querySelector('.contact')
let resume = document.querySelector('.resume')
let body = document.querySelector('body')
let navbar = document.querySelector('.navbar')
let headerAfterEnter = document.querySelector('.header-after-enter')

enter.addEventListener('click', function(e) {
    console.log(`You've entered the site!`);

    let styles = {
        "height": "35%",
        "background": `linear-gradient(rgba(255,255,255,.2), rgba(255,255,255, .2)), url("pictures/rainier.jpeg")`,
        "background-color": "rgb(77, 75, 75)",
        "background-position": "center",
        "background-repeat": "no-repeat",
        "background-size": "cover",
      };
    Object.assign(bg.style, styles);
    enterBar.style.display = 'none';
    headerAfterEnter.style.display = 'inline-block';
    navbar.style.display = 'inline-block';
    about.style.display = 'inline-block';
    projects.style.display = 'inline-block';
    contact.style.display = 'inline-block';
    resume.style.display = 'inline-block';
})