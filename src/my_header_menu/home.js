import home_bg from '../assets/home_img/Home_bg.svg';
import media_home_bg from '../assets/home_img/media_home_bg.svg';
import test from '../assets/home_img/Home.png';
import media_logo from '../assets/home_img/media_logo.svg';
import NatursAi from '../assets/home_img/NatursAi.svg';
import Contact_us from '../assets/home_img/Contact us.svg';
import Contact_us_green from '../assets/home_img/Contact us_green.svg';
import GoEat from '../assets/home_img/GoEat.svg';
import deep_understand from '../assets/home_img/deep_understand.svg';
import deep_understand_green from '../assets/home_img/deep_understand_green.svg';
import arrow_left from '../assets/home_img/arrow_left.svg';
import arrow_right from '../assets/home_img/arrow_right.svg';
import product from '../assets/home_img/product.svg';
import game from '../assets/home_img/game.svg';
import store from '../assets/home_img/store.svg';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import HoverImage from '../action_object/HoverImage'
import LazyImage from '../action_object/lazyimg';
import Footer from '../my_header_menu/footer';







const Carousel = () => {
    const images = [
        { id: 1, src: product, Text: "健康管理APP", class: 'mt-[6.5632vw] w-[37.5489vw] h-[76.7927vw] object-contain relative z-10 rounded-xl' },
        { id: 2, src: game, Text: "遊戲機制", class: 'mt-[6.5632vw] w-[50.1956vw] h-[73.2725vw]  object-contain relative z-10 rounded-xl' },
        { id: 3, src: store, Text: "專屬商城", class: 'mt-[13.3768vw] w-[45.7066vw] h-[59.1890vw]  object-contain relative z-10 rounded-xl' },
    ];

    const [currentIndex, setCurrentIndex] = useState(0); // 當前圖片索引

    // 下一頁
    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % images.length); // 循環到下一張
    };

    // 上一頁
    const handlePrev = () => {
        setCurrentIndex((prev) => (prev - 1 + images.length) % images.length); // 循環到上一張
    };

    return (
        <div className="mt-[1.1734vw] relative w-full h-[102.4772vw] overflow-hidden flex flex-col items-center justify-center">
            {/* 標題 */}

            {/* Carousel Container */}
            <div className="relative w-full h-full flex items-center justify-center">
                {images.map((image, index) => {
                    // 計算圖片位置：中間、左邊、右邊
                    const position =
                        (index - currentIndex + images.length) % images.length;

                    return (
                        <div
                            key={image.id}
                            className={`absolute transition-all duration-500 ease-in-out w-[57.78vw] h-[102.4772vw]  bg-white rounded-xl shadow-lg flex flex-col items-center   ${position === 0
                                ? "w-[45%] left-[50%] transform -translate-x-1/2 z-10 scale-100 opacity-100"
                                : position === 1
                                    ? "w-[20%] left-[110%] transform -translate-x-1/2 z-0 scale-75 opacity-50"
                                    : "w-[20%] left-[-10%] transform -translate-x-1/2 z-0 scale-75 opacity-50"
                                }`}
                        >
                            {/* White Background */}

                            {/* Image */}
                            <img
                                src={image.src}
                                alt={`Image ${image.id}`}
                                className={`Image ${image.class}`}
                            // " mt-[6.5632vw]  object-contain relative z-10 rounded-xl"
                            />
                            <button className=' absolute bottom-[7.6858vw] flex items-center justify-center  w-[35.6349vw] h-[8.4668vw]  bg-gradient-to-r from-[#399983] to-[#538aa2] rounded-[4.7849vw] text-white text-[3.1291vw] font-Noto_Sans  font-medium leading-[28.95px]'>
                                {image.Text}
                            </button>
                        </div>
                    );
                })}
            </div>

            <button
                onClick={handlePrev}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 w-[10.0847vw] h-[4.2164vw] "
            >
                <img className='w-[10.5606vw] h-[4.6362vw]' src={arrow_left} />
            </button>
            <button
                onClick={handleNext}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 w-[10.0847vw] h-[4.2164vw]"
            >
                <img className='w-[10.5606vw] h-[4.6362vw]' src={arrow_right} />
            </button>
        </div>
    );
};







