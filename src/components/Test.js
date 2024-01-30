import React from 'react'
import { Testdiv, Testp } from '../styles/HomeStyles'

export default function Test1({src,title,title1,title2,src1}) {
    console.log("Title from prop",title)
   
  return (
        <Testdiv>
            <img
              className="w-[20px] h-[19px] mt-[20px] "
              src={src}
            />
            <Testp>
              {title}
            </Testp>
            <div className="flex">
              <img
                className="w-[40px] h-[40px] rounded-[40px] ml-[20px]"
                src={src1}
              />
              &emsp;
              <p className="text-[16px] text-[#444] mt-[3px] font-medium">
                {title1}
              </p>
            </div>
            <p className="text-[14px] text-[#444] mt-[-20px] ml-[75px] font-medium opacity-70">
             {title2}
            </p>
          </Testdiv>
  )
}
