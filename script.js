const bug = document.getElementById('bug');
const bugImage = document.getElementById('bug-image');
let intervalId;

// Initial position
let currentX = window.innerWidth / 2;
let currentY = window.innerHeight / 2;
bug.style.left = `${currentX}px`;
bug.style.top = `${currentY}px`;

function moveBug() {
    const newX = Math.random() * (window.innerWidth - 80);
    const newY = Math.random() * (window.innerHeight - 80);

    // Smooth movement
    bug.style.transform = `translate(${newX - currentX}px, ${newY - currentY}px)`;
    currentX = newX;
    currentY = newY;
}

// Start movement
intervalId = setInterval(moveBug, 800);

// CTF Solution function
window.stopBug = (success) => {
    if (success === true) {
        clearInterval(intervalId);  // Stop the bug's movement
        bug.style.transform = 'scale(0)';  // Shrink the bug to simulate it being squashed
        setTimeout(() => {
            alert('FLAG{BUG_SQU4SH3D_V3RC3L}');
        }, 500);
    }
};

// Stop the bug movement on click (CTF solution)
bug.addEventListener('click', () => {
    clearInterval(intervalId);  // Stop the bug from moving
    bug.style.transform = 'scale(0)';  // Shrink the bug to simulate it being squashed
    setTimeout(() => {
        alert('FLAG{BUG_SQU4SH3D_V3RC3L}');
    }, 500);
});
