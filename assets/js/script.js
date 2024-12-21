let currentSection = 0;
let isScrolling = false;

window.addEventListener('wheel', function(event) {
    if (!isScrolling) {
        if (event.deltaY > 0) {
            navigate(1);
        } else {
            navigate(-1);
        }
    }
});

function navigate(direction) {
    const sections = document.querySelectorAll('.section');
    if (direction === 1 && currentSection < sections.length - 1) {
        currentSection++;
    } else if (direction === -1 && currentSection > 0) {
        currentSection--;
    }
    updateSection(sections);
}

function updateSection(sections) {
    const container = document.querySelector('.container');
    container.style.transition = 'transform 2.5s ease';
    container.style.transform = `translateX(-${currentSection * 100}vw)`;
    isScrolling = true;
    setTimeout(() => {
        isScrolling = false;
    }, 2500); // Transition duration
}

updateSection(document.querySelectorAll('.section'));




/* Navigation */
// Toggle full menu visibility
function toggleMenu() {
    var menu = document.getElementById('fullMenu');
    menu.classList.toggle('open'); // Toggle the "open" class to show or hide the menu
}

// Smooth scrolling to sections (optional)
function navigateToSection(sectionId) {
    var section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}



