
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

// if (window.matchMedia("(max-width: 768px)").matches) {
//     var prevScrollpos = window.pageYOffset;
//     window.onscroll = function() {
//       var currentScrollPos = window.pageYOffset;
//       var menuSlide = document.getElementsByClassName("menu");
  
//       if (menuSlide.length > 0) {
//         if (prevScrollpos > currentScrollPos) {
//           menuSlide[0].style.top = "0";
//         } else {
//           menuSlide[0].style.top = "-138px";
//         }
//       }
  
//       prevScrollpos = currentScrollPos;
//     }
//   }