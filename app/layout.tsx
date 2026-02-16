import type { Metadata } from "next";
import { Noto_Serif_JP, Noto_Sans_JP } from 'next/font/google';
import Link from 'next/link';
import "./globals.css";

// 明朝体（知性と伝統の象徴）
const notoSerif = Noto_Serif_JP({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-serif',
});

// ゴシック体（モダンと機能性の象徴）
const notoSans = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: "まどい | 知の越境が日常になる社会へ",
  description: "誰もが才能を磨き、発揮できる仕組みをつくる",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${notoSerif.variable} ${notoSans.variable}`}>
      <body className="antialiased bg-[#F9F8F6] text-[#1A2D42]">
        
        {/* --- Global Navigation --- */}
        <nav className="fixed top-0 w-full z-[100] px-6 md:px-12 py-8 flex justify-between items-center mix-blend-difference text-white">
          <Link href="/" className="group">
            <span className="font-serif text-2xl md:text-3xl tracking-tighter block group-hover:opacity-70 transition-all">
              madoi
            </span>
          </Link>
          
          <div className="flex gap-8 md:gap-12 items-center">
            <Link href="/story" className="text-[10px] font-sans tracking-[0.3em] uppercase opacity-60 hover:opacity-100 transition-all">
              Our Story
            </Link>
            <div className="w-px h-4 bg-white/20 hidden md:block" />
            <Link href="/" className="text-[10px] font-sans tracking-[0.3em] uppercase opacity-60 hover:opacity-100 transition-all">
              Contact
            </Link>
          </div>
        </nav>

        {children}
        
      </body>
    </html>
  );
}