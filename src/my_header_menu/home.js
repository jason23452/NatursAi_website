import home_bg from '../assets/home_img/Home_bg.svg';
import test from '../assets/home_img/Home.png';
import NatursAi from '../assets/home_img/NatursAi.svg';
import Contact_us from '../assets/home_img/Contact us.svg';
import Contact_us_green from '../assets/home_img/Contact us_green.svg';
import GoEat from '../assets/home_img/GoEat.svg';
import deep_understand from '../assets/home_img/deep_understand.svg';
import deep_understand_green from '../assets/home_img/deep_understand_green.svg';


import React, { useState } from 'react';



function Home() {

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
    const [isChecked, setIsChecked] = useState(false);

    // 处理复选框点击事件
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };




    return (
        <div className="relative w-full h-full">
            <div className='absolute w-[100%] max-w-[99.115vw] -top-[8.343vh]'>
                <img src={home_bg} className="w-full object-cover" alt="Login Background" />
                {/* <img src={test} className=' absolute top-0 opacity-60' /> */}
                <div className='  absolute inset-0 '>
                    <div className='w-[88.594vw] h-[74.314vh] ml-[9.271vw] mt-[27.881vh] flex justify-between'>

                        <div className='w-[33.125vw] h-[38.529vh] flex flex-col'>
                            <span className="w-[21.354vw] h-[12.953vh] text-[#538aa2] text-[1.667vw] font-normal font-Baloo_Thambi leading-[6.2vh] tracking-[0.250vw]">Naturs
                                <span className='text-[#399983] text-[1.667vw] font-normal font-Baloo_Thambi leading-[6vh] tracking-[0.250vw]'>ai <br />
                                    <span className="text-[#538aa2] text-[1.667vw] font-bold font-Noto_Sans_ch leading-[6.vh] tracking-[0.250vw]">劃時代的AI健康管理</span>
                                </span>
                            </span>

                            <span className='w-[33.125vw] h-[17.563vh] mt-[1.098vh] text-[#3F3F46] text-[1.042vw] font-normal font-Noto_Sans_ch leading-[2.649vh] tracking-[0.156vw]'><br />我們著重於打造真實虛實體驗，將現實生活中的健康管理透過與各健康專案、遊戲、活動結合形成虛實整合的強大工作，讓人從小事情開始關注健康議題，比較枯燥乏味的健康管理，立即加入
                                <span className="text-[#538aa2] text-[1.042vw] font-normal font-Baloo_Thambi leading-[2.649vh] tracking-[0.156vw]">Naturs
                                    <span className="text-[#399983] text-[1.042vw] font-normal font-Baloo_Thambi leading-[2.649vh] tracking-[0.156vw]">ai
                                        <span className="text-[#3F3F46] text-[1.042vw] font-normal font-Noto_Sans_ch leading-[2.649vh] tracking-[0.156vw]">所有產品，體驗真實的生活管理系統。<br /></span>
                                    </span>
                                </span>
                            </span>

                            <button className='mt-[0.768vh] w-[11.667vw] h-[6.147vh] bg-gradient-to-r from-[#399983] to-[#538aa2] flex justify-center items-center hover:from-[#3F3F46] hover:to-[#3F3F46]'>
                                <span className='text-center text-white text-[2.634vh] font-medium font-Noto_Sans_ch leading-[1.508vw] '>深入了解</span>
                            </button>
                        </div>
                        <div className='mr-[0.8vw] mt-auto w-[11.667vw] h-[37.980vh] flex flex-col justify-between'>
                            <button className='w-full h-[6.147vh] bg-gradient-to-r from-[#399983] to-[#538aa2] flex justify-center items-center hover:from-[#3F3F46] hover:to-[#3F3F46]'>
                                <span className='text-center text-white text-[2.634vh] font-medium font-Noto_Sans_ch leading-[1.508vw]'>新聞動態</span>
                            </button>
                            <button className='w-full h-[6.147vh] bg-gradient-to-r from-[#399983] to-[#538aa2] flex justify-center items-center hover:from-[#3F3F46] hover:to-[#3F3F46]'>
                                <span className='text-center text-white text-[2.634vh] font-medium font-Noto_Sans_ch leading-[1.508vw]'>健康管理APP</span>
                            </button>
                        </div>
                    </div>
                    <div className='flex w-[88.646vw] h-[34.907vh] ml-[4.375vw]'>
                        <div className='w-[29.427vw] h-[30.406vh]  flex flex-col  space-y-[4.1vh]'>
                            <span className='w-[21.354vw] h-[5.488vh] text-white text-[1.667vw] font-normal font-Baloo_Thambi leading-[6.323vh] tracking-[0.527vh]'>健康管理首選</span>
                            <span className='w-[w-[29.427vw] h-[11.526vh]  text-white text-[1.042vw] font-normal font-Noto_Sans_ch leading-[3.842vh] tracking-[0.156vw]'>線上的健康管理師，您將於日常紀錄餐點並透過專業醫療人員進一步引導與協助，管理的瑣碎由Natursai為您把關，提供優質個人化健康管理，讓管理成為日常。</span>
                        </div>
                        <div className='flex w-[43.385vw] h-[9.660vh] mt-[21.3vh] ml-[15.4vw] justify-between'>
                            <div className='flex w-[18.438vw]  h-[9.660vh] justify-between items-end '>
                                <img className='w-[4.583vw]' src={NatursAi} />
                                <div className='flex flex-col justify-between w-[12.760vw]  h-full ml-[1.144vw]'>
                                    <div className='w-[8.281vw] h-[4.830vh] ml-[0.260vw] flex'>
                                        <span className="mt-[1vh] text-[#3F3F46] font-Baloo_Thambi font-normal text-[1.042vw] leading-[2.649vh] tracking-[0.156vw] ">Natursai&nbsp;</span>
                                        <span className='mt-[1vh] text-[#3F3F46] text-[1.042vw] font-Noto_Sans_ch font-bold leading-[2.481vh]  tracking-[0.156vw] text-center'>團隊</span>
                                    </div>

                                    <button className='w-[12.760vw] h-[4.987vh]'><HoverImage hoverSrc={Contact_us_green} defaultSrc={Contact_us} /></button>
                                </div>
                            </div>
                            <div className='flex w-[18.438vw]  h-[9.660vh] justify-between items-end '>
                                <img className='w-[4.583vw]' src={GoEat} />
                                <div className='flex flex-col justify-between w-[12.760vw]  h-full ml-[1.144vw]'>
                                    <div className="w-[8.281vw] h-[4.830vh]  flex ">
                                        <span className='mt-[1vh] text-[#3F3F46] text-[1.042vw] font-Noto_Sans_ch font-bold leading-[2.481vh] tracking-[0.156vw]'>夠益營養APP</span>
                                    </div>
                                    <button className='w-[12.760vw] h-[4.987vh]'><HoverImage hoverSrc={deep_understand_green} defaultSrc={deep_understand} /></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ml-[7.187vw] mt-[36.5vh] w-[31.146vw] h-[43.249vh] flex flex-col">
                        <div className='w-[27.135vw] h-[12.953vh] flex flex-col' >
                            <span className="text-[#399983] text-[1.667vw] font-bold font-Noto_Sans_ch leading-[3.952vh] tracking-[0.250vw]">專業首選</span>
                            <span className="text-[#538aa2] text-[1.667vw] font-bold font-Noto_Sans_ch leading-[3.952vh] tracking-[0.250vw]">的健康管理團隊</span>
                        </div>
                        <span className='w-[30.208vw] h-[8.782vh] text-[#3F3F46] text-[1.042vw] font-normal font-Noto_Sans_ch leading-[2.649vh] tracking-[0.156vw]'>立即訂閱
                            <span className='text-[#538AA2] text-[1.042vw] font-Baloo_Thambi font-normal leading-[2.649vh] tracking-[0.156vw]'>Naturs
                                <span className='text-[#399983] text-[1.042vw] font-Baloo_Thambi font-normal leading-[2.649vh] tracking-[0.156vw]'>ai
                                    <span className='text-[#3F3F46] text-[1.042vw] font-Noto_Sans_ch font-normal leading-[2.649vh] tracking-[0.156vw] '>電子報，以了解我們所有產品和公告的最新資訊。
                                    </span>
                                </span>
                            </span>
                        </span>
                        <div className='w-[31.146vw] h-[3.952vh] flex justify-between'>
                            <input className='w-[21.042vw] h-[3.952vh] border-[0.104vw] border-[#b3b3b3] bg-transparent rounded-[0.417vw] pl-[0.625vw] text-[0.625vw]' />
                            <button className='w-[7.187vw] h-[3.732vh] bg-gradient-to-r from-[#399983] to-[#538aa2] flex items-center justify-center text-white text-[0.833vw] hover:from-[#3F3F46] hover:to-[#3F3F46]'>訂閱</button>
                        </div>
                        <div className='mt-[1.976vh] w-[22.604vw] h-[3.293vh] flex items-center'>
                            <input
                                type="checkbox"
                                className={`w-[0.938vw] h-[1.976vh] rounded-md ${isChecked ? 'accent-[#538AA2]' : 'accent-[#538AA2]'
                                    }`}
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <span className=' ml-[0.312vw] text-[0.573vw] text-[#3F3F46] font-Noto_Sans_ch font-normal leading-[1.457vh] tracking-[0.086vw]'>我同意接收來自 NatursAi 的信息分享。</span>
                        </div>
                        <span className='mt-[1vh] w-[21.042vw] h-[10.209vh] text-[#3F3F46] text-[0.573vw] font-Noto_Sans_ch font-normal leading-[1.457vh] tracking-[0.086vw]'>您可以隨時取消訂閱這些通訊。欲了解如何取消訂閱、我們的隱私實踐以及我們如何承諾保護和尊重您的隱私，請參閱我們的
                            <span className='text-[#538AA2] text-[0.573vw] font-Noto_Sans_ch font-normal leading-[1.457vh] tracking-[0.086vw]'>《
                                <span className='text-[#538AA2] text-[0.573vw] font-Noto_Sans_ch font-normal leading-[1.457vh] tracking-[0.086vw]'><span className='underline decoration-[0.052vw]'>隱私政策</span>
                                    <span className='text-[#538AA2] text-[0.573vw] font-Noto_Sans_ch font-normal leading-[1.457vh] tracking-[0.086vw]'>》
                                        <span className='text-[#3F3F46] text-[0.573vw] font-Noto_Sans_ch font-normal leading-[1.457vh] tracking-[0.086vw]'><br/><br/>點擊下方的「訂閱」按鈕，即表示您同意允許 <span className=' font-Noto_Sans_en'>NatursAi</span> 存儲並處理您提交的個人信息，以便為您提供所需的內容。

                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                </div>

                {/* <span style="color: '#3F3F46', fontSize: 11, fontFamily: 'Inter', fontWeight: '400', lineHeight: 13.27, letterSpacing: 1.65, wordWrap: 'break-word'">您可以隨時取消訂閱這些通訊。欲了解如何取消訂閱、我們的隱私實踐以及我們如何承諾保護和尊重您的隱私，請參閱我們的</span>
                <span style="color: '#538AA2', fontSize: 11, fontFamily: 'Inter', fontWeight: '400', lineHeight: 13.27, letterSpacing: 1.65, wordWrap: 'break-word'">《</span>
                <span style="color: '#538AA2', fontSize: 11, fontFamily: 'Inter', fontWeight: '400', textDecoration: 'underline', lineHeight: 13.27, letterSpacing: 1.65, wordWrap: 'break-word'">隱私政策</span>
                <span style="color: '#538AA2', fontSize: 11, fontFamily: 'Inter', fontWeight: '400', lineHeight: 13.27, letterSpacing: 1.65, wordWrap: 'break-word'">》</span>
                <span style="color: '#3F3F46', fontSize: 11, fontFamily: 'Inter', fontWeight: '400', lineHeight: 13.27, letterSpacing: 1.65, wordWrap: 'break-word'">。<br/><br/>點擊下方的「訂閱」按鈕，即表示您同意允許 NatursAi 存儲並處理您提交的個人信息，以便為您提供所需的內容。</span> */}

            </div>

        </div>
    );
}

export default Home;