import '../css/headerCSS/header.css'
import Logo from '../assets/header_img/Logo.svg';
import Logo_black from '../assets/header_img/Logo_black.svg';
import test_header from '../assets/header_img/header.png';
import translate from '../assets/header_img/translate.svg';
import translate_green from '../assets/header_img/translate_green.svg';
import identification from '../assets/header_img/identification.svg';
import identification_green from '../assets/header_img/identification_green.svg';

import coin from '../assets/header_img/coin.svg';
import add from '../assets/header_img/add.svg';
import chat_alt from '../assets/header_img/chat-alt.svg';
import chat_alt_green from '../assets/header_img/chat-alt_green.svg';

import bell from '../assets/header_img/bell.svg';
import bell_green from '../assets/header_img/bell_green.svg';

import user_circle from '../assets/header_img/user-circle.svg';

import HoverImage from '../action_object/HoverImage'

import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import LazyImage from '../action_object/lazyimg';




function My_header() {
    const [isHovered, setIsHovered] = useState(false);



    return (
        <div className=" flex items-center h-[3.9583vw] bg-transparent  z-10 relative w-full  ">
            {/* <img className=' absolute  top-0 opacity-20' src={test_header}/> */}
            <div className='flex items-center ml-[1.6146vw] w-[39.6875vw] h-[2.917vw]  space-x-[1.6667vw] '>
                <Link to='/'><HoverImage className='header_logo' defaultSrc={Logo} hoverSrc={Logo_black} /></Link>

                <div className='h-[1.3542vw] w-[0.0521vw] bg-c3c3c3'></div>
                
                <Link to='/' className=' w-[3.1250vw] flex justify-center text-3F3F46  font-Noto_Sans_ch font-medium  text-20px    leading-20px  tracking-2px hover:text-538aa2  '>首頁</Link>
                <Link to='/product' className='w-[3.1250vw] flex justify-center text-3F3F46   font-Noto_Sans_ch font-medium  text-20px     leading-20px tracking-2px  hover:text-538aa2  '>產品</Link>
                <Link to='/Meal_planning'  className=' w-[5.2083vw] flex justify-center text-3F3F46   font-Noto_Sans_ch font-medium  text-20px     leading-20px tracking-2px  hover:text-538aa2 '>飲食規劃</Link>
                <Link to='/about' className=' w-[5.2083vw] flex justify-center text-3F3F46   font-Noto_Sans_ch font-medium  text-20px     leading-20px tracking-2px  hover:text-538aa2'>聯絡我們</Link>
                <Link to='/Information' className='w-[3.1250vw] flex justify-center text-3F3F46   font-Noto_Sans_ch font-medium  text-20px     leading-20px tracking-2px  hover:text-538aa2 '>新聞</Link>
            </div>


            <div className='flex items-center  ml-auto  w-[29.8438vw] h-[2.8125vw]   bg-white   shadow-lg rounded-full '>
                <HoverImage className='ml-[1.4062vw] w-[0.9375vw] h-[0.9375vw]' hoverSrc={translate_green} defaultSrc={translate}   />
                <div className='ml-[1.9792vw] w-[24.3750vw] h-[2.0833vw] flex  space-x-[1.4062vw] items-center'>
                    <div className='w-[4.3750vw] h-[1.2500vw] flex  items-center space-x-[0.5208vw] ' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <Link to='/login'><LazyImage className='w-[1.2500vw] h-[1.2500vw] ' src={isHovered ? identification_green : identification} /></Link>
                        <Link to='/login' className={` text-start font-Noto_Sans_ch text-20px  leading-20px ${isHovered ? 'text-538aa2' : 'text-3F3F46 '}`}>登入</Link>
                    </div>

                    <div className=' w-[8.3854vw] h-[1.6667vw] flex items-center bg-fdfdfd/50 shadow-lg rounded-full '>
                        <LazyImage className='w-[1.6667vw] h-[1.5625vw]' src={coin} />
                        <span className='w-[3.3333vw] h-[1.250vw] ml-[0.4167vw] text-start text-[0.83vw] text-538aa2 font-Noto_Sans_ch '>1,200</span>
                        <LazyImage className='w-[0.9375vw] h-[1.250vw] ml-[1.5104vw]' src={add} />
                    </div>

                    <div className=' h-[1.3542vw] w-[0.0521vw] bg-c3c3c3 '></div>

                    <HoverImage className='w-[1.2500vw] h-[1.2500vwh]' defaultSrc={chat_alt} hoverSrc={chat_alt_green} />
                    <HoverImage className='w-[1.2500vw] h-[1.2500vw]' defaultSrc={bell} hoverSrc={bell_green} />
                    <Link to='/profile'> <LazyImage className='w-[2.0833vw] h-[2.0833vw] rounded-full  hover:scale-110 transition-transform duration-200' src={user_circle} />  </Link>
                </div>
            </div>
        </div>
        
    );
}


export default My_header;
