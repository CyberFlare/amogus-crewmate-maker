import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router'
import { supabase } from '../client'
import anonomogus from '../assets/anonomogus.png'
import './DetailsPage.css'

function DetailsPage() {
  const { id } = useParams()
  const [crewmate, setCrewmate] = useState(null)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCrewmate()
  }, [id])

  const fetchCrewmate = async () => {
    const { data, error } = await supabase
      .from('crewmates')
      .select()
      .eq('id', id)
      .single()

    if (error) {
      setError(error.message)
      return
    }

    setCrewmate(data)
  }

  if (error) {
    return <p className="detailsError">Could not load crewmate: {error}</p>
  }

  if (!crewmate) {
    return <p className="detailsLoading">Loading...</p>
  }

  let speedNote

  if (crewmate.speed < 15) {
    speedNote = 'You may want to find a Crewmate with more speed, this one is kind of slow 😬'
  } 
  else {
    speedNote = 'Wow, this Crewmate is super fast, that will be helpful! 🏃💨'
  }

  return (
    <div className="pageCenter details">
      <div className="detailsImgBox" style={{ borderColor: crewmate.color }}>
        <img src={anonomogus} alt="Amogus crewmate" className="detailsImg" />
      </div>

      <h1>Crewmate: {crewmate.name}</h1>
      <h2>Stats:</h2>

      <p className="detailsStat">Color: {crewmate.color}</p>
      <p className="detailsStat">Speed: {crewmate.speed} mph</p>

      <p className="detailsNote">{speedNote}</p>

      <Link to={`/edit/${id}`} className="detailsButton">
        Wanna edit this Crewmate?
      </Link>
    </div>
  )
}

export default DetailsPage
