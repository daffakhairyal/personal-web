import Image from 'next/image';
import Logo from "../../assets/logo.png";

export default function Recent() {
    return (
        <section className="relative bg-yellow-300">
            <Image
                src={Logo}
                alt="Logo"
                width={150}
                className='absolute top-[-60px] left-1/2 transform -translate-x-1/2  z-10' 
            />
            <h1 className='flex justify-center items-center py-20 font-semibold text-3xl md:text-4xl'>My Recent Work</h1>
        </section>
    );
}
