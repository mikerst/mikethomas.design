// Full credit to this thread here...
// https://greensock.com/forums/topic/17790-gsap-stagger-reveal-on-load-followed-by-scroll-revealing/

// Grab all of the project divs
const projects = document.querySelectorAll('.project');

// Set some basic config vars
const config = {
  threshold: 0.5
};

// Trigger a new timeline for animation
const tl = new TimelineMax();

// Using intersection observer to detect if the div is visible
let observer = new IntersectionObserver(function(entries, self) {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      let overlap = '-=0.125';
      
      if (!tl.isActive()) {
        overlap = '+=0';
      }
      
      tl.to(entry.target, 0.25, { autoAlpha: 1, scale: 1, y: 0, rotation: 0 }, overlap);
      self.unobserve(entry.target);
    }
  });
}, config);

projects.forEach(project => {
  observer.observe(project);
});


