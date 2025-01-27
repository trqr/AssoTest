import { accounts, addToAccounts } from "./data/accounts.js";
import { renderHeaderNav } from "./renderHeaderNav.js";

renderHeaderNav();

const registerButton = document.querySelector('.register-button');
registerButton.addEventListener('click', () => {
    addToAccounts();
});