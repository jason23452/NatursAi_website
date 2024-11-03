import About_us_bg from '../assets/About_us_img/About us_bg.svg';
import About_us_test from '../assets/About_us_img/About us_test.svg';
import title_img from '../assets/About_us_img/title_img.svg';
import closedArrow from '../assets/About_us_img/arrow.svg';
import openArrow from '../assets/About_us_img/openArrow.svg';
import no_robot from '../assets/About_us_img/no_robot.svg';


import React, { useState } from 'react';

// 自訂的 CustomSelect 元件
const CustomSelect = ({ options, defaultText }) => {
    const [isOpen, setIsOpen] = useState(false);

    // 點擊時設置 isOpen 為 true
    const handleClick = () => setIsOpen(true);

    // 失去焦點時（關閉選單）設置 isOpen 為 false
    const handleBlur = () => setIsOpen(false);

    return (
        <div className="relative w-[44.010vw] h-[9.935vh] flex items-center">
            <select
                onFocus={handleClick}
                onBlur={handleBlur}
                className="w-full h-full appearance-none text-[#538AA1] text-[1.667vw] bg-white rounded-[0.521vw] shadow-lg pl-[0.971vw] font-normal font-Noto_Sans_ch tracking-[0.167vw] leading-[5.269vh] "
            >
                {options.map((option, index) => (
                    <option key={index}>{option}</option>
                ))}
            </select>

            {/* 根據 isOpen 狀態來切換箭頭圖片 */}
            <img
                className="absolute right-[2.013vw] w-[1.927vw] h-[2.086vh] pointer-events-none"
                src={isOpen ? openArrow : closedArrow}
                alt="arrow"
            />
        </div>
    );
};




function About() {
    return (
        <div className="relative w-full h-full">
            <div className='absolute w-[100%] max-w-[99.115vw] -top-[8.343vh]'>
                <img src={About_us_bg} className="w-full object-cover" alt="Login Background" />
                {/* <img src={About_us_test} className=" absolute top-0 opacity-80" alt="Login Background" /> */}
                <div className='  absolute inset-0 '>
                    <div className='ml-[38.229vw] mt-[22.613vh] relative w-[17.760vw] h-[13.941vh] '>
                        <img className='w-[17.760vw] h-[11.526vh]' src={title_img} />
                        <span className=' absolute left-[8.854vw] top-[8.782vh]  w-[15.469vw] h-[4.830vh] flex justify-start items-center text-[#538AA2] text-[1.042vw] font-Noto_Sans_ch font-bold leading-[2.649vh]  tracking-[0.156vw]'>劃時代的AI健康管理</span>
                    </div>
                    <span className='ml-[24.2vw] mt-[11.3vh] w-[49.375vw] h-[16.685vh] flex items-center justify-start text-[#3F3F46] text-[1.250vw] font-Noto_Sans_ch font-bold leading-[3.952vh]'>
                        若您對 NatursAi 產品有任何疑問或需要進一步了解，請填寫下方聯絡表格。我們將盡快與您聯繫，並提供您所需的協助。
                    </span>
                    <div className='ml-[26.3vw] mt-[2.1vh] w-[44.062vw] h-[143.249vh] flex flex-col'>

                        <div className='w-[44.010vw] h-[17.311vh] flex flex-col justify-between'>
                            <span className='w-[18.654vw] h-[6.146vh] text-[1.875vw] font-Noto_Sans_ch font-bold leading-[5.928vh] '>信息內容</span>
                            <CustomSelect
                                options={['技術支援', '產品意見', '刪除帳號', '合作機會', '其他']}
                            />
                        </div>
                        <div className='mt-[7.266vh] w-[44.010vw] h-[17.311vh] flex flex-col justify-between'>
                            <span className='w-[18.654vw] h-[6.146vh] text-[1.875vw] font-Noto_Sans_ch font-bold leading-[5.928vh] '>您的身份</span>
                            <CustomSelect
                                options={['夠益營養APP使用者', '照護人員', '醫護人員', '合作關係人', '其他']}
                            />
                        </div>
                        <div className='w-[43.438vw] h-[18.551vh] mt-[8.9vh] flex justify-between '>
                            <div className='w-[20.573vw] h-[18.551vh] flex flex-col'>
                                <span className='w-[20.000vw] h-[6.586vh]  text-[#3F3F46] text-[1.875vw] font-Noto_Sans_ch font-bold leading-[5.928vh] '>姓名<span className='text-[#AE2D2D] text-[1.875vw] font-Noto_Sans_ch font-bold leading-[5.928vh]'>*</span></span>
                                <input className='w-[20.573vw] h-[10.648vh] pl-[0.990vw] bg-white  rounded-[0.521vw]  shadow-lg placeholder:text-[#CACACA] text-[1.667vw] font-Noto_Sans_ch font-normal leading-[5.269vh] tracking-[0.167vw] ' placeholder='你的姓名' />
                            </div>
                            <div className='w-[20.573vw] h-[18.551vh] flex flex-col'>
                                <span className='w-[20.000vw] h-[6.586vh]  text-[#3F3F46] text-[1.875vw] font-Noto_Sans_ch font-bold leading-[5.928vh] '>信箱<span className='text-[#AE2D2D] text-[1.875vw] font-Noto_Sans_ch font-bold leading-[5.928vh]'>*</span></span>
                                <input className='w-[20.573vw] h-[10.648vh] pl-[0.990vw] bg-white  rounded-[0.521vw]  shadow-lg placeholder:text-[#CACACA] text-[1.667vw] font-Noto_Sans_ch font-normal leading-[5.269vh] tracking-[0.167vw] ' placeholder='你的信箱' />
                            </div>
                        </div>
                        <div className=' mt-[7.684vh] w-[44.010vw] h-[48.628vh] flex flex-col justify-between'>
                            <span className='w-[20.000vw] h-[6.586vh]  text-[#3F3F46] text-[1.875vw] font-Noto_Sans_ch font-bold leading-[5.928vh] '>問題意見<span className='text-[#AE2D2D] text-[1.875vw] font-Noto_Sans_ch font-bold leading-[5.928vh]'>*</span></span>
                            <textarea className='w-[44.010vw] h-[40.724vh]  bg-white shado  shadow-lg  pl-[1.042vw] pt-[1.976vh]  rounded-[0.521vw] placeholder:text-[#CACACA] text-[1.667vw] font-Noto_Sans_ch font-normal leading-[5.269vh] tracking-[0.167vw] resize-none ' placeholder='請輸入問題意見'></textarea>
                        </div>
                        <div className='w-[44.062vw] h-[11.526vh] flex justify-between mt-[6.257vh]'>
                            <img src={no_robot} className='w-[20.052vw] h-[11.526vh]'/>
                            <button className= 'mt-[4.281vh] w-[11.667vw] h-[6.147vh] bg-gradient-to-r from-[#399983] to-[#538aa2] flex justify-center items-center  text-white text-[1.250vw] font-Noto_Sans_ch font-medium leading-[1.250vw]'>提交</button>

                        </div>


                    </div>

                </div>
            </div>

        </div>
    );
}

export default About;
