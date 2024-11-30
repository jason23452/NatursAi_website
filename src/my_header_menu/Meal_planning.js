import React from 'react';
import Meal_planning_bg from '../assets/Meal_planning_img/Meal_planning.svg';
import media_Meal_planning_bg from '../assets/Meal_planning_img/media_Meal_planning_bg.svg';
import phone_img from '../assets/Meal_planning_img/phone_img.svg';
import download_apple from '../assets/Meal_planning_img/download_apple.svg';
import download_google from '../assets/Meal_planning_img/download_google.svg';

import LazyImage from '../action_object/lazyimg';
function Meal_planning() {
    return (
        <div className="relative w-full h-full">
            <div className='absolute md:w-full  md:-top-[3.958vw] hidden md:block'>
                <img src={Meal_planning_bg} className="w-full object-cover" alt="Login Background" />
                <div className='absolute inset-0 '>
                    <div className='ml-[15.937vw] mt-[12.969vw] w-[72.500vw] h-[33.176vw] flex  '>
                        <LazyImage className='w-[15.521vw] h-[33.176vw]' src={phone_img} />
                        <div className='ml-[9.635vw] mt-[6.458vw] w-[47.760vw] h-[20.159vw] flex flex-col'>
                            <span className='w-[47.344vw] h-[8.021vw] text-[#3F3F46] text-[2.500vw] font-Noto_Sans_ch font-bold leading-[3.750vw]  tracking-[0.500vw] flex items-center'>電腦版尚未開放使用，盡情期待!!</span>
                            <div className='mt-[1.823vw] w-[25.473vw] h-[10.315vw] '>
                                <button className='w-[25.448vw] h-[3.258vw] bg-gradient-to-r from-[#399983] to-[#538aa2] rounded-[0.729vw] flex items-center justify-center text-white text-[1.458vw] font-Noto_Sans_ch font-medium leading-[1.759vw] '>立即下載APP</button>
                                <div className='mt-[3.411vw] w-[25.469vw] h-[3.646vw] flex justify-between '>
                                    <button className=''><LazyImage className='w-[11.615vw] h-[3.646vw]' src={download_apple} /></button>
                                    <button className=''><LazyImage className='w-[11.615vw] h-[3.646vw]' src={download_google} /></button>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
            <div className=' absolute w-full h-[256.9752vw] md:hidden '>
                <img src={media_Meal_planning_bg} className="w-full  h-[256.9752vw] object-cover" alt="Login Background" />
                <div className='absolute inset-0 flex flex-col items-center '>
                    <img className='mt-[9.2829vw] w-[63.8853vw] h-[130.7692vw]' src={phone_img}/>
                    <button className='mt-[8.8110vw] w-[56.5880vw] h-[10.8266vw] bg-gradient-to-r from-[#399983] to-[#538aa2] rounded-[1.8253vw] text-white text-[6.2581vw] font-sans font-medium leading-[7.5502vw]'>盡情期待</button>
                    <div className='mt-[10.4798vw] w-[63.7549vw] h-[8.9961vw] flex justify-between items-center'>
                        <button className='w-[28.9439vw] h-[8.9961vw]'><img src={download_google}/></button>
                        <button className='w-[28.9439vw] h-[8.9961vw]'><img src={download_apple}/></button>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Meal_planning;
