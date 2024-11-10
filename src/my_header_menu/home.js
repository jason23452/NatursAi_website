import home_bg from '../assets/home_img/Home_bg.svg';
import test from '../assets/home_img/Home.png';
import NatursAi from '../assets/home_img/NatursAi.svg';
import Contact_us from '../assets/home_img/Contact us.svg';
import Contact_us_green from '../assets/home_img/Contact us_green.svg';
import GoEat from '../assets/home_img/GoEat.svg';
import deep_understand from '../assets/home_img/deep_understand.svg';
import deep_understand_green from '../assets/home_img/deep_understand_green.svg';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HoverImage from '../action_object/HoverImage'
import LazyImage from '../action_object/lazyimg';

import '../css/All.css';

const Footer = React.lazy(() => import('./footer'));


function Home() {
    const [isChecked, setIsChecked] = useState(false);
    // 处理复选框点击事件
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };






    return (
        <div className="all_container">
            <div className='all_container_bg'>
                <img src={home_bg} className="page_bg_img" alt="Login Background" />
                {/* <img src={test} className=' absolute top-0 opacity-60' /> */}
                <div className='All_content_containers'>
                    <div className='w-[88.594vw] h-[35.260vw] ml-[9.271vw] mt-[13.229vw] flex justify-between'>

                        <div className='w-[33.125vw] h-[18.281vw] flex flex-col'>
                            <span className="w-[21.354vw] h-[6.146vw] text-[#538aa2] text-[1.667vw] font-normal font-Baloo_Thambi leading-[3.000vw] tracking-[0.250vw]">Naturs
                                <span className='text-[#399983] text-[1.667vw] font-normal font-Baloo_Thambi leading-[3.000vw] tracking-[0.250vw]'>ai <br />
                                    <span className="text-[#538aa2] text-[1.667vw] font-bold font-Noto_Sans_ch leading-[3.000vw] tracking-[0.250vw]">劃時代的AI健康管理</span>
                                </span>
                            </span>

                            <span className='w-[33.125vw] h-[8.333vw] mt-[0.521vw] text-[#3F3F46] text-[1.042vw] font-normal font-Noto_Sans_ch leading-[1.257vw] tracking-[0.156vw]'><br />我們著重於打造真實虛實體驗，將現實生活中的健康管理透過與各健康專案、遊戲、活動結合形成虛實整合的強大工作，讓人從小事情開始關注健康議題，比較枯燥乏味的健康管理，立即加入
                                <span className="text-[#538aa2] text-[1.042vw] font-normal font-Baloo_Thambi leading-[1.257vw] tracking-[0.156vw]">Naturs
                                    <span className="text-[#399983] text-[1.042vw] font-normal font-Baloo_Thambi leading-[1.257vw] tracking-[0.156vw]">ai
                                        <span className="text-[#3F3F46] text-[1.042vw] font-normal font-Noto_Sans_ch leading-[1.257vw] tracking-[0.156vw]">所有產品，體驗真實的生活管理系統。<br /></span>
                                    </span>
                                </span>
                            </span>

                            <Link to='/product' className='mt-[0.365vw] w-[11.667vw] h-[2.917vw] bg-gradient-to-r from-[#399983] to-[#538aa2] flex justify-center items-center text-center text-white text-[1.250vw] font-medium font-Noto_Sans_ch leading-[1.508vw] hover:from-[#3F3F46] hover:to-[#3F3F46]'>
                                深入了解
                            </Link>
                        </div>
                        <div className='mr-[0.8vw] mt-auto w-[11.667vw] h-[18.021vw] flex flex-col justify-between'>
                            <Link to='/Information' className='mt-[0.365vw] w-[11.667vw] h-[2.917vw] bg-gradient-to-r from-[#399983] to-[#538aa2] flex justify-center items-center text-center text-white text-[1.250vw] font-medium font-Noto_Sans_ch leading-[1.508vw] hover:from-[#3F3F46] hover:to-[#3F3F46]'>
                                新聞動態
                            </Link>
                            <Link to='/product' className='mt-[0.365vw] w-[11.667vw] h-[2.917vw] bg-gradient-to-r from-[#399983] to-[#538aa2] flex justify-center items-center text-center text-white text-[1.250vw] font-medium font-Noto_Sans_ch leading-[1.508vw] hover:from-[#3F3F46] hover:to-[#3F3F46]'>
                                健康管理APP
                            </Link>
                        </div>
                    </div>
                    <div className='flex w-[88.646vw] h-[16.562vw] ml-[4.375vw]'>
                        <div className='w-[29.427vw] h-[14.427vw]  flex flex-col  space-y-[1.945vw]'>
                            <span className='w-[21.354vw] h-[2.604vw] text-white text-[1.667vw] font-normal font-Baloo_Thambi leading-[3.000vw] tracking-[0.250vw]'>健康管理首選</span>
                            <span className='w-[w-[29.427vw] h-[5.469vw]  text-white text-[1.042vw] font-normal font-Noto_Sans_ch leading-[1.823vw] tracking-[0.156vw]'>線上的健康管理師，您將於日常紀錄餐點並透過專業醫療人員進一步引導與協助，管理的瑣碎由Natursai為您把關，提供優質個人化健康管理，讓管理成為日常。</span>
                        </div>

                        <div className='flex w-[43.385vw] h-[4.583vw] mt-[10.106vw] ml-[15.4vw] justify-between'>
                            <div className='flex w-[18.438vw]  h-[4.583vw] justify-between items-end '>
                                <LazyImage className='w-[4.583vw] ' src={NatursAi} />
                                <div className='flex flex-col justify-between w-[12.760vw]  h-full ml-[1.144vw]'>
                                    <div className='w-[8.281vw] h-[2.217vw] ml-[0.260vw] flex'>
                                        <span className="mt-[0.469vw] text-[#3F3F46] font-Baloo_Thambi font-normal text-[1.042vw] leading-[1.257vw] tracking-[0.156vw] ">Natursai&nbsp;</span>
                                        <span className='mt-[0.469vw] text-[#3F3F46] text-[1.042vw] font-Noto_Sans_ch font-bold leading-[1.177vw]  tracking-[0.156vw] text-center'>團隊</span>
                                    </div>
                                    <Link to='/about' className='w-[12.760vw] h-[2.395vw]'><HoverImage hoverSrc={Contact_us_green} defaultSrc={Contact_us} /></Link>
                                </div>
                            </div>
                            <div className='flex w-[18.438vw]  h-[4.583vw] justify-between items-end '>
                                <LazyImage className='w-[4.583vw]' src={GoEat} />
                                <div className='flex flex-col justify-between w-[12.760vw]  h-full ml-[1.144vw]'>
                                    <div className="w-[8.281vw] h-[2.217vw]  flex ">
                                        <span className='mt-[0.469vw] text-[#3F3F46] text-[1.042vw] font-Noto_Sans_ch font-bold leading-[1.177vw] tracking-[0.156vw]'>夠益營養APP</span>
                                    </div>
                                    <Link to='/product' className='w-[12.760vw] h-[2.395vw]'><HoverImage hoverSrc={deep_understand_green} defaultSrc={deep_understand} /></Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="ml-[7.187vw] mt-[17.318vw] w-[31.146vw] h-[20.520vw] flex flex-col">
                        <div className='w-[27.135vw] h-[6.146vw] flex flex-col' >
                            <span className="text-[#399983] text-[1.667vw] font-bold font-Noto_Sans_ch leading-[1.850vw] tracking-[0.250vw]">專業首選</span>
                            <span className="text-[#538aa2] text-[1.667vw] font-bold font-Noto_Sans_ch leading-[1.850vw] tracking-[0.250vw]">的健康管理團隊</span>
                        </div>

                        <span className='w-[30.208vw] h-[4.167vw] text-[#3F3F46] text-[1.042vw] font-normal font-Noto_Sans_ch leading-[1.257vw] tracking-[0.156vw]'>立即訂閱
                            <span className='text-[#538AA2] text-[1.042vw] font-Baloo_Thambi font-normal leading-[1.257vw] tracking-[0.156vw]'>Naturs
                                <span className='text-[#399983] text-[1.042vw] font-Baloo_Thambi font-normal leading-[1.257vw] tracking-[0.156vw]'>ai
                                    <span className='text-[#3F3F46] text-[1.042vw] font-Noto_Sans_ch font-normal leading-[1.257vw] tracking-[0.156vw] '>電子報，以了解我們所有產品和公告的最新資訊。
                                    </span>
                                </span>
                            </span>
                        </span>

                        <div className='w-[31.146vw] h-[1.875vw] flex justify-between'>
                            <input className='w-[21.042vw] h-[1.875vw] border-[0.104vw] border-[#b3b3b3] bg-transparent rounded-[0.417vw] pl-[0.625vw] text-[0.625vw]' />
                            <button className='w-[7.187vw] h-[1.875vw] bg-gradient-to-r from-[#399983] to-[#538aa2] flex items-center justify-center text-white text-[0.833vw] hover:from-[#3F3F46] hover:to-[#3F3F46]'>訂閱</button>
                        </div>

                        <div className='mt-[0.938vw] w-[22.604vw] h-[1.562vw] flex items-center'>
                            <input
                                type="checkbox"
                                className={`w-[0.938vw] h-[0.938vw] rounded-md ${isChecked ? 'accent-[#538AA2]' : 'accent-[#538AA2]'
                                    }`}
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <span className=' ml-[0.312vw] text-[0.573vw] text-[#3F3F46] font-Noto_Sans_ch font-normal leading-[0.691vw] tracking-[0.086vw]'>我同意接收來自 NatursAi 的信息分享。</span>
                        </div>
                        <span className='mt-[0.474vw] w-[21.042vw] h-[4.844vw] text-[#3F3F46] text-[0.573vw] font-Noto_Sans_ch font-normal leading-[0.691vw] tracking-[0.086vw]'>您可以隨時取消訂閱這些通訊。欲了解如何取消訂閱、我們的隱私實踐以及我們如何承諾保護和尊重您的隱私，請參閱我們的
                            <span className='text-[#538AA2] text-[0.573vw] font-Noto_Sans_ch font-normal leading-[0.691vw] tracking-[0.086vw]'>《
                                <span className='text-[#538AA2] text-[0.573vw] font-Noto_Sans_ch font-normal leading-[0.691vw] tracking-[0.086vw]'><span className='underline decoration-[0.052vw]'>隱私政策</span>
                                    <span className='text-[#538AA2] text-[0.573vw] font-Noto_Sans_ch font-normal leading-[0.691vw] tracking-[0.086vw]'>》
                                        <span className='text-[#3F3F46] text-[0.573vw] font-Noto_Sans_ch font-normal leading-[0.691vw] tracking-[0.086vw]'><br /><br />點擊下方的「訂閱」按鈕，即表示您同意允許 <span className=' font-Noto_Sans_en'>NatursAi</span> 存儲並處理您提交的個人信息，以便為您提供所需的內容。
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                </div>
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Footer />
                </React.Suspense>

            </div>

        </div>
    );
}

export default Home;