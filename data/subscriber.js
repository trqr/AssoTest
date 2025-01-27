import { renderHeaderNav } from "../renderHeaderNav.js";

renderHeaderNav();

let members;
members = JSON.parse(localStorage.getItem('members')) || [];

function SubsSaveToStorage() {
    localStorage.setItem('members', JSON.stringify(members));
}

document.querySelector('.submit-button').addEventListener('click', (event) => {
    event.preventDefault();
    const member = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        membership: document.getElementById('membership').value,
        payment: document.getElementById('payment').value
    };

    members.push(member);
    console.log(members);
    SubsSaveToStorage();

    document.querySelector('.subscription-form').remove();
    document.querySelector('body').innerHTML +=
        `<div class="subscription-review box">
            <div class="box-info"><h1>Thank you for your subscription!</h1>
                <div class="member-details">
                    <div class="detail"><strong>Name:</strong> ${member.name}</div>
                    <div class="detail"><strong>Email:</strong> ${member.email}</div>
                    <div class="detail"><strong>Phone:</strong> ${member.phone}</div>
                    <div class="detail"><strong>Membership:</strong> ${member.membership}</div>
                    <div class="detail"><strong>Payment:</strong> ${member.payment}</div>
                </div>
            </div>
        </div>
        `;
});

