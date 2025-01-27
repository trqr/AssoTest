import { questions, generateQuizzQuestion } from "./data/quizz.js";
import { renderHeaderNav } from "./renderHeaderNav.js";
import { login } from "./data/accounts.js";

renderHeaderNav();
generateQuizzQuestion();
login();

const bebou = document.querySelector('.bebou-button');
bebou.addEventListener('click', () => {
    const Rab1 = document.createElement('div');
    Rab1.textContent = `(\\(\\`;
    const Rab2 = document.createElement('div');
    Rab2.textContent = `(-.-)`;
    const Rab3 = document.createElement('div');
    Rab3.textContent = `(")(")`;
    bebou.appendChild(Rab1);
    bebou.appendChild(Rab2);
    bebou.appendChild(Rab3);
});