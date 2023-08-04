import React from 'react';
import line from '../../assets/Images/Line 4.png'
import Footer from './Footer';

const RoadMap = () => {
    return (
        <>
            <div id='roadMap' className='max-w-screen-xl mx-auto'>
                <div>
                    <h1 className='text-2xl font-bold text-center text-primary -mt-48'>Roadmap</h1>
                </div>


                <div>


                    <div className='mt-52 mb-10 w-[75%] mx-auto'>
                        <h2 className="sr-only">Steps</h2>

                        <div>
                            <div className="overflow-hidden rounded-full bg-gray-200">
                                <div className="h-4 w-1/2 rounded-full bg-[#ff7077]"></div>
                            </div>

                            <ol className="mt-4 grid grid-cols-6 text-sm font-medium text-gray-500">
                                <li className="  text-primary sm:gap-1.5">
                                    <img src={line} alt="" className='ml-10' />

                                    <h1 className="hidden sm:inline  "> Development </h1>


                                </li>

                                <li className="flex items-center justify-center text-blue-600 sm:gap-1.5">


                                    <li className="  text-primary sm:gap-1.5">
                                        <img src={line} alt="" className='lg:ml-8' />

                                        <h1 className="hidden sm:inline  "> Launched <br /> <small className='text-sm text-[#00006A]'>Feb 2022</small> </h1>


                                    </li>


                                </li>
                                <li className="flex items-center justify-center text-blue-600 sm:gap-1.5">


                                    <li className="  text-primary sm:gap-1.5">
                                        <img src={line} alt="" className='lg:ml-8' />

                                        <h1 className="hidden sm:inline  "> Minting <br /> <small className='text-sm text-[#00006A]'>Feb 2022</small> </h1>


                                    </li>


                                </li>
                                <li className="flex items-center justify-center text-blue-600 sm:gap-1.5">


                                    <li className="  text-primary sm:gap-1.5">
                                        <img src={line} alt="" className='lg:ml-8' />

                                        <h1 className="hidden sm:inline  "> Distribute <br /> <small className='text-sm text-[#00006A]'>Feb 2022</small> </h1>


                                    </li>


                                </li>
                                <li className="flex items-center justify-center text-blue-600 sm:gap-1.5">


                                    <li className="  text-primary sm:gap-1.5">
                                        <img src={line} alt="" className='lg:ml-8' />

                                        <h1 className="hidden sm:inline  "> Series A <br /> <small className='text-sm text-[#00006A]'>Feb 2022</small> </h1>


                                    </li>


                                </li>
                                <li className="flex items-center justify-center text-blue-600 sm:gap-1.5">


                                    <li className="  text-primary sm:gap-1.5">
                                        <img src={line} alt="" className='lg:ml-8' />

                                        <h1 className="hidden sm:inline  "> Series B <br /> <small className='text-sm text-[#00006A]'>Feb 2022</small> </h1>


                                    </li>


                                </li>


                            </ol>
                        </div>
                    </div>
                </div>

                {/* FAQ */}

                <div id='whiteBoard' className='white_bg p-10'>

                    <div className='mx-auto max-w-xl text-center'>
                        <h1 class="text-3xl font-extrabold text-primary sm:text-4xl my-2">
                            Frequently Asked Questions

                        </h1>

                    </div>


                    <div class="space-y-4">
                        <details class="group [&_summary::-webkit-details-marker]:hidden" open>
                            <summary
                                class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-[#F1F1F8] p-4 text-gray-900"
                            >
                                <h2 class="font-bold text-lg">
                                    What is the benefit of catix?
                                </h2>

                                <svg
                                    class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </summary>

                            <p class="mt-4 px-4 leading-relaxed text-gray-700 bg-white p-4">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
                            </p>
                        </details>

                        <details class="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-[#F1F1F8] p-4 text-gray-900"
                            >
                                <h2 class="font-bold text-lg">
                                    What is the benefit of catix?
                                </h2>

                                <svg
                                    class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </summary>

                            <p class="mt-4 px-4 leading-relaxed bg-white text-gray-700">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                earum similique!
                            </p>
                        </details>
                        <details class="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-[#F1F1F8] p-4 text-gray-900"
                            >
                                <h2 class="font-bold text-lg">
                                    What is the benefit of catix?
                                </h2>

                                <svg
                                    class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </summary>

                            <p class="mt-4 px-4 leading-relaxed bg-white text-gray-700">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                earum similique!
                            </p>
                        </details>
                        <details class="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-[#F1F1F8] p-4 text-gray-900"
                            >
                                <h2 class="font-bold text-lg">
                                    What is the benefit of catix?
                                </h2>

                                <svg
                                    class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </summary>

                            <p class="mt-4 px-4 leading-relaxed bg-white text-gray-700">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                earum similique!
                            </p>
                        </details>
                        <details class="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-[#F1F1F8] p-4 text-gray-900"
                            >
                                <h2 class="font-bold text-lg">
                                    What is the benefit of catix?
                                </h2>

                                <svg
                                    class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </summary>

                            <p class="mt-4 px-4 leading-relaxed bg-white text-gray-700">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                earum similique!
                            </p>
                        </details>
                        <details class="group [&_summary::-webkit-details-marker]:hidden">
                            <summary
                                class="flex cursor-pointer items-center justify-between gap-1.5 rounded-lg bg-[] p-4 text-gray-900"
                            >
                                <h2 class="font-bold text-lg">
                                    What is the benefit of catix?
                                </h2>

                                <svg
                                    class="h-5 w-5 shrink-0 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </summary>

                            <p class="mt-4 px-4 leading-relaxed bg-white text-gray-700">
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis
                                molestias culpa in, recusandae laboriosam neque aliquid libero nesciunt
                                voluptate dicta quo officiis explicabo consequuntur distinctio corporis
                                earum similique!
                            </p>
                        </details>
                    </div>

                </div>


                <Footer/>





            </div>

        </>
    );
};

export default RoadMap;