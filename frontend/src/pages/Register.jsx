import { useState } from "react"
import { useNavigate, Link } from "react-router-dom"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc } from "firebase/firestore"
import { auth, db } from "../firebaseClient"

export default function Register() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    email: "",
    password: "",
    name: "",
    mobile: "",
    department: "",
    id: ""
  })
  const [error, setError] = useState("")

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleRegister = async (e) => {
    e.preventDefault()
    setError("")
    try {
      // create user in Auth
      const userCredential = await createUserWithEmailAndPassword(auth, form.email, form.password)
      const user = userCredential.user

      // store extra data in Firestore
      await setDoc(doc(db, "users", user.uid), {
        name: form.name,
        mobile: form.mobile,
        department: form.department,
        id: form.id,
        email: user.email
      })

      navigate('/login')
    } catch (err) {
      setError("Registration failed: " + err.message)
    }
  }

  return (
    <div className="container mt-5" style={{maxWidth: '400px'}}>
      <h2 className="mb-4 text-center">Register</h2>
      <form onSubmit={handleRegister}>
        <div className="mb-3">
          <input type="text" name="name" className="form-control" placeholder="Name"
            value={form.name} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="text" name="mobile" className="form-control" placeholder="Mobile Number"
            value={form.mobile} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="text" name="department" className="form-control" placeholder="Department"
            value={form.department} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="text" name="id" className="form-control" placeholder="ID"
            value={form.id} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="email" name="email" className="form-control" placeholder="Email"
            value={form.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <input type="password" name="password" className="form-control" placeholder="Password"
            value={form.password} onChange={handleChange} required />
        </div>
        {error && <div className="alert alert-danger">{error}</div>}
        <button type="submit" className="btn btn-primary w-100">Register</button>
      </form>

      <div className="text-center mt-3">
        <p>Already have an account? <Link to="/login">Login here</Link></p>
      </div>
    </div>
  )
}
