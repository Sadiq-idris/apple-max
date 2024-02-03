import React, {useState} from "react";
import { Link } from "react-router-dom";
import close from "../Assets/images/close.png";
import menu from "../Assets/images/menu.png";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext"
import Message from "./Message";
import { motion } from "framer-motion"

const Header = ()=>{
    const [open, setOpen] = useState(false)
    const navigate = useNavigate()
    const { logOut, currentUser, setCurrentUser, setMessage, message, setError } = UserAuth()

    const handleLogout = ()=>{
        logOut()
            .then(()=>{
                console.log("logout")
                setCurrentUser(null)
                setMessage("you have logout successifully")
                setError("")
                navigate("/")
            })
            .catch((error)=>{
                console.log(error)
            })
    }
    
    setTimeout(()=>{
        setMessage("")
    }, 3000)

    return(
        <>
        <header className="bg-white border-b-2 border-black/50 text-black md:px-14 px-5 py-5 flex items-center justify-between">
            <h2 className="font-bold text-black text-2xl">
                <Link to="/">Apple-max</Link>
            </h2>
            <div 
                onClick={()=> setOpen(prev=> !prev)}
                className="md:static absolute top-[15px] cursor-pointer right-[20px]  md:hidden"
            >
                { open? <img src={close} alt="" /> : <img src={menu} alt="" />}
            </div>
            <nav className={`absolute  md:top-0 md:static left-0 w-full
             md:w-auto md:bg-transparent bg-white md:py-0 md:px-0 py-8 px-6 transition-all duration-1000
             ${open?'top-[70px] opacity-100':'top-[-400px]  opacity-0'} md:opacity-100
            `} onClick={()=> setOpen(prev=> !prev)}>
                <ul className="md:flex  text-lg">
                    <motion.li whileHover={{scale:1.1}} className="md:ml-8 md:mb-0 mb-8">
                        <Link to='/' className="hover:text-black/20 transition-all duration-300">Home</Link>
                    </motion.li>
                    <motion.li whileHover={{scale:1.1}} className="md:ml-8 md:mb-0 mb-8">
                        <Link to='/about' className="hover:text-black/20 transition-all duration-300">About us</Link>
                    </motion.li>
                    
                    
                    {currentUser && (
                        <>
                        <motion.li whileHover={{scale:1.1}} className="md:ml-8 md:mb-0 mb-8">
                            <Link to='/zagram' className="hover:text-black/20 transition-all duration-300">Zagram</Link>
                        </motion.li>
                        <motion.li whileHover={{scale:1.1}} className="md:ml-8 md:mb-0 mb-8">
                            <Link to='/todos' className="hover:text-black/20 transition-all duration-300">Todos</Link>
                        </motion.li>
                        <motion.li whileHover={{scale:1.1}} className="md:ml-8 md:mb-0 mb-8">
                            <Link to='/profile' className="hover:text-black/20 transition-all duration-300">Profile</Link>
                        </motion.li>
                        <motion.li whileHover={{scale:1.1}} className="md:ml-8 md:mb-0  mb-8">
                            <Link onClick={handleLogout}  className="bg-black text-white px-[10px] py-[6px] 
                            hover:bg-white  border-2 border-black hover:text-black transition-all duration-300">Log out</Link>
                        </motion.li>
                        
                        </>
                    )}
                    {!currentUser && (
                        <>
                        <motion.li whileHover={{scale:1.1}} className="md:ml-8 md:mb-0  mb-8">
                            <Link to='/signup' className="bg-black text-white px-[10px] py-[6px] 
                            hover:bg-white  border-2 border-black hover:text-black transition-all duration-300">Sign up</Link>
                        </motion.li>
                        <motion.li whileHover={{scale:1.1}} className="md:ml-8 md:mb-0  mb-8">
                            <Link to='/login' className="bg-white text-black px-[10px] py-[6px] 
                            hover:bg-black  border-2 border-black hover:text-white transition-all duration-300">Log in</Link>
                        </motion.li>
                        </>
                    )}

                </ul>
            </nav>
        </header>
        {message && <Message message={message}/>}
        </>
    );
}

export default Header;