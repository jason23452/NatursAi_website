import React, { useState } from 'react';
import TaiwanNewsComponent from '../my_header_menu/NewsComponent';

function Information() {
    return (
        <div className=" relative w-full h-full">
            <div className=' hidden md:h-[56.2500vw] md:relative md:w-full md:block'>
                <div className='absolute w-full h-[56.2500vw] -top-[3.9583vw]'>
                    <span className=' ml-[16.354vw] mt-[5.417vw] w-[14.299vw] h-[3.458vw] text-[#83BBAE] text-[2.083vw] font-Noto_Sans_ch font-bold leading-[3.125vw] flex items-center justify-start'>新聞報導</span>
                    <div className='ml-[16.354vw] mt-[2.579vw]  w-[62.414vw] h-[36.392vw] overflow-y-scroll overflow-x-hidden'>
                        <TaiwanNewsComponent />
                    </div>
                </div>
            </div>
            <div className='md:hidden w-full h-[223.0769vw] relative flex flex-col  items-center'>
                <span className='mt-[7.3272vw] w-[81.2256vw] h-[9.9087vw] text-399983 text-[6.2581vw] font-sans font-bold leading-[7.5502vw] tracking-[0.9387vw] text-center'>新聞報導</span>
                <div className=' mt-[4.1721vw] w-[87.7445vw] h-[93.3507vw] overflow-y-scroll overflow-x-hidden'>
                    <TaiwanNewsComponent />
                    

                </div>

            </div>


        </div>
    );
}

export default Information;
