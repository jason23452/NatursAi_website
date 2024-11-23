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

import menu_img from '../assets/header_img/menu_img.svg';

import green_arow from '../assets/header_img/green_arow.svg';

import Youtube from '../assets/header_img/Youtube.svg';

import Instagram from '../assets/header_img/Instagram.svg';

import Facebook from '../assets/header_img/Facebook.svg';


import HoverImage from '../action_object/HoverImage';




import React, { useState } from 'react';

import { Link } from 'react-router-dom';
import LazyImage from '../action_object/lazyimg';


const MenuButton = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const handleCloseMenu = () => {
        setIsMenuOpen(false);
      };


    return (
        <div>
            {/* 按鈕 */}
            <button
                className="w-[5.8670vw] h-[5.0847vw] bg-gray-200 rounded-lg flex justify-center items-center"
                onClick={toggleMenu}
            >
                <img className="w-full h-full" src={menu_img} alt="Menu" />
            </button>

            {/* 選單 */}
            {isMenuOpen && (
                <div className=" absolute z-20    w-full h-[204.1721vw] top-[18.9048vw] left-1/2 transform -translate-x-1/2 bg-[url('../assets/header_img/media_totogle_bg.svg')] bg-cover bg-center shadow-md rounded-lg ">
                    <ul className='w-[60.7562vw] h-[105.8970vw] mt-[14.4980vw] flex flex-col justify-between   items-center mx-auto'>
                        <Link to='/' className="relative   w-[52.4746vw] h-[10.1239vw] text-538aa2 text-[6.2581vw]  font-Noto_Sans  leading-[6.2581vw] tracking-[0.6258vw] flex items-center justify-center  " onClick={handleCloseMenu}>首頁
                            <img className=' absolute  right-0  w-[1.7392vw] h-[3.9609vw]' src={green_arow} />
                        </Link>
                        <div className='w-full  h-[0.1304vw] bg-[#D6D6D6]'></div>
                        <Link to='/product' className="relative  w-[52.4746vw] h-[10.1239vw] text-538aa2 text-[6.2581vw]  font-Noto_Sans  leading-[6.2581vw] tracking-[0.6258vw] flex items-center justify-center " onClick={handleCloseMenu}>產品
                            <img className=' absolute  right-0  w-[1.7392vw] h-[3.9609vw]' src={green_arow} />
                        </Link>
                        <div className='w-full  h-[0.1304vw] bg-[#D6D6D6]'></div>
                        <Link to='/Meal_planning' className="relative  w-[52.4746vw] h-[10.1239vw] text-538aa2 text-[6.2581vw]  font-Noto_Sans  leading-[6.2581vw] tracking-[0.6258vw] flex items-center justify-center " onClick={handleCloseMenu}>飲食規劃
                            <img className=' absolute  right-0  w-[1.7392vw] h-[3.9609vw]' src={green_arow} />
                        </Link>
                        <div className='w-full  h-[0.1304vw] bg-[#D6D6D6]'></div>
                        <Link to='/about' className="relative  w-[52.4746vw] h-[10.1239vw] text-538aa2 text-[6.2581vw]  font-Noto_Sans  leading-[6.2581vw] tracking-[0.6258vw] flex items-center justify-center " onClick={handleCloseMenu}>聯絡我們
                            <img className=' absolute  right-0  w-[1.7392vw] h-[3.9609vw]' src={green_arow} />
                        </Link>
                        <div className='w-full  h-[0.1304vw] bg-[#D6D6D6]'></div>
                        <Link to='/Information' className="relative  w-[52.4746vw] h-[10.1239vw] text-538aa2 text-[6.2581vw]  font-Noto_Sans  leading-[6.2581vw] tracking-[0.6258vw] flex items-center justify-center " onClick={handleCloseMenu}>新聞
                            <img className=' absolute  right-0  w-[1.7392vw] h-[3.9609vw]' src={green_arow} />
                        </Link>
                    </ul>
                    <div className='mx-auto mt-[14.4420vw] w-[69.8827vw] h-[6.5189vw] flex items-center  space-x-[2.8683vw] '>
                        <button className='w-[4.3025vw] h-[4.3025vw]'><img className='w-full h-full' src={Youtube}/></button>
                        <button className='w-[4.1721vw] h-[4.3025vw]'><img className='w-full h-full' src={Instagram}/></button>
                        <button className='w-[4.3025vw] h-[4.3025vw]'><img className='w-full h-full' src={Facebook}/></button>
                        <button className='w-[4.1721vw] h-[4.1721vw]'><img className='w-full h-full' src={chat_alt}/></button>
                        <span className='w-[41.3299vw] h-[6.5189vw] font-Noto_Sans text-black text-[1.9557vw] font-bold  leading-[2.9335vw] tracking-[0.0978vw] flex justify-center items-center '>Email:
                            <span className='font-Noto_Sans text-black text-[1.9557vw]   leading-[2.9335vw] '>Naturs.ai.2024@gmail.com</span>
                        </span>
                    </div>
                    <span className='mx-auto mt-[0.9126vw] w-[53.9765vw] h-[6.3885vw] flex justify-center items-center text-[1.9557vw] font-Noto_Sans font-light leading-[2.9335vw] tracking-[0.2934vw] '>© 2024 NatursAi All rights reserved.</span>
                </div>
            )}
        </div>
    );
};





