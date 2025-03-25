import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";
import React from 'react';

export default function HeroSection(){
    return (
        <div className="flex flex-col items-center mt-6 lg:mt-7">
            <h1 className ="text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide bg-gradient-to-r from-white to-blue-800 text-transparent bg-clip-text">
                VirutalRA build tools 
                <span className="bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text" >
                    {" "}
                    for developers 
                </span>
            </h1>
            <p className="mt-10 text-lg text-center text-gray-500 max-w-4xl">
                Empower your creativity and bring your VR apps ideas to life with our intuitive development tools.
                Get started today and turn your imagination into immersive reality!
            </p>
            <div className="flex justify-center my-10">
                <a href="#" className="bg-gradient-to-r from-orange-400 to-orange-900 px-2 py-3 mx-3 rounded-md">
                    Start for free
                </a>
                <a href="#" className="bg-gradient-to-r from-white to-blue-300 py-3 px-3 rounded-md text-black">
                    Documentation
                </a>
                
            </div>
            <div className="flex mt-8 justify-center">
                <video 
                 autoPlay
                 loop
                  muted 
                  className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-3">
                <source src={video1} type="video/mp4"/>
                Your Browser does not support the video tag
                </video>
                <video 
                autoPlay
                 loop
                  muted
                   className="rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-3">
                <source src={video2} type="video/mp4"/>
                Your Browser does not support the video tag
                </video>
            </div>
        </div>

    )
}