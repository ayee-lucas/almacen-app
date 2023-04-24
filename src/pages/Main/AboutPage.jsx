import React from 'react'

const AboutPage = () => {
  return (
    <div className="h-screen w-full">
    <div className="relative bg-presentationAboutPage flex justify-center items-center start-0 h-full w-full">
      <div className="absolute bg-black inset-0 opacity-70" />
      <div className="underline-container">
        <h1 className="underline-text text-white jetbrains-mono tracking-tighter text-[80px] font-bold">
          About Us
        </h1>
        <div className="underline" />
      </div>
      <h3 className="text-white jetbrains-mono tracking-tighter text-center align-left text-[25px] font-bold">
        Storage Solutions
      </h3>
    </div>
    </div>
  )
}

export default AboutPage
