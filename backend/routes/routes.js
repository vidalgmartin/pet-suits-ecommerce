// express router
const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

// suit item model
const SuitItem = require('../models/suitItemSchema')

// multer storage
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../frontend/uploads/item-image')
    },
    filename: function(req, file, cb) {
        cb(null, file.fieldname + Date.now() + path.extname(file.originalname))
    }
})

// initialize multer
const upload = multer({ storage: storage })

// GET all items
router.get('/suits', async (req, res) => {
    try {
        const suitItem =  await SuitItem.find()

        res.json(suitItem)
    }  catch (error) {
        console.error(error)
        res.status(500).json({  message: 'Internal Server Error' })
    }
})

// GET item by type
router.get('/suits/:type', async (req, res) => {
    const { type } = req.params

    try {
        const suitItem =  await SuitItem.find({ type })

        res.json(suitItem)
    }  catch (error) {
        console.error(error)
        res.status(500).json({  message: 'Internal Server Error' })
    }
})

// GET item by type and itemId
router.get('/suits/:type/:itemId', async (req, res) => {
    const { itemId } = req.params

    try {
        const suitItem =  await SuitItem.find({ itemId })

        res.json(suitItem)
    }  catch (error) {
        console.error(error)
        res.status(500).json({  message: 'Internal Server Error' })
    }
})

// GET item if it's in the cart
router.get('/inCart', async (req, res) => {
    try {
        const suitItem =  await SuitItem.find({ inCart: true })

        res.json(suitItem)
    }  catch (error) {
        console.error(error)
        res.status(500).json({  message: 'Internal Server Error' })
    }
})

// POST a suit item
router.post('/suits',upload.single('image'), async (req, res) => {
    const { name, itemId, quantity, type } = req.body
    const imageName = req.file ? req.file.filename : null

    try {
        const createSuitItem = await SuitItem.create({ name, itemId, quantity, type, image: imageName })
        await createSuitItem.save()
        
        res.status(200).json(createSuitItem)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// PATCH a suit item
router.patch('/suits/:type/:itemId', async (req, res) => {
    const { type, itemId } = req.params
    const updatedData = req.body

    try {
        const updatedSuitItem = await SuitItem.findOneAndUpdate({type, itemId}, { ...updatedData })
        res.status(200).json(updatedSuitItem)

        if (!updatedSuitItem) {
            return res.status(404).json({ message: 'No suit found' })
        }
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// DELETE a suit item
router.delete('/suits/:id', async (req, res) => {
    const { id } = req.params

    try {
        const deletedSuitItem = await SuitItem.findByIdAndDelete(id)

        if (!deletedSuitItem) {
            return res.status(404).json({ message: 'No suit found' })
        }
        
        res.json(deletedSuitItem)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// export the routes
module.exports = router