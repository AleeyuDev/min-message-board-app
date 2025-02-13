// // const  express = require('express');




// // const messageRouter = express.Router();






// //     messageRouter.post('/new', (req, res) => {
// //         const newMessage = {
// //             text: req.body.text,
// //             user: req.body.user,
// //             added: new Date()
// //         };
// //         messages.push(newMessage);
// //         res.redirect('/');
// //     });



// //     module.exports = messageRouter;



// const { messages } = require('../db.js');
// const { Router } = require('express');
// const indexRouter = Router();

// indexRouter.get('/', (req, res) => {
//     res.render('index', { messages: messages });
// });

// module.exports = indexRouter;


const db = require('../db.js');
const { Router } = require('express');
const messageRouter = Router();
const { getMessageByIndex } = require('../controllers/messageController.js');

messageRouter.get('/:messageIndex', getMessageByIndex);

module.exports = messageRouter;