import React, { useState, useRef, useEffect } from 'react'
import { UserAuth } from './context/AuthContext'
import { storage } from '../firebase'
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage"
import Error from './Error'

export default function Zagram() {
    const [file, setFile] = useState("")
    const {setError, error, setMessage, addData, getData} = UserAuth()
    const [isLoading, setIsLoading] = useState(false)
    const [progress, setProgress] = useState(0)
    const [ url, setUrl ] = useState(null)
    const inputClean = useRef()
    const [images, setImages] = useState([])
    const [finish, setFinish] = useState(false)

    const handleChange = (e)=>{
        setFile(e.target.files[0])
        console.log(file)
    }

    const handleUpload = () =>{
        if (!file){
            setError("Please choose a file first!")
            return 0
        }
        const storageRef = ref(storage,`/files/${file.name}`)
        const uploadTask = uploadBytesResumable(storageRef, file)

        uploadTask.on("state_changed",
            (snapshot)=>{
                setIsLoading(true)
                const percentage = Math.round(snapshot.bytesTransferred/snapshot.totalBytes)*100
                setProgress(percentage)
            },(error)=>{
                setError(error)
            },()=>{
                getDownloadURL(uploadTask.snapshot.ref)
                    .then((url)=>{
                        addData(`${url}`)
                        setMessage("Uploaded successifully")
                        setUrl(url)
                        console.log(url)
                        setIsLoading(false)
                        inputClean.current.value = ""
                        setFinish((prev)=> !prev)
                    })
            }
        )
    }

    const fetchData = ()=>{
        getData("images")
            .then((querySnapshot)=>{
                const data = querySnapshot.docs.map((doc)=>({...doc.data(), id:doc.id}))
                setImages(data)
                console.log(data)
            })
    }

    useEffect(()=>{
        fetchData()
    },[finish])

    console.log(progress,url)

  return (
    <section className='w-[90%] mx-auto'>
    <div className="w-full   ">
        <div className='mx-auto'>
                <div className="md:w-[600px] md:my-20 my-10  w-auto  bg-white 
                    px-8 py-5 rounded-md mx-auto
                ">
                    {/* Error section */}
                    {error && <Error error={error}/>}
                    <h2 className="md:text-[40px] text-[30px]  text-center  font-bold ">Upload Image</h2>
                    <>
                        <div className="mb-5">
                            <label htmlFor="file" className="text-lg">Email:</label>
                            <input 
                                required
                                placeholder=""
                                ref={inputClean}
                                onChange={handleChange}
                                type="file" id="file" className="w-full h-[35px] outline-1 outline
                                outline-black/40 px-2 focus-within:outline-2  rounded-sm"
                            />
                        </div>
                        
                        <button disabled={isLoading} type="submit" onClick={handleUpload} className="bg-black text-white px-[10px] py-[10px] outline outline-1
                        outline-black rounded-md w-full hover:bg-white mb-3 hover:text-black transition-all duration-300 text-[20px]"
                        >{isLoading?<>Loading....</>:<>Add</>}</button>
                    </>
                   
                </div>
                {/* Images */}
                <div>
                    <div className='mt-5 flex justify-around flex-wrap'>
                        {images.map((image)=>(
                            <div key={image.id} className='w-[380px] h-[380px] overflow-hidden gap-2 mb-5'>
                                <img src={image.data} className='w-full h-full object-cover object-center' alt=""/>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        </section>
  )
}
