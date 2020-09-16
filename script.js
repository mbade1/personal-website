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
let sectionHeader = document.getElementsByClassName('section-header')
let headerInformation = document.querySelector('.header-information')
let stacks = document.querySelector('.stacks')
let footer = document.querySelector('.footer')

enter.addEventListener('click', function(e) {
    let styles = {
        "height": `70%`,
        "background": `linear-gradient(rgba(255,255,255,.2), rgba(255,255,255, .2)), url("pictures/alaska.jpeg")`,
        "background-color": "rgb(77, 75, 75)",
        "background-position": "center",
        "background-repeat": "no-repeat",
        "background-size": "cover",
      };
    Object.assign(bg.style, styles);
    enterBar.style.display = 'none';
    headerInformation.style.display = 'inline-block';
    navbar.style.display = 'inline-block';
    about.style.display = 'inline-block';
    projects.style.display = 'inline-block';
    stacks.style.display = 'inline-block';
    contact.style.display = 'inline-block';
    footer.style.display = 'inline-block';
    displaySectionHeader()
})

function displaySectionHeader() {
  for (let i = 0; i < sectionHeader.length; i++) {
    sectionHeader[i].style.display = 'inline-block'
  }

}