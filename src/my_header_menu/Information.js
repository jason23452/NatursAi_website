import React, { useState } from 'react';
import TaiwanNewsComponent from '../my_header_menu/NewsComponent';

function Information() {
    return (
        <div className="h-[56.2500vw] relative w-full">
            <div className='absolute w-full h-[56.2500vw] -top-[3.9583vw]'>
                <span className=' ml-[16.354vw] mt-[5.417vw] w-[14.299vw] h-[3.458vw] text-[#83BBAE] text-[2.083vw] font-Noto_Sans_ch font-bold leading-[3.125vw] flex items-center justify-start'>新聞報導</span>
                <div className='ml-[16.354vw] mt-[2.579vw]  w-[62.414vw] h-[36.392vw] overflow-y-scroll overflow-x-hidden'>
                    <TaiwanNewsComponent />
                </div>
                <div className='mt-[4.446vw]'></div>
            </div>



        </div>
    );
}

export default Information;
