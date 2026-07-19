import { useState, useEffect } from 'react'
import CrewmateCard from '../components/CrewmateCard'
import { supabase } from '../client'
import './GalleryPage.css'

function GalleryPage() {
  const [crewmates, setCrewmates] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCrewmates()
  }, [])

  const fetchCrewmates = async () => {
    const { data, error } = await supabase
      .from('crewmates')
      .select()
      .order('created_at', { ascending: false })
      .limit(20)

    if (error) {
      setError(error.message)
      return
    }

    setCrewmates(data ?? [])
  }

  return (
    <div className="gallery">
      <h1>Crewmate Gallery</h1>

      {error && <p className="gallery-error">Could not load crewmates: {error}</p>}

      {!error && crewmates.length === 0 && (
        <p className="gallery-empty">No crewmates added yet!</p>
      )}

      <div className="gallery-grid">
        {crewmates.map((mate) => (
          <CrewmateCard
            key={mate.id}
            id={mate.id}
            name={mate.name}
            speed={mate.speed}
            color={mate.color}
          />
        ))}
      </div>
    </div>
  )
}

export default GalleryPage
