import Image from 'next/image';
import Logo from "../../assets/logo.png";
import PPID from "../../assets/ppid.png"
import { GoLink } from "react-icons/go";

export default function Expertise(){
    return(
                <section className="relative bg-black w-full flex p-5 md:p-10">
                    <div className='w-full max-w-[1400px] flex flex-col-reverse md:flex-row pt-10  md:pt-20'>
                        <h1 className='text-white text-5xl font-semibold border-b-4 border-b-slate-50 py-3'>Discover What I Offer</h1>
                    </div>
                </section>
    )
}