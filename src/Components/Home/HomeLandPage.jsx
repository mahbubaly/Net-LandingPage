import React, { useEffect, useRef, useState } from 'react';
import logo from '../../assets/Images/logo.png'
import { RxCross2 } from 'react-icons/rx';
import PreOrder from './PreOrder';
import img1 from '../../assets/Images/Ban.png'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from "react-icons/md";
import { Link } from 'react-scroll';

const HomeLandPage = () => {
    const navBar = <>
        <li>
            <Link  to="buy" spy={true} smooth={true} offset={50} duration={500}
                className="lg:text-[#0B0B44] text-white  rounded-md  shadow_bg  text-lg  transition hover:text-gray-500/75"
               
            >
                How to buy
            </Link>
        </li>

        <li>
            <Link  to="roadMap" spy={true} smooth={true} offset={50} duration={500}
                className="lg:text-[#0B0B44] text-white text-lg transition hover:text-gray-500/75"
                href="/"
            >
                Roadmap
            </Link>
        </li>

        <li>
            <Link to="whiteBoard" spy={true} smooth={true} offset={50} duration={500}
                className="lg:text-[#0B0B44] text-white text-lg transition hover:text-gray-500/75"
                href="/"
            >
                Whitepaper
            </Link>
        </li>





    </>


    const [open, setOpen] = useState(false);
    const [timerDays, setTimerDays] = useState('00');
    const [timerHours, setTimerHours] = useState('00');
    const [timerMin, setTimerMin] = useState('00');
    const [timerSec, setTimerSec] = useState('00');


    let interval = useRef;

    const starTimer = () => {
        const countdownDate = new Date('12 aug 2023');


        interval = setInterval(() => {
            const now = new Date();
            const distance = countdownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
            const min = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
            const sec = Math.floor(distance % (1000 * 60) / 1000);


            if (distance < 0) {
                clearInterval(interval.current);
            }
            else {
                setTimerDays(days);
                setTimerHours(hours);
                setTimerMin(min);
                setTimerSec(sec);


            }



        }, 1000)
    }

    useEffect(() => {
        starTimer();

        return () => {
            clearInterval(interval.current);


        }



    }, [])

    return (
        <>
            <header id='nav' className="bg-white">
                <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
                    <div className="flex h-16 items-center justify-between">
                        <div className="flex-1 flex items-center gap-2">
                            <a className="block text-teal-600" href="/">
                                <span className="sr-only">Home</span>
                                <img src={logo} alt="" />
                            </a>
                            <h1 className='text-2xl text-[#00006A] font-bold'>Catix</h1>
                        </div>

                        <div className="md:flex md:items-center md:gap-12">
                            <nav aria-label="Global" className="hidden md:block">
                                <ul className="flex items-center text-primary gap-6 text-sm">
                                    {
                                        navBar
                                    }

                                </ul>
                            </nav>

                            <div className="flex items-center gap-4">


                                <div className="block z-50 lg:z-0 md:hidden">
                                    <button onClick={() => setOpen(!open)}
                                        className="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
                                    >
                                        <span className="sr-only">Toggle menu</span>


                                        <span>
                                            {
                                                open === true ? <>   <> </> </> : <svg
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    className="h-5 w-5 "
                                                    fill="none"
                                                    viewBox="0 0 24 24"
                                                    stroke="currentColor"
                                                    stroke-width="2"
                                                >
                                                    <path
                                                        stroke-linecap="round"
                                                        stroke-linejoin="round"
                                                        d="M4 6h16M4 12h16M4 18h16"
                                                    />
                                                </svg>
                                            }
                                        </span>

                                        <div className={`${open ? 'bg-primary w-full right-0 top-0  p-2   pl-3 ' : '-bottom-96 -left-[100%]'
                                            } absolute flex flex-col duration-500  gap-6 `}  >


                                            <nav aria-label="Global">
                                                <ul className="block  lg:hidden justify-end  gap-6 text-sm ">
                                                    {navBar}
                                                </ul>

                                                <div className='flex justify-center'>
                                                    <div className='p-2 mx-auto rounded-md  shadow_bg  text-sm font-medium  transition  lg:my-0      lg:text-lg'>
                                                        <RxCross2 className="h-7 bottom-0  w-7 bg-white text-black swap-off fill-current" />
                                                    </div>
                                                </div>
                                            </nav>



                                        </div>

                                    </button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <section class="">
                        <div
                            class="mx-auto max-w-screen-xl px-4 py-32 lg:flex  lg:items-center"
                        >
                            <div class="mx-auto max-w-xl text-center">
                                <h1 class="text-3xl text-[#12124E] font-extrabold sm:text-5xl">
                                    Best NFT Platform for creators

                                </h1>

                                <p className='text-lg font-bold text-primary  mt-7 mb-2'>Lunch in: </p>

                                <div className='bg-[#F0F1F8] flex justify-center rounded-3xl'>
                                    <div className="grid grid-flow-col gap-5 text-center ">
                                        <div className="flex flex-col p-2 border-r-2   text-primary">
                                            <span className="countdown font-mono text-5xl">
                                                <span style={{ "--value": timerDays }}></span>
                                            </span>
                                            Days
                                        </div>
                                        <div className="flex flex-col p-2 border-r-2  text-primary">
                                            <span className="countdown font-mono text-5xl">
                                                <span style={{ "--value": timerHours }}></span>
                                            </span>
                                            Hours
                                        </div>
                                        <div className="flex flex-col p-2 border-r-2   text-primary">
                                            <span className="countdown font-mono text-5xl">
                                                <span style={{ "--value": timerMin }}></span>
                                            </span>
                                            Min
                                        </div>
                                        <div className="flex flex-col p-2 border-r-2  text-primary">
                                            <span className="countdown font-mono text-5xl">
                                                <span style={{ "--value": timerSec }}></span>
                                            </span>
                                            Sec
                                        </div>
                                    </div>
                                </div>



                            </div>
                        </div>
                    </section>
                </div>

                <div className='mx-auto justify-end flex absolute lg:left-[42%] left-[23%] md:left-[37%] md:-mt-28 -mt-20 lg:-mt-28'>
                    <div id='buy' className=''>
                        <img src={img1} alt="" className='md:w-full w-[70%] ' />

                        <div className='flex items-center md:ml-10'>
                            <MdKeyboardDoubleArrowRight className='w-6 h-6 text-[#FF5C64]' />
                            <button className='font-bold rounded-md text-lg p-3  text-white bg-[#FF5C64] '>PRE-ORDER
                            </button>
                            <MdKeyboardDoubleArrowLeft className='w-6 h-6 text-[#FF5C64]' />

                        </div>
                    </div>
                </div>


                <PreOrder />
            </header>


        </>
    );
};

export default HomeLandPage;