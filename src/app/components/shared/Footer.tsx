"use client"

import { cormorantInfant } from "@/lib/fonts"

export default function Footer() {
    return (
        <footer className={`${cormorantInfant.className} flex flex-col py-10 px-4 text-center`}>
            <p className="text-base">
                Built with dedication by{" "}
                <a href="https://rod-syntax.vercel.app/" target="_blank" className="font-bold">
                    rod.syntax
                </a>
            </p>

        </footer>
    )
}