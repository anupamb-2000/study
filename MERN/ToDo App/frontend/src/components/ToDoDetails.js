import { useToDoContext } from "../hooks/useToDoContext"
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline'
import { Card, CardContent, IconButton, Typography } from '@mui/material'
import { Box } from "@mui/system"

// date-fns
import formatDistanceToNow from 'date-fns/formatDistanceToNow'

const ToDoDetails = ({ toDo }) => {
    const { dispatch } = useToDoContext()

    const handleClick = async () => {
        const response = await fetch('api/todos/' + toDo._id, {
            method: 'DELETE'
        })
        const json = await response.json()

        if(response.ok) {
            dispatch({type: 'DELETE_TODO', payload: json})
        }
    }

    return (
        <Box marginTop={9}>
            <Card >
                <CardContent sx={{ display: "flex", flexDirection: "row" }} >
                    <Box  sx={{ width: "95%", justifyContent: "flex-start" }}>
                        <Typography mt={2} variant='h4' color="primary" fontWeight="bold">{toDo.toDoText}</Typography>
                        <Typography mt={2} color="text">{formatDistanceToNow(new Date(toDo.createdAt), { addSuffix: true })}</Typography>
                    </Box>
                    <Box sx={{ width: "5%", justifyContent: "flex-end" }}>
                        <IconButton onClick={handleClick}><DeleteOutlineIcon color='error' /></IconButton>
                    </Box>
                </CardContent>
            </Card>
        </Box>
    )
}

export default ToDoDetails