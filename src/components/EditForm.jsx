import { useState, useEffect } from 'react'
import { supabase } from '../client'
import { colors } from '../constants'
import './Form.css'
import './EditForm.css'

function EditForm(props) {
  const [crewmate, setCrewmate] = useState(null)
  const [name, setName] = useState('')
  const [speed, setSpeed] = useState(0)
  const [color, setColor] = useState('')
  const [error, setError] = useState('')

  useEffect(() => {
    fetchCrewmate()
  }, [props.crewmateId])

  const fetchCrewmate = async () => {
    const { data, error } = await supabase
      .from('crewmates')
      .select()
      .eq('id', props.crewmateId)
      .single()

    if (error) {
      setError(error.message)
      return
    }

    setCrewmate(data)
    setName(data.name)
    setSpeed(data.speed)
    setColor(data.color)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    const { error } = await supabase
      .from('crewmates')
      .update({ name: name, speed: speed, color: color })
      .eq('id', props.crewmateId)

    if (error) {
      setError(error.message)
      return
    }

    window.location = '/gallery'
  }

  const deleteCrewmate = async () => {
    const { error } = await supabase
      .from('crewmates')
      .delete()
      .eq('id', props.crewmateId)

    if (error) {
      setError(error.message)
      return
    }

    window.location = '/gallery'
  }

  return (
    <form className="pageCenter editForm" onSubmit={handleSubmit}>
      <h1>Update a Crewmate</h1>
      <h2>Current Crewmate Info:</h2>

      {error && <p className="formError">{error}</p>}

      {crewmate && (
        <p>
          Name: {crewmate.name} // Speed: {crewmate.speed} mph // Color: {crewmate.color}
        </p>
      )}

      <div className="formContainer">
        <div className="formCard nameForm">
          <label className="formLabel" htmlFor="name">Name:</label>
          <input
            id="name"
            className="formInput"
            type="text"
            placeholder="Enter crewmate's name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="formCard speedForm">
          <label className="formLabel" htmlFor="speed">Speed (mph):</label>
          <input
            id="speed"
            className="formInput"
            type="number"
            placeholder="Enter speed in mph"
            value={speed}
            onChange={(e) => setSpeed(e.target.value)}
          />
        </div>

        <div className="formCard colorPicker">
          <span className="formTitle">Color:</span>
          {colors.map((c) => (
            <label key={c} className="colorOption">
              <input
                type="radio"
                name="color"
                value={c}
                checked={color === c}
                onChange={(e) => setColor(e.target.value)}
              />
              {c}
            </label>
          ))}
        </div>
      </div>

      <div className="formActions">
        <button type="submit" className="formButton submitButton">Update Crewmate</button>
        <button type="button" className="formButton deleteButton" onClick={deleteCrewmate}>Delete Crewmate</button>
      </div>
    </form>
  )
}

export default EditForm
