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

export function login() {
    const loginButton = document.querySelector('.login-button');
    loginButton.addEventListener('click', () => {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
        const account = accounts.find(account => account.username === username && account.password === password);
        if (account) {
            console.log('Login successful');
        } else {
            console.log('Login failed');
        }
    });
};