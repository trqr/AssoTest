import { renderHeaderNav } from "../renderHeaderNav.js";

export let accounts;
accounts = JSON.parse(localStorage.getItem('accounts')) || [];

export function AccsSaveToStorage() {
    localStorage.setItem('accounts', JSON.stringify(accounts));
}

export function addToAccounts() {
    const email = document.getElementById('email').value;
    const matchingAccount = accounts.find(account => account.email === email);
    if (matchingAccount) {
        console.log('Email already in use');
        return;
    } else if (document.getElementById('accUsername').value === "" || document.getElementById('accPassword').value === "" || document.getElementById('email').value === "") {
        console.log('Please fill all fields');
    } else {
        accounts.push({
            username: document.getElementById('accUsername').value,
            password: document.getElementById('accPassword').value,
            email: document.getElementById('email').value
        })
        console.log(accounts);
        AccsSaveToStorage();
    };
};

export function removeToAccounts(username) {
    const newAccounts = [];
    accounts.forEach(account => {
        if (account.username !== username) {
            newAccounts.push(account);
        } else {
            console.log(account.username + ' removed');
        }
    });
    accounts = newAccounts;
    AccsSaveToStorage();
}

export function login() {
    const loginButton = document.querySelector('.login-button');
    loginButton.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const account = accounts.find(account => account.username === username && account.password === password);
        if (account) {
            document.querySelector('.login-box').innerHTML = `<div class="box logged-in">Logged in as ${account.username}</div>
            <button class="button logout-button"><span><a>Logout</a></span></button>`;
            console.log('Login successful');
        } else {
            console.log('Login failed');
            alert('Login failed');
        }
    });
};

export function logout() {
    const logoutButton = document.querySelector('.logout-button');
    logoutButton.addEventListener('click', () => {
        document.querySelector('.login-box').innerHTML = `<div class="inputbox">
        <input class="input username-input" required="required" type="text" id="username" name="username" required>
        <span>Username</span>
        <i></i>
    </div>
    <div class="inputbox">
        <input class="input password-input" type="password" id="password" name="password" required>
        <span>Password</span>
        <i></i>
    </div>
    <button class="button login-button"><span><a>Sign in</a></span></button>
    <button class="button create-account-button"><span><a href="/register.html">Create an account</a></span></button>`;
    });
}

export function renderAccountsPage() {
    let accountsHTML = "";
    accounts.forEach(account => {
        accountsHTML += `
    <div class="box-info account">
    <ul>
    <li>${account.username}</li>
    <li>${account.password}</li>
    <li>${account.email}</li>
    </ul>
    <button class="button delete-account-button" data-username="${account.username}"><span><a>Delete account</a></span></button>
    </div>
    <p></p>`
    });
    document.querySelector('.accounts-list').innerHTML = accountsHTML;
}

