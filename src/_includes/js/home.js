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