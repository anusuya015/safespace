import express from 'express'
import cors from 'cors'
import admin from 'firebase-admin'
import authRoutes from './routes/auth.js'
import serviceAccount from './firebaseServiceAccountKey.json' assert { type: "json" }

const app = express()
app.use(cors())
app.use(express.json())

// 🔥 This line initializes your app ONCE
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
})

app.use('/api/auth', authRoutes)

app.get('/', (req, res) => res.send("SafeSpace API Running 🚀"))
app.listen(5000, () => console.log("Server started on port 5000"))
