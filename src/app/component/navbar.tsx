import Image, { StaticImageData } from 'next/image';
import logo from '../../../public/logo/logo.png';
import { GiHamburgerMenu } from "react-icons/gi";

const logoImage: StaticImageData = logo;

const Navbar = () => {
    return (
        <header>
            <nav className="lg:hidden flex justify-between items-center font-semibold py-3 px-5 text-slate-100 ">
            <a href="#" target="_blank" rel="noopener noreferrer">
            <Image 
                src={logoImage} 
                alt="Logo"
                width={72} 
                height={72}
            />
            </a>  
            <div className='flex gap-x-5'>
            <button className='p-4 rounded-full shadow-md bg-white text-black hover:bg-slate-800 hover:text-white duration-300'>
                LET&apos;S COLLABORATE
            </button>
                <button>
                    <GiHamburgerMenu
                    className='text-3xl'
                    />
                </button>

            </div>
            </nav>
            <nav className="hidden lg:flex justify-between items-center font-semibold p-3 text-slate-100 ">
            <a href="#" target="_blank" rel="noopener noreferrer">
            <Image 
                src={logoImage} 
                alt="Logo"
                width={72} 
                height={72}
            />
            </a>

            <ul className='flex gap-x-7'>
                <li>
                    <a href="/home" target="_blank" className='hover:text-slate-400 duration-300'>HOME</a>
                </li>
                <li>
                    <a href="#" target="_blank" className='hover:text-slate-400 duration-300'>ABOUT ME</a>
                </li>
                <li>
                    <a href="#" target="_blank" className='hover:text-slate-400 duration-300'>SERVICE</a>
                </li>
                <li>
                    <a href="#" target="_blank" className='hover:text-slate-400 duration-300'>PROJECT</a>
                </li>
                <li>
                    <a href="#" target="_blank" className='hover:text-slate-400 duration-300'>CONTACT ME</a>
                </li>
            </ul>
            <button className='p-4 rounded-full shadow-md bg-white text-black hover:bg-slate-800 hover:text-white duration-300'>
                LET&apos;S COLLABORATE
            </button>
        </nav>

        </header>

    );
};

export default Navbar;
