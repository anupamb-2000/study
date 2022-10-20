import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { Card, Typography } from '@mui/material'


// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const WorkoutDetails = ({ workout }) => {
  const { dispatch } = useWorkoutsContext()

  const handleClick = async () => {
    const response = await fetch('/api/workouts/' + workout._id, {
      method: 'DELETE'
    })
    const json = await response.json()

    if (response.ok) {
      dispatch({type: 'DELETE_WORKOUT', payload: json})
    }
  }

  return (
    <Card className="workout-details">
      <Typography variant='h4' fontWeight="bold">{workout.title}</Typography>
      <p><strong>Load (kg): </strong>{workout.load}</p>
      <p><strong>Number of reps: </strong>{workout.reps}</p>
      <p>{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleClick}><DeleteOutlineIcon color='error' /></span>
    </Card>
  )
}

export default WorkoutDetails