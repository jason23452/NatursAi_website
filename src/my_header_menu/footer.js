import React from 'react';
import Naturs_ai_black from '../assets/footer_img/Naturs_ai_black.svg';
import Youtube from '../assets/footer_img/Youtube.svg';
import Instagram from '../assets/footer_img/Instagram.svg';
import Facebook from '../assets/footer_img/Facebook.svg';
import { Link } from 'react-router-dom';


const Footer = () => {
  
  return (
    <footer className=" relative w-full  h-[51.811vh] bg-[#3F3F46] flex flex-col  justify-center   items-center  z-10">
      <div className='w-[76.875vw] h-[32.156vh] flex'>
        <div className='w-[21.146vw] h-[32.156vh] flex flex-col justify-start items-start'>
         <Link to='/' className='w-[10.208vw] h-[6.476vh]'><img  src={Naturs_ai_black} onClick={() => window.scrollTo(0, 0)} /></Link> 
          <span className='ml-[0.208vw] mt-[2.899vh] w-[18.281vw] h-[5.269vh] text-white text-[1.250vw] font-Noto_Sans_ch font-light leading-[3.952vh]'>有疑問嗎？請聯絡我們。</span>
          <span className='ml-[0.208vw] mt-[2.415vh] w-[20.938vw] h-[4.281vh] text-white text-[1.250vw] font-Noto_Sans_en font-light leading-[3.952vh]'>Email: Naturs.ai.2024@gmail.com</span>
          <div className='ml-[0.208vw] mt-[7.684vh] w-[10.781vw] h-[3.183vh] flex justify-between items-center'>
            <button className='w-[1.462vw] h-[3.081vh]'><img src={Youtube} /></button>
            <button className='w-[1.462vw] h-[3.081vh]'><img src={Instagram} /></button>
            <button className='w-[1.462vw] h-[3.081vh]'><img src={Facebook} /></button>
          </div>
        </div>
        <div className='ml-[7.604vw] mt-[3.183vh] w-[7.812vw] h-[16.246vh] flex flex-col justify-between'>
          <span className='w-[7.812vw] h-[3.842vh] text-white text-[1.250vw] font-Noto_Sans_ch font-bold leading-[3.952vh]'>服務技術支援</span>
          <Link to='/about' className='w-[7.812vw] h-[3.842vh] text-white text-[1.250vw] font-Noto_Sans_ch font-bold leading-[3.952vh] underline' onClick={() => window.scrollTo(0, 0)}>用戶操作問題</Link>
          <Link to='/about' className='w-[7.812vw] h-[3.842vh] text-white text-[1.250vw] font-Noto_Sans_ch font-bold leading-[3.952vh] underline' onClick={() => window.scrollTo(0, 0)}>夥伴平台教學</Link>
        </div>
        <div className='ml-[5.625vw] mt-[3.183vh] w-[7.812vw] h-[16.246vh] flex flex-col justify-between'>
          <span className='w-[7.812vw] h-[3.842vh] text-white text-[1.250vw] font-Noto_Sans_ch font-bold leading-[3.952vh]'>合作機會</span>
          <Link to='/about' className='w-[7.812vw] h-[3.842vh] text-white text-[1.250vw] font-Noto_Sans_ch font-bold leading-[3.952vh] underline' onClick={() => window.scrollTo(0, 0)}>合作或工作</Link>
          <Link to='/about' className='w-[7.812vw] h-[3.842vh] text-white text-[1.250vw] font-Noto_Sans_ch font-bold leading-[3.952vh] underline' onClick={() => window.scrollTo(0, 0)}>媒體室</Link>
        </div>

        <div className='ml-[5.625vw] mt-[3.183vh] w-[7.812vw] h-[22.503vh] flex flex-col justify-between'>
          <span className='w-[7.812vw] h-[3.842vh] text-white text-[1.250vw] font-Noto_Sans_ch font-bold leading-[3.952vh]'>帳戶資訊</span>
          <Link to='/login' className='w-[7.812vw] h-[3.842vh] text-white text-[1.250vw] font-Noto_Sans_ch font-bold leading-[3.952vh] underline' onClick={() => window.scrollTo(0, 0)}>帳戶登入</Link>
          <Link to='/login' className='w-[7.812vw] h-[3.842vh] text-white text-[1.250vw] font-Noto_Sans_ch font-bold leading-[3.952vh] underline' onClick={() => window.scrollTo(0, 0)}>註冊帳戶</Link>
          <Link to='/about' className='w-[7.812vw] h-[3.842vh] text-white text-[1.250vw] font-Noto_Sans_ch font-bold leading-[3.952vh] underline' onClick={() => window.scrollTo(0, 0)}>帳號刪除</Link>
        </div>

        <div className='ml-[5.625vw] mt-[3.183vh] w-[7.812vw] h-[10.099vh] flex flex-col justify-between'>
          <span className='w-[7.812vw] h-[3.842vh] text-white text-[1.250vw] font-Noto_Sans_ch font-bold leading-[3.952vh]'>追蹤我們</span>
          <Link to='/' className='w-[7.812vw] h-[3.842vh] text-white text-[1.250vw] font-Noto_Sans_ch font-bold leading-[3.952vh] underline' onClick={() => window.scrollTo(0, 0)}>電子報</Link>
        </div>


      </div>
      <span className='mt-[1.858vh] w-[30.990vw] h-[3.403vh] flex justify-center items-center text-white text-[0.833vw] font-Noto_Sans_en font-light leading-[2.634vh] tracking-[0.125vw]'>© 2024 NatursAi All rights reserved.</span>
    </footer>
  );
};

export default Footer;
