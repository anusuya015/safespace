import { Link } from 'react-router-dom'
import { useAuth } from "../context/AuthContext"
import { useState, useEffect } from "react"
import { doc, getDoc } from "firebase/firestore"
import { db } from "../firebaseClient"

export default function LandingPage() {
  const { user } = useAuth()
  const [profile, setProfile] = useState(null)

  useEffect(() => {
    const fetchProfile = async () => {
      if (user) {
        const docRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setProfile(docSnap.data())
        }
      }
    }
    fetchProfile()
  }, [user])

  return (
    <div className="container text-center mt-5">
      {user && profile ? (
        <>
          <h1 className="display-4 mb-3 text-light">
            Welcome, {profile.name}!
          </h1>
          <p className="lead mb-4 text-secondary">
            Monitoring cameras and sending real-time alerts
          </p>
          <Link to="/dashboard" className="btn btn-primary btn-lg">
            Go to Dashboard
          </Link>
        </>
      ) : (
        <>
          <h1 className="display-4 mb-3 text-light">
            SafeSpace: Women’s Safety Surveillance System
          </h1>
          <p className="lead mb-4 text-secondary">
            AI-based anomaly detection for real-time alerts
          </p>
          <Link to="/login" className="btn btn-primary btn-lg">
            Get Started
          </Link>
        </>
      )}
    </div>
  )
}
