import React, { useState } from 'react';
import login_bg from '../assets/login_img/login_bg.svg';
import logo from '../assets/login_img/logo.svg';
import google from '../assets/login_img/google.svg';
import Instagram from '../assets/login_img/Instagram.svg';
import facebook from '../assets/login_img/facebook.svg';
import Line from '../assets/login_img/Line.svg';
import mail from '../assets/login_img/mail.svg';
import eye from '../assets/login_img/Eye.svg';
import eye_off from '../assets/login_img/eye-off.svg';
import test from '../assets/login_img/Contact Us (Button).png';
import test2 from '../assets/login_img/Contact Us (Button2).png';

import LazyImage from '../action_object/lazyimg';

import '../css/loginCSS/action.css';

function Login() {
    const [showRegister, setShowRegister] = useState(false);
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [fadeClass, setFadeClass] = useState('fade-in');

    const switchToRegister = () => {
        setFadeClass('fade-out');
        setTimeout(() => {
            setShowRegister(true);
            setFadeClass('fade-in');
        }, 750);
    };

    const switchToLogin = () => {
        setFadeClass('fade-out');
        setTimeout(() => {
            setShowRegister(false);
            setFadeClass('fade-in');
        }, 750);
    };

    return (
        <div className=" relative h-[56.2500vw] w-full">
            {/* 背景图片 */}
            <div className='absolute w-full h-[60.2083vw] -top-[3.9583vw]'>
                <img src={login_bg} className="w-full h-full  object-cover" alt="Login Background" />
                {/* <img src={test} className=" absolute opacity-85 top-[162px]  left-[255px]" alt="Login Background" /> */}
                {/* <img src={test2} className=" absolute opacity-85 top-[162px]  left-[255px]" alt="Login Background" /> */}
            </div>

            {/* 内容容器 */}
            <div className={`absolute inset-0  ${fadeClass}`}>
                {!showRegister ? (
                    <LoginForm
                        switchToRegister={switchToRegister}
                        isPasswordVisible={isPasswordVisible}
                        setPasswordVisible={setPasswordVisible}
                    />
                ) : (
                    <RegisterForm switchToLogin={switchToLogin} />
                )}
            </div>
        </div>
    );
}

