
document.addEventListener('scroll', function() {
    let sections = document.querySelectorAll('section');
    let scrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
        if (scrollPosition >= section.offsetTop - section.offsetHeight / 2 && scrollPosition < section.offsetTop + section.offsetHeight / 2) {
            let sectionId = section.getAttribute('id');
            history.replaceState(null, null, '#' + sectionId);
        }
    });
});