// express router
const express = require('express')
const router = express.Router()

// suit item model
const SuitItem = require('../models/suitItemSchema')

// GET all items
router.get('/suits', async (req, res) => {
    try {
        // query through database and retrieve all task objects
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
        // query through database and retrieve all task objects
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
        // query through database and retrieve all task objects
        const suitItem =  await SuitItem.find({ itemId })

        res.json(suitItem)
    }  catch (error) {
        console.error(error)
        res.status(500).json({  message: 'Internal Server Error' })
    }
})

// POST a suit item
router.post('/suits', async (req, res) => {
    const { name, itemId, quantity, type } = req.body

    try {
        const createSuitItem = await SuitItem.create({ name, itemId, quantity, type })

        res.status(200).json(createSuitItem)
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