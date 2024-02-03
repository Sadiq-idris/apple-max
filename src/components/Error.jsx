const Error = ({error}) => {
    return ( 
        <>
            {error && (
            <div 
            className="text-red-800 my-2 font-bold text-xl  p-3 rounded-md bg-red-400 "
            >
                {error}
            </div>)}
        </>
     );
}
 
export default Error;