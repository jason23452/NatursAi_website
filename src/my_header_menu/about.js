import '../css/All.css';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import About_us_bg from '../assets/About_us_img/About us_bg.svg';
import media_About_us_bg from '../assets/About_us_img/media_About_us.svg';
import title_img from '../assets/About_us_img/title_img.svg';
import closedArrow from '../assets/About_us_img/arrow.svg';
import openArrow from '../assets/About_us_img/openArrow.svg';
import no_robot from '../assets/About_us_img/no_robot.svg';
import LazyImage from '../action_object/lazyimg';

const CustomSelect = ({ options, name, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(true);
    const handleBlur = () => setIsOpen(false);

    return (
        <div className="relative mt-[1.2438vw] w-[93.8722vw] h-[10.0391vw] md:w-[44.010vw] md:h-[4.714vw] flex items-center">
            <select
                name={name}
                value={value}
                onChange={onChange}
                onFocus={handleClick}
                onBlur={handleBlur}
                className="w-full h-full appearance-none text-[#538AA1] text-[4.1721vw] md:text-[1.667vw] bg-white  rounded-[1.3038vw] md:rounded-[0.521vw] shadow-lg pl-[2.0717vw] md:pl-[0.971vw] font-normal font-sans  tracking-[0.4172vw] md:tracking-[0.167vw] leading-[6.2581vw] md:leading-[2.500vw] focus:outline-none focus:ring-2 focus:ring-black focus:border-black"
            >
                <option value="">請選擇</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>
                        {option}
                    </option>
                ))}
            </select>

            <LazyImage
                className="absolute  right-[4.0404vw] md:right-[2.013vw] w-[4.1721vw]  md:w-[1.927vw] h-[2.0860vw]  md:h-[0.990vw] pointer-events-none"
                src={isOpen ? openArrow : closedArrow}
                alt="arrow"
            />
        </div>
    );
};

