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

import FaPlay from '../assets/product_img/FaPlay.svg';
import FaPause from '../assets/product_img/FaPause.svg';
import FaVolumeUp from '../assets/product_img/FaVolumeUp.svg';




import video1 from '../assets/product_img/宋冬野   10 連衣裙.mp4';
import video2 from '../assets/product_img/『MV』毛不易Mao Buyi - 借 官方高畫質 Official HD MV.mp4';
import video3 from '../assets/product_img/不染.mp4';
import video4 from '../assets/product_img/郭源潮.mp4';
import HoverImage from '../action_object/HoverImage';
import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import LazyImage from '../action_object/lazyimg';


const CustomProgressBar = ({ progress, onProgressChange }) => {
    const handleClick = (e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const clickX = e.clientX - rect.left;
        const newProgress = (clickX / rect.width) * 100;
        onProgressChange(Math.min(Math.max(newProgress, 0), 100));
    };

    return (
        <div
            className="w-full h-[0.417vw] bg-gray-300 rounded cursor-pointer relative"
            onClick={handleClick}
        >
            <div
                className="h-full bg-blue-500 rounded transition-all duration-300"
                style={{ width: `${progress}%` }}
            ></div>
        </div>
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

    const videos = [video1, video2, video3, video4];
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
        <div className="h-[221.0417vw] relative w-full">
            {/* Background Image */}
            <div className="absolute w-full h-[221.0417vw] -top-[3.9583vw]">
                <img src={Product_bg} className="w-full object-cover" alt="Login Background" />
                {/* <img src={Product_test} className=" absolute  top-0 " alt="Login Background" /> */}

            </div>

            {/* Content */}
            <div className="absolute inset-0">
                <div className="ml-[10.573vw] mt-[7.344vw] w-[68.854vw] h-[25.042vw] flex">
                    <div className="w-[33.125vw] h-[18.646vw] flex flex-col">
                        <LazyImage src={Goeat_logo} className="w-[5.833vw] h-[3.438vw]" />
                        <span className="w-[33.125vw] h-[3.000vw] text-[#538AA2] text-[1.667vw] font-Baloo_Thambi font-normal leading-[3.000vw] tracking-[0.250vw]">夠益營養APP</span>
                        <span className="mt-[0.521vw] w-[33.125vw] h-[8.333vw] text-[#3F3F46] text-[1.042vw] font-Noto_Sans_ch font-normal leading-[1.257vw] tracking-[0.156vw] flex items-center">
                            夠益營養APP創新的個性化健康飲食規劃及飲食管控, 幫助您輕鬆管理和改進飲食習慣。透過先進的人工智慧技術和實時數據分析,本平台提供量身定制的飲食建議,並透過生活化的遊戲體驗活化個人整合健康管理。
                        </span>
                        <button className="mt-[0.365vw] w-[11.667vw] h-[2.917vw] bg-gradient-to-r from-[#83bbae] to-[#538aa2] rounded-[1.458vw] flex justify-center items-center text-white text-[1.250vw] font-medium font-Noto_Sans_ch leading-[1.508vw]">立即下載</button>
                    </div>
                    <LazyImage className="ml-[6.302vw] mt-[1.562vw] w-[10.970vw] h-[23.480vw]" src={Product_preview} />
                    <LazyImage className="ml-[4.9vw] mt-[12.917vw] w-[10.260vw] h-[10.260vw]" src={images[currentIndex]} />
                </div>

                <div className="ml-[10.833vw] mt-[29.228vw] w-[80.781vw] h-[37.716vw]">
                    <span className="ml-[3.281vw] w-[70.990vw] h-[5.885vw] flex justify-end items-center  text-[#538AA2] text-[3.333vw] font-Noto_Sans_ch font-bold leading-[6.000vw] tracking-[1.000vw]">全球首創
                        <span className="text-[#83BBAE] text-[3.333vw] font-Noto_Sans_ch font-bold leading-[6.000vw] tracking-[1.000vw]">高整合
                            <span className="text-[#538AA2] text-[3.333vw] font-Noto_Sans_ch font-bold leading-[6.000vw] tracking-[1.000vw]">AI營養管理系統</span>
                        </span>
                    </span>

                    <div className="mt-[1.510vw] w-[80.781vw] h-[30.320vw] flex ">
                        <div className="w-[49.918vw] h-[30.320vw] bg-black flex flex-col items-center justify-end relative z-10 rounded-[1.823vw] ">
                            {/* Video Element */}
                            <video
                                ref={videoRef}
                                src={videos[currentVideoIndex]} // 動態顯示當前影片
                                className="w-full h-full object-fill rounded-[1.823vw]"
                                onTimeUpdate={handleTimeUpdate} // 更新當前播放時間
                                onLoadedMetadata={handleLoadedMetadata} // 在影片元數據載入後設定 duration 和進度歸零
                            ></video>



                            {/* Video Controls */}
                            <div className="w-full absolute bottom-0 flex items-center bg-black p-[0.579vw] opacity-80 space-x-[1.208vw] rounded-[1.823vw]">
                                {/* Play/Pause Button */}
                                <button onClick={handlePlayPause} className="text-white ml-[0.104vw] my-auto">
                                    <img
                                        src={isPlaying ? FaPause : FaPlay}
                                        alt={isPlaying ? "Pause" : "Play"}
                                        className="w-[0.7292vw] h-[0.8333vw] " // 可以根據需求調整圖片大小
                                    />                                </button>

                                {/* Volume Control */}
                                <button onClick={toggleVolumeControl} className="text-white my-auto">
                                    <img className='w-[0.9896vw] h-[0.9896vw]' src={FaVolumeUp} />
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
                        <div className=' relative ml-[1.697vw]  flex flex-col justify-between w-[28.594vw] h-[27.187vw]'>
                            <LazyImage className=' w-[28.594vw] h-[16.198vw]' src={goeat_product_img} />
                            <div className=' absolute w-[31.875vw] h-[9.531vw] bottom-0 right-0 bg-gradient-to-r from-[#399983]/50 to-[#538aa2]/50 z-0 rounded-[1.406vw] flex justify-center'>
                                <div className='mt-[0.727vw] w-[23.688vw] h-[8.676vw] flex items-center  justify-between  '>
                                    <button
                                        onClick={handlePrevious}
                                        className="flex justify-center items-center w-[3.844vw] h-[3.844vw] bg-white rounded-full"
                                    >
                                        <LazyImage className='w-[1.302vw] h-[2.292vw]' src={arrow_left} alt="Previous" />
                                    </button>

                                    {/* Video Information */}
                                    <div className="flex flex-col w-[13.193vw] h-[8.676vw] items-center">
                                        <span className="text-white text-[3.333vw] font-bold font-Noto_Sans_en tracking-[0.500vw]">
                                            {String(currentVideoIndex + 1).padStart(2, '0')}
                                        </span>
                                        <span className="text-white text-[2.083vw] font-Noto_Sans_ch font-bold tracking-[0.312vw]">
                                            APP操作
                                        </span>
                                    </div>

                                    {/* Next Button */}
                                    <button
                                        onClick={handleNext}
                                        className="flex justify-center items-center w-[3.844vw] h-[3.844vw] bg-white rounded-full"
                                    >
                                        <LazyImage className='w-[1.302vw] h-[2.292vw]' src={arrow_right} alt="Next" />
                                    </button>

                                </div>
                            </div>

                        </div>


                    </div>
                </div>
                <div className='ml-[13.073vw] mt-[15.808vw] w-[75.885vw] h-[46.146vw]  '>
                    <span className='ml-[8.542vw] w-[56.823vw] h-[5.885vw] text-[#538AA2] text-[3.333vw] font-Noto_Sans_ch font-bold  leading-[4.021vw] tracking-[0.667vw]  flex justify-center items-center '>系統核心
                        <span className='text-[#3F3F46] text-[3.333vw] font-Noto_Sans_ch font-bold  leading-[4.021vw] tracking-[0.667vw] '>三功能</span>
                    </span>

                    <div className='mt-[1.823vw] w-[75.885vw] h-[38.438vw] flex justify-between'>
                        <HoverImage className='w-[38.438vw] h-[38.438vw]' defaultSrc={Function_1} hoverSrc={Function_1_black} />
                        <div className='w-[39.375vw] h-[38.438vw] flex flex-col justify-between '>
                            <div className='w-[39.375vw] h-[18.072vw] flex justify-between'>
                                <HoverImage className='w-[18.281vw] h-[18.072vw]' defaultSrc={Function_2} hoverSrc={Function_2_black} />
                                <HoverImage className='w-[18.073vw] h-[18.072vw]' defaultSrc={Function_3} hoverSrc={Function_3_black} />
                            </div>
                            <Link to='/about' ><HoverImage className='w-full h-[18.072vw]' defaultSrc={Contact_us} hoverSrc={Contact_us_black} /></Link>
                        </div>
                    </div>

                </div>
                <div className='ml-[20.260vw] mt-[7.031vw] w-[65.625vw] h-[46.823vw] flex justify-between'>
                    <LazyImage className='w-[21.875vw] h-[46.823vw]' src={Product_preview} />
                    <div className='ml-[7.812vw] mt-[4.375vw] w-[35.938vw] h-[39.844vw] flex flex-col items-center '>
                        <span className='mt-[2.372vw]  w-[35.938vw] h-[3.015vw] text-[#5A4B4B] text-[2.500vw] font-Noto_Sans_ch font-black  leading-[3.016vw] flex items-center justify-center '>體驗產品</span>
                        <span className='mt-[3.796vw] text-center w-[35.938vw] h-[15.000vw]  text-[#5A4B4B] text-[1.667vw] font-Noto_Sans_ch  font-medium leading-[2.500vw] tracking-[0.267vw]'>夠益營養APP創新的個性化健康飲食規劃及飲食管控, 幫助您輕鬆管理和改進飲食習慣。透過先進的人工智慧技術和實時數據分析,本平台提供量身定制的飲食建議,並透過生活化的遊戲體驗活化個人整合健康管理。</span>
                        <button className='mt-[3.321vw] w-[29.688vw] h-[3.801vw] bg-gradient-to-r from-[#399983] to-[#538aa2] rounded-[0.729vw] flex items-center justify-center text-white text-[1.458vw] font-medium leading-[1.759vw]'>立即加入健康計畫</button>
                        <div className='mt-[3.958vw] w-[29.688vw] h-[4.219vw] flex justify-between '>
                            <LazyImage className='w-[13.490vw] h-[4.219vw]' src={download_google} />
                            <LazyImage className='w-[13.490vw] h-[4.219vw]' src={download_apple} />
                        </div>
                    </div>
                </div>
                <div className='mt-[4.479vw]'></div>

            </div>


        </div>
    );
}

export default Product;