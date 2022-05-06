const router = require('express').Router();
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes')
const userRoutes = require('./user-routes.js');
const { route } = require('./user-routes.js');

router.use('/comments', commentRoutes)
router.use('/users', userRoutes);
router.use('/posts', postRoutes);


module.exports = router;

