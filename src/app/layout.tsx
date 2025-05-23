import { Geist, Geist_Mono } from "next/font/google";
import BackgroundIntroPanel from "@/components/background-intro-panel";
import "./globals.css";
import { Metadata, Viewport } from "next";
import { PropsWithChildren } from "react";

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "BIZN",
    description: "AI 기반 기업 뉴스 요약 서비스",
    icons: {
        icon: "/logo.svg",
        shortcut: "/logo.svg",
        apple: "/logo.svg",
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
};

export default function RootLayout({ children }: PropsWithChildren) {
    return (
        <html lang="ko">
            <body
                className={`${geistSans.variable} ${geistMono.variable} antialiased relative bg-gray-100/50 h-screen overflow-hidden`}
            >
                <BackgroundIntroPanel />
                <div className="mobile-container relative">
                    <div className="mobile-padding h-screen overflow-y-auto">
                        {children}
                    </div>
                </div>
            </body>
        </html>
    );
}
