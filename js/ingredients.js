// ===============================
// Smooth scroll for sticky menu
// ===============================
document.querySelectorAll('.menu-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target'); // fx "psyllium"
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            const offset = 100; // Juster efter højden på sticky menu
            const topPos = targetElement.getBoundingClientRect().top + window.pageYOffset - offset;
            window.scrollTo({ top: topPos, behavior: 'smooth' });
        }
    });
});

// ===============================
// Highlight active section in menu
// ===============================
const sections = document.querySelectorAll('.ingredient-card');
const menuLinks = document.querySelectorAll('.menu-links a');

function updateActiveSection() {
    let currentSection = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 150; // Lidt tidligere for highlight
        const sectionBottom = sectionTop + section.offsetHeight;

        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionBottom) {
            currentSection = section.getAttribute('id');
        }
    });

    menuLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-target') === currentSection) {
            link.classList.add('active');
        }
    });
}

window.addEventListener('scroll', updateActiveSection);

// ===============================
// Accordion for ingredient cards
// ===============================
document.querySelectorAll('.ingredient-card').forEach(card => {
    const btn = card.querySelector('.expand-btn');
    const details = card.querySelector('.card-details');

    btn.addEventListener('click', function() {
        // Luk alle andre kort
        document.querySelectorAll('.ingredient-card').forEach(otherCard => {
            if (otherCard !== card) {
                otherCard.querySelector('.card-details').classList.remove('expanded');
                otherCard.querySelector('.expand-btn').classList.remove('expanded');
            }
        });

        // Toggle current kort
        details.classList.toggle('expanded');
        btn.classList.toggle('expanded');
    });
});

// ===============================
// Tooltip hover for tips
// ===============================
document.querySelectorAll('.tip-icon').forEach(icon => {
    const tooltipText = icon.getAttribute('data-tooltip');

    // Opret tooltip-element
    const tooltip = document.createElement('span');
    tooltip.className = 'tooltip';
    tooltip.innerText = tooltipText;
    icon.appendChild(tooltip);

    // Vis/skjul tooltip ved hover
    icon.addEventListener('mouseenter', () => {
        tooltip.classList.add('visible');
    });
    icon.addEventListener('mouseleave', () => {
        tooltip.classList.remove('visible');
    });
});
