// Full credit to this thread here...
// https://greensock.com/forums/topic/17790-gsap-stagger-reveal-on-load-followed-by-scroll-revealing/

// Grab all of the project divs
const projects = document.querySelectorAll('.project');
const cover = document.querySelectorAll('.cover');

// Set some basic config vars
const config = {
  threshold: 0.5
};

// Trigger a new timeline for animation
const tl = new TimelineMax();
const tml = new TimelineMax();

tml.to(cover, 0.5, { autoAlpha: 1, y: 0 });

// Using intersection observer to detect if the div is visible
let observer = new IntersectionObserver(function(entries, self) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let overlap = '-=0.25';
      
      if (!tl.isActive()) {
        overlap = '+=0';
      }
      
      
      tl.to(entry.target, 0.5, { autoAlpha: 1, scale: 1, y: 0, rotation: 0 }, overlap);

      self.unobserve(entry.target);
    }
  });
}, config);

projects.forEach(project => {
  observer.observe(project);
});



