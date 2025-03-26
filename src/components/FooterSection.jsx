import React from 'react';
import { resourcesLinks } from "../constants";
import { platformLinks } from "../constants";
import { communityLinks } from "../constants";

const FooterSection = () => {
  return (
    <footer className="mt-20 border-t border-neutral-700 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 justify-around">
            <div>
                <h3 className="font-semibold text-md mb-4 tracking-wider">Resources</h3>
                <ul>
                    {resourcesLinks.map((item,index)=>(
                        <li key={index} className="text-sm text-gray-400 p-1">
                            <a className=" hover:text-orange-400" href={item.href} >{item.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="font-semibold text-md mb-4 tracking-wider">Platform</h3>
                <ul>
                    {platformLinks.map((item,index)=>(
                        <li key={index} className="text-sm text-gray-400 p-1">
                            <a className="hover:text-orange-400"href={item.href}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="font-semibold text-md mb-4 tracking-wider">Community</h3>
                <ul>
                    {communityLinks.map((item,index)=>(
                        <li key={index} className="text-sm text-gray-400 p-1">
                            <a className="hover:text-orange-400"href={item.href}>{item.text}</a>
                        </li>
                    ))}
                </ul>
            </div>

        </div>
      
    </footer>
  )
}

export default FooterSection
