const router = require('express').Router();
const Blog = require('../models/Blog')

// Your routing code goes here

// ------------POST-----------------------------------------
router.post('/blog', async (req, res) => {
    try {
        const posted_blog = await Blog.create(req.body)

        res.json({
            status: 'success',
            result: posted_blog
        })
    }
    catch (err) { res.status(400).json({ message: err.message }) }
})
// -------------PUT-----------------------------------------
router.put('/blog/:id', async (req, res) => {
    try {
        await Blog.updateOne({ _id: req.params.id }, req.body)

        res.json({
            status: 'success',
            result:
            {
                id: req.params.id,
                ...req.body
            }
        })

    }
    catch (err) {
        res.status(400).json({ message: 'Id not found', error: err.message })
    }
})
// -------------GET all-------------------------------------
router.get('/blog', async (req, res) => {
    try {
        const searchList = await Blog.find()
        res.json({
            status: 'success',
            result: searchList
        })
    }
    catch (e) { res.status(400).json({ message: e.message }) }
})

// -------------DELETE-----------------------------------
router.delete('/blog/:Id', async (req, res) => {
    try {
        const postToDelete = await Blog.findOne({ _id: req.params.Id })
        await Blog.deleteOne({ _id: req.params.Id })

        res.json({
            status: 'success',
            result: postToDelete
        })
    }
    catch (e) {
        res.status(403).json({ message: "Id not found", error: e.message })
    }

})

module.exports = router;