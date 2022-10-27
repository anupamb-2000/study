import { createContext, useReducer } from "react"

export const ToDoContext = createContext()

export const toDoReducer = (state, action) => {
    switch(action.type) {
        case "SET_TODOS":
            return {
                toDos: action.payload
            }
        case "CREATE_TODO":
            return{
                toDos: [action.payload, ...state.toDos]
            }
        case "DELETE_TODO":
            return{
                toDos: state.toDos.filter(t => t._id !== action.payload._id)
            }
        default:
            return state
    }
}

export const ToDoContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(toDoReducer, {
        toDos: null
    })

    return (
        <ToDoContext.Provider value={{ ...state, dispatch }}>
            { children }
        </ToDoContext.Provider>
    )
}