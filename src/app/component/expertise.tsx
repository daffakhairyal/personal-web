import Image from 'next/image';
import Data from "../../assets/data.png";
import Website from "../../assets/website.png"
import { GoLink } from "react-icons/go";

export default function Expertise(){
    return(
                <section className="relative bg-black w-full flex justify-center flex p-5 md:px-20 md:py-20">
                    <div className='w-full max-w-[1400px] flex flex-col pt-10'>
                        <h1 className='text-white text-5xl font-semibold border-b-4 border-b-slate-50 py-3 max-w-[500px]'>Discover What I Offer</h1>
                        <div className='grid grid-rows-1 md:grid-rows-2 md:grid-flow-col text-white  p-5 '>
                            <div className=' flex flex-col justify-center items-center p-5 gap-y-3'>
                                <div className='object-cover w-full max-w-[200px] h-full max-h-[100px]'>
                                <Image
                                src={Website}
                                alt='Website'
                                className='object-cover w-full max-w-[200px] h-full max-h-[100px]'
                                />
                                </div>
                                <h1 className='text-yellow-300 text-xl font-semibold'>Professional Business Websites</h1>
                                <p className='text-slate-300 text-lg max-w-[300px]'>I build modern, user-friendly websites to attract and retain customers.</p>
                            </div>
                            <div className='flex flex-col justify-center items-center p-5 gap-y-3'>
                                <div className='object-cover w-full max-w-[200px] h-full max-h-[100px]'>
                                <Image
                                src={Website}
                                alt='Website'
                                className='object-cover w-full max-w-[200px] h-full max-h-[100px]'
                                />
                                </div>
                                <h1 className='text-yellow-300 text-xl font-semibold'>Forecasting Business Trends</h1>
                            </div>
                            <div className=' flex flex-col justify-center items-center p-5 gap-y-3'>
                                <div className='object-cover w-full max-w-[200px] '>
                                <Image
                                src={Data}
                                alt='Data'
                                className='object-cover w-full max-w-[170px] h-full max-h-[130px]'
                                />
                                </div>
                                <h1 className='text-yellow-300 text-xl font-semibold'>Turning Data into Insights</h1>
                                <p className='text-slate-300 text-lg max-w-[300px]'> I help uncover patterns in your business data to improve efficiency.</p>
                            </div>
                            <div className=' flex flex-col justify-center items-center p-5 gap-y-3'>
                                <div className='object-cover w-full max-w-[200px] h-full max-h-[100px]'>
                                <Image
                                src={Website}
                                alt='Website'
                                className='object-cover w-full max-w-[200px] h-full max-h-[100px]'
                                />
                                </div>
                                <h1 className='text-yellow-300 text-xl font-semibold'>Customized Solutions for Your Business</h1>
                            </div>
                        </div>
                    </div>
                    
                </section>
    )
}