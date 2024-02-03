import {UserAuth} from "./context/AuthContext"
import avatar from "../Assets/images/avatar.jpg"
import { Link } from "react-router-dom"

const Profile = () => {
    const { currentUser } = UserAuth()
    return ( 
        <section className="w-[90%] mx-auto">
            <div id="profile">
                <div className="w-full md:h-[80vh] mt-10 md:mt-0 flex items-center justify-center">
                    <div className=" bg-white rounded-md px-4 py-3 md:w-[320px] w-[95%] mx-auto md:mx-0">
                        <img src={avatar} alt="" className="rounded-md w-[90%] mx-auto" />
                        <div className="mt-5">
                            <p className="my-2 text-lg"><strong className="text-lg mr-2">Email:</strong>{currentUser && currentUser.email}</p>
                            <Link 
                                to="/update-profile"
                                className="bg-black text-white px-[10px] py-[10px] outline outline-1
                                outline-black rounded-md w-full hover:bg-white mt-3 block text-center
                                 hover:text-black transition-all duration-300 text-[20px]"
                            >Update Profile</Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
     );
}
 
export default Profile;