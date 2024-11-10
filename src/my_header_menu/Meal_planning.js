import React from 'react';
import Meal_planning_bg from '../assets/Meal_planning_img/Meal_planning.svg';
import phone_img from '../assets/Meal_planning_img/phone_img.svg';
import download_apple from '../assets/Meal_planning_img/download_apple.svg';
import download_google from '../assets/Meal_planning_img/download_google.svg';
import LazyImage from '../action_object/lazyimg';
function Meal_planning() {
    return (
        <div className="all_container">
            <div className='all_container_bg'>
                <img src={Meal_planning_bg} className="page_bg_img" alt="Login Background" />
                <div className='absolute inset-0 '>
                    <div className='ml-[15.937vw] mt-[12.969vw] w-[72.500vw] h-[33.176vw] flex  '>
                        <LazyImage className='w-[15.521vw] h-[33.176vw]' src={phone_img} />
                        <div className='ml-[9.635vw] mt-[6.458vw] w-[47.760vw] h-[20.159vw] flex flex-col'>
                            <span className='w-[47.344vw] h-[8.021vw] text-[#3F3F46] text-[2.500vw] font-Noto_Sans_ch font-bold leading-[3.750vw]  tracking-[0.500vw] flex items-center'>電腦版尚未開放使用，盡情期待!!</span>
                            <div className='mt-[1.823vw] w-[25.473vw] h-[10.315vw] '>
                                <button className='w-[25.448vw] h-[3.258vw] bg-gradient-to-r from-[#399983] to-[#538aa2] rounded-[0.729vw] flex items-center justify-center text-white text-[1.458vw] font-Noto_Sans_ch font-medium leading-[1.759vw] '>立即下載APP</button>
                                <div className='mt-[3.411vw] w-[25.469vw] h-[3.646vw] flex justify-between '>
                                    <button className=''><LazyImage className='w-[11.615vw] h-[3.646vw]' src={download_apple}/></button>
                                    <button className=''><LazyImage className='w-[11.615vw] h-[3.646vw]' src={download_google}/></button>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>


            </div>
        </div>
    );
}

export default Meal_planning;
