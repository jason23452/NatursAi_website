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
        <div className="relative w-[44.010vw] h-[9.935vh] flex items-center">
            <select
                name={name}
                value={value}
                onChange={onChange}
                onFocus={handleClick}
                onBlur={handleBlur}
                className="w-full h-full appearance-none text-[#538AA1] text-[1.667vw] bg-white rounded-[0.521vw] shadow-lg pl-[0.971vw] font-normal font-Noto_Sans_ch tracking-[0.167vw] leading-[5.269vh]"
            >
                <option value="">請選擇</option>
                {options.map((option, index) => (
                    <option key={index} value={option}>{option}</option>
                ))}
            </select>

            <img
                className="absolute right-[2.013vw] w-[1.927vw] h-[2.086vh] pointer-events-none"
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
            <div className='absolute w-[100%] max-w-[99.115vw] -top-[8.343vh]'>
                <img src={About_us_bg} className="w-full object-cover" alt="Login Background" />
                <div className='absolute inset-0'>
                    <div className='ml-[38.229vw] mt-[22.613vh] relative w-[17.760vw] h-[13.941vh]'>
                        <img className='w-[17.760vw] h-[11.526vh]' src={title_img} />
                        <span className='absolute left-[8.854vw] top-[8.782vh] w-[15.469vw] h-[4.830vh] flex justify-start items-center text-[#538AA2] text-[1.042vw] font-Noto_Sans_ch font-bold leading-[2.649vh] tracking-[0.156vw]'>
                            劃時代的AI健康管理
                        </span>
                    </div>
                    <form onSubmit={handleSubmit} className='ml-[26.3vw] mt-[2.1vh] w-[44.062vw] h-[143.249vh] flex flex-col'>
                        <div className='w-[44.010vw] h-[17.311vh] flex flex-col justify-between'>
                            <span className='w-[18.654vw] h-[6.146vh] text-[1.875vw] font-Noto_Sans_ch font-bold leading-[5.928vh]'>信息內容</span>
                            <CustomSelect
                                name="content"
                                options={['技術支援', '產品意見', '刪除帳號', '合作機會', '其他']}
                                value={formData.content}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='mt-[7.266vh] w-[44.010vw] h-[17.311vh] flex flex-col justify-between'>
                            <span className='w-[18.654vw] h-[6.146vh] text-[1.875vw] font-Noto_Sans_ch font-bold leading-[5.928vh]'>您的身份</span>
                            <CustomSelect
                                name="identity"
                                options={['夠益營養APP使用者', '照護人員', '醫護人員', '合作關係人', '其他']}
                                value={formData.identity}
                                onChange={handleChange}
                            />
                        </div>
                        <div className='w-[43.438vw] h-[18.551vh] mt-[8.9vh] flex justify-between'>
                            <div className='w-[20.573vw] h-[18.551vh] flex flex-col'>
                                <span className='text-[1.875vw] font-bold'>姓名<span className='text-[#AE2D2D]'>*</span></span>
                                <input
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className='w-[20.573vw] h-[10.648vh] pl-[0.990vw] bg-white rounded-[0.521vw] shadow-lg placeholder:text-[#CACACA] text-[1.667vw]'
                                    placeholder='你的姓名'
                                    required
                                />
                            </div>
                            <div className='w-[20.573vw] h-[18.551vh] flex flex-col'>
                                <span className='text-[1.875vw] font-bold'>信箱<span className='text-[#AE2D2D]'>*</span></span>
                                <input
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    type="email"
                                    className='w-[20.573vw] h-[10.648vh] pl-[0.990vw] bg-white rounded-[0.521vw] shadow-lg placeholder:text-[#CACACA] text-[1.667vw]'
                                    placeholder='你的信箱'
                                    required
                                />
                            </div>
                        </div>
                        <div className='mt-[7.684vh] w-[44.010vw] h-[48.628vh] flex flex-col justify-between'>
                            <span className='text-[1.875vw] font-bold'>問題意見<span className='text-[#AE2D2D]'>*</span></span>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                className='w-[44.010vw] h-[40.724vh] bg-white shadow-lg pl-[1.042vw] pt-[1.976vh] rounded-[0.521vw] placeholder:text-[#CACACA] text-[1.667vw] resize-none'
                                placeholder='請輸入問題意見'
                                required
                            ></textarea>
                        </div>
                        <div className='w-[44.062vw] h-[11.526vh] flex justify-between mt-[6.257vh]'>
                            <img src={no_robot} className='w-[20.052vw] h-[11.526vh]' />
                            <button type="submit" className='mt-[4.281vh] w-[11.667vw] h-[6.147vh] bg-gradient-to-r from-[#399983] to-[#538aa2] text-white text-[1.250vw] font-medium hover:from-[#3F3F46] hover:to-[#3F3F46]'>
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
