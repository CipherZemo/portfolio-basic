// This line selects the HTML element with the ID 'theme-toggle' and stores a reference to it in a constant variable named 'themeToggle'.
// 'const' is used because this reference will not be reassigned to a different element later in our code.
const themeToggle = document.querySelector('#theme-toggle');
const htmlElement = document.documentElement;

themeToggle.addEventListener('click', () => {
    const newTheme = themeToggle.checked ? 'dark':'light';
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
