const bug = document.getElementById('bug');
const bugImage = document.getElementById('bug-image');
let intervalId;

// Initial position
let currentX = window.innerWidth / 2;
let currentY = window.innerHeight / 2;
bug.style.left = `${currentX}px`;
bug.style.top = `${currentY}px`;

// Add transition for smooth movement
bug.style.transition = 'transform 0.8s ease-in-out';

// Track mouse position
let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function moveBug() {
    // Calculate distance between bug and mouse
    const dx = mouseX - currentX;
    const dy = mouseY - currentY;
    const distance = Math.sqrt(dx * dx + dy * dy);

    let newX, newY;

    // If mouse is too close, make bug run away
    if (distance < 150) {
        // Move in opposite direction of mouse
        newX = currentX - (dx * 2);
        newY = currentY - (dy * 2);
        
        // Keep bug within bounds
        newX = Math.max(0, Math.min(window.innerWidth - 80, newX));
        newY = Math.max(0, Math.min(window.innerHeight - 80, newY));
    } else {
        // Random movement when mouse is far
        newX = Math.random() * (window.innerWidth - 80);
        newY = Math.random() * (window.innerHeight - 80);
    }

    // Smooth movement
    bug.style.transform = `translate(${newX - currentX}px, ${newY - currentY}px)`;
    currentX = newX;
    currentY = newY;
}

// Faster movement interval
intervalId = setInterval(moveBug, 600);

// Modified solution function - now requires specific conditions
window.stopBug = (success) => {
    if (success === true) {
        clearInterval(intervalId);
        bug.style.transform = 'scale(0)';
        setTimeout(() => {
            alert('FLAG{BUG_SQU4SH3D_V3RC3L}');
        }, 500);
    }
};