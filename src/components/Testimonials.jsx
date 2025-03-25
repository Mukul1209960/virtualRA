import React from 'react'
import { testimonials } from '../constants';

export default function Testimonials(){
    return(
        <div className="mt-20">
            <h2 className="text-3xl md:text-5xl lg:text-6xl text-center tracking-wider bg-gradient-to-r from-white to-blue-600 text-transparent bg-clip-text">
                What people are Saying
            </h2>
            <div className="flex flex-wrap mt-5">
                {testimonials.map((feature,index)=>(
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3  p-3">
                        <div className="border border-neutral-700 rounded-md p-5 text-gray-500">
                            <div className="text-sm mb-12">
                                {feature.text}
                            </div>
                            
                            </div>
                            </div>

                ))}
            </div>
        </div>
    )
}
