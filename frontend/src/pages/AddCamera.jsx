import { useState } from 'react'

export default function AddCamera() {
  const [name, setName] = useState('')
  const [tag, setTag] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    alert(`Camera Added: ${name}, ${tag}`)
  }

  return (
    <div className="container mt-5" style={{maxWidth: '500px'}}>
      <h2 className="mb-4 text-center">Add Camera</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Camera Name"
            value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <input type="text" className="form-control" placeholder="Tag (Location/Area)"
            value={tag} onChange={(e) => setTag(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary w-100">Submit</button>
      </form>
    </div>
  )
}