function LoginForm({ switchToRegister, isPasswordVisible, setPasswordVisible }) {
    return (
        <div className="w-[72.760vw] h-[42.197vw] ml-[13.646vw] mt-[4.531vw] bg-[#fcfcfc]/60 rounded-lg flex flex-col">
            <div className='ml-[25.365vw] mt-[2.708vw] w-[20.885vw] h-[4.478vw] flex items-center justify-between'>
                <LazyImage className='w-[11.354vw] h-[4.115vw]' src={logo} alt="Logo" />
                <span className='w-[9.635vw] h-[4.478vw] font-bold font-Noto_Sans_ch text-[#3F3F46] text-[1.667vw] leading-[2.5vw] tracking-[0.333vw] flex items-center justify-center'>立即登入</span>
            </div>

            <div className='ml-[7.500vw] mt-[2.1356vw] w-[57.760vw] h-[28.1763vw] flex space-x-[5.833vw] items-center'>
                <div className='w-[23.646vw] h-[21.0799vw] flex flex-col justify-between'>
                    {[
                        { icon: google, label: '使用Google帳戶繼續' },
                        { icon: Instagram, label: '使用Instagram帳戶繼續' },
                        { icon: facebook, label: '使用Facebook帳戶繼續' },
                        { icon: Line, label: '使用Line帳戶繼續' },
                    ].map((button, index) => (
                        <button key={index} className='w-full h-[3.0176vw] rounded-[23.5px] border-[0.104vw] border-[#e2e2e2] flex items-center'>
                            <LazyImage className='w-[1.993vw] h-[1.9922vw] ml-[2.2vw]' src={button.icon} alt={`${button.label} Icon`} />
                            <span className='w-[13.073vw] h-[1.3533vw] ml-[0.9vw] text-center text-[#3f3f3f] text-[1.042vw] font-bold font-Noto_Sans_ch leading-[1.562vw]'>{button.label}</span>
                        </button>
                    ))}
                </div>

                <div className='border-[0.052vw] h-full border-[#E2E2E2]'></div>
                <div className='w-[22.448vw] h-[19.1137vw] flex flex-col space-y-[1.0415vw]'>
                    <div className='w-full h-[4.5728vw] flex flex-col justify-between'>
                        <label className='h-[1.8009vw] ml-[0.189vw] text-[0.833vw] font-normal leading-[1.250vw]  font-Noto_Sans_ch flex items-center '>帳號/電子郵件</label>
                        <div class=" relative text-gray-500 focus-within:text-gray-900 ">
                            <input type="text" id="default-search"
                                className="block w-full h-[2.7719vw]  pl-[0.833vw] py-[0.4166vw]   text-[0.938vw] font-normal shadow-xs text-gray-900 bg-transparent border-[0.052vw] border-[#E2E2E2] rounded-[0.417vw] placeholder-gray-400 focus:outline-none focus:border-black leading-[1.172vw]"
                                placeholder="name@pagedone.com" />
                            <LazyImage className=' absolute top-[0.8313vw] right-[0.883vw] w-[1.009vw] h-[1.1084vw] ' src={mail} />
                        </div>
                    </div>
                    <div className='w-full h-[6.0929vw] flex flex-col justify-between'>
                        <label className='h-[1.8009vw] ml-[0.189vw] text-[0.833vw] font-normal leading-[1.250vw]  font-Noto_Sans_ch flex items-center '>密碼</label>
                        <div className="relative text-gray-500 focus-within:text-gray-900 ">
                            <input
                                type={isPasswordVisible ? 'text' : 'password'}
                                id="password"
                                className="block w-full h-[2.7719vw] pl-[0.833vw] py-[0.4166vw] text-[0.938vw] font-normal shadow-xs text-gray-900 bg-transparent border-[0.052vw] border-[#E2E2E2] rounded-[0.417vw] placeholder-gray-400 focus:outline-none focus:border-black leading-[1.172vw]"
                                placeholder="•••••••••••••••••"
                            />
                            <LazyImage
                                onClick={() => setPasswordVisible(!isPasswordVisible)}
                                src={isPasswordVisible ? eye : eye_off}
                                className="absolute top-[0.8313vw] right-[0.883vw] w-[1.009vw] h-[1.1084vw] cursor-pointer"
                                alt="Toggle Visibility"
                            />
                        </div>
                        <span className='ml-auto w-[4.844vw] h-[1.5096vw] text-center text-[#747474] font-Noto_Sans_ch font-normal leading-[1.172vw] text-[0.781vw] '>沒有帳號嗎？</span>
                    </div>
                    <div className='w-full h-[6.2093vw]'>
                        <div className='bg-transparent w-full h-[1.8229vw]'></div>
                        <button className='w-[22.442vw] h-[2.5635vw] bg-gradient-to-r from-[#399983] to-[#538aa2] rounded-[0.365vw] flex justify-center items-center'>
                            <span className='w-[14.245vw] h-[1.7554vw] text-center text-white text-[1.250vw] font-normal font-Noto_Sans_ch leading-[1.508vw]'>登入</span>
                        </button>
                        <div className='flex w-[7.157vw] h-[1.8229vw] ml-[8.236vw] mt-[0.1547vw] items-center'>
                            <span className='w-[5.024vw] h-full text-center text-[#747474] text-[0.781vw] font-normal font-inter leading-snug'>沒有帳號嗎？</span>
                            <span
                                onClick={switchToRegister}
                                className="w-[2.133vw] h-full text-center text-[#008566] text-[0.781vw] font-normal font-inter leading-snug cursor-pointer">
                                註冊
                            </span>
                        </div>
                    </div>

                </div>



            </div>
        </div>
    );
}

