let difficulty = [{
    name: 'easy',
    targetSize: 50,
    timeout: 1000,
    interval: 1500
}, {
    name: 'medium',
    targetSize: 30,
    timeout: 800,
    interval: 1000
}, {
    name: 'hard',
    targetSize: 20,
    timeout: 700,
    interval: 800
}];



function renderGetGudPage() {

    function getDifficulty() {
        let selectedDifficulty;
        difficulty.forEach((dif) => {
            if (dif.name === document.querySelector('#difficulty').value) {
                selectedDifficulty = dif;
            }
        });
        return selectedDifficulty;
    };

    let score = 0;
    let highestScore = 0;
    let target = document.querySelector('.target-container');
    target.style.position = 'absolute';
    document.body.appendChild(target);

    function showTarget() {
        let x = Math.random() * (window.innerWidth - 50);
        let y = Math.random() * (window.innerHeight - 50);
        target.style.left = `${x}px`;
        target.style.top = `${y}px`;
        target.style.display = 'block';

        setTimeout(() => {
            target.style.display = 'none';
        }, (getDifficulty()).timeout);
    }

    target.addEventListener('click', (event) => {
        let oldscore = score;
        if (event.target.classList.contains('target-center')) {
            score += 5; // Center
        } else if (event.target.classList.contains('small-circle-target')) {
            score += 2; // Inner circle
        } else if (event.target.classList.contains('big-circle-target')) {
            score += 1; // Outer circle
        } else {
            console.log('noob');
        }
        target.style.display = 'none';
        document.querySelector(".score").innerHTML = `Score: ${score}`;
        if (score > highestScore) {
            highestScore = score;
            document.querySelector(".your-highest-score").innerHTML = `Highest score: ${highestScore}`;
        }
        if (oldscore + 1 === score) {
            showLoserMessage();
        }
    });

    let timerStarted = false;
    let timer;
    const loserMsgDiv = document.querySelector('.loser-msg');
    loserMsgDiv.innerHTML = '';
    let index = 0;

    function showLoserMessage() {
        const message = "8==D Yann is a bitard!";
        if (index < message.length) {
            loserMsgDiv.innerHTML += message[index];
            index++;
        }
    }

    // target.addEventListener('click', (event) => {
    //     if (!event.target.classList.contains('target-center') &&
    //         !event.target.classList.contains('small-circle-target') &&
    //         !event.target.classList.contains('big-circle-target') &&
    //         event.target.querySelector('body')) {
    //         showLoserMessage();
    //     }
    // });

    target.addEventListener('click', () => {
        if (!timerStarted) {
            timerStarted = true;
            let timeLeft = 60; // 60 seconds timer
            timer = setInterval(() => {
                if (timeLeft <= 0) {
                    clearInterval(timer);
                    document.querySelector(".timer").innerHTML = `Time's up! Your final score is: ${score}`;
                } else {
                    document.querySelector(".timer").innerHTML = `Time left: ${timeLeft} seconds`;
                    timeLeft--;
                }
            }, 1000);
        }
    });
    let showTargetInterval;

    showTargetInterval = setInterval(showTarget, (getDifficulty()).interval);

    let start = document.querySelector('.start-button');

    start.addEventListener('click', () => {
        timerStarted = false;
        clearInterval(timer);
        score = 0;
        document.querySelector(".timer").innerHTML = `Ready? Click on the target to start!`;
        clearInterval(showTargetInterval);
        renderGetGudPage();
    });
}

renderGetGudPage();