import user_photo from '../assets/setting_img/user_photo.svg'
import setting_bg from '../assets/setting_img/Setting_bg.svg'
import search from '../assets/setting_img/search.svg';
import search_green from '../assets/setting_img/search_green.svg'
import edit from '../assets/setting_img/edit.svg'
import test from '../assets/setting_img/Setting.png'

import React, { useState } from 'react';



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


const ClickImage = ({ defaultSrc, clickSrc, className }) => {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(prevState => !prevState); // 切換圖片
  };

  return (
    <div className="relative">
      <img
        className={className}
        src={isClicked ? clickSrc : defaultSrc}
        onClick={handleClick}
        alt="clickable image"
      />
      {isClicked && (
        <div className="absolute top-[5.269vh]  -right-[1.262vw] w-[13.594vw] h-[4.610vh]  flex items-center justify-center">
          <label class="text-[#3F3F46] text-[0.781vw] font-bold leading-[2.470vh] tracking-[0.042vw] font-Noto_Sans_ch">AI搜尋：</label>
          <input
            type="text"
            placeholder="輸入文字"
            className=" w-[7.865vw] h-[2.744vh] text-[0.781vw]  leading-snug focus:outline-none text-gray-500 placeholder-gray-400 border-b-[0.220vh] border-gray-400 focus:border-b-[0.220vh] focus:border-gray-600  bg-transparent   "
          />
        </div>
      )}
    </div>
  );
};



