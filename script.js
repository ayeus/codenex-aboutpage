// Define the social media links and icons
const socialLinks = [
    { url: "https://github.com/CodeNex-Club-SRMIST", icon: "fab fa-github", ariaLabel: "GitHub" },
    { url: "https://www.instagram.com/codenex_srmist/", icon: "fab fa-instagram", ariaLabel: "Instagram" },
    { url: "", icon: "fab fa-linkedin", ariaLabel: "LinkedIn" }
];

// Get the container element where icons will be injected
const container = document.getElementById('social-icons-container');

// Create the wrapper div
const socialIconsDiv = document.createElement('div');
socialIconsDiv.classList.add('social-icons');

// Loop through the social links and create <a> elements
socialLinks.forEach(link => {
    const anchor = document.createElement('a');
    anchor.href = link.url;
    anchor.target = '_blank';
    anchor.setAttribute('aria-label', link.ariaLabel);
    
    const icon = document.createElement('i');
    icon.classList.add(...link.icon.split(' ')); // Split in case there are multiple classes like 'fab fa-github'
    anchor.appendChild(icon);
    
    socialIconsDiv.appendChild(anchor);
});

// Append the socialIconsDiv to the container in the HTML
container.appendChild(socialIconsDiv);
