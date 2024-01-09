import './css/styles.scss';
import WhatTheCommit from './whatthecommit';

// Business logic

function getMessage() {
    WhatTheCommit.getMessage()
        .then(data => {
            if (data) {
                updateMessage(data);
            } else {
                displayError();
            }
        });
}

// UI logic

function updateMessage(data) {
    document.querySelector('#message').innerText = data;
}
function displayError() {
    document.querySelector('#message').innerText = 'Sorry, message failed to display.';
}
function generator(e) {
    e.preventDefault();
    getMessage()
        .then(updateMessage)
        .catch(displayError);
}

window.addEventListener("load", function() {
    document.querySelector('#generate').addEventListener("click", generator);
});