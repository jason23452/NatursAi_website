import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import About_us_bg from '../assets/About_us_img/About us_bg.svg';
import title_img from '../assets/About_us_img/title_img.svg';
import closedArrow from '../assets/About_us_img/arrow.svg';
import openArrow from '../assets/About_us_img/openArrow.svg';
import no_robot from '../assets/About_us_img/no_robot.svg';
import Footer from './footer';

const CustomSelect = ({ options, name, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => setIsOpen(true);
    const handleBlur = () => setIsOpen(false);

    return (
        <div className="relative w-[44.010vw] h-[4.714vw] flex items-center">
            <select
                name={name}
                value={value}
                onChange={onChange}
                onFocus={handleClick}
                onBlur={handleBlur}
                className="w-full h-full appearance-none text-[#538AA1] text-[1.667vw] bg-white rounded-[0.521vw] shadow-lg pl-[0.971vw] font-normal font-Noto_Sans_ch tracking-[0.167vw] leading-[2.500vw]"
            >
                <option value="">請選擇</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>

            <img
                className="absolute right-[2.013vw] w-[1.927vw] h-[0.990vw] pointer-events-none"
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
        <div className="relative w-full h-full">
            <div className='absolute w-[100%]  -top-[3.958vw]'>
                <img src={About_us_bg} className="w-full object-cover" alt="Login Background" />
                <div className='absolute inset-0'>
                    <div className='ml-[38.229vw] mt-[10.729vw] relative w-[17.760vw] h-[6.615vw]'>
                        <img className='w-[17.760vw] h-[5.469vw]' src={title_img} />
                        <span className='absolute left-[8.854vw] top-[4.167vw] w-[15.469vw] h-[2.292vw] flex justify-start items-center text-[#538AA2] text-[1.042vw] font-Noto_Sans_ch font-bold leading-[1.257vw] tracking-[0.156vw]'>
                            劃時代的AI健康管理
                        </span>
                    </div>
                    <form onSubmit={handleSubmit} className='ml-[26.3vw] mt-[0.996vw] w-[44.062vw] h-[67.968vw] flex flex-col'>
                        <div className='w-[44.010vw] h-[8.196vw] flex flex-col justify-between'>
                            <span className='w-[18.654vw] h-[2.916vw] text-[1.875vw] font-Noto_Sans_ch font-bold leading-[2.812vw]'>信息內容</span>
                            <CustomSelect
                                name="content"
                                options={['技術支援', '產品意見', '刪除帳號', '合作機會', '其他']}
                                value={formData.content}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mt-[3.448vw] w-[44.010vw] h-[8.196vw] flex flex-col justify-between'>
                            <span className='w-[18.654vw] h-[2.916vw] text-[1.875vw] font-Noto_Sans_ch font-bold leading-[2.812vw]'>您的身份</span>
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
                                    className='w-[20.573vw] h-[5.052vw] pl-[0.990vw] bg-white rounded-[0.521vw] shadow-lg placeholder:text-[#CACACA] text-[1.667vw]'
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
                            <img src={no_robot} className='w-[20.052vw] h-[5.469vw]' />
                            <button type="submit" className='mt-[2.031vw] w-[11.667vw] h-[2.916vw] bg-gradient-to-r from-[#399983] to-[#538aa2] text-white text-[1.250vw] font-medium hover:from-[#3F3F46] hover:to-[#3F3F46]'>
                                提交
                            </button>
                        </div>
                    </form>
                </div>
                <Footer />
            </div>
        </div>
    );
}

export default About;
