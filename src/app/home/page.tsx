"use client";

import { useEffect, useRef, useState } from 'react';
import Typed from 'typed.js';
import Image from 'next/image';
import Me from "../../assets/me.png";

export default function Hero() {
    const typedRef = useRef<HTMLSpanElement>(null);
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true); // Setiap kali komponen dimuat di client
        if (isClient && typedRef.current) {
            const typed = new Typed(typedRef.current, {
                strings: ["Data Analyst", "Fullstack Website Developer","Excel Expert"],
                typeSpeed: 50,
                backSpeed: 30,
                loop: true,
            });
            return () => typed.destroy();
        }
    }, [isClient]);

    return (
        <div className="text-white flex-col-reverse flex md:flex-row justify-center items-center gap-x-10">
            <section className="w-full max-w-[475px] p-5">
                <h1 className="text-5xl">
                    Hello! I&apos;m <span className="font-semibold">Daffa Almayrizq</span>
                </h1>
                <br />
                <h2 className="text-3xl">
                    {/* Render typed.js hanya di client */}
                    {isClient && <span ref={typedRef}></span>} based in Jakarta, Indonesia
                </h2>
                <br />
                <div className="flex gap-x-5">
                    <button className="p-3 rounded-full bg-yellow-300 text-black shadow-md font-semibold hover:bg-yellow-400 hover:scale-110 duration-300">
                        Talk with Me!
                    </button>
                    <button className="p-3 rounded-full bg-slate-50 text-black shadow-lg font-semibold hover:bg-slate-200 hover:scale-110 duration-300">
                        See My Work!
                    </button>
                </div>
            </section>
            <div className="relative">
    <div className='max-w-[400px] w-full'>
        <Image
            src={Me}
            alt="Logo"
            className='sticky z-10' // Static untuk mempertahankan posisi relatif
        />
    </div>
    <div className='absolute w-full h-full top-0 left-[-40px] bg-yellow-300 rounded-full max-h-[500px] max-w-[500px] z-0'></div>
</div>

        </div>
    );
}
