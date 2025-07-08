export default function Alerts() {
  const alerts = [
    { cameraName: "Gate1", tag: "Main Entrance", time: "2025-07-04 12:30" },
    { cameraName: "Corridor3", tag: "Floor 2", time: "2025-07-04 14:10" },
  ]

  return (
    <div className="container mt-4">
      <h1 className="mb-4">Alerts & Incidents</h1>
      <div className="list-group">
        {alerts.map((a, idx) => (
          <div key={idx} className="list-group-item">
            <h5 className="text-info">{a.cameraName} - {a.tag}</h5>
            <p>Detected at: {a.time}</p>
          </div>
        ))}
      </div>
    </div>
  )
}
