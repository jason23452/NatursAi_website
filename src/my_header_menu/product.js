import Product_bg from '../assets/product_img/Product_bg.svg';
import Product_test from '../assets/product_img/Product_test.svg';
import Goeat_logo from '../assets/product_img/Goeat_logo.svg';
import Product_preview from '../assets/product_img/Product_preview.svg';
import baby1 from '../assets/product_img/baby1.svg';
import baby2 from '../assets/product_img/baby2.svg';
import baby3 from '../assets/product_img/baby3.svg';

import arrow_left from '../assets/product_img/arrow_left.svg';
import arrow_right from '../assets/product_img/arrow_right.svg';

import goeat_product_img from '../assets/product_img/goeat_product_img.svg';

import Function_1 from '../assets/product_img/Function_1.svg';
import Function_2 from '../assets/product_img/Function_2.svg';
import Function_3 from '../assets/product_img/Function_3.svg';

import Function_1_black from '../assets/product_img/Function_1_black.svg';
import Function_2_black from '../assets/product_img/Function_2_black.svg';
import Function_3_black from '../assets/product_img/Function_3_black.svg';

import Contact_us from '../assets/product_img/Contact_us.svg';
import Contact_us_black from '../assets/product_img/Contact_us_black.svg';

import download_google from '../assets/product_img/download_google.svg';
import download_apple from '../assets/product_img/download_apple.svg';

import { FaPlay, FaPause, FaVolumeUp } from 'react-icons/fa'; // 導入所需的圖標

import video1 from '../assets/product_img/宋冬野   10 連衣裙.mp4';
import video2 from '../assets/product_img/『MV』毛不易Mao Buyi - 借 官方高畫質 Official HD MV.mp4';
import video3 from '../assets/product_img/不染.mp4';
import video4 from '../assets/product_img/郭源潮.mp4';


import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

const CustomProgressBar = ({ progress, onProgressChange }) => {
    const handleClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newProgress = (clickX / rect.width) * 100;
        onProgressChange(Math.min(Math.max(newProgress, 0), 100));
    };

    return (
        <div
            className="w-full h-[0.878vh] bg-gray-300 rounded cursor-pointer relative"
            onClick={handleClick}
        >
            <div
                className="h-full bg-blue-500 rounded transition-all duration-300"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
    );
};


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



