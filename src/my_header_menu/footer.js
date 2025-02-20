import React, { useState, useEffect } from 'react';
import Naturs_ai_black from '../assets/footer_img/Naturs_ai_black.svg';
import Youtube from '../assets/footer_img/Youtube.svg';
import Instagram from '../assets/footer_img/Instagram.svg';
import Facebook from '../assets/footer_img/Facebook.svg';
import Naturs_ai_black2 from '../assets/footer_img/Naturs_ai_black2.svg';
import Youtube_2 from '../assets/footer_img/Youtube_2.svg';
import Instagram_2 from '../assets/footer_img/Instagram_2.svg';
import Facebook_2 from '../assets/footer_img/Facebook_2.svg';
import { Link } from 'react-router-dom';
import LazyImage from '../action_object/lazyimg';

const Footer = () => {



  return (
    <footer>
      <div className='md:relative md:w-full md:h-[24.5825vw] md:bg-[#3F3F46] md:flex md:flex-col md:justify-center md:items-center z-10 md:transition-opacity md:duration-500  hidden '>
        <div className='w-[76.875vw] h-[15.2572vw] flex'>
          <div className='w-[21.146vw] h-[15.2572vw] flex flex-col justify-start items-start'>
            <Link to='/' ><LazyImage className='w-[10.208vw] h-[3.0721vw]' src={Naturs_ai_black} onClick={() => window.scrollTo(0, 0)} /></Link>
            <span className='ml-[0.208vw] mt-[1.3755vw] w-[18.281vw] h-[2.4910vw] text-white text-[1.250vw] font-Noto_Sans font-light leading-[1.8750vw]'>有疑問嗎？請聯絡我們。</span>
            <span className='ml-[0.208vw] mt-[1.1459vw] w-[20.938vw] h-[2.0264vw] text-white text-[1.250vw] font-Noto_Sans  font-light leading-[1.8750vw]'>Email: Naturs.ai.2024@gmail.com</span>
            <div className='ml-[0.208vw] mt-[3.6459vw] w-[10.781vw] h-[1.5080vw] flex justify-between items-center'>
              <button className='w-[1.462vw] h-[1.4616vw]'><LazyImage src={Youtube} /></button>
              <button className='w-[1.462vw] h-[1.4616vw]'><LazyImage src={Instagram} /></button>
              <button className='w-[1.462vw] h-[1.4616vw]'><LazyImage src={Facebook} /></button>
            </div>
          </div>
          <div className='ml-[7.604vw] mt-[1.5103vw] w-[7.812vw] h-[7.7083vw] flex flex-col justify-between'>
            <span className='w-[7.812vw] h-[1.8229vw] text-white text-[1.250vw] font-Noto_Sansfont-bold leading-[1.8750vw]'>服務技術支援</span>
            <Link to='/about' className='w-[7.812vw] h-[1.8229vw] text-white text-[1.250vw] font-Noto_Sansfont-bold leading-[1.8750vw] underline' onClick={() => window.scrollTo(0, 0)}>用戶操作問題</Link>
            <Link to='/about' className='w-[7.812vw] h-[1.8229vw] text-white text-[1.250vw] font-Noto_Sansfont-bold leading-[1.8750vw] underline' onClick={() => window.scrollTo(0, 0)}>夥伴平台教學</Link>
          </div>
          <div className='ml-[5.625vw] mt-[1.5103vw] w-[7.812vw] h-[7.7083vw] flex flex-col justify-between'>
            <span className='w-[7.812vw] h-[1.8229vw] text-white text-[1.250vw] font-Noto_Sansfont-bold leading-[1.8750vw]'>合作機會</span>
            <Link to='/about' className='w-[7.812vw] h-[1.8229vw] text-white text-[1.250vw] font-Noto_Sansfont-bold leading-[1.8750vw] underline' onClick={() => window.scrollTo(0, 0)}>合作或工作</Link>
            <Link to='/about' className='w-[7.812vw] h-[1.8229vw] text-white text-[1.250vw] font-Noto_Sansfont-bold leading-[1.8750vw] underline' onClick={() => window.scrollTo(0, 0)}>媒體室</Link>
          </div>

          <div className='ml-[5.625vw] mt-[1.5103vw] w-[7.812vw] h-[10.6771vw] flex flex-col justify-between'>
            <span className='w-[7.812vw] h-[1.8229vw] text-white text-[1.250vw] font-Noto_Sansfont-bold leading-[1.8750vw]'>帳戶資訊</span>
            <Link to='/login' className='w-[7.812vw] h-[1.8229vw] text-white text-[1.250vw] font-Noto_Sansfont-bold leading-[1.8750vw] underline' onClick={() => window.scrollTo(0, 0)}>帳戶登入</Link>
            <Link to='/login' className='w-[7.812vw] h-[1.8229vw] text-white text-[1.250vw] font-Noto_Sansfont-bold leading-[1.8750vw] underline' onClick={() => window.scrollTo(0, 0)}>註冊帳戶</Link>
            <Link to='/about' className='w-[7.812vw] h-[1.8229vw] text-white text-[1.250vw] font-Noto_Sansfont-bold leading-[1.8750vw] underline' onClick={() => window.scrollTo(0, 0)}>帳號刪除</Link>
          </div>

          <div className='ml-[5.625vw] mt-[1.5103vw] w-[7.812vw] h-[4.7917vw] flex flex-col justify-between'>
            <span className='w-[7.812vw] h-[1.8229vw] text-white text-[1.250vw] font-Noto_Sansfont-bold leading-[1.8750vw]'>追蹤我們</span>
            <Link to='/' className='w-[7.812vw] h-[1.8229vw] text-white text-[1.250vw] font-Noto_Sansfont-bold leading-[1.8750vw] underline' onClick={() => window.scrollTo(0, 0)}>電子報</Link>
          </div>


        </div>
        <span className='mt-[0.8816vw] w-[30.990vw] h-[1.6146vw] flex justify-center items-center text-white text-[0.833vw] font-Noto_Sans  font-light leading-[1.2500vw] tracking-[0.125vw]'>© 2024 NatursAi All rights reserved.</span>
      </div>

      <div className=' relative z-10 ml-[6.1278vw] bg-transparent w-[88.0052vw] h-[37.8096vw]  md:hidden flex flex-col items-center '>
        <img className='w-[27.7992vw] h-[8.2881vw]' src={Naturs_ai_black2} />
        <div className=' mt-[6.7053vw] w-[88.0052vw] h-[9.7784vw] flex items-center '>
          <img className='w-[7.0404vw] h-[7.1708vw]' src={Youtube_2} />
          <img className='ml-[6.1278vw] w-[6.6493vw] h-[7.1708vw]' src={Instagram_2} />
          <img className='ml-[5.6063vw] w-[7.0404vw] h-[7.0404vw]' src={Facebook_2} />
          <span className='w-[56.0626vw] h-[9.7784vw] text-center text-black text-[2.6076vw] font-Noto_Sans  font-bold leading-[3.9113vw] tracking-[0.1304vw] flex items-center justify-center'>Email:
            <span className='text-center text-black text-[2.6076vw] font-Noto_Sans  font-light leading-[3.9113vw] tracking-[0.1304vw]'>Naturs.ai.2024@gmail.com</span>
          </span>
        </div>
        <span className='w-[58.6701vw] h-[9.6480vw] text-[2.6076vw] font-Noto_Sans  font-light leading-[3.9113vw] tracking-[0.3911vw]'>© 2024 NatursAi All rights reserved.</span>

      </div>

    </footer>

  );
};

export default Footer;
