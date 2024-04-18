// express router
const express = require('express')
const router = express.Router()
const multer = require('multer')
const path = require('path')

// suit item model
const SuitItem = require('../models/suitItemSchema')
const CartItem = require('../models/cartItemSchema')

// multer storage
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, '../frontend/public/uploads/item-image')
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
        const itemsInCart =  await CartItem.find()

        res.json(itemsInCart)
    }  catch (error) {
        console.error(error)
        res.status(500).json({  message: 'Internal Server Error' })
    }
})

// POST a suit item
router.post('/suits',upload.fields([
        { name: 'mainImage', maxCount: 1},
        { name: 'otherImages', maxCount: 4}
    ]), async (req, res) => {
    const { name, itemId, description, quantity, price, color, type } = req.body
    const mainImage = req.files['mainImage'] ? req.files['mainImage'][0].filename : ''
    const otherImages = req.files['otherImages'].map(file => file.filename)

    try {
        const createSuitItem = await SuitItem.create({ name, itemId, description, quantity, price, color, type, mainImage, otherImages })
        await createSuitItem.save()
        
        res.status(200).json(createSuitItem)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// PATCH or create a cart item
router.patch('/inCart/:type/:itemId', async (req, res) => {
    const { type, itemId } = req.params
    const updatedData = req.body

    try {
        const updatedSuitItem = await SuitItem.findOneAndUpdate({type, itemId}, { ...updatedData })
        if (!updatedSuitItem) {
            return res.status(404).json({ message: 'No suit found' })
        }

        const sameSizeCartItem = await CartItem.findOne({ itemId, size: updatedData.size })
        if (sameSizeCartItem) {
            sameSizeCartItem.quantity += 1

            await sameSizeCartItem.save()
        } else {
            const newCartItem = new CartItem({
                name: updatedData.name,
                itemId,
                type,
                size: updatedData.size,
                price: updatedData.price,
                mainImage: updatedData.mainImage
            })

            await newCartItem.save()
        }
        res.status(200).json(updatedSuitItem)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// PATCH a suit item
router.patch('/suits/:id', async (req, res) => {
    const { id } = req.params
    const updatedData = req.body

    try {
        const updatedSuitItem = await SuitItem.findByIdAndUpdate(id, { ...updatedData })
        if (!updatedSuitItem) {
            return res.status(404).json({ message: 'No suit found' })
        }

        res.status(200).json(updatedSuitItem)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// PATCH a cart item
router.patch('/inCart/:id', async (req, res) => {
    const { id } = req.params
    const updatedData = req.body

    try {
        const updatedCartItem = await CartItem.findByIdAndUpdate(id , { ...updatedData })
        if (!updatedCartItem) {
            return res.status(404).json({ message: 'No cart item found' })
        }

        res.status(200).json(updatedCartItem)
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

// DELETE a cart item
router.delete('/inCart/:id', async (req, res) => {
    const { id } = req.params

    try {
        const deletedCartItem = await CartItem.findByIdAndDelete(id)
        if (!deletedCartItem) {
            return res.status(404).json({ message: 'No cart item found' })
        }

        res.json(deletedCartItem)
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: 'Internal Server Error' })
    }
})

// export the routes
module.exports = router