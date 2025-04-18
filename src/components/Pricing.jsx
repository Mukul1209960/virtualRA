import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { pricingOptions } from "../constants";

export default function Pricing(){
    return(
        <div className="mt-20">
            <h2 className=" my-8 text-center text-3xl p-4 md:text-5xl lg:text-6xl bg-gradient-to-r from-white to-blue-800 text-transparent bg-clip-text tracking-wider">
                Pricing
            </h2>
            <div className="flex flex-wrap ">
                {pricingOptions.map((item,index)=>(
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="p-10 border border-neutral-700 rounded-xl">
                            <p className="text-4xl mb-8">
                                {item.title}
                                {item.title === "Pro" && (
                                <span className="text-red-600 text-xl mb-4 ml-2">(Most popular)
                                </span> )}
                                </p>
                                <p className="mb-8">
                                <span className="text-5xl mt-6 mr-2">{item.price}</span>
                                <span className="text-gray-400 tracking-tight">/Month</span>
                                </p>
                                <ul>
                                    {item.features.map((feature,index)=>(
                                        <li key={index} className="text-green-500 mt-8 flex items-center">
                                            <CheckCircle2 />
                                            <span className="ml-3 text-gray-500">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">
                                    Subscribe
                                </a>

                            </div>
                            </div>

                ))}
            </div>
        </div>
    );
}
