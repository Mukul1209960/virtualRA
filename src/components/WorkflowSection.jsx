import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import codeImg from "../assets/code.jpg";
import {checklistItems} from "../constants";

export default function WorkFlow(){
    return(
    <div className=" mt-20 ">
        <h2 className="mt-6 lg:mt-20 text-center text-3xl md:text-5xl lg:text-6xl bg-gradient-to-r from-white to-blue-600 text-transparent bg-clip-text tracking-wide">
        Accelerate your
        <span className="bg-gradient-to-r from-orange-400 to-orange-900 text-transparent bg-clip-text">
            {" "}coding workflow.
        </span>
        </h2>
        <div className="flex flex-wrap mt-2 justify-center">
            <div className="p-2 w-full lg:w-1/2">
            <img src={codeImg} alt="code" />
            </div>
            <div className="p-12 w-full lg:w-1/2">
            {checklistItems.map((f,index)=>(
                <div key={index} className="flex mb-12">
                    <div className="text-green-600 mx-6 h-10 w-10 justify-center items-center rounded-full bg-neutral-900 p-2 ">
                        <CheckCircle2 />
                    </div>
                    <div >
                        <h5 className="mt-1 mb-2 text-xl bg-gradient-to-r from-white to-blue-600 text-transparent bg-clip-text">{f.title}</h5>
                        <p className="text-gray-500 text-md ">{f.description}</p>
                    </div>
                    </div>
            ))}
            
            </div>
        </div>
        
    
    </div>
    );
}
