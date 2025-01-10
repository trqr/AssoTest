export const questions = [
    { question: "Quel est le nom du personnage principal de la série The Legend of Zelda?", answer: "Link", wrongAnswer: "Zelda" },
    { question: "Quel est le jeu vidéo le plus vendu de tous les temps?", answer: "Minecraft", wrongAnswer: "Tetris" },
    { question: "Quel est le nom de la ville principale dans Grand Theft Auto V?", answer: "Los Santos", wrongAnswer: "Vice City" },
    { question: "Quel est le nom du protagoniste de la série Halo?", answer: "Master Chief", wrongAnswer: "Cortana" },
    { question: "Quel est le nom de l'entreprise qui a développé le jeu Fortnite?", answer: "Epic Games", wrongAnswer: "Activision" },
    { question: "Quel est le nom du jeu de simulation de vie développé par Maxis?", answer: "Les Sims", wrongAnswer: "SimCity" },
    { question: "Quel est le nom du personnage principal de la série God of War?", answer: "Kratos", wrongAnswer: "Ares" },
    { question: "Quel est le nom de la princesse dans la série Super Mario?", answer: "Peach", wrongAnswer: "Daisy" },
    { question: "Quel est le nom de l'arme emblématique de la série DOOM?", answer: "BFG", wrongAnswer: "Plasma Rifle" },
    { question: "Quel est le nom du jeu de tir à la première personne développé par Blizzard Entertainment?", answer: "Overwatch", wrongAnswer: "Valorant" },
    { question: "Quel est le nom du jeu de rôle en ligne massivement multijoueur développé par Blizzard Entertainment?", answer: "World of Warcraft", wrongAnswer: "Final Fantasy XIV" },
    { question: "Quel est le nom du personnage principal de la série Metal Gear?", answer: "Solid Snake", wrongAnswer: "Big Boss" },
    { question: "Quel est le nom du jeu de course développé par Nintendo?", answer: "Mario Kart", wrongAnswer: "F-Zero" },
    { question: "Quel est le nom du jeu de combat crossover développé par Nintendo?", answer: "Super Smash Bros.", wrongAnswer: "Street Fighter" },
    { question: "Quel est le nom du jeu de survie en monde ouvert développé par Mojang?", answer: "Minecraft", wrongAnswer: "Terraria" },
    { question: "Quel est le nom du jeu de stratégie en temps réel développé par Blizzard Entertainment?", answer: "StarCraft", wrongAnswer: "Warcraft" },
    { question: "Quel est le nom du jeu de tir à la première personne développé par id Software?", answer: "DOOM", wrongAnswer: "Quake" },
    { question: "Quel est le nom du jeu de rôle développé par CD Projekt Red?", answer: "The Witcher", wrongAnswer: "Cyberpunk 2077" },
    { question: "Quel est le nom du jeu de plateforme développé par Naughty Dog?", answer: "Crash Bandicoot", wrongAnswer: "Jak and Daxter" },
    { question: "Quel est le nom du jeu de tir à la première personne développé par Valve?", answer: "Half-Life", wrongAnswer: "Portal" },
    { question: "Quel est le nom du jeu de rôle développé par Bethesda Game Studios?", answer: "The Elder Scrolls V: Skyrim", wrongAnswer: "Fallout 4" },
    { question: "Quel est le nom du jeu de simulation de ferme développé par ConcernedApe?", answer: "Stardew Valley", wrongAnswer: "Harvest Moon" },
    { question: "Quel est le nom du jeu de tir à la première personne développé par Bungie?", answer: "Destiny", wrongAnswer: "Halo" },
    { question: "Quel est le nom du jeu de rôle développé par BioWare?", answer: "Mass Effect", wrongAnswer: "Dragon Age" },
    { question: "Quel est le nom du jeu de plateforme développé par Playdead?", answer: "Limbo", wrongAnswer: "Inside" },
    { question: "Quel est le nom du jeu de puzzle développé par Valve?", answer: "Portal", wrongAnswer: "Half-Life" },
    { question: "Quel est le nom du jeu de rôle développé par Square Enix?", answer: "Final Fantasy", wrongAnswer: "Kingdom Hearts" },
    { question: "Quel est le nom du jeu de tir à la première personne développé par 343 Industries?", answer: "Halo", wrongAnswer: "Destiny" }
];

export function generateQuizzQuestion() {
    document.getElementById('generate-question').addEventListener('click', () => {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const selectedQuestion = questions[randomIndex];
        document.getElementById('question').innerText = selectedQuestion.question;
        const answerContainer = document.createElement('div');
        answerContainer.id = 'answer-container';

        if (Math.random() < 0.5) { // Randomly switch the correct and wrong answers

            const correctButton = document.createElement('button');
            correctButton.classList.add('answer-button');
            correctButton.innerText = selectedQuestion.answer;
            correctButton.addEventListener('click', () => {
                correctButton.classList.add('correct-answer-button');
            });
            const wrongButton = document.createElement('button');
            wrongButton.classList.add('answer-button');
            wrongButton.innerText = selectedQuestion.wrongAnswer;
            wrongButton.addEventListener('click', () => {
                wrongButton.classList.add('wrong-answer-button');
            });
            answerContainer.appendChild(correctButton);
            answerContainer.appendChild(wrongButton);
        } else {
            const wrongButton = document.createElement('button');
            wrongButton.classList.add('answer-button');
            wrongButton.innerText = selectedQuestion.wrongAnswer;
            wrongButton.addEventListener('click', () => {
                wrongButton.classList.add('wrong-answer-button');
            });
            const correctButton = document.createElement('button');
            correctButton.classList.add('answer-button');
            correctButton.innerText = selectedQuestion.answer;
            correctButton.addEventListener('click', () => {
                correctButton.classList.add('correct-answer-button');
            });
            answerContainer.appendChild(wrongButton);
            answerContainer.appendChild(correctButton);
        }

        const questionContainer = document.getElementById('question-container');
        const existingAnswerContainer = document.getElementById('answer-container');
        if (existingAnswerContainer) {
            questionContainer.removeChild(existingAnswerContainer);
        }
        questionContainer.appendChild(answerContainer);
    });
}