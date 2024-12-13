import Image from 'next/image';
import type { StaticImageData } from 'next/image'
import Me from "../../assets/me.png"

export default function Hero(){
    return(
        <div className="text-white flex justify-center items-center gap-x-20">
            <section className='w-full max-w-[475px]'>
                <h1 className='text-5xl'>Hello! I&apos;m <span className='font-semibold'>Daffa Almayrizq</span></h1>
                <br />
                <h2 className='text-3xl'>A Fullstack Website Developer based in Jakarta, Indonesia</h2>
                <br />
                <div className='flex gap-x-5'>
                    <button className='p-3 rounded-full bg-yellow-300 text-black shadow-md font-semibold hover:bg-yellow-400 hover:scale-110 duration-300'>Talk with Me!</button>
                    <button className='p-3 rounded-full bg-slate-50 text-black shadow-lg font-semibold hover:bg-slate-200 hover:scale-110 duration-300'> See My Work!</button>
                </div>
            </section>
            <div className='relative'>
            <div className='absolute bg-yellow-300 w-[550px] h-[550px] top left-[-40px] right-0 -z-10 rounded-full'></div>
            <Image 
                src={Me} 
                alt="Logo"
                className='w-full max-w-[400px] h-auto '
            />
            </div>

        </div>
    )
}