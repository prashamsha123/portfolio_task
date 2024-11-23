window.addEventListener("scroll", function() {
    const sections = document.querySelectorAll("section");

    sections.forEach(function(section) {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionVisible = window.innerHeight;

        if (sectionTop < sectionVisible) {
            section.classList.add("visible");
        }
    });
});

window.addEventListener("scroll", function() {
    const experienceSection = document.getElementById("experience");
    const experienceTop = experienceSection.getBoundingClientRect().top;
    const sectionVisible = window.innerHeight;

    if (experienceTop < sectionVisible) {
        experienceSection.classList.add("visible");
    }
});

function toggleDetails(button) {
    const parent = button.closest('.timeline-item');
    parent.classList.toggle('active');
    button.textContent = parent.classList.contains('active') ? 'See Less' : 'See More';
}
