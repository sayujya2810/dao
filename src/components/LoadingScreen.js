import React, { useEffect, useState } from 'react'
import ClipLoader from "react-spinners/ClipLoader";

const LoadingScreen = () => {
    const [isLoaded, setIsLoaded] = useState(false);
const [isPageLoaded, setIsPageLoaded] = useState(false); //this helps

useEffect(() => {
    setIsLoaded(true);
}, []);

useEffect(() => {
    if (isLoaded) {
        setIsPageLoaded(true);
    }
}, [isLoaded]);


  return (
    <div className='sweet-loading'>
        <ClipLoader loading={isLoaded} />
    </div>
  )
}

export default LoadingScreen