import React from 'react';
import logo from '../../assets/Images/logo.png'
import { MdKeyboardArrowUp } from 'react-icons/md';
import { Link } from 'react-scroll';


const Footer = () => {
    return (
        <>


            <div className="flex-1 flex items-center gap-2 justify-center ">
                <a className=" text-teal-600" href="/">
                    <span className="sr-only">Home</span>
                    <img src={logo} alt="" />
                </a>
                <h1 className='text-2xl text-[#00006A] font-bold'>Catix</h1>
            </div>



            <ul className="mt-6 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
                <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                        Privacy Policy
                    </a>
                </li>

                <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                        Terms and Conditions
                    </a>
                </li>

                <li>
                    <a className="text-gray-700 transition hover:text-gray-700/75" href="/">
                        Whitepaper
                    </a>
                </li>


            </ul>

            <footer className="footer footer-center p-4  text-base-content">
                <div>
                    <p>Copyright ©  Xpeed Page 2023</p>
                </div>

            </footer>

          

            <Link activeClass='active' className=' px-2 block rounded-md  shadow_bg  text-sm font-medium  transition  lg:my-0 my-3     lg:text-lg' activeStyle={{
                color: 'white',
                borderBottom: '2px solid white',

            }} to='nav' spy={true} smooth={true} offset={50} duration={500}   >
                <div className='flex justify-end'>
                    
                    <MdKeyboardArrowUp href='nav' className='w-10 h-10 text-white rounded-full bg-[#FF5C64] p-2 mb-5 mr-32 -mt-14' />
                </div>

            </Link>


        </>
    );
};

export default Footer;