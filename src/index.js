import './css/styles.scss';
import WhatTheCommit from './whatthecommit';

// Business logic

function getMessageUpdate() {
    return WhatTheCommit.getMessage()
        .then(data => {
            if (data) {
                updateMessage(data);
            } else {
                throw new Error('Empty data');
            }
        })
        .catch(error => {
            console.error('Error in getMessage: ', error);
            throw error;
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
    getMessageUpdate()
        .catch(displayError);
}

window.addEventListener("load", function() {
    document.querySelector('#generate').addEventListener("click", generator);
});