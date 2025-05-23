"use client";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export function NavBar() {
    const router = useRouter();
    const pathname = usePathname();

    const handleBack = () => {
        if (pathname.includes('/chart') || pathname.includes('/graph')) {
            router.back();
        } else if (pathname.startsWith('/news/')) {
            router.push('/');
        } else {
            router.back();
        }
    };

    return (
        <nav className="relative w-full py-3.5 px-4 flex items-center border-b border-gray-100 bg-white/90 backdrop-blur-sm">
            <button 
                onClick={handleBack}
                className="absolute left-4 text-gray-600 hover:text-gray-900 transition-colors"
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth={2} 
                    stroke="currentColor" 
                    className="w-6 h-6"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M15.75 19.5L8.25 12l7.5-7.5" 
                    />
                </svg>
            </button>
            <div className="flex-1 flex justify-center">
                <Link href="/" className="flex items-center hover:opacity-80 transition-opacity">
                    <img
                        src="/BIZNEWS.png"
                        alt="BizNews Logo"
                        width={120}
                        height={40}
                        className="w-28 h-auto"
                    />
                </Link>
            </div>
        </nav>
    );
} 