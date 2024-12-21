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


















// JavaScript for New York Page Interactivity
// JavaScript to Handle Page Scroll Behavior
document.addEventListener('DOMContentLoaded', function () {
    let pages = document.querySelectorAll('.parallax-page');
    let currentPage = 0;
    let isScrolling = false;

    // Disable page scroll to ensure custom scroll handling
    document.body.style.overflow = 'hidden';

    // Set up scroll event listener
    window.addEventListener('wheel', function (event) {
        if (isScrolling) return; // Prevent multiple scrolls at once
        isScrolling = true;

        if (event.deltaY > 0) {
            // Scroll down (next page)
            if (currentPage < pages.length - 1) {
                currentPage++;
            }
        } else {
            // Scroll up (previous page)
            if (currentPage > 0) {
                currentPage--;
            }
        }

        // Scroll to the current page
        scrollToPage(currentPage);

        // Allow scrolling after transition is finished
        setTimeout(() => {
            isScrolling = false;
        }, 1000); // Matches the transition duration (1s)
    });

    // Scroll to a specific page
    function scrollToPage(pageIndex) {
        window.scrollTo({
            top: pages[pageIndex].offsetTop,
            behavior: 'smooth'
        });
    }
});
