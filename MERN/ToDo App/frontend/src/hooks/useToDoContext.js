import { ToDoContext } from "../context/ToDoContext"
import { useContext } from "react"

export const useToDoContext = () => {
    const context = useContext(ToDoContext)

    if(!context){
        throw Error('useTodoContext must be used inside a ToDoContextProvider')
    }

    return context
}