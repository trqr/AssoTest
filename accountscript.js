import { renderHeaderNav } from './renderHeaderNav.js';
import { renderAccountsPage, accounts, removeToAccounts } from './data/accounts.js';


renderHeaderNav();
renderAccountsPage();

const deleteAccountButtons = document.querySelectorAll('.delete-account-button');
deleteAccountButtons.forEach(button => {
    button.addEventListener('click', () => {
        const username = button.dataset.username;
        removeToAccounts(username);
        console.log(accounts);
        renderAccountsPage();
    });
});