import { useWorkoutsContext } from '../hooks/useWorkoutsContext'
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { Card, CardContent, IconButton, Typography } from '@mui/material'


// date fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'
import { Box } from '@mui/system'

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
    <Box marginTop={9}>
    <Card >
      <CardContent sx={{ display: "flex", flexDirection: "row" }} >
        <Box  sx={{ width: "95%", justifyContent: "flex-start" }}>
          <Typography mt={2} variant='h4' color="primary" fontWeight="bold">{workout.title}</Typography>
          <Typography mt={2} color="text"><strong>Number of reps: </strong>{workout.reps}</Typography>
          <Typography mt={2} color='text'><strong>Load (kg): </strong>{workout.load}</Typography>
          <Typography mt={2} color="text">{formatDistanceToNow(new Date(workout.createdAt), { addSuffix: true })}</Typography>
        </Box>
        <Box sx={{ width: "5%", justifyContent: "flex-end" }}>
          <IconButton onClick={handleClick}><DeleteOutlineIcon color='error' /></IconButton>
        </Box>
      </CardContent>
    </Card>
    </Box>
  )
}

export default WorkoutDetails