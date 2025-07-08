import { useNavigate } from 'react-router-dom'

export default function Dashboard() {
  const stats = { cameras: 4, alerts: 7 }

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Dashboard Overview</h1>
      <div className="row g-4">
        <div className="col-12 col-md-6">
          <div className="card text-center p-3">
            <h5 className="card-title text-info">Total Cameras</h5>
            <p className="display-6">{stats.cameras}</p>
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="card text-center p-3">
            <h5 className="card-title text-danger">Total Alerts</h5>
            <p className="display-6">{stats.alerts}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

