// Function to switch between themes
function switchTheme() {
    const currentTheme = localStorage.getItem('theme');
    const themeLink = document.getElementById('theme-link');

    // Toggle theme based on the current theme
    if (currentTheme === 'styleTwo') {
        themeLink.href = 'styleOne.css';
        localStorage.setItem('theme', 'styleOne');
    } else {
        themeLink.href = 'styleTwo.css';
        localStorage.setItem('theme', 'styleTwo');
    }
}

// Function to load the stored theme on page load
function loadTheme() {
    const currentTheme = localStorage.getItem('theme');
    const themeLink = document.getElementById('theme-link');

    // Set the theme based on the saved preference, default is light
    if (currentTheme === 'styleOne') {
        themeLink.href = 'styleOne.css';
    } else {
        themeLink.href = 'styleTwo.css';
        localStorage.setItem('theme', 'styleTwo'); // Ensure light theme is the default
    }
}

// Add event listener to the button to toggle theme
document.getElementById('theme-toggle-btn').addEventListener('click', switchTheme);

// Load the theme on page load
loadTheme();
