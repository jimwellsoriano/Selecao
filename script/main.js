const menu = document.querySelector('.js-menu');
const openMenuBtn = document.querySelector('.js-close-menu-btn');
const closeMenuBtn = document.querySelector('.js-open-menu-btn');

[openMenuBtn, closeMenuBtn].forEach((btn) =>{
    btn.addEventListener('click', () => {
        menu.classList.toggle('open');
          if (menu.classList.contains('open')) {
            openMenuBtn.style.display = 'block';
            closeMenuBtn.style.display = 'none';
        } else {
            openMenuBtn.style.display = 'none';
            closeMenuBtn.style.display = 'block';
        }
    });
});

menu.querySelectorAll('.dropdown > a').forEach((arrow) => {
    arrow.addEventListener('click', function (e) {
        e.preventDefault(); // Prevents the default behavior of the anchor tag
        this.closest('.dropdown').classList.toggle('active');
    });
});

// SCROLL JAVASCRIPT
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(window.scrollY > 0){
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

window.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollPos = window.scrollY + window.innerHeight / 2; // Middle of the viewport
    
    // Sections and their corresponding menu items
    const sections = document.querySelectorAll('section'); // Assuming sections have <section> tags
    const navLinks = document.querySelectorAll('.menu ul li a');
    
    // Iterate through each section and check if it's in the view
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            // Remove active class from all links
            navLinks.forEach((link) => {
                link.classList.remove('active');
            });
            
            // Add active class to the corresponding link
            const activeLink = document.querySelector(`.menu ul li a[href="#${sectionId}"]`);
            activeLink.classList.add('active');
        }
    });
});