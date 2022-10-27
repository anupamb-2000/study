import { useEffect } from 'react'
import { useToDoContext } from '../hooks/useToDoContext'
import  { Box } from '@mui/material' 

// components
import ToDoDetails from '../components/ToDoDetails'
import ToDoForm from '../components/ToDoForm'

const Home = () => {
    const { toDos, dispatch } = useToDoContext()

    useEffect(() => {
        const fetchToDos = async () => {
            const response = await fetch('api/todos')
            const json = await response.json()

            if(response.ok) {
                dispatch({type: 'SET_TODOS', payload: json})
            }
        }

        fetchToDos()
    }, [dispatch])

    return(
        <div className="home">
            <ToDoForm />
            <Box>
                {toDos && toDos.map(todo => (
                    <ToDoDetails toDo={todo} key={todo._id} />
                ))}
            </Box>
        </div>
    )
}

export default Home