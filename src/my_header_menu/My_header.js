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

import React, { useState } from 'react';

import { Link } from 'react-router-dom';

const HoverImage = ({ defaultSrc, hoverSrc, className }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <img
            className={className}
            src={isHovered ? hoverSrc : defaultSrc}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            alt="hoverable image"
        />
    );
};

function My_header() {
    const [isHovered, setIsHovered] = useState(false);



    return (
        <div className=" relative w-full h-[3.958vw] bg-transparent flex   items-center z-10  ">
            {/* <img className=' absolute  top-0 opacity-20' src={test_header}/> */}
            <div className='ml-[1.62vw] w-[39.69vw] h-[2.917vw] flex space-x-[1.656vw] items-center'>
                <Link to='/'><HoverImage className='ml-[0.94vw] w-[8.02vw] h-[2.917vw]' defaultSrc={Logo} hoverSrc={Logo_black} /></Link>

                <div className=' h-[1.354vw] border-[0.052vw] border-[#c3c3c3]  '></div>
                <Link to='/' className='w-[3.12vw]  text-[#3F3F46] text-center font-Noto_Sans_ch font-medium text-[1.04vw]    leading-none tracking-[0.10vw]  hover:text-[#538AA2]'>首頁</Link>
                <Link to='/product' className='w-[3.12vw] text-[#3F3F46] text-center font-Noto_Sans_ch font-medium text-[1.04vw]    leading-none tracking-[0.10vw] hover:text-[#538AA2]'>產品</Link>
                <Link to='/Meal_planning'  className='w-[5.2vw] text-[#3F3F46] text-center font-Noto_Sans_ch font-medium text-[1.04vw]    leading-none tracking-[0.10vw] hover:text-[#538AA2]'>飲食規劃</Link>
                <Link to='/about' className='w-[5.2vw] text-[#3F3F46] text-center font-Noto_Sans_ch font-medium text-[1.04vw]    leading-none tracking-[0.10vw] hover:text-[#538AA2]'>聯絡我們</Link>
                <Link to='/Information' className='w-[3.12vw] text-[#3F3F46] text-center font-Noto_Sans_ch font-medium text-[1.04vw]    leading-none tracking-[0.10vw] hover:text-[#538AA2]'>新聞</Link>
            </div>


            <div className='ml-auto  w-[29.84vw] h-[2.812vw] bg-white   shadow-lg rounded-full flex  items-center'>
                <HoverImage className='ml-[1.41vw] w-[0.94vw] h-[0.938vw]' defaultSrc={translate} hoverSrc={translate_green} />
                <div className='ml-[1.98vw] w-[24.38vw] h-[2.083vw] flex  space-x-[1.41vw] items-center'>
                    <div className='w-[4.38vw] h-[1.250vw] flex  items-center space-x-[0.525vw] ' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                        <Link to='/login'><img className='w-[1.25vw] h-[1.250vw] ' src={isHovered ? identification_green : identification} /></Link>
                        <Link to='/login' className={`text-start font-Noto_Sans_ch text-[1.04vw] leading-[1.56vw] ${isHovered ? 'text-[#538AA2]' : 'text-[#3F3F46]'}`}>登入</Link>
                    </div>
                    <div className=' w-[8.39vw] h-[1.667vw] flex items-center bg-rgba(253.94, 253.94, 253.94, 0.50) shadow-lg rounded-full '>
                        <img className='w-[1.67vw] h-[1.562vw]' src={coin} />
                        <span className='w-[3.33vw] h-[1.250vw] ml-[0.42vw] text-start text-[0.83vw] text-[#538AA2] font-Noto_Sans_en '>1,200</span>
                        <img className='w-[0.94vw] h-[1.250vw] ml-[1.51vw]' src={add} />
                    </div>
                    <div className=' h-[1.354vw] border-[0.052vw] border-[#c3c3c3]  '></div>
                    <HoverImage className='w-[1.25vw] h-[1.250vwh]' defaultSrc={chat_alt} hoverSrc={chat_alt_green} />
                    <HoverImage className='w-[1.25vw] h-[1.250vw]' defaultSrc={bell} hoverSrc={bell_green} />
                    <Link to='/profile'> <img className='w-[2.08vw] h-[2.083vw] rounded-full  hover:scale-110 transition-transform duration-200' src={user_circle} />  </Link>
                </div>
            </div>


        </div>
    );
}


export default My_header;