function About() {
    const [formData, setFormData] = useState({
        content: '',
        identity: '',
        name: '',
        email: '',  // 修改為 user_email
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        emailjs.send('service_uih4tjd', 'template_1dfpu1k', formData, 'CNpW3bwwEtw9WNV7B')
            .then((result) => {
                console.log('Email sent successfully:', result.text);
                alert('需求已送出，我們將盡快聯繫您！');
            }, (error) => {
                console.log('Failed to send email:', error.text);
                alert('發送失敗，請稍後再試。');
            });
    };


    return (
        <div className=' relative w-full h-full'>
            <div className="md:h-[109.5833vw] md:relative md:w-full md:block hidden">
                <div className='absolute w-full h-[109.5833vw] -top-[3.9583vw]'>
                    <img src={About_us_bg} className="w-full object-cover" alt="Login Background" />
                    <div className='absolute inset-0'>
                        <div className='ml-[38.229vw] mt-[10.729vw] relative w-[17.760vw] h-[6.615vw]'>
                            <LazyImage className='w-[17.760vw] h-[5.469vw]' src={title_img} />
                            <span className='absolute left-[8.854vw] top-[4.167vw] w-[15.469vw] h-[2.292vw] flex justify-start items-center text-[#538AA2] text-[1.042vw] font-sans font-bold leading-[1.257vw] tracking-[0.156vw]'>
                                劃時代的AI健康管理
                            </span>
                        </div>
                        <form onSubmit={handleSubmit} className='ml-[26.3vw] mt-[0.996vw] w-[44.062vw] h-[67.968vw] flex flex-col'>
                            <div className='w-[44.010vw] h-[8.196vw] flex flex-col justify-between'>
                                <span className='w-[18.654vw] h-[2.916vw] text-[1.875vw] font-sans font-bold leading-[2.812vw]'>信息內容</span>
                                <CustomSelect
                                    name="content"
                                    options={['技術支援', '產品意見', '刪除帳號', '合作機會', '其他']}
                                    value={formData.content}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='mt-[3.448vw] w-[44.010vw] h-[8.196vw] flex flex-col justify-between'>
                                <span className='w-[18.654vw] h-[2.916vw] text-[1.875vw] font-sans font-bold leading-[2.812vw]'>您的身份</span>
                                <CustomSelect
                                    name="identity"
                                    options={['夠益營養APP使用者', '照護人員', '醫護人員', '合作關係人', '其他']}
                                    value={formData.identity}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='w-[43.438vw] h-[8.801vw] mt-[4.223vw] flex justify-between'>
                                <div className='w-[20.573vw] h-[8.801vw] flex flex-col'>
                                    <span className='text-[1.875vw] font-bold'>姓名<span className='text-[#AE2D2D]'>*</span></span>
                                    <input
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className=' w-[20.573vw] h-[5.052vw] pl-[0.990vw] bg-white rounded-[0.521vw] shadow-lg placeholder:text-[#CACACA] text-[1.667vw]'
                                        placeholder='你的姓名'
                                        required
                                    />
                                </div>
                                <div className='w-[20.573vw] h-[8.801vw] flex flex-col'>
                                    <span className='text-[1.875vw] font-bold'>信箱<span className='text-[#AE2D2D]'>*</span></span>
                                    <input
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        type="email"
                                        className='w-[20.573vw] h-[5.052vw] pl-[0.990vw] bg-white rounded-[0.521vw] shadow-lg placeholder:text-[#CACACA] text-[1.667vw]'
                                        placeholder='你的信箱'
                                        required
                                    />
                                </div>
                            </div>
                            <div className='mt-[3.646vw] w-[44.010vw] h-[23.044vw] flex flex-col justify-between'>
                                <span className='text-[1.875vw] font-bold'>問題意見<span className='text-[#AE2D2D]'>*</span></span>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className='w-[44.010vw] h-[19.322vw] bg-white shadow-lg pl-[1.042vw] pt-[0.938vw] rounded-[0.521vw] placeholder:text-[#CACACA] text-[1.667vw] resize-none'
                                    placeholder='請輸入問題意見'
                                    required
                                ></textarea>
                            </div>
                            <div className='w-[44.062vw] h-[5.469vw] flex justify-between mt-[2.969vw]'>
                                <button type="submit" className=' ml-auto mt-[2.031vw] w-[11.667vw] h-[2.916vw] bg-gradient-to-r from-[#399983] to-[#538aa2] text-white text-[1.250vw] font-medium hover:from-[#3F3F46] hover:to-[#3F3F46]'>
                                    提交
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
            <div className='h-[331.2907vw] relative w-full md:hidden '>
                <div className='absolute w-full h-[331.2907vw]'>
                    <img className="w-full object-cover" src={media_About_us_bg} />
                    <div className='absolute inset-0 flex flex-col '>
                        <div className='ml-[24.6415vw] mt-[12.9335vw] relative w-[50.8475vw] h-[16.5580vw]'>
                            <LazyImage className='w-[44.4589vw] h-[13.6897vw]' src={title_img} />
                            <span className='absolute  right-0 top-[10.7771vw] w-[28.6832vw] h-[5.7366vw] flex justify-start items-center text-[#538AA2] text-[2.6076vw] font-sans font-bold leading-[3.1460vw] tracking-[0.3911vw]'>
                                劃時代的AI健康管理
                            </span>
                        </div>
                        <div className='ml-[13.4289vw] mt-[5.7366vw]  w-[73.2725vw] h-[10.8214vw] text-3F3F46 text-[2.6076vw] font-sans font-bold  leading-[3.9113vw] flex text-center  items-center '>若您對 NatursAi 產品有任何疑問或需要進一步了解，請填寫下方聯絡表格。我們將盡快與您聯繫，並提供您所需的協助。</div>
                        <form onSubmit={handleSubmit} className='ml-[3.2595vw] mt-[9.7784vw] w-[93.8722vw] h-[192.9948vw]  flex flex-col'>
                            <div className='w-[93.8722vw] h-[17.5111vw] flex flex-col justify-between'>
                                <span className=' w-[39.7653vw] h-[6.2581vw] text-[4.6936vw] font-sans font-bold leading-[7.0404vw]'>信息內容</span>
                                <CustomSelect
                                    name="content"
                                    options={['技術支援', '產品意見', '刪除帳號', '合作機會', '其他']}
                                    value={formData.content}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className='mt-[7.7823vw] w-[93.8722vw] h-[17.5111vw] flex flex-col justify-between'>
                                <span className='w-[39.7653vw] h-[6.2581vw] text-[4.6936vw] font-sans font-bold leading-[7.0404vw]'>您的身份</span>
                                <CustomSelect
                                    name="identity"
                                    options={['夠益營養APP使用者', '照護人員', '醫護人員', '合作關係人', '其他']}
                                    value={formData.identity}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className=' mt-[10.2595vw] w-[93.8722vw] h-[17.4707vw] flex flex-col'>
                                <span className='w-[39.7875vw] h-[6.2164vw] text-3F3F46 text-[4.6936vw] font-sans  leading-[7.0404vw] font-bold'>姓名<span className='text-[#AE2D2D]'>*</span></span>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='mt-[1.2151vw] w-full h-[10.0391vw] pl-[2.0717vw] bg-white rounded-[1.3038vw] shadow-lg placeholder:text-[#CACACA] text-[4.1721vw] focus:outline-none focus:ring-2 focus:ring-black focus:border-black'
                                    placeholder='你的姓名'
                                    required
                                />
                            </div>
                            <div className=' mt-[12.6467vw] w-[93.8722vw] h-[17.4707vw] flex flex-col'>
                                <span className='w-[39.7875vw] h-[6.2164vw] text-3F3F46 text-[4.6936vw] font-sans  leading-[7.0404vw] font-bold '>信箱<span className='text-[#AE2D2D]'>*</span></span>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    className='mt-[1.2151vw] w-full h-[10.0391vw] pl-[2.0717vw] bg-white rounded-[1.3038vw] shadow-lg placeholder:text-[#CACACA] text-[4.1721vw] focus:outline-none focus:ring-2 focus:ring-black focus:border-black'
                                    placeholder='你的信箱'
                                    required
                                />
                            </div>
                            <div className='mt-[12.6467vw] w-[93.8722vw] h-[60.6258vw] flex flex-col justify-between'>
                                <span className='w-[39.7875vw] h-[6.2164vw] text-3F3F46 text-[4.6936vw] font-sans  leading-[7.0404vw] font-bold'>問題意見<span className='text-[#AE2D2D]'>*</span></span>
                                <textarea
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className=' mt-[1.2151vw] w-full h-[53.1943vw] pl-[2.0717vw] pt-[1.8931vw] bg-white rounded-[1.3038vw] shadow-lg placeholder:text-[#CACACA] text-[4.1721vw] resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-black'
                                    placeholder='請輸入問題意見'
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className='  ml-[34.1591vw] mt-[10.8657vw]  w-[31.8070vw] h-[8.2138vw]  bg-gradient-to-r from-[#399983] to-[#538aa2] rounded-[4.0196vw] text-white text-[4.1721vw] font-sans font-medium leading-[5.0326vw] '>
                                提交
                            </button>






                        </form>

                    </div>
                </div>

            </div>
        </div>

    );
}

export default About;
