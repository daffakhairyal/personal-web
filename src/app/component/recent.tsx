import Image from 'next/image';
import Logo from "../../assets/logo.png";
import PPID from "../../assets/ppid.png"

export default function Recent() {
    return (
        <section className="relative">
            <Image
                src={Logo}
                alt="Logo"
                className='w-[100px] md:w-[150px] absolute top-[-60px] md:top-[-60px] left-1/2 transform -translate-x-1/2  z-10' 
            />
            <div className='absolute top-0 -z-10 '>
            <div className='relative'>
            <div className='absolute w-full h-[100px] md:h-[200px] bg-gradient-to-b from-black'></div>
            <Image
            src={PPID}
            alt="PPID"
            className=''
            />
            </div>

            </div>
        </section>
    );
}
