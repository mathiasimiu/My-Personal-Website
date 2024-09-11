//AS MENTIONED IN THE COURSE DESCRIPTION IN THE SYLLABUS, THE USE OF AI IS PROPERLY PERMITED. THIS TOGGLE SWITCH WAS MADE WITH THE HELP OF AI. IT DID NOT WORK AT FIRST BUT I DID GET THE FOUNDATION FOR THE BUTTON WITH THE HELP OF AI.

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

    if (currentTheme === 'styleTwo') {
        themeLink.href = 'styleTwo.css';
    } else {
        themeLink.href = 'styleOne.css';
        localStorage.setItem('theme', 'styleOne');
    }
}

document.getElementById('theme-toggle-btn').addEventListener('click', switchTheme);

loadTheme();
