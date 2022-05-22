const router = require("express").Router();
const { add,deletes,update,likeUnlike,getPost,show,showTimeline } = require('../controllers/post.controller')
const { Authenticate } = require("../middleware/auth.middleware");
router.post('/add',Authenticate, add);
router.delete('/delete/:id', Authenticate, deletes);
router.put('/update/:id', Authenticate, update);
router.put('/:id/like', Authenticate, likeUnlike);
router.get('/timeline', Authenticate, showTimeline);
router.get('/getpost', Authenticate, getPost);
router.get('/show', Authenticate, show);



module.exports = router;