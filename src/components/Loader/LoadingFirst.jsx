import React from 'react'
import "animate.css";

const LoadingFirst = () => {
  return (
    <div className='absolute inset-0 bg-black z-20 text-white animate__animated animate__fadeOutDownBig animate__delay-3s'>
        <div className='relative flex items-center justify-center h-screen text-[100px] max-sm:text-[30px]'>
            <span className='animate__animated animate__slideInUp'>
                BLACK
            </span>
            <span className='ml-10 max-sm:ml-5 animate__animated animate__fadeInUp animate__delay-1s'>
                BOX
            </span>
        </div>


    </div>
  )
}

export default LoadingFirst