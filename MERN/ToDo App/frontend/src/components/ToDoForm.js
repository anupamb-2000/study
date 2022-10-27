import { useState } from 'react'
import { useToDoContext } from '../hooks/useToDoContext'
import { Button, TextField, FormControl, Alert, Box } from '@mui/material'

const ToDoForm = () => {
    const { dispatch } = useToDoContext()
    const [toDoText, setToDoText] = useState('')
    const [error, setError] = useState(null)
    const [emptyFields, setEmptyFields] = useState([])

    const handleSubmit = async (e) => {
        e.preventDefault()

        const toDo = { toDoText }

        const response = await fetch('api/todos', {
            method: 'POST',
            body: JSON.stringify(toDo),
            headers:{
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            setError(json.error)
            setEmptyFields(json.emptyFields)
        }
        if (response.ok) {
            setError(null)
            setToDoText('')
            setEmptyFields([])
            console.log("New todo added:", json)
            dispatch({type: 'CREATE_TODO', payload: json})
        }
    }

    return (
        <Box component="form" autoComplete="off" className="create" onSubmit={handleSubmit}> 
            <h3>Add a New ToDo</h3>

            <FormControl fullWidth sx={{ m: 1 }}>
                <TextField  
                color="text"
                type="text" 
                onChange={(e) => setToDoText(e.target.value)} 
                value={toDoText}
                label="ToDo Text:"
                variant="outlined"
                error={emptyFields.includes('toDoText') ? 'true' : ''}
                />
            </FormControl>

            <Button fullWidth sx={{ m: 1 }} variant="contained" type="submit">Add ToDo</Button>
            {error && <Alert severity="error">{error}</Alert>}
        </Box>
    )
}

export default ToDoForm