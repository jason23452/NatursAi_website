import Meal_planning_bg from '../assets/Meal_planning_img/Meal_planning.svg';
import phone_img from '../assets/Meal_planning_img/phone_img.svg';
import download_apple from '../assets/Meal_planning_img/download_apple.svg';
import download_google from '../assets/Meal_planning_img/download_google.svg';
function Meal_planning() {
    return (
        <div className="relative w-full h-full">
            <div className='absolute w-[100%] max-w-[99.115vw] -top-[8.343vh]'>
                <img src={Meal_planning_bg} className="w-full object-cover" alt="Login Background" />
                <div className='absolute inset-0 '>
                    <div className='ml-[15.937vw] mt-[27.333vh] w-[72.500vw] h-[69.923vh] flex  '>
                        <img className='w-[15.521vw] h-[69.923vh]' src={phone_img} />
                        <div className='ml-[9.635vw] mt-[13.611vh] w-[47.760vw] h-[42.487vh] flex flex-col'>
                            <span className='w-[47.344vw] h-[16.905vh] text-[#3F3F46] text-[2.500vw] font-Noto_Sans_ch font-bold leading-[7.903vh]  tracking-[0.500vw] flex items-center'>電腦版尚未開放使用，盡情期待!!</span>
                            <div className='mt-[3.842vh] w-[25.473vw] h-[21.741vh] '>
                                <button className='w-[25.448vw] h-[6.869vh] bg-gradient-to-r from-[#399983] to-[#538aa2] rounded-[0.729vw] flex items-center justify-center text-white text-[1.458vw] font-Noto_Sans_ch font-medium leading-[3.708vh] '>立即下載APP</button>
                                <div className='mt-[7.188vh] w-[25.469vw] h-[7.684vh] flex justify-between '>
                                    <button className=''><img className='w-[11.615vw] h-[7.684vh]' src={download_apple}/></button>
                                    <button className=''><img className='w-[11.615vw] h-[7.684vh]' src={download_google}/></button>
                                </div>
                            </div>
                        </div>


                    </div>

                </div>


            </div>
        </div>
    );
}

export default Meal_planning;
