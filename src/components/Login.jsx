import React,{useRef, useState} from "react";
import { useNavigate, Link } from "react-router-dom";
import { UserAuth } from "./context/AuthContext"
import Error from "./Error";

const Login = () => {
    const email = useRef()
    const password = useRef()
    const navigate = useNavigate()
    const { login, setError, error, setMessage } = UserAuth()
    const [isLoading, setIsLoading] = useState(false)

    const handleSubmit = async (e)=>{
        e.preventDefault()
        await login(email.current.value, password.current.value)
            .then((userCredential)=>{
                setIsLoading(true)
                setError("")
                setMessage("Log in successifully")
                navigate("/")
            })
            .catch((error)=>{
                const errorCode = error.code 
                const errorMessage = error.message
                console.log(errorCode,errorMessage)
                setError("invalid-credential-try again")
                setIsLoading(false)
            })
    }
    return ( 
        <section className="w-[90%] mx-auto">
             <div className=" w-full md:h-[80vh]  flex items-center justify-centers">
                <div className="md:w-[600px] w-auto mt-20 md:mt-0 bg-white mx-auto
                    px-8 py-5 rounded-md
                ">
                    {/* Error section */}
                    {error && <Error error={error}/>}
                    <h2 className="md:text-[40px] text-[30px]  text-center  font-bold ">Log in</h2>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-5">
                            <label htmlFor="email" className="text-lg">Email:</label>
                            <input 
                                required 
                                ref={email}
                                placeholder="User-email@gmail...."
                                type="email" id="email" className="w-full h-[35px] outline-1 outline
                                outline-black/40 px-2 focus-within:outline-2  rounded-sm"
                            />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="password" className="text-lg">Password:</label>
                            <input 
                                required 
                                ref={password}
                                placeholder="User password...."
                                type="password" id="password" className="w-full h-[35px] outline-1 outline
                                outline-black/40 px-2 focus-within:outline-2  rounded-sm"
                            />
                        </div>
                        <button disabled={isLoading} type="submit" className="bg-black text-white px-[10px] py-[10px] outline outline-1
                        outline-black rounded-md w-full mb-3 hover:bg-white hover:text-black transition-all duration-300 text-[20px]"
                        >Log in</button>
                        <div className="flex md:flex-row flex-col md:justify-between">
                            <Link to="/signup" className="text-blue-600 hover:underline  text-center">Don't have account?signup</Link>
                            <Link to="/reset-password" className="text-blue-600 hover:underline  text-center">Forget password?reset password</Link>
                        </div>
                    </form>
                </div>
            </div>
        </section>
     );
}
 
export default Login;