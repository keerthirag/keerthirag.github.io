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

// JavaScript to handle the CO2 info button and overlay
function openCO2Info() {
    var co2Button = document.getElementById('co2-info-button');
    var co2Overlay = document.getElementById('co2-info-overlay');
    var co2ButtonText = co2Button.getElementsByTagName('p')[0]; // Get the text paragraph
    var co2ButtonArrow = co2Button.querySelector('.arrow-right'); // Get the arrow element

    // Immediately hide the text and the arrow
    co2ButtonText.style.visibility = 'hidden';
    co2ButtonArrow.style.visibility = 'hidden';

    // Expand the button into a full-screen overlay
    co2Button.style.borderRadius = '0%'; // Start transforming the circle into a rectangle
    co2Button.style.width = '100vw'; // Full viewport width
    co2Button.style.height = '100vh'; // Full viewport height
    co2Button.style.bottom = '0'; // Align to bottom for expansion
    co2Button.style.right = '0'; // Align to right for expansion
    co2Button.style.paddingTop = '50vh'; // Center the content vertically
    co2Button.style.pointerEvents = 'none'; // Disable pointer events during transition

    // After the transition, hide the button and show the overlay content
    setTimeout(() => {
        co2Overlay.style.display = 'block';
        co2Button.style.display = 'none'; // Hide the button after expanding
        co2Button.style.pointerEvents = 'auto'; // Re-enable pointer events if needed
    }, 500); // This timeout duration should match the CSS transition duration
}

function closeCO2Info() {
    var co2Button = document.getElementById('co2-info-button');
    var co2Overlay = document.getElementById('co2-info-overlay');
    var co2ButtonText = co2Button.getElementsByTagName('p')[0]; // Get the text paragraph
    var co2ButtonArrow = co2Button.querySelector('.arrow-right'); // Get the arrow element

    // Hide the overlay content
    co2Overlay.style.display = 'none';

    // Shrink the overlay back into the button with new size
    co2Button.style.display = 'flex';
    co2Button.style.borderRadius = '50%'; // Back to circle shape
    co2Button.style.width = '130px'; // New width (or adjust as needed)
    co2Button.style.height = '130px'; // New height (or adjust as needed)
    co2Button.style.bottom = '20px'; // Original position from the bottom
    co2Button.style.right = '20px'; // Original position from the right
    co2Button.style.paddingTop = '0'; // Remove vertical centering

    // Show the text and the arrow after the transition
    setTimeout(() => {
        co2ButtonText.style.visibility = 'visible';
        co2ButtonArrow.style.visibility = 'visible';
    }, 500); // This timeout duration should match the CSS transition duration
}