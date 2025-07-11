import { useEffect, useState } from "react"
import { doc, getDoc } from "firebase/firestore"
import { auth, db } from "../firebaseClient"
import { onAuthStateChanged } from "firebase/auth"

export default function Profile() {
  const [profile, setProfile] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid)
        const docSnap = await getDoc(docRef)
        if (docSnap.exists()) {
          setProfile(docSnap.data())
        }
      }
      setLoading(false)
    })
    return () => unsubscribe()
  }, [])

  if (loading) return <div className="text-center mt-5">Loading profile...</div>

  if (!profile) return (
    <div className="container mt-5">
      <h3 className="text-center">No profile found.</h3>
    </div>
  )

  return (
    <div className="container mt-5" style={{maxWidth: "600px"}}>
      <h2 className="mb-4 text-center">My Profile</h2>
      <div className="card p-4">
        <p><strong>Name:</strong> {profile.name}</p>
        <p><strong>Mobile:</strong> {profile.mobile}</p>
        <p><strong>Department:</strong> {profile.department}</p>
        <p><strong>ID:</strong> {profile.id}</p>
        <p><strong>Email:</strong> {profile.email}</p>
      </div>
    </div>
  )
}
