const db = require('../db.js');

const getMessageByIndex = (request, response) => {
    const { messageIndex } = request.params;
    const message = db.messages[Number(messageIndex)];
    response.render('message', { message });
};

module.exports = { getMessageByIndex };