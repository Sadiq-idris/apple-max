import React, {useEffect, useRef, useState} from "react"
import { db } from "../firebase"
import { collection, addDoc, getDocs, deleteDoc, doc } from "firebase/firestore"
import { UserAuth } from "./context/AuthContext"
import Error from "./Error"
import {Trash} from "react-huge-icons/outline"


const Todos = () => {
    const todo = useRef()
    const [todos, setTodos] = useState([])
    const [finish, setFinish] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const {setMessage, setError, error} = UserAuth()

    // creating or posting the data
    const handleTodo = async (e)=>{
        e.preventDefault()
        if (todo.current.value===""){
            return setError("you must type something")
        }
        try{
            setIsLoading(true)
            const docRef = await addDoc(collection(db, "todos"),{
                todo:todo.current.value,
            })
            console.log(docRef.id)
            setMessage("todo added successifully")
            setIsLoading(false)
        }catch(e){
            console.error("Error adding document: ", e)
            setError("Something went wrong")
            setIsLoading(false)
        }
        todo.current.value = ""
        setFinish((prev)=>!prev)
    }
    
    // fetching the data
    const fetchTodos = async ()=>{
        await getDocs(collection(db, "todos"))
            .then((querySnapshot)=>{
                const newData = querySnapshot.docs
                    .map((doc)=>({...doc.data(), id:doc.id}))
                setTodos(newData)
                console.log(newData)
            })
    }

   
    // delete the data
    const handleDelete = async (id)=>{
        const docRef = doc(db, "todos", id)
        setIsLoading(true)
        await deleteDoc(docRef)
            .then(()=>{
                setMessage("Deleted successifully")
                setIsLoading(false)
                setFinish((prev)=>!prev)
            })
            .catch((error)=>{
                console.log("something is wrong", error)
            })
    }
    useEffect(()=>{
        fetchTodos()
    },[finish])

    return ( 
        <div className="md:py-20 py-10 relative">
            <section className="w-full md:h-full  flex items-center justify-centers">
                <div className="w-full">
                    <div className="md:w-[600px] w-auto md:mt-0 bg-white mx-auto
                        px-8 py-5 rounded-md
                    ">
                        {/* Error section */}
                        {error && <Error error={error}/>}
                        <h2 className="md:text-[40px] text-[30px]  text-center  font-bold ">Todos lists</h2>
                        <div className="mb-5">
                            <label htmlFor="email" className="text-lg">Todo:</label>
                            <input 
                                required
                                ref={todo}
                                placeholder="Add todo.."
                                type="text" id="email" className="w-full h-[35px] outline-1 outline
                                outline-black/40 px-2 focus-within:outline-2  rounded-sm"
                            />
                        </div>
                        <button 
                            disabled={isLoading}
                            onClick = {handleTodo}
                            type="button" 
                            className="bg-black text-white px-[10px] py-[10px] outline outline-1
                            outline-black rounded-md w-full hover:bg-white mb-3 hover:text-black transition-all duration-300 text-[20px]"
                        >{isLoading?(<>Loading......</>):(<>Add</>)}</button>
                    </div>
                    <div className="md:w-[600px] w-auto mt-10 md:mt-5 bg-white mx-auto
                        px-8 py-5 rounded-md
                    ">
                        <ul>
                            { todos.map((todo)=>(
                                <li key={todo.id} className="flex items-center justify-between
                                 w-full bg-gray-200 p-2 rounded-lg mb-2">
                                    <span>{todo.todo}</span>
                                    <button 
                                        type="button"
                                        disabled={isLoading}
                                        onClick={()=>handleDelete(todo.id)}
                                        className="bg-red-700 p-2 rounded-lg text-white"
                                    >
                                        <Trash/>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </div>
     );
}
 
export default Todos;