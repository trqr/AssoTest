import { questions, generateQuizzQuestion } from "./data/quizz.js";
import { renderHeaderNav } from "./renderHeaderNav.js";
import { login } from "./data/accounts.js";

renderHeaderNav();
generateQuizzQuestion();
login();