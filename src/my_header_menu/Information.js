import TaiwanNewsComponent from '../my_header_menu/NewsComponent';

function Information() {
    return (
        <div className="relative w-full h-full">
            <div className='absolute inset-0'>
                <span className=' ml-[16.354vw] mt-[19.759vh] w-[14.299vw] h-[7.288vh] text-[#83BBAE] text-[2.083vw] font-Noto_Sans_ch font-bold leading-[6.586vh] flex items-center justify-start'>新聞報導</span>
                <div className='ml-[16.354vw] mt-[5.435vh]  w-[62.414vw] h-[76.701vh] overflow-y-scroll overflow-x-hidden'>
                    <TaiwanNewsComponent />

                </div>
            </div>



        </div>
    );
}

export default Information;
