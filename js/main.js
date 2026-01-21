
const projects = [{
  // The title of the project. This will be displayed as the main heading of the card.
  title: "Portfolio Project (This Website!)",

  // A brief description of the project. Explain the technologies used and its purpose.
  description: "A responsive personal portfolio built from scratch using HTML, CSS, and vanilla JavaScript. Features a dynamic theme switcher and is populated by a JavaScript data structure.",

  // The path to the project's image. The path is relative to the index.html file.
  imageUrl: "./images/portfolio-project-preview.jpg",

  // The URL to the live, deployed version of the project.
  liveUrl: "https://your-live-site.com", // Replace with your actual deployed URL when ready

  // The URL to the project's source code on a platform like GitHub.
  codeUrl: "https://github.com/your-username/your-repo-name" // Replace with your actual GitHub repo
},
{
  title: "E-commerce Website Concept",
  description: "A concept design and front-end implementation for an e-commerce platform. Focused on a clean UI, responsive product grids, and a streamlined checkout process using modern CSS techniques.",
  imageUrl: "./images/ecommerce-project-preview.jpg", // Make sure to add this image to your 'images' folder!
  liveUrl: "#", // Use "#" if there's no live link yet
  codeUrl: "https://github.com/your-username/ecommerce-repo" // Replace with your repo link
},
{
  title: "Task Management App",
  description: "A client-side task management application built with vanilla JavaScript. Allows users to add, edit, delete, and mark tasks as complete, with all data saved to localStorage.",
  imageUrl: "./images/task-app-preview.jpg", // Add this image to your 'images' folder
  liveUrl: "#",
  codeUrl: "https://github.com/your-username/task-app-repo" // Replace with your repo link
}];
const themeToggle = document.querySelector('#theme-toggle');
const htmlElement = document.documentElement;

const projectsContainer = document.querySelector('.projects-container');
const renderProjects = () => {
  let allProjectsHTML = '';

  projects.forEach(project => {
    const projectCardHTML = `
      <div class="project-card">
        <div class="project-image-container">
            <img 
              src="${project.imageUrl}" 
              alt="Screenshot of the ${project.title} project" 
              class="project-image"
            >
        </div>
        <div class="project-info">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <div class="project-links">
            <a 
              href="${project.liveUrl}" 
              class="btn" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Live Demo
            </a>
            <a 
              href="${project.codeUrl}" 
              class="btn btn-secondary" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
      </div>
    `;
    allProjectsHTML += projectCardHTML;
  });
    projectsContainer.innerHTML = allProjectsHTML;
};


themeToggle.addEventListener('click', () => {
  const newTheme = themeToggle.checked ? 'dark' : 'light';
  htmlElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
});
// We use an Immediately Invoked Function Expression (IIFE) to run this code once on script load.
(() => {
  // 1. Check for a saved theme in localStorage.
  //    localStorage.getItem('theme') will return 'dark', 'light', or null.
  const savedTheme = localStorage.getItem('theme');

  // 2. If a saved theme exists, apply it.
  if (savedTheme) {
    // a. Apply the theme to the <html> element.
    htmlElement.setAttribute('data-theme', savedTheme);

    // b. Crucially, update the toggle switch's state to match the saved theme.
    //    If the saved theme is 'dark', we need to make sure the checkbox is checked.
    if (savedTheme === 'dark') {
      themeToggle.checked = true;
    }
    // No 'else' is needed because the checkbox is unchecked by default.
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  // When the DOM is ready, we call our function to render the projects.
  renderProjects();
});
