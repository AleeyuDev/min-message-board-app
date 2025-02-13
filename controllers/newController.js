const db = require('../db.js');

const addNewMessage = (request, response) => {
    const text = request.body.messageText;
    const user = request.body.messageUser;

    db.addNewMessage(text, user);
    response.redirect('/');
}

module.exports = {addNewMessage}