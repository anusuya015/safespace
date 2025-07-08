import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="container text-center mt-5">
      <h1 className="display-4 mb-3 text-light">SafeSpace: Women’s Safety Surveillance System</h1>
      <p className="lead mb-4 text-secondary">AI-based anomaly detection for real-time alerts</p>
      <Link to="/login" className="btn btn-primary btn-lg">Get Started</Link>
    </div>
  )
}
