import React, {useRef, useState} from "react"
import { useNavigate, Link } from "react-router-dom"
import {UserAuth} from "./context/AuthContext"
import Error from "./Error"

const UpdateProfile = () => {
    const email = useRef()
    const password = useRef()
    const confirmPassword = useRef()
    const navigate = useNavigate()
    const { setError, error, setMessage, upEmail, upPassword, currentUser } = UserAuth()
    const [isLoading, setIsLoading] = useState(false)


    const handleSubmit =  (e)=>{
        e.preventDefault()

        if (password.current.value !== confirmPassword.current.value){

            return setError("The passwords must be equal")
        }

        try{
            const promises = []
            if ( email.current.value !== currentUser.email ){
                promises.push(upEmail(email.current.value))
            }
            if ( password.current.value ){
                promises.push(upPassword(password.current.value))
            }

            Promise.all(promises)
                .then(()=>{
                    setError('')
                    setIsLoading(true)
                    setMessage("Profile Updated")
                    navigate("/profile")
                    }) 
                .catch(()=>{
                    setError("Some went wrong, pls try again!")
                    setMessage("")
                    })
               
        }catch{
            console.log("update failed")
        }

       
       
    }
    return ( 
        <section className="w-[90%] mx-auto">
            <div className="w-full md:h-[80vh]  flex items-center justify-centers">
                <div className="md:w-[600px] w-auto mt-20 md:mt-0 bg-white mx-auto
                    px-8 py-5 rounded-md
                ">
                    {/* Error section */}
                    {error && <Error error={error}/>}
                    <h2 className="md:text-[40px] text-[30px]  text-center  font-bold ">Update Profile</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="email" className="text-lg">Email:</label>
                            <input 
                                ref={email}
                                defaultValue={currentUser && currentUser.email}
                                placeholder="User-email@gmail...."
                                type="email" id="email" className="w-full h-[35px] outline-1 outline
                                outline-black/40 px-2 focus-within:outline-2  rounded-sm"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="text-lg">Password:</label>
                            <input 
                                ref={password}
                                placeholder="Leave to not update...."
                                type="password" id="password" className="w-full h-[35px] outline-1 outline
                                outline-black/40 px-2 focus-within:outline-2  rounded-sm"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="confirm" className="text-lg">Confirm Password:</label>
                            <input 
                                ref={confirmPassword}
                                placeholder="Repeat passoword...."
                                type="password" id="confirm" className="w-full h-[35px] outline-1 outline
                                outline-black/40 px-2 focus-within:outline-2  rounded-sm"
                            />
                        </div>
                        <button disabled={isLoading} type="submit" className="bg-black text-white px-[10px] py-[10px] outline outline-1
                        outline-black rounded-md w-full hover:bg-white mb-3 hover:text-black transition-all duration-300 text-[20px]"
                        >Update</button>
                        <Link to="/profile" className="text-blue-600 hover:underline  text-center">Cancel</Link>

                    </form>
                </div>
            </div>
        </section>
     );
}
 
export default UpdateProfile;