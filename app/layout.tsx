import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

{/* 右側：ミニマルな進行度インジケーター（ださくない版） */}
<div className="fixed right-12 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end space-y-20">
  <div className="flex flex-col items-center space-y-4">
    <div className="w-[1px] h-32 bg-gray-100 relative">
      {/* 現在のセクションに合わせて動く極細の線 */}
      <div className="absolute top-0 left-0 w-full h-1/4 bg-madoi-green transition-all duration-500" />
    </div>
    <span className="text-[9px] font-mono text-gray-300 tracking-[0.3em] uppercase rotate-90 origin-right translate-y-8">
      Phase_01
    </span>
  </div>
</div>

{/* フローティングボタンは削除 */}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className="scroll-smooth">
      <body className={`${inter.className} bg-white text-slate-900 selection:bg-madoi-green/30`}>
        {/* ナビゲーション */}
        <nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">
            <span className="text-2xl font-black tracking-tighter">MADOI</span>
            <div className="flex space-x-12 text-[10px] font-bold tracking-[0.3em] uppercase">
              <a href="#cradle" className="hover:text-madoi-green transition">The Cradle</a>
              <a href="#protocol" className="hover:text-madoi-green transition">The Protocol</a>
              <a href="#flight" className="hover:text-madoi-green transition">The Flight</a>
            </div>
          </div>
        </nav>

        {/* 右側インジケーター */}
        <div className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-center space-y-4">
          <span className="text-[10px] font-mono text-gray-300 rotate-90 mb-8 tracking-widest">SCROLL</span>
          {[1, 2, 3].map((i) => (
            <div key={i} className="w-[1px] h-12 bg-gray-100 relative">
              <div className="absolute top-0 left-0 w-full h-1/3 bg-gray-300"></div>
            </div>
          ))}
        </div>

        {children}
      </body>
    </html>
  );
}

