const bug = document.getElementById('bug');
const bugImage = document.getElementById('bug-image');
let intervalId;
let currentX = window.innerWidth / 2;
let currentY = window.innerHeight / 2;

bug.style.left = `${currentX}px`;
bug.style.top = `${currentY}px`;

function moveBug() {
    const newX = Math.random() * (window.innerWidth - 80);
    const newY = Math.random() * (window.innerHeight - 80);

    bug.style.transform = `translate(${newX - currentX}px, ${newY - currentY}px)`;
    currentX = newX;
    currentY = newY;
}

function startBugMovement() {
    intervalId = setInterval(moveBug, 400);
}

function fetchFlagAndSquash() {
    if (localStorage.getItem('istriggered') === 'true') {

        const token = localStorage.getItem('token');

        fetch('https://faux-api.com/api/v1/buggyctf_' + token)
            .then(response => response.json())
            .then(data => {
                const flag = data.result[0].flag;
                alert(flag);
            })
            .catch(error => {});

        bug.style.transform = 'scale(0)';
    }
}

function stopBug() {
    clearInterval(intervalId);
    localStorage.setItem('istriggered', 'true');
    localStorage.setItem('token', '04272001267518333');
    fetchFlagAndSquash();
}

bug.addEventListener('click', stopBug);

startBugMovement();