function Home() {
    const [isChecked, setIsChecked] = useState(false);
    // 处理复选框点击事件
    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    };






    return (
        <div className="md:h-[108.6459vw] h-[641.5906vw] relative w-full ">

            <div className='md:absolute md:w-full md:h-[108.6459vw] md:-top-[3.9583vw] hidden md:block'>
                <img src={home_bg} className="w-full   object-cover" alt="Login Background" />
                {/* <img src={test} className=' absolute top-0 opacity-60' /> */}
                <div className='absolute inset-0'>
                    <div className='w-[88.594vw] h-[35.260vw] ml-[9.271vw] mt-[13.229vw] flex justify-between '>

                        <div className='w-[33.125vw] h-[18.281vw] flex flex-col'>
                            <span className="w-[21.354vw] h-[6.146vw] text-538aa2 text-32px  font-normal font-Baloo_Thambi leading-57.60px tracking-4.80px">Naturs
                                <span className='text-399983 text-32px  font-normal font-Baloo_Thambi leading-57.60px tracking-4.80px'>ai <br />
                                    <span className="text-538aa2 text-32px  font-bold font-Noto_Sans  leading-57.60px tracking-4.80px">劃時代的AI健康管理</span>
                                </span>
                            </span>


                            <span className='w-[33.125vw] h-[8.333vw] mt-[0.521vw] text-3F3F46  text-20px font-normal font-Noto_Sans  leading-24.13px tracking-3px'>
                                <br />我們著重於打造真實虛實體驗，將現實生活中的健康管理透過與各健康專案、遊戲、活動結合形成虛實整合的強大工作，
                                讓人從小事情開始關注健康議題，比較枯燥乏味的健康管理，立即加入
                                <span className="text-538aa2 font-Baloo_Thambi">Naturs</span>
                                <span className="text-399983 font-Baloo_Thambi">ai</span>
                                所有產品，體驗真實的生活管理系統。
                            </span>


                            <Link to='/product' className='mt-[0.365vw] w-[11.667vw] h-[2.917vw] bg-bt_def flex justify-center items-center text-center text-white text-24px  font-medium font-Noto_Sans  leading-28.95px hover:bg-bt_hover'>
                                深入了解
                            </Link>
                        </div>
                        <div className='mr-[0.8vw] mt-auto w-[11.667vw] h-[18.021vw] flex flex-col justify-between'>
                            <Link to='/Information' className='mt-[0.365vw] w-[11.667vw] h-[2.917vw] bg-bt_def flex justify-center items-center text-center text-white text-24px  font-medium font-Noto_Sans  leading-28.95px hover:bg-bt_hover'>
                                新聞動態
                            </Link>
                            <Link to='/product' className='mt-[0.365vw] w-[11.667vw] h-[2.917vw] bg-bt_def flex justify-center items-center text-center text-white text-24px  font-medium font-Noto_Sans  leading-28.95px hover:bg-bt_hover'>
                                健康管理APP
                            </Link>
                        </div>
                    </div>
                    <div className='flex w-[88.646vw] h-[16.562vw] ml-[4.375vw]'>
                        <div className='w-[29.427vw] h-[14.427vw]  flex flex-col  space-y-[1.945vw]'>
                            <span className='w-[21.354vw] h-[2.604vw] text-white text-32px  font-normal font-Baloo_Thambi leading-57.60px tracking-4.80px'>健康管理首選</span>
                            <span className='w-[w-[29.427vw] h-[5.469vw]  text-white text-20px  font-normal font-Noto_Sans  leading-35px tracking-3px'>線上的健康管理師，您將於日常紀錄餐點並透過專業醫療人員進一步引導與協助，管理的瑣碎由Natursai為您把關，提供優質個人化健康管理，讓管理成為日常。</span>
                        </div>

                        <div className='flex w-[43.385vw] h-[4.583vw] mt-[10.106vw] ml-[15.4vw] justify-between'>
                            <div className='flex w-[18.438vw]  h-[4.583vw] justify-between items-end '>
                                <LazyImage className='w-[4.583vw] ' src={NatursAi} />
                                <div className='flex flex-col justify-between w-[12.760vw]  h-full ml-[1.144vw]'>
                                    <div className='w-[8.281vw] h-[2.217vw] ml-[0.260vw] flex'>
                                        <span className="mt-[0.469vw] text-3F3F46 font-Baloo_Thambi font-normal text-20px  leading-24.13px tracking-3px ">Natursai&nbsp;</span>
                                        <span className='mt-[0.469vw] text-3F3F46 text-20px  font-Noto_Sans  font-bold leading-22.60px  tracking-3px text-center'>團隊</span>
                                    </div>
                                    <Link to='/about' className='w-[12.760vw] h-[2.395vw]'><HoverImage hoverSrc={Contact_us_green} defaultSrc={Contact_us} /></Link>
                                </div>
                            </div>
                            <div className='flex w-[18.438vw]  h-[4.583vw] justify-between items-end '>
                                <LazyImage className='w-[4.583vw]' src={GoEat} />
                                <div className='flex flex-col justify-between w-[12.760vw]  h-full ml-[1.144vw]'>
                                    <div className="w-[8.281vw] h-[2.217vw]  flex ">
                                        <span className='mt-[0.469vw] text-3F3F46 text-20px  font-Noto_Sans  font-bold leading-22.60px tracking-3px'>夠益營養APP</span>
                                    </div>
                                    <Link to='/product' className='w-[12.760vw] h-[2.395vw]'><HoverImage hoverSrc={deep_understand_green} defaultSrc={deep_understand} /></Link>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="ml-[7.187vw] mt-[17.318vw] w-[31.146vw] h-[20.520vw] flex flex-col">
                        <div className='w-[27.135vw] h-[6.146vw] flex flex-col' >
                            <span className="text-399983 text-32px  font-bold font-Noto_Sans  leading-35.52px tracking-4.80px">專業首選</span>
                            <span className="text-538aa2 text-32px  font-bold font-Noto_Sans  leading-35.52px tracking-4.80px">的健康管理團隊</span>
                        </div>

                        <span className='w-[30.208vw] h-[4.167vw] text-3F3F46 text-20px  font-normal font-Noto_Sans  leading-24.13px tracking-3px'>立即訂閱
                            <span className='text-538aa2 text-20px  font-Baloo_Thambi font-normal leading-24.13px tracking-3px'>Naturs
                                <span className='text-399983 text-20px  font-Baloo_Thambi font-normal leading-24.13px tracking-3px'>ai
                                    <span className='text-3F3F46 text-20px  font-Noto_Sans  font-normal leading-24.13px tracking-3px '>電子報，以了解我們所有產品和公告的最新資訊。
                                    </span>
                                </span>
                            </span>
                        </span>

                        <div className='w-[31.146vw] h-[1.875vw] flex justify-between'>
                            <input className='w-[21.042vw] h-[1.875vw] border-[0.104vw] border-[#b3b3b3] bg-transparent rounded-[0.417vw] pl-[0.625vw] text-12px ' />
                            <button className='w-[7.187vw] h-[1.875vw] bg-bt_def flex items-center justify-center text-white text-16px hover:bg-bt_hover font-Noto_Sans  leading-19.30px '>訂閱</button>
                        </div>

                        <div className='mt-[0.938vw] w-[22.604vw] h-[1.562vw] flex items-center'>
                            <input
                                type="checkbox"
                                className={`w-[0.938vw] h-[0.938vw] tracking-1.80px leading-14.48px rounded-md ${isChecked ? 'accent-[#538AA2]' : 'accent-[#538AA2]'
                                    }`}
                                checked={isChecked}
                                onChange={handleCheckboxChange}
                            />
                            <span className=' ml-[0.312vw] text-11px  text-3F3F46 font-Noto_Sans  font-normal leading-13.27px tracking-1.65px'>我同意接收來自 NatursAi 的信息分享。</span>
                        </div>
                        <span className='mt-[0.474vw] w-[21.042vw] h-[4.844vw] text-3F3F46 text-11px  font-Noto_Sans  font-normal leading-13.27px tracking-1.65px'>您可以隨時取消訂閱這些通訊。欲了解如何取消訂閱、我們的隱私實踐以及我們如何承諾保護和尊重您的隱私，請參閱我們的
                            <span className='text-538aa2 text-11px  font-Noto_Sans  font-normal leading-13.27px tracking-1.65px'>《
                                <span className='text-538aa2 text-11px  font-Noto_Sans  font-normal leading-13.27px tracking-1.65px'><span className='underline decoration-[0.052vw]'>隱私政策</span>
                                    <span className='text-538aa2 text-11px  font-Noto_Sans  font-normal leading-13.27px tracking-1.65px'>》
                                        <span className='text-3F3F46 text-11px  font-Noto_Sans  font-normal leading-13.27px tracking-1.65px'><br /><br />點擊下方的「訂閱」按鈕，即表示您同意允許 <span className=' font-Noto_Sans '>NatursAi</span> 存儲並處理您提交的個人信息，以便為您提供所需的內容。
                                        </span>
                                    </span>
                                </span>
                            </span>
                        </span>
                    </div>
                </div>


            </div>
            <div className='absolute w-full h-[679.4003vw] md:hidden '>
                <div className="absolute w-full h-[641.5906vw] -top-[18.9048vw]">
                    <img src={media_home_bg} className="w-full object-cover" alt="Login Background" />
                </div>
                <div className='absolute inset-0 flex flex-col items-center'>

                    <div className=' relative mt-[33.8983vw] w-[89.1786vw] h-[36.6362vw] flex flex-col items-center  '>
                        <img src={media_logo} className='  w-[67.5359vw] h-[24.9022vw] ' />
                        <span className=' absolute top-[20.2086vw] w-[89.1786vw] h-[16.4276vw] text-538aa2 text-[6.2581vw] font-Noto_Sans  font-bold leading-[8.6362vw] tracking-[0.9387vw] flex justify-center items-center'>劃時代的AI健康管理</span>
                    </div>
                    <span className='mt-[72.2295vw] w-[81.2256vw] h-[9.9087vw] text-399983 text-[6.2581vw] font-Noto_Sans  font-bold leading-[7.5502vw] tracking-[0.9387vw]'>拒絕枯燥的健康管理工具</span>
                    <span className=' w-[88.0052vw] h-[9.2568vw] text-538aa2 text-[4.1721vw] font-Noto_Sans  font-normal leading-[5.0326vw] tracking-[0.6258vw]'>是否有過被管理工具的繁瑣過程逼退呢？</span>
                    <span className='mt-[13.8201vw] w-[84.3546vw] h-[18.7744vw] flex justify-start items-center text-white text-[4.6936vw] font-Noto_Sans  font-bold leading-[5.6623vw] tracking-[0.7040vw]'>專業人性化的設計</span>
                    <Carousel />
                    <span className='mt-[50.7171vw] w-[72.7510vw] h-[15.9778vw] flex items-center justify-center text-white text-[6.2581vw] font-Noto_Sans  font-bold leading-[7.5502vw] tracking-[0.9387vw]'>關於我們</span>
                    <span className='mt-[7.2295vw] w-[78.8787vw] h-[36.2451vw] text-white text-[4.1721vw] font-Noto_Sans  font-normal leading-[5.0326vw] tracking-[0.6258vw]'>Natursai 致力協助客戶讓健康成為日常首要目標。<br /><br />我們不僅鼓勵用戶探索更健康的生活方式，更以創新思維引領時尚健康的未來潮流。健康是豐富有趣且充滿動力的人生泉源！</span>

                    <button className='w-[35.6675vw] h-[8.4746vw] bg-white rounded-[4.7849vw] text-538aa2 text-[3.1291vw]  font-Noto_Sans  font-bold  leading-28.95px'>一同打造</button>
                    <div className='mt-[24.7718vw] w-[73.7562vw] h-[29.6115vw] flex justify-between items-center'>
                        <div className='flex flex-col justify-between items-center w-[31.8853vw] h-[29.4016vw]'>
                            <img className='w-[19.3390vw] h-[17.9140vw]' src={NatursAi} />
                            <Link to='/about' className='w-[31.6167vw] h-[8.8657vw]'><HoverImage hoverSrc={Contact_us_green} defaultSrc={Contact_us} /></Link>
                        </div>
                        <div className='flex flex-col justify-between items-center w-[31.8853vw] h-[29.4016vw]'>
                            <img className='w-[18.9583vw] h-[16.3142vw]' src={GoEat} />
                            <Link to='/product' className='w-[31.6167vw] h-[8.8657vw]'><HoverImage hoverSrc={deep_understand_green} defaultSrc={deep_understand} /></Link>
                        </div>
                    </div>
                    <span className='mt-[48.0939vw] w-[78.2269vw] h-[19.6871vw] text-399983 text-[6.2581vw] font-Noto_Sans  font-bold leading-[8.6362vw] tracking-[0.9387vw] text-center '>專業首選<br />
                        <span className='text-538aa2 text-[6.2581vw] font-Noto_Sans  font-bold leading-[8.6362vw] tracking-[0.9387vw]'>的健康管理團隊</span>
                    </span>
                    <span className='mt-[6.6493vw] w-[69.4915vw] h-[10.5606vw] text-3F3F46 text-[3.1291vw] font-Noto_Sans  font-normal leading-[5.5385vw] tracking-[0.4694vw] text-center '>立即訂閱
                        <span className='text-538aa2 text-[3.1291vw] font-Baloo_Thambi font-normal leading-[5.5385vw] tracking-[0.4694vw] '>Naturs</span>
                        <span className='text-399983 text-[3.1291vw] font-Baloo_Thambi font-normal leading-[5.5385vw] tracking-[0.4694vw] '>ai</span>電子報以了解我們所有產品和公告的最新資訊。
                    </span>
                    <div className=' relative mt-[6.6362vw] w-[87.5098vw] h-[10.6375vw] bg-white flex items-center border border-[#b3b3b3]  focus-within:border-black '>
                        <input className='w-full h-full p-[2.6545vw] outline-none text-[2.6076vw] font-Noto_Sans  leading-[3.1460vw] tracking-[0.3911vw]' placeholder='電子信箱(Email)*' />
                        <button className=' absolute   right-[2.7914vw] w-[23.7288vw] h-[7.3012vw] bg-gradient-to-r from-[#399983] to-[#538aa2] flex justify-center items-center text-white text-[2.6076vw] font-Noto_Sans  font-medium leading-24.13px'>訂閱</button>
                    </div>
                    <div className='mt-[8.1252vw] w-[76.6754vw] h-[6.3038vw] flex items-center'>
                        <input
                            type="checkbox"
                            className={`w-[6.3038vw] h-[6.3038vw]  ${isChecked ? 'accent-[#538AA2]' : 'accent-[#538AA2]'
                                }`}
                            checked={isChecked}
                            onChange={handleCheckboxChange}
                        />
                        <span className=' ml-[2.1669vw] text-[3.1291vw]  text-3F3F46 font-Noto_Sans  font-normal leading-28.95px tracking-[0.4694vw]'>我同意接收來自 NatursAi 的信息分享。</span>
                    </div>
                    <span className='mt-[5.5567vw] w-[65.3194vw] h-[12.2555vw] text-3F3F46 text-[1.9557vw]  font-Noto_Sans  font-normal leading-[2.3598vw] tracking-[0.2934vw]'>您可以隨時取消訂閱這些通訊。欲了解如何取消訂閱、我們的隱私實踐以及我們如何承諾保護和尊重您的隱私，請參閱我們的
                        <span className='text-538aa2 text-[1.9557vw]  font-Noto_Sans  font-normal leading-[2.3598vw] tracking-[0.2934vw]'>《
                            <span className='text-538aa2 text-[1.9557vw]  font-Noto_Sans  font-normal leading-[2.3598vw] tracking-[0.2934vw]'><span className='underline decoration-[0.052vw]'>隱私政策</span>
                                <span className='text-538aa2 text-[1.9557vw]  font-Noto_Sans  font-normal leading-[2.3598vw] tracking-[0.2934vw]'>》
                                    <span className='text-3F3F46 text-[1.9557vw]  font-Noto_Sans  font-normal leading-[2.3598vw] tracking-[0.2934vw]'><br /><br />點擊下方的「訂閱」按鈕，即表示您同意允許 <span className=' font-Noto_Sans '>NatursAi</span> 存儲並處理您提交的個人信息，以便為您提供所需的內容。
                                    </span>
                                </span>
                            </span>
                        </span>
                    </span>


                </div>

            </div>

        </div>
    );
}

export default Home; 