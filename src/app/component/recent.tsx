import Image from 'next/image';
import Logo from "../../assets/logo.png";
import PPID from "../../assets/ppid.png"
import { GoLink } from "react-icons/go";

export default function Recent() {
    return (
        <section className="relative bg-black w-full flex justify-center pt-5 pb-10">
            <div className='w-full max-w-[1400px] flex flex-col-reverse md:flex-row justify-around'>
            <div className='w-full bg-red-300 p-3'>
                Konten foto
            </div>
            <div className='w-full p-3'>
                <h1 className='font-semibold text-6xl text-slate-50'>Why does your business <span className='text-yellow-300'>need a Website?</span></h1>
                <br />
                <p className='max-w-[600px] text-md text-justify text-slate-50'>Because in today’s digital era, a website is your 24/7 online storefront, ready to attract customers anytime, anywhere. From expanding your reach to building credibility, a website keeps you ahead in the competitive market. 🚀</p>
                <br />
                <ul className=''>
                    <li className='flex max-w-[600px] justify-center gap-x-3 p-3'>
                    <img className='w-full max-w-[70px] h-full max-h-[70px] rounded-full' src="https://i.forbesimg.com/48X48-F.png" alt="" />
                    <div>
                        <p className='font-semibold antialiased text-xl text-justify text-yellow-300'>A website enhances credibility, makes a great first impression, and assures customers your business is legitimate.</p>
                        <a className='text-slate-50 hover:text-yellow-300 flex items-center gap-x-2 pt-2' href="https://www.forbes.com/councils/theyec/2020/02/03/why-every-business-needs-a-website/"><GoLink/>Why Every Business Needs a Website, Forbes.com</a>
                    </div>

                    </li>
                    <li className='flex max-w-[600px] justify-center gap-x-5 p-3'>
                    <img className='w-full max-w-[60px] h-full max-h-[60px] rounded-full' src="https://cdn.prod.website-files.com/62b33d4be1f1d95580bb1e35/65f4a5931f94b8356f7f1435_favicon.ico" alt="" />
                    <div>
                        <p className='font-semibold antialiased text-xl text-justify text-yellow-300'>
                        A website builds brand awareness, showcases offerings, and boosts visibility to grow your business.</p>
                        <a className='text-slate-50 hover:text-yellow-300 flex items-center gap-x-2 pt-2' href="https://www.forbes.com/councils/theyec/2020/02/03/why-every-business-needs-a-website/"><GoLink/>Importance of Website: Why Website is Important for a Business, seattlenewmedia.com</a>
                    </div>

                    </li>
                </ul>
            </div>
            </div>
        </section>
    );
}
