// Full credit to this thread here...
// https://greensock.com/forums/topic/17790-gsap-stagger-reveal-on-load-followed-by-scroll-revealing/



// Grab all of the project divs
const projects = document.querySelectorAll('.stagger');

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
      let overlap = '-=0.35';
      
      if (!tl.isActive()) {
        overlap = '+=0';
      }
      
      
      tl.to(entry.target, 0.60, { autoAlpha: 1, scale: 1, y: 0, rotation: 0 }, overlap);

      self.unobserve(entry.target);
    }
  });
}, config);

projects.forEach(project => {
  observer.observe(project);
});



document.addEventListener('DOMContentLoaded', () => {
const toggleButton = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const body = document.body;

// Function to apply the theme
const applyTheme = (theme) => {
	
	body.classList.remove('light-mode', 'dark');
	if (theme) {
		body.classList.add(theme);
		localStorage.setItem('theme', theme);
		updateButtonContent(theme);
	} else {
		localStorage.removeItem('theme');
		updateButtonContent(theme);
	}

	
	
};

// Function to update the button content
const updateButtonContent = (theme) => {
if (theme === 'dark') {
	themeIcon.className = 'icon icon--sun';
	themeIcon.setAttribute('title', 'Change to light mode ');
} else {
	themeIcon.className = 'icon icon--moon';
	themeIcon.setAttribute('title', 'Change to dark mode');
}
};

// Check URL parameters for theme
const urlParams = new URLSearchParams(window.location.search);
const themeParam = urlParams.get('theme');
if (themeParam) {
	applyTheme(themeParam);
} else {
	// Check local storage for saved mode
	const savedTheme = localStorage.getItem('theme');
	applyTheme(savedTheme);
}

	// Define the theme options
	const themes = ['light-mode', 'dark'];

	// Toggle between themes
	toggleButton.addEventListener('click', () => {
		const currentTheme = body.classList.contains('dark') ? 'dark' : 'light-mode';
		const nextTheme = themes[(themes.indexOf(currentTheme) + 1) % themes.length];
		applyTheme(nextTheme);
		
	});
});


// Easing function for smooth ease-out effect
function easeOutQuad(t) {
    return t * (2 - t);
}

// Function to animate the counter with easing
function animateCounter(counter, delay = 0) {
    const target = +counter.getAttribute('data-target');
	const unit = counter.getAttribute('data-unit') || ''; 
    const duration = 2000; // Animation duration in milliseconds

    // Start the animation after a delay
    setTimeout(() => {
        const startTime = performance.now();

        function updateCounter(currentTime) {
            const elapsedTime = currentTime - startTime;
            let progress = Math.min(elapsedTime / duration, 1); // Cap progress at 1

            // Apply easing to progress
            progress = easeOutQuad(progress);

            const currentValue = Math.floor(progress * target);
			counter.innerText = currentValue + unit; 

            counter.innerText = currentValue + unit;

            if (progress < 1) {
                requestAnimationFrame(updateCounter); // Continue the animation
            } else {
                counter.innerText = target + unit; // Ensure the counter reaches the exact target
            }
        }

        requestAnimationFrame(updateCounter); // Start the animation
    }, delay);
}

// Intersection Observer to detect when the counter is visible
const counters = document.querySelectorAll('.metric');

const newobserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Stagger the counters by adding a delay (e.g., 200ms between each counter)
            animateCounter(entry.target, index * 300);
            newobserver.unobserve(entry.target); // Stop observing once the animation starts
        }
    });
}, { threshold: 0.5 }); // Trigger when 50% of the counter is visible

counters.forEach(counter => {
    newobserver.observe(counter);
});
