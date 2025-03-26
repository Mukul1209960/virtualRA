import React from 'react'
import { testimonials } from '../constants';

export default function Testimonials(){
    return(
        <div className="mt-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-center tracking-wide bg-gradient-to-r from-white to-blue-600 text-transparent bg-clip-text">
                What people are Saying
            </h2>
            <div className="flex flex-wrap justify-center mt-5">
                {testimonials.map((feature,index)=>(
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-3">
                        <div className="border border-neutral-700 rounded-md p-5 text-gray-500">
                            <p className="text-sm mb-12">
                                {feature.text}
                            </p>
                            <div className="flex mt-8 items-start">
                            <img src={feature.image} className="h-12 w-12 mr-6 rounded-full border border-neutral-300" alt={feature.user} />
                                 <div>
                                    <h6>{feature.user}</h6>
                                    <span className="text-sm font-normal italic text-neutral-600">{feature.company}</span>
                                    </div>
                                 
                                 

                            </div>
                            


                            </div>
                            </div>

                ))}
            </div>
        </div>
    )
}
