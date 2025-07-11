import express from 'express'
import admin from 'firebase-admin'
import auth from '../middleware/auth.js'

const router = express.Router()

router.get('/profile', auth, async (req, res) => {
  try {
    const userDoc = await admin.firestore().collection('users').doc(req.user.uid).get()
    res.json(userDoc.exists ? userDoc.data() : {})
  } catch (err) {
    res.status(500).json({ message: 'Error fetching profile' })
  }
})

router.post('/register-extra', auth, async (req, res) => {
  const { name, mobile, authority } = req.body
  try {
    await admin.firestore().collection('users').doc(req.user.uid).set({
      name, mobile, authority
    })
    res.json({ message: "Profile registered successfully" })
  } catch (err) {
    res.status(500).json({ message: 'Error saving profile' })
  }
})

export default router
