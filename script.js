// This function toggles the dropdown and the class of the button for the arrow direction
function toggleAccessibilityControls() {
    var controls = document.getElementById('accessibility-controls');
    var button = document.getElementById('accessibility-btn');
    
    // Check if the dropdown is currently hidden
    if (controls.style.display === 'none' || controls.style.display === '') {
        controls.style.display = 'block'; // Show the dropdown
        controls.style.maxHeight = controls.scrollHeight + 'px'; // Set max-height for transition
        button.classList.add('open'); // Add the 'open' class to flip the arrow
    } else {
        controls.style.display = 'none'; // Hide the dropdown
        controls.style.maxHeight = '0'; // Reset max-height
        button.classList.remove('open'); // Remove the 'open' class to reset the arrow
    }
}

// Close the dropdown menu if the user clicks outside of it
function closeDropdown(event) {
    const controls = document.getElementById('accessibility-controls');
    if (!controls.contains(event.target) && !event.target.matches('#accessibility-btn')) {
        controls.classList.add('hidden');
        controls.style.maxHeight = null; // Resets max height
    }
}

// Set up event listeners for the dropdown menu
document.getElementById('accessibility-btn').addEventListener('click', function(event) {
    event.stopPropagation();
    toggleAccessibilityControls();
});

// Increase font size
function increaseFontSize() {
    const htmlElement = document.documentElement;
    let fontSize = parseFloat(window.getComputedStyle(htmlElement).fontSize);
    htmlElement.style.fontSize = `${fontSize * 1.1}px`;
}

// Decrease font size
function decreaseFontSize() {
    const htmlElement = document.documentElement;
    let fontSize = parseFloat(window.getComputedStyle(htmlElement).fontSize);
    htmlElement.style.fontSize = `${fontSize / 1.1}px`;
}

// Reset font size to default
function resetFontSize() {
    const htmlElement = document.documentElement;
    htmlElement.style.fontSize = ''; // Removes inline font-size style, reverting to stylesheet default
}

// Event listeners for each control
document.getElementById('increase-font').addEventListener('click', increaseFontSize);
document.getElementById('decrease-font').addEventListener('click', decreaseFontSize);
document.getElementById('reset-font').addEventListener('click', resetFontSize);
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

// Close dropdown when clicking outside of it
document.addEventListener('click', closeDropdown);

// Initial setup for theme toggle button text
document.getElementById('theme-toggle').textContent = 'Switch to Dark Theme';