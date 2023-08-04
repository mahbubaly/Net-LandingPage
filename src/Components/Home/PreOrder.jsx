import React from 'react';
import '../../Components/Style.css'
import img from '../../assets/Images/1.png'
import img2 from '../../assets/Images/1 .png'
import img3 from '../../assets/Images/2.png'
import RoadMap from './RoadMap';

const PreOrder = () => {
    return (
        <>



            <div className='preOrder_bg max-w-screen-xl mx-auto relative '>
                <div className='lg:flex lg:mt-12 gap-5 justify-center items-center lg:w-[900px] lg:pt-[30%] pt-[10%] p-5  '>

                    <img src={img} alt="" className='bg-[#020241] lg:mt-0 mt-[70%] lg:pt-0 rounded-t-[50%] p-5 pb-0' />

                    <div className='text-white hover:shadow-2xl p-4'>
                        <h1 className='text-xl font-bold'>Learn and Grow</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>
                <div className='flex justify-end lg:my-36'>
                    <div className='lg:flex gap-5 justify-center  items-center lg:w-[900px] lg:pt-[10%] pt-[10%] p-5  '>
                        <div className='text-white hover:shadow-2xl p-4 '>
                            <h1 className='text-xl font-bold'>Learn and Grow</h1>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        <img src={img2} alt="" className='bg-[#020241] rounded-t-[50%]  p-14 pb-0' />
                    </div>
                </div>
                <div className='lg:flex gap-5 justify-center items-center lg:w-[900px] lg:pt-[10%] pt-[10%] p-5  '>
                    <img src={img3} alt="" className='bg-[#020241] rounded-t-[50%] p-10 pb-0' />
                    <div className='text-white hover:shadow-2xl p-4'>
                        <h1 className='text-xl font-bold'>Learn and Grow</h1>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                        </p>
                    </div>
                </div>

            </div>
            <div className='preOrder_down  max-w-screen-xl mx-auto  '>

            </div>


            <RoadMap />



        </>
    );
};

export default PreOrder;