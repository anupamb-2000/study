import { useState } from 'react'
import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import { Button, TextField, FormControl, Alert, Box } from '@mui/material'
import { useAuthContext } from '../hooks/useAuthContext'

const WorkoutForm = () => {
  const { dispatch } = useWorkoutsContext()
  const { user } = useAuthContext()

  const [title, setTitle] = useState('')
  const [load, setLoad] = useState('')
  const [reps, setReps] = useState('')
  const [error, setError] = useState(null)
  const [emptyFields, setEmptyFields] = useState([])

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!user) {
      setError('You must be logged in') 
      return
    }

    const workout = {title, load, reps}
    
    const response = await fetch('/api/workouts', {
      method: 'POST',
      body: JSON.stringify(workout),
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${user.token}`
      }
    })
    const json = await response.json()

    console.log(json.emptyFields)

    if (!response.ok) {
      setError(json.error)
      setEmptyFields(json.emptyFields)
    }
    if (response.ok) {
      setError(null)
      setTitle('')
      setLoad('')
      setReps('')
      setEmptyFields([])
      console.log('New workout added:', json)
      dispatch({type: 'CREATE_WORKOUT', payload: json})
    }

  }

  return (
    <Box component="form" autoComplete="off" className="create" onSubmit={handleSubmit}> 
      <h3>Add a New Workout</h3>

      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField  
          color="text"
          type="text" 
          onChange={(e) => setTitle(e.target.value)} 
          value={title}
          label="Excersize Title:"
          variant="outlined"
          error={emptyFields.includes('title') ? true : false}
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField 
          type="number" 
          onChange={(e) => setLoad(e.target.value)} 
          value={load}
          label="Load (in kg):"
          variant="outlined"
          error={emptyFields.includes('load') ? true : false}
        />
      </FormControl>

      <FormControl fullWidth sx={{ m: 1 }}>
        <TextField 
          type="number" 
          onChange={(e) => setReps(e.target.value)} 
          value={reps} 
          label="Number of Reps:"
          variant="outlined"
          error={emptyFields.includes('reps') ? true : false}
        />
      </FormControl>

      <Button fullWidth sx={{ m: 1 }} variant="contained" type="submit">Add Workout</Button>
      {error && <Alert severity="error">{error}</Alert>}
    </Box>
  )
}

export default WorkoutForm