function Profile() {

  const [activePage, setActivePage] = useState("page1"); // Default to page1
  const [imageSrc, setImageSrc] = useState(search);

  return (
    <div className="relative w-full h-[full]">
      <div className='absolute w-[100%] h-[43.359vh] max-w-[99.115vw] -top-[8.343vh]'>
        <img src={setting_bg} className="w-full object-cover " alt="Login Background" />
        {/* <img src={test} className=" absolute opacity-85 top-0 " alt="Login Background" /> */}
        <div className='absolute w-[26.510vw] h-[18.332vh] left-[20.052vw] top-[19.210vh] flex z-10'>
            <img src={user_photo}/>
            <div className='w-[20.312vw] h-[11.745vh] mt-[1.756vh] flex flex-col justify-between'>
                <span className='w-[20.312vw] h-[6.147vh] text-center flex items-center justify-center text-[#538aa2] text-[2.083vw] font-bold font-Noto_Sans_en leading-[3.125vw] tracking-[0.208vw]'>USER Female</span>
                <span className='w-[14.531vw] h-[4.171vh] ml-[5.104vw] flex items-center justify-center text-[#538aa2] text-[1.042vw] font-bold font-Noto_Sans_en leading-[1.562vw] tracking-[0.083vw] '>ID: @USER124402</span>
            </div>
          </div>

        <div className='   relative   w-[76.771vw] h-[61.032vh] z-10 -top-[5.5vh]  mx-auto '>
          <div className='w-[40.312vw] h-[6.367vh]  rounded-[2.604vw] bg-white shadow-lg ml-[23.906vw] mt-[1.098vh] flex items-center '>
            <div className=' w-[34.844vw] h-[4.171vh] ml-[2.760vw] flex justify-between'>
              <button
                onClick={() => setActivePage("page1")}
                className={`w-[6.597vw] h-[4.171vh] flex justify-center items-center  ${activePage === "page1" ? 'bg-[#538AA2] text-white' : 'bg-[#F0F0F0] text-[#3F3F46]'} rounded-[2.604vw]`}
              >
                <span className=' text-center font-Noto_Sans_ch text-[1.042vw] font-normal leading-[1.562vw]'>簡介</span>
              </button>
              <button
                onClick={() => setActivePage("page2")}
                className={`w-[6.597vw] h-[4.171vh] flex justify-center items-center ${activePage === "page2" ? 'bg-[#538AA2] text-white' : 'bg-[#F0F0F0] text-[#3F3F46]'} rounded-[2.604vw]`}
              >
                <span className='text-center font-Noto_Sans_ch text-[1.042vw] font-normal leading-[1.562vw]'>我的帳戶</span>
              </button>
              <button
                onClick={() => setActivePage("page3")}
                className={`w-[6.597vw] h-[4.171vh] flex justify-center items-center ${activePage === "page3" ? 'bg-[#538AA2] text-white' : 'bg-[#F0F0F0] text-[#3F3F46]'} rounded-[2.604vw]`}
              >
                <span className=' text-center font-Noto_Sans_ch text-[1.042vw] font-normal leading-[1.562vw]'>我的訂閱</span>
              </button>
              <button
                onClick={() => setActivePage("page4")}
                className={`w-[6.597vw] h-[4.171vh] flex justify-center items-center  ${activePage === "page4" ? 'bg-[#538AA2] text-white' : 'bg-[#F0F0F0] text-[#3F3F46]'} rounded-[2.604vw]`}
              >
                <span className=' text-center font-Noto_Sans_ch text-[1.042vw] font-normal leading-[1.562vw] '>其他設定</span>
              </button>
              <button className=''><ClickImage className=' w-[1.979vw] h-[4.171vh] ' defaultSrc={search} clickSrc={search_green} /></button>
            </div>
          </div>


          <div>
            {/* Render content based on activePage */}
            {(() => {
              switch (activePage) {
                case "page1":
                  return <div className='w-[74.271vw] h-[52.689vh] ml-auto mt-[3.074vh]'>
                    <div className='w-[70.990vw] h-[12.733vh] flex justify-between'>
                      <div className='w-[34.688vw] h-[12.733vh] flex'>
                        <span className='w-[9.323vw] h-[10.538vh] mb-[2.634vh] text-black text-[2.083vw]  font-Noto_Sans_ch leading-[3.125vw] flex items-center '>顯示資訊</span>
                        <span className='w-[23.073vw] h-[3.183vh] mt-[4.391vh] ml-[0.833vw] text-black/80 text-[1.042vw]  font-Noto_Sans_ch leading-[1.562vw]'>(評論時，此資訊將對本網站的所有會員顯示)</span>
                      </div>
                      <div className='w-[8.802vw] h-[8.782vh] mt-[1.537vh] justify-between flex flex-col '>
                        <button className='w-full h-[4.940vh] border-[0.104vw] border-[#008566] flex items-center space-x-[0.208vw]'>
                          <img className='w-[1.510vw] h-[3.183vh] ml-[0.677vw]' src={edit} />
                          <span className='w-[5.677vw] h-[3.293vh] text-[#008566] text-[0.729vw] font-medium font-Noto_Sans_ch leading-[1.094vw] flex items-center justify-center'>編輯個人檔案</span>
                        </button>
                        <span className='w-full h-[3.074vh] flex justify-end  text-black text-[0.677vw] font-medium font-Noto_Sans_ch leading-tight'>加入日期 : 2024年7月15日</span>
                      </div>
                    </div>
                    <div className='w-[72.604vw] h-[39.956vh] ml-[1.667vw] flex flex-col space-y-[4.830vh]'>
                      <div className='w-[36.615vw] h-[15.148vh] space-x-[3.438vw] flex items-center'>
                        <div className='w-[19.531vw] h-[10.428vh] flex flex-col justify-between'>
                          <label className='w-[7.031vw] h-[4.501vh] text-black text-[1.250vw]  font-Noto_Sans_ch leading-[1.875vw]'>顯示名稱</label>
                          <input className='w-[19.531vw] h-[5.488vh]   border-[0.052vw]  border-black/20 text-[1.250vw] p-[0.625vw]'></input>
                        </div>

                        <div class="w-[10.746vw] h-[10.428vh] flex flex-col justify-between">
                          <label class="w-[7.031vw] h-[4.501vh] text-black text-[1.250vw]  font-Noto_Sans_ch leading-[1.875vw]">性別</label>
                          <select class="w-full h-[5.488vh] border-[0.052vw] border-black/20 text-[1.250vw] px-[0.625vw] pr-[1.667vw] bg-transparent focus:outline-none appearance-none">
                            <option value="" disabled selected>請選擇</option>
                            <option value="male">生理男</option>
                            <option value="female">生理女</option>
                          </select>

                        </div>

                      </div>
                      <div className='w-full h-[10.431vh] space-x-[3.438vw] flex  '>
                        <div className='w-[19.531vw] h-[10.428vh] flex flex-col justify-between'>
                          <label className='w-[7.031vw] h-[4.501vh] text-black text-[1.250vw]  font-Noto_Sans_ch leading-[1.875vw]'>年齡</label>
                          <input className='w-[19.531vw] h-[5.488vh]  border-[0.052vw]  border-black/20 text-[1.250vw] p-[0.625vw]'></input>
                        </div>
                        <div className='w-[19.531vw] h-[10.428vh] flex flex-col justify-between'>
                          <label className='w-[7.031vw] h-[4.501vh] text-black text-[1.250vw]  font-Noto_Sans_ch leading-[1.875vw]'>體重(kg)</label>
                          <input className='w-[19.531vw] h-[5.488vh]  border-[0.052vw]  border-black/20 text-[1.250vw] p-[0.625vw]'></input>
                        </div>
                        <div className='w-[19.531vw] h-[10.428vh] flex flex-col justify-between'>
                          <label className='w-[7.031vw] h-[4.501vh] text-black text-[1.250vw]  font-Noto_Sans_ch leading-[1.875vw]'>身高(cm)</label>
                          <input className='w-[19.531vw] h-[5.488vh]  border-[0.052vw]  border-black/20 text-[1.250vw] p-[0.625vw]'></input>
                        </div>
                      </div>
                    </div>
                  </div>;
                case "page2":
                  return <div className='w-[74.271vw] h-[52.689vh] ml-auto mt-[3.074vh]'>
                    <div className='w-[70.990vw] h-[12.733vh] flex justify-between'>
                      <div className='w-[34.688vw] h-[12.733vh] flex'>
                        <span className='w-[9.323vw] h-[10.538vh] mb-[2.634vh] text-black text-[2.083vw]  font-Noto_Sans_ch leading-[3.125vw] flex items-center '>個人資訊</span>
                        <span className='w-[23.073vw] h-[3.183vh] mt-[4.391vh] ml-[0.833vw] text-black/80 text-[1.042vw]  font-Noto_Sans_ch leading-[1.562vw]'>(此資訊設為隱私資訊)</span>
                      </div>
                      <div className='w-[8.802vw] h-[8.782vh] mt-[1.537vh] justify-between flex flex-col '>
                        <button className='w-full h-[4.940vh] border-[0.104vw] border-[#008566] flex items-center space-x-[0.208vw]'>
                          <img className='w-[1.510vw] h-[3.183vh] ml-[0.677vw]' src={edit} />
                          <span className='w-[5.677vw] h-[3.293vh] text-[#008566] text-[0.729vw] font-medium font-Noto_Sans_ch leading-[1.094vw] flex items-center justify-center'>編輯個人檔案</span>
                        </button>
                        <span className='w-full h-[3.074vh] flex justify-end  text-black text-[0.677vw] font-medium font-Noto_Sans_ch leading-tight'>加入日期 : 2024年7月15日</span>
                      </div>
                    </div>
                    <div className='w-[68.021vw] h-[39.956vh] ml-[1.667vw] flex flex-col space-y-[4.830vh]'>
                      <div className='w-[36.615vw] h-[15.148vh] space-x-[3.438vw] flex items-center'>
                        <div className='w-[19.531vw] h-[10.428vh] flex flex-col justify-between'>
                          <label className='w-[7.031vw] h-[4.501vh] text-black text-[1.250vw]  font-Noto_Sans_ch leading-[1.875vw]'>名字<span className="text-red-500">*</span></label>
                          <input className='w-[19.531vw] h-[5.488vh]   border-[0.052vw]  border-black/20 text-[1.250vw] p-[0.625vw]'></input>
                        </div>
                        <div className='w-[19.531vw] h-[10.428vh] flex flex-col justify-between'>
                          <label className='w-[7.031vw] h-[4.501vh] text-black text-[1.250vw]  font-Noto_Sans_ch leading-[1.875vw]'>電話<span className="text-red-500">*</span></label>
                          <input className='w-[19.531vw] h-[5.488vh]   border-[0.052vw]  border-black/20 text-[1.250vw] p-[0.625vw]'></input>
                        </div>
                        <div className='w-[19.531vw] h-[10.428vh] flex flex-col justify-between'>
                          <label className='w-[7.031vw] h-[4.501vh] text-black text-[1.250vw]  font-Noto_Sans_ch leading-[1.875vw]'>電子信箱<span className="text-red-500">*</span></label>
                          <input className='w-[19.531vw] h-[5.488vh]   border-[0.052vw]  border-black/20 text-[1.250vw] p-[0.625vw]'></input>
                        </div>



                      </div>
                      <div className='w-full h-[10.431vh] space-x-[3.438vw] flex  '>
                        <div className='w-[19.531vw] h-[10.428vh] flex flex-col justify-between'>
                          <label className='w-[7.031vw] h-[4.501vh] text-black text-[1.250vw]  font-Noto_Sans_ch leading-[1.875vw]'>姓氏</label>
                          <input className='w-[19.531vw] h-[5.488vh]  border-[0.052vw]  border-black/20 text-[1.250vw] p-[0.625vw]'></input>
                        </div>
                        <div className='w-[19.531vw] h-[10.428vh] flex flex-col justify-between'>
                          <label className='w-[7.031vw] h-[4.501vh] text-black text-[1.250vw]  font-Noto_Sans_ch leading-[1.875vw]'>聯絡地址</label>
                          <input className='w-[42.513vw] h-[5.488vh]  border-[0.052vw]  border-black/20 text-[1.250vw] p-[0.625vw]'></input>
                        </div>
                      </div>
                    </div>
                  </div>;
                case "page3":
                  return <div className='w-[74.271vw] h-[52.689vh] ml-auto mt-[3.074vh]'>
                    <div className='w-[34.688vw] h-[12.733vh] flex'>
                      <span className='w-[9.323vw] h-[10.538vh] mb-[2.634vh] text-black text-[2.083vw]  font-Noto_Sans_ch leading-[3.125vw] flex items-center '>尚未開放</span>
                      <span className='w-[23.073vw] h-[3.183vh] mt-[4.391vh] ml-[0.833vw] text-black/80 text-[1.042vw]  font-Noto_Sans_ch leading-[1.562vw]'>(預計2025/7/15)</span>
                    </div>


                  </div>;
                case "page4":
                  return <div className='w-[74.271vw] h-[52.689vh] ml-auto mt-[3.074vh]'>
                    <div className='w-[40.208vw] h-[38.310vh]   flex'>
                      <div className='w-[17.865vw] h-[12.733vh]'>
                        <span className='w-[9.323vw] h-[10.538vh] mb-[2.634vh] text-black text-[2.083vw]  font-Noto_Sans_ch leading-[3.125vw] flex items-center '>尚未開放</span>
                      </div>
                      <div className='w-[0.052vw] h-[36.334vh] bg-[#CACACA] ml-[3.073vw]'></div>
                      <div className='w-[17.865vw] h-[12.733vh] ml-[1.406vw] '>
                        <span className='w-[9.323vw] h-[10.538vh] mb-[2.634vh] text-black text-[2.083vw]  font-Noto_Sans_ch leading-[3.125vw] flex items-center '>尚未開放</span>
                      </div>
                    </div>
                  </div>;
                default:
                  return <div>Default Content</div>;
              }
            })()}
          </div>

        </div>

      </div>





    </div>
  );
}

export default Profile;