function My_header() {
    const [isHovered, setIsHovered] = useState(false);



    return (
        <div className=" w-full h-full">
            <div className='md:flex md:items-center md:h-[3.9583vw] md:bg-transparent  md:z-10 md:relative md:w-full hidden   '>
                <div className='flex items-center ml-[1.6146vw] w-[39.6875vw] h-[2.917vw]  space-x-[1.6667vw] '>
                    <Link to='/'><HoverImage className='w-[8.0208vw] h-[2.9167vw]' defaultSrc={Logo} hoverSrc={Logo_black} /></Link>

                    <div className='h-[1.3542vw] w-[0.0521vw] bg-c3c3c3'></div>

                    <Link to='/' className=' w-[3.1250vw] flex justify-center text-3F3F46  font-Noto_Sans font-medium  text-20px    leading-20px  tracking-2px hover:text-538aa2  '>首頁</Link>
                    <Link to='/product' className='w-[3.1250vw] flex justify-center text-3F3F46   font-Noto_Sans font-medium  text-20px     leading-20px tracking-2px  hover:text-538aa2  '>產品</Link>
                    <Link to='/Meal_planning' className=' w-[5.2083vw] flex justify-center text-3F3F46   font-Noto_Sans font-medium  text-20px     leading-20px tracking-2px  hover:text-538aa2 '>飲食規劃</Link>
                    <Link to='/about' className=' w-[5.2083vw] flex justify-center text-3F3F46   font-Noto_Sans font-medium  text-20px     leading-20px tracking-2px  hover:text-538aa2'>聯絡我們</Link>
                    <Link to='/Information' className='w-[3.1250vw] flex justify-center text-3F3F46   font-Noto_Sans font-medium  text-20px     leading-20px tracking-2px  hover:text-538aa2 '>新聞</Link>
                </div>


                <div className='flex items-center  ml-auto  w-[29.8438vw] h-[2.8125vw]   bg-white   shadow-lg rounded-full '>
                    <HoverImage className='ml-[1.4062vw] w-[0.9375vw] h-[0.9375vw]' hoverSrc={translate_green} defaultSrc={translate} />
                    <div className='ml-[1.9792vw] w-[24.3750vw] h-[2.0833vw] flex  space-x-[1.4062vw] items-center'>
                        <Link to="/login" className="block">
                            <div className='w-[4.3750vw] h-[1.2500vw] flex items-center space-x-[0.5208vw]' onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
                                <LazyImage className='w-[1.2500vw] h-[1.2500vw]' src={isHovered ? identification_green : identification} />
                                <span className={`text-start font-Noto_Sans text-20px leading-20px ${isHovered ? 'text-538aa2' : 'text-3F3F46 '}`}>登入</span>
                            </div>
                        </Link>

                        <div className=' w-[8.3854vw] h-[1.6667vw] flex items-center bg-fdfdfd/50 shadow-lg rounded-full '>
                            <LazyImage className='w-[1.6667vw] h-[1.5625vw]' src={coin} />
                            <span className='w-[3.3333vw] h-[1.250vw] ml-[0.4167vw] text-start text-[0.83vw] text-538aa2 font-Noto_Sans '>1,200</span>
                            <LazyImage className='w-[0.9375vw] h-[1.250vw] ml-[1.5104vw]' src={add} />
                        </div>

                        <div className=' h-[1.3542vw] w-[0.0521vw] bg-c3c3c3 '></div>

                        <HoverImage className='w-[1.2500vw] h-[1.2500vwh]' defaultSrc={chat_alt} hoverSrc={chat_alt_green} />
                        <HoverImage className='w-[1.2500vw] h-[1.2500vw]' defaultSrc={bell} hoverSrc={bell_green} />
                        <Link to='/profile'> <LazyImage className='w-[2.0833vw] h-[2.0833vw] rounded-full  hover:scale-110 transition-transform duration-200' src={user_circle} />  </Link>
                    </div>
                </div>
            </div>
            <div className='  md:hidden  flex   items-center justify-between h-[18.9048vw] bg-white z-20   relative w-full '>
                <img className='w-[37.0274vw] h-[13.6897vw]' src={Logo} />
                <div className='w-[17.7314vw] h-[5.8670vw] flex justify-between items-center mr-[7.8227vw]'>
                    <button className='w-[5.8670vw] h-[5.8670vw]'><img className='w-full h-full' src={translate_green} /></button>
                    <button className='w-[5.8670vw] h-[5.0847vw]'><MenuButton />

                    </button>
                </div>

            </div>



        </div>

    );
}


export default My_header;
