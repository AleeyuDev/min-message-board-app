// const  express = require('express');




// const router = express.Router();



// router.get("/new", (req, res) => {
//     res.render("form");
//   });


// router.post('/new', (req, res) => {
//     const newMessage = {
//         text: req.body.text,
//         user: req.body.user,
//         added: new Date()
//     };
//     messages.push(newMessage);
//     res.redirect('/');
// });


// module.exports = router;



const { Router } = require('express');
const newRouter = Router();
const { addNewMessage } = require('../controllers/newController');

newRouter.get('/', (req, res) => {
    res.render('form');
});

newRouter.post('/', addNewMessage);

module.exports = newRouter;