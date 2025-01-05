export const questions = [
    { question: "Quelle est la capitale de l'Allemagne?", answer: "Berlin", wrongAnswer: "Hambourg" },
    { question: "Quelle est la langue officielle de l'Allemagne?", answer: "Allemand", wrongAnswer: "Bavarois" },
    { question: "Quel est le plus grand fleuve d'Allemagne?", answer: "Rhin", wrongAnswer: "Elbe" },
    { question: "Quel est le plat traditionnel allemand à base de chou fermenté?", answer: "Choucroute", wrongAnswer: "Currywurst" },
    { question: "Quel est le nom de la fête de la bière en Allemagne?", answer: "Oktoberfest", wrongAnswer: "Cannstatter Volksfest" },
    { question: "Quelle est la monnaie utilisée en Allemagne?", answer: "Euro", wrongAnswer: "Mark" },
    { question: "Quel est le nom de l'autoroute allemande sans limitation de vitesse?", answer: "Autobahn", wrongAnswer: "Bundesstraße" },
    { question: "Quel est le plus haut sommet d'Allemagne?", answer: "Zugspitze", wrongAnswer: "Watzmann" },
    { question: "Quel est le nom du célèbre château en Bavière?", answer: "Neuschwanstein", wrongAnswer: "Hohenzollern" },
    { question: "Quelle est la plus grande ville d'Allemagne?", answer: "Berlin", wrongAnswer: "Munich" },
    { question: "Quel est le nom du festival de musique classique à Bayreuth?", answer: "Festival de Bayreuth", wrongAnswer: "Festival de Beethoven" },
    { question: "Quel est le nom de l'aéroport principal de Francfort?", answer: "Aéroport de Francfort", wrongAnswer: "Aéroport de Berlin Tegel" },
    { question: "Quel est le nom du célèbre mur qui a divisé Berlin?", answer: "Mur de Berlin", wrongAnswer: "Mur de la Spree" },
    { question: "Quelle est la couleur du drapeau allemand?", answer: "Noir, rouge et or", wrongAnswer: "Noir, rouge et blanc" },
    { question: "Quel est le nom de la célèbre porte à Berlin?", answer: "Porte de Brandebourg", wrongAnswer: "Porte de Potsdam" },
    { question: "Quel est le nom de la célèbre avenue à Berlin?", answer: "Unter den Linden", wrongAnswer: "Kurfürstendamm" },
    { question: "Quel est le nom du célèbre festival de cinéma à Berlin?", answer: "Berlinale", wrongAnswer: "Filmfest München" },
    { question: "Quel est le nom du célèbre festival de musique électronique à Berlin?", answer: "Love Parade", wrongAnswer: "Mayday" },
    { question: "Quel est le nom de la célèbre cathédrale de Cologne?", answer: "Cathédrale de Cologne", wrongAnswer: "Cathédrale de Berlin" },
    { question: "Quel est le nom du célèbre marché de Noël à Nuremberg?", answer: "Christkindlesmarkt", wrongAnswer: "Weihnachtsmarkt de Munich" },
    { question: "Quel est le nom du célèbre musée d'art à Munich?", answer: "Alte Pinakothek", wrongAnswer: "Neue Pinakothek" },
    { question: "Quel est le nom de la célèbre université à Heidelberg?", answer: "Université de Heidelberg", wrongAnswer: "Université de Munich" },
    { question: "Quel est le nom du célèbre parc à Berlin?", answer: "Tiergarten", wrongAnswer: "Tempelhofer Feld" },
    { question: "Quel est le nom de la célèbre île aux musées à Berlin?", answer: "Île aux Musées", wrongAnswer: "Île de Pfaueninsel" },
    { question: "Quel est le nom de la célèbre porte à Munich?", answer: "Karlstor", wrongAnswer: "Isartor" },
    { question: "Quel est le nom de la célèbre rue commerçante à Francfort?", answer: "Zeil", wrongAnswer: "Goethestraße" },
    { question: "Quel est le nom de la célèbre place à Hambourg?", answer: "Rathausmarkt", wrongAnswer: "Jungfernstieg" }
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