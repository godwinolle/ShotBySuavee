"use client"

import Link from "next/link"
import { cormorantInfant } from "@/lib/fonts"

export default function Navigation(){
    return(
        <nav className={`${cormorantInfant.className} fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-black/5`}>
            <div className="max-w-7xl mx-auto px-6 sm:px-8 py-4 flex items-center justify-between">
                {/* Name/Logo - left aligned */}
                <Link 
                    href="/" 
                    className="text-xl font-semibold text-black hover:opacity-70 transition-opacity"
                >
                    shotbysuavee
                </Link>

                {/* Navigation Links - right aligned */}
                <div className="flex items-center gap-8">
                    <Link 
                        href="/film" 
                        className="text-base font-normal text-black hover:opacity-70 transition-opacity"
                    >
                        Film
                    </Link>
                    <Link 
                        href="/digital" 
                        className="text-base font-normal text-black hover:opacity-70 transition-opacity"
                    >
                        Digital
                    </Link>
                    <a 
                        href="https://instagram.com/shotbysuavee" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-base font-normal text-black hover:opacity-70 transition-opacity"
                    >
                        Contact
                    </a>
                </div>
            </div>
        </nav>
    )
}