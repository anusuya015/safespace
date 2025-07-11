import express from 'express'
import admin from 'firebase-admin'
import auth from '../middleware/auth.js'

const router = express.Router()
const db = admin.firestore()

router.get('/', auth, async (req, res) => {
  const snapshot = await db.collection('cameras').get()
  const cameras = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
  res.json(cameras)
})

export default router