function Product() {
    const [isHovered, setIsHovered] = useState(false);
    const images = [baby1, baby2, baby3]; // 圖片列表
    const [currentIndex, setCurrentIndex] = useState(0);

    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [volume, setVolume] = useState(1);
    const [showVolumeControl, setShowVolumeControl] = useState(false);
    const [currentTime, setCurrentTime] = useState("00:00:00");
    const [duration, setDuration] = useState("00:00:00");

    const videos = [video1, video2, video3, video4]; // 影片檔案列表
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0); // 當前影片的索引



    const handleNext = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        setIsPlaying(true); // 切換影片後暫停播放
    };

    const handlePrevious = () => {
        setCurrentVideoIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
        setIsPlaying(true); // 切換影片後暫停播放
    };



    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 1500);

        return () => clearInterval(intervalId);
    }, []);



    const handlePlayPause = () => {
        if (videoRef.current.paused) {
            videoRef.current.play();
            setIsPlaying(true);
        } else {
            videoRef.current.pause();
            setIsPlaying(false);
        }
    };

    const handleLoadedMetadata = () => {
        const total = videoRef.current.duration;
        setDuration(formatTime(total)); // 在元數據載入後設置影片總時長
        setProgress(0); // 切換影片後進度條歸零
        if (isPlaying) videoRef.current.play(); // 若影片在切換時已在播放狀態，則保持播放
    };

    const handleTimeUpdate = () => {
        const current = videoRef.current.currentTime;
        const total = videoRef.current.duration;
        setProgress((current / total) * 100);
        setCurrentTime(formatTime(current));
    };

    const formatTime = (seconds) => {
        const date = new Date(seconds * 1000);
        return date.toISOString().substr(11, 8);
    };





    const handleProgressChange = (newProgress) => {
        const newTime = (videoRef.current.duration / 100) * newProgress;
        videoRef.current.currentTime = newTime;
        setProgress(newProgress);
    };

    const handleVolumeChange = (event) => {
        const newVolume = event.target.value;
        videoRef.current.volume = newVolume;
        setVolume(newVolume);
    };

    const toggleVolumeControl = () => {
        setShowVolumeControl((prev) => !prev);
    };

    return (
        <div className="relative w-full h-full">
            {/* Background Image */}
            <div className="absolute w-[100%] max-w-[99.115vw] -top-[8.343vh]">
                <img src={Product_bg} className="w-full object-cover" alt="Login Background" />
                {/* <img src={Product_test} className=" absolute  top-0 " alt="Login Background" /> */}

            </div>

            {/* Content */}
            <div className="absolute inset-0">
                <div className="ml-[10.573vw] mt-[15.477vh] w-[68.854vw] h-[52.779vh] flex">
                    <div className="w-[33.125vw] h-[39.297vh] flex flex-col">
                        <img src={Goeat_logo} className="w-[5.833vw] h-[7.245vh]" />
                        <span className="w-[33.125vw] h-[6.324vh] text-[#538AA2] text-[1.667vw] font-Baloo_Thambi font-normal leading-[6.323vh] tracking-[0.250vw]">夠益營養APP</span>
                        <span className="mt-[1.098vh] w-[33.125vw] h-[17.563vh] text-[#3F3F46] text-[1.042vw] font-Noto_Sans_ch font-normal leading-[2.649vh] tracking-[0.156vw] flex items-center">
                            夠益營養APP創新的個性化健康飲食規劃及飲食管控, 幫助您輕鬆管理和改進飲食習慣。透過先進的人工智慧技術和實時數據分析,本平台提供量身定制的飲食建議,並透過生活化的遊戲體驗活化個人整合健康管理。
                        </span>
                        <button className="mt-[0.768vh] w-[11.667vw] h-[6.147vh] bg-gradient-to-r from-[#83bbae] to-[#538aa2] rounded-[1.458vw] flex justify-center items-center text-white text-[1.250vw] font-medium font-Noto_Sans_ch leading-[3.178vh]">立即下載</button>
                    </div>
                    <img className="ml-[6.302vw] mt-[3.293vh] w-[10.970vw] h-[49.486vh]" src={Product_preview} />
                    <img className="ml-[4.9vw] mt-[27.223vh] w-[10.260vw] h-[21.625vh]" src={images[currentIndex]} />
                </div>

                <div className="ml-[10.833vw] mt-[61.600vh] w-[80.781vw] h-[79.490vh]">
                    <span className="ml-[3.281vw] w-[70.990vw] h-[12.404vh] flex justify-end items-center  text-[#538AA2] text-[3.333vw] font-Noto_Sans_ch font-bold leading-[12.645vh] tracking-[1.000vw]">全球首創
                        <span className="text-[#83BBAE] text-[3.333vw] font-Noto_Sans_ch font-bold leading-[12.645vh] tracking-[1.000vw]">高整合
                            <span className="text-[#538AA2] text-[3.333vw] font-Noto_Sans_ch font-bold leading-[12.645vh] tracking-[1.000vw]">AI營養管理系統</span>
                        </span>
                    </span>

                    <div className="mt-[3.183vh] w-[80.781vw] h-[63.902vh] flex ">
                        <div className="w-[49.918vw] h-[63.902vh] bg-black flex flex-col items-center justify-end relative z-10 rounded-[1.823vw] ">
                            {/* Video Element */}
                            <video
                                ref={videoRef}
                                src={videos[currentVideoIndex]} // 動態顯示當前影片
                                className="w-full h-full object-fill rounded-[1.823vw]"
                                onTimeUpdate={handleTimeUpdate} // 更新當前播放時間
                                onLoadedMetadata={handleLoadedMetadata} // 在影片元數據載入後設定 duration 和進度歸零
                            ></video>



                            {/* Video Controls */}
                            <div className="w-full absolute bottom-0 flex items-center bg-black p-[1.220vh] opacity-80 space-x-[1.208vw] rounded-[1.823vw]">
                                {/* Play/Pause Button */}
                                <button onClick={handlePlayPause} className="text-white ml-[0.104vw]">
                                    {isPlaying ? <FaPause className="w-[0.781vw] h-[1.647vh]" /> : <FaPlay className="w-[0.781vw] h-[1.647vh]" />}
                                </button>

                                {/* Volume Control */}
                                <button onClick={toggleVolumeControl} className="text-white">
                                    <FaVolumeUp className="w-[1.042vw] h-[2.195vh]" />
                                </button>
                                {showVolumeControl && (
                                    <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gray-700 p-2 rounded">
                                        <input
                                            type="range"
                                            min="0"
                                            max="1"
                                            step="0.1"
                                            value={volume}
                                            onChange={handleVolumeChange}
                                            className="w-[5.208vw]"
                                        />
                                    </div>
                                )}

                                {/* Time Display */}
                                <div className="text-white text-[0.729vw] flex">
                                    {currentTime} / {duration}
                                </div>

                                {/* Custom Progress Bar */}
                                <div className="flex-1">
                                    <CustomProgressBar progress={progress} onProgressChange={handleProgressChange} />
                                </div>
                            </div>
                        </div>
                        <div className=' relative ml-[1.697vw]  flex flex-col justify-between w-[28.594vw] h-[57.300vh]'>
                            <img className=' w-[28.594vw] h-[34.138vh]' src={goeat_product_img} />
                            <div className=' absolute w-[31.875vw] h-[20.088vh] bottom-0 right-0 bg-gradient-to-r from-[#399983]/50 to-[#538aa2]/50 z-0 rounded-[1.406vw] flex justify-center'>
                                <div className='mt-[1.532vh] w-[23.688vw] h-[18.286vh] flex items-center  justify-between  '>
                                    <button
                                        onClick={handlePrevious}
                                        className="flex justify-center items-center w-[3.844vw] h-[8.102vh] bg-white rounded-full"
                                    >
                                        <img src={arrow_left} alt="Previous" />
                                    </button>

                                    {/* Video Information */}
                                    <div className="flex flex-col w-[13.193vw] h-[18.286vh] items-center">
                                        <span className="text-white text-[3.333vw] font-bold font-Noto_Sans_en tracking-[1.054vh]">
                                            {String(currentVideoIndex + 1).padStart(2, '0')}
                                        </span>
                                        <span className="text-white text-[2.083vw] font-Noto_Sans_ch font-bold tracking-[0.312vw]">
                                            APP操作
                                        </span>
                                    </div>

                                    {/* Next Button */}
                                    <button
                                        onClick={handleNext}
                                        className="flex justify-center items-center w-[3.844vw] h-[8.102vh] bg-white rounded-full"
                                    >
                                        <img src={arrow_right} alt="Next" />
                                    </button>

                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                <div className='ml-[13.073vw] mt-[33.317vh] w-[75.885vw] h-[97.256vh]  '>
                    <span className='ml-[8.542vw] w-[56.823vw] h-[12.404vh] text-[#538AA2] text-[3.333vw] font-Noto_Sans_ch font-bold  leading-[8.475vh] tracking-[0.667vw]  flex justify-center items-center '>系統核心
                        <span className='text-[#3F3F46] text-[3.333vw] font-Noto_Sans_ch font-bold  leading-[8.475vh] tracking-[0.667vw] '>三功能</span>
                    </span>
                    <div className='mt-[3.842vh] w-[75.885vw] h-[81.010vh] flex justify-between'>
                        <button className='w-[38.438vw] h-[70.512vh]'><HoverImage defaultSrc={Function_1} hoverSrc={Function_1_black} /></button>
                        <div className='w-[39.375vw] h-[81.010vh] flex flex-col justify-between '>
                            <div className='w-[39.375vw] h-[38.090vh] flex justify-between'>
                                <button className='w-[18.281vw] h-[38.090vh]'><HoverImage defaultSrc={Function_2} hoverSrc={Function_2_black} /></button>
                                <button className='w-[18.073vw] h-[38.090vh]'><HoverImage defaultSrc={Function_3} hoverSrc={Function_3_black} /></button>
                            </div>
                            <Link to='/about' className='w-[39.375vw] h-[38.090vh]'><HoverImage defaultSrc={Contact_us} hoverSrc={Contact_us_black} /></Link>


                        </div>
                    </div>
                </div>
                <div className='ml-[20.260vw] mt-[14.819vh] w-[65.625vw] h-[98.683vh] flex justify-between'>
                    <img className='w-[21.875vw] h-[98.683vh]' src={Product_preview} />
                    <div className='ml-[7.812vw] mt-[9.221vh] w-[35.938vw] h-[83.974vh] flex flex-col items-center'>
                        <span className='mt-[5vh]  w-[35.938vw] h-[6.356vh] text-[#5A4B4B] text-[2.500vw] font-Noto_Sans_ch font-black  leading-[6.357vh] flex items-center justify-center '>體驗產品</span>
                        <span className='mt-[8vh] text-center w-[35.938vw] h-[31.614vh]  text-[#5A4B4B] text-[1.667vw] font-Noto_Sans_ch  font-medium leading-[5.269vh] tracking-[0.267vw]'>夠益營養APP創新的個性化健康飲食規劃及飲食管控, 幫助您輕鬆管理和改進飲食習慣。透過先進的人工智慧技術和實時數據分析,本平台提供量身定制的飲食建議,並透過生活化的遊戲體驗活化個人整合健康管理。</span>
                        <button className='mt-[7vh] w-[29.688vw] h-[8.013vh] bg-gradient-to-r from-[#399983] to-[#538aa2] rounded-[0.729vw] flex items-center justify-center text-white text-[1.458vw] font-medium leading-[3.708vh]'>立即加入健康計畫</button>
                        <div className='mt-[8.342vh] w-[29.688vw] h-[9.001vh] flex justify-between '>
                            <button className='w-[13.490vw] h-[9.001vh]'><img src={download_google} /></button>
                            <button className='w-[13.490vw] h-[9.001vh]'><img src={download_apple} /></button>
                        </div>
                    </div>

                </div>




            </div>
        </div>
    );
}

export default Product;