function RegisterForm({ switchToLogin }) {
    const [isPasswordVisible, setPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setConfirmPasswordVisible] = useState(false);

    return (
        <div className="w-[72.760vw] h-[42.1965vw] ml-[13.646vw] mt-[4.5310vw] bg-[#fcfcfc]/60 rounded-lg flex flex-col ">
            <div className='ml-[25.365vw] mt-[2.7080vw] w-[20.885vw] h-[4.4776vw] flex items-center justify-between'>
                <LazyImage className='w-[11.354vw] h-[4.1146vw]' src={logo} alt="Logo" />
                <span className='w-[9.635vw] h-[4.4776vw] font-bold font-Noto_Sans_ch text-[#3F3F46] text-[1.667vw] leading-[2.5vw] tracking-[0.333vw] flex items-center justify-center'>立即註冊</span>
            </div>

            <div className='ml-[7.500vw] mt-[2.1356vw] w-[57.760vw] h-[28.1763vw] flex space-x-[5.833vw] items-center'>

                <div className='w-[22.448vw] h-[24.3481vw] flex flex-col space-y-[1.0415vw]'>

                    <div className='w-full h-[4.5728vw] flex flex-col justify-between'>
                        <label className='h-[1.8009vw] ml-[0.189vw] text-[0.833vw] font-normal leading-[1.250vw]  font-Noto_Sans_ch flex items-center '>帳號/電子郵件</label>
                        <div class=" relative text-gray-500 focus-within:text-gray-900 ">
                            <input type="text" id="default-search"
                                className="block w-full h-[2.7719vw]  pl-[0.833vw] py-[0.4166vw]   text-[0.938vw] font-normal shadow-xs text-gray-900 bg-transparent border-[0.052vw] border-[#E2E2E2] rounded-[0.417vw] placeholder-gray-400 focus:outline-none focus:border-black leading-[1.172vw]"
                                placeholder="name@pagedone.com" />
                            <LazyImage className=' absolute top-[0.8313vw] right-[0.883vw] w-[1.009vw] h-[1.1084vw] ' src={mail} />
                        </div>
                    </div>

                    <div className='w-full h-[4.5728vw] flex flex-col justify-between'>
                        <label className='h-[1.8009vw] ml-[0.189vw] text-[0.833vw] font-normal leading-[1.250vw]  font-Noto_Sans_ch flex items-center '>密碼</label>
                        <div className="relative text-gray-500 focus-within:text-gray-900 ">
                            <input
                                type={isPasswordVisible ? 'text' : 'password'}
                                id="password"
                                className="block w-full h-[2.7719vw] pl-[0.833vw] py-[0.4166vw] text-[0.938vw] font-normal shadow-xs text-gray-900 bg-transparent border-[0.052vw] border-[#E2E2E2] rounded-[0.417vw] placeholder-gray-400 focus:outline-none focus:border-black leading-[1.172vw]"
                                placeholder="•••••••••••••••••"
                            />
                            <LazyImage
                                onClick={() => setPasswordVisible(!isPasswordVisible)}
                                src={isPasswordVisible ? eye : eye_off}
                                className="absolute top-[0.8313vw] right-[0.883vw] w-[1.009vw] h-[1.1084vw] cursor-pointer"
                                alt="Toggle Visibility"
                            />
                        </div>
                    </div>
                    <div className='w-full h-[4.5728vw] flex flex-col justify-between'>
                        <label className='h-[1.8009vw] ml-[0.189vw] text-[0.833vw] font-normal leading-[1.250vw]  font-Noto_Sans_ch flex items-center '>密碼</label>
                        <div className="relative text-gray-500 focus-within:text-gray-900 ">
                            <input
                                type={isConfirmPasswordVisible ? 'text' : 'password'}
                                id="password"
                                className="block w-full h-[2.7719vw] pl-[0.833vw] py-[0.4166vw] text-[0.938vw] font-normal shadow-xs text-gray-900 bg-transparent border-[0.052vw] border-[#E2E2E2] rounded-[0.417vw] placeholder-gray-400 focus:outline-none focus:border-black leading-[1.172vw]"
                                placeholder="•••••••••••••••••"
                            />
                            <LazyImage
                                onClick={() => setConfirmPasswordVisible(!isConfirmPasswordVisible)}
                                src={isConfirmPasswordVisible ? eye : eye_off}
                                className="absolute top-[0.8313vw] right-[0.883vw] w-[1.009vw] h-[1.1084vw] cursor-pointer"
                                alt="Toggle Visibility"
                            />
                        </div>
                    </div>


                    <div className='w-full h-[6.2093vw]'>
                        <div className='bg-transparent w-full h-[1.8229vw]'></div>
                        <button className='w-[22.442vw] h-[2.5635vw] bg-gradient-to-r from-[#399983] to-[#538aa2] rounded-[0.365vw] flex justify-center items-center'>
                            <span className='w-[14.245vw] h-[1.7554vw] text-center text-white text-[1.250vw] font-normal font-Noto_Sans_ch leading-[1.508vw]'>註冊</span>
                        </button>
                        <div className='flex items-center w-[7.157vw] h-[1.8229vw] ml-[8.236vw] mt-[1.2759vw] '>
                            <span className='w-[5.024vw] h-full text-center text-[#747474] text-[0.781vw] font-normal font-inter leading-snug flex items-center justify-center'>
                                已經有帳號？
                            </span>
                            <span
                                onClick={switchToLogin}
                                className="w-[2.133vw] h-full text-center text-[#008566] text-[0.781vw] font-normal font-inter leading-snug cursor-pointer flex items-center justify-center">
                                登入
                            </span>
                        </div>
                    </div>

                </div>
                <div className='border-[0.052vw] h-full border-[#E2E2E2]'></div>
                <div className='w-[23.646vw] h-[21.0799vw] flex flex-col justify-between'>
                    {[
                        { icon: google, label: '使用Google帳戶繼續' },
                        { icon: Instagram, label: '使用Instagram帳戶繼續' },
                        { icon: facebook, label: '使用Facebook帳戶繼續' },
                        { icon: Line, label: '使用Line帳戶繼續' },
                    ].map((button, index) => (
                        <button key={index} className='w-full h-[3.0176vw] rounded-[23.5px] border-[0.104vw] border-[#e2e2e2] flex items-center'>
                            <LazyImage className='w-[1.993vw] h-[1.9922vw] ml-[2.2vw]' src={button.icon} alt={`${button.label} Icon`} />
                            <span className='w-[13.073vw] h-[1.3533vw] ml-[0.9vw] text-center text-[#3f3f3f] text-[1.042vw] font-bold font-Noto_Sans_ch leading-[1.562vw]'>{button.label}</span>
                        </button>
                    ))}
                </div>

            </div>


        </div>  

    );
}



export default Login;
