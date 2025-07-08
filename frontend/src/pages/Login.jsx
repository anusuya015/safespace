import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  const handleLogin = () => {
    navigate('/login')
  }

  return (
    <div className="container mt-5" style={{maxWidth: '400px'}}>
      <h2 className="mb-4 text-center">Login</h2>
      <form onSubmit={(e) => {e.preventDefault(); handleLogin()}}>
        <div className="mb-3">
          <input type="email" className="form-control" placeholder="Email" required />
        </div>
        <div className="mb-3">
          <input type="password" className="form-control" placeholder="Password" required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  )
}
