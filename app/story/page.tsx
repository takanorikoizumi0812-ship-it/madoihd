'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

export default function StoryPage() {
  return (
    <main className="bg-[#000000] text-white/90 min-h-screen selection:bg-[#7CFC00] selection:text-black pb-40">
      
      {/* Navigation (ロゴをライムグリーンに) */}
        

      {/* --- Section 01: THE FOG (霧の海) --- */}
      <header className="h-screen flex flex-col justify-center items-center px-8 relative overflow-hidden">
        {/* 霧のようなパーティクル（薄いライムグリーン） */}
        <motion.div 
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 5, repeat: Infinity }}
          className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,#7CFC00_0%,transparent_70%)] opacity-5"
        />
        <div className="max-w-4xl text-center space-y-12 relative z-10">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] tracking-[0.6em] uppercase text-[#7CFC00]/50"
          >
            The Origin Story
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.5 }}
            className="text-6xl md:text-3xl font-serif leading-tight tracking-tight"
          >
            1年半前、 私たちは <span className="text-4xl text-[#A8D08D]">「霧を集める」</span> <br />という壁の前で出会った。
          </motion.h1>
        </div>
      </header>

      {/* --- Section 02: THE TWO APPROACHES (二つの異能) --- */}
      <section className="max-w-6xl mx-auto px-8 grid md:grid-cols-2 gap-32 items-start py-40">
        {/* 小泉 COO: 表面物理 */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-10"
        >
          <div className="aspect-[3/4] relative overflow-hidden bg-white/5 border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000">
            <Image src="/images/koizumi.jpg" alt="小泉 剛愼" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-[#7CFC00]">
              Surface Physics Architect<br />
              <span className="text-sm text-white/40 font-sans tracking-widest uppercase">Goushin Koizumi</span>
            </h2>
            <p className="text-sm leading-relaxed text-white/60 font-light text-justify">
              名古屋、そして静岡。そこで感じた「構造的な格差」への問いを、東京大学で学ぶ表面物理の論理で解き明かそうとしていた。
              緻密な計算と幾何学的なアプローチ。そこには、カオスを秩序に変えるための揺るぎない「型」があった。
            </p>
          </div>
        </motion.div>

        {/* 宇山 CEO: バイオミミクリー */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="space-y-10 md:mt-60"
        >
          <div className="aspect-[3/4] relative overflow-hidden bg-white/5 border border-white/10 grayscale hover:grayscale-0 transition-all duration-1000">
            <Image src="/images/uyama.jpg" alt="宇山 学志" fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
          </div>
          <div className="space-y-6">
            <h2 className="text-2xl font-serif text-[#7CFC00]">
              Biomimicry Researcher<br />
              <span className="text-sm text-white/40 font-sans tracking-widest uppercase">Satoshi Uyama</span>
            </h2>
            <p className="text-sm leading-relaxed text-white/60 font-light text-justify">
              島根の地から、生物の進化に学ぶバイオミミクリーという視点を携えて。
              自然界が何億年もかけて導き出した生命のゆらぎと適応。
              そこには現場の熱量に裏打ちされた、計算だけでは辿り着けない「生」の知恵があった。
            </p>
          </div>
        </motion.div>
      </section>

      {/* --- Section 03: THE COLLISION (衝突と共鳴) --- */}
      <section className="py-60 px-8 flex flex-col items-center bg-[radial-gradient(circle_at_50%_50%,#1A2D42_0%,transparent_100%)]">
        <div className="max-w-3xl space-y-20 relative">
          <div className="text-center space-y-8">
            <p className="text-[10px] font-mono text-[#7CFC00]/40 tracking-[0.5em] uppercase">The Encounter Formula</p>
          </div>

          <p className="text-xl md:text-3xl font-serif leading-relaxed text-center text-white/80">
            異なるバックグラウンドを持ちながら、<br className="hidden md:block" />
            同じ空を見つめる仲間が増えていく。<br />
            そこには単なる無機質な「生産性」ではなく、<br className="hidden md:block" />
            <span className="text-5xl text-[#A8D08D]">「楽しさ」</span>と<span className="text-5xl text-[#A8D08D]">「活力」</span> があった。
          </p>
        </div>
      </section>
         

      {/* --- Section 04: THE VOW (決意と誕生) --- */}
      <section className="max-w-4xl mx-auto px-8 space-y-16 border-t border-black/5 pt-32">
        <h2 className="text-3xl font-serif">知の越境が、日常になるまで。</h2>
        <div className="grid md:grid-cols-2 gap-16 text-sm leading-relaxed opacity-70">
          <p>
            しかし、この「異能の掛け合わせ」は容易ではない。多様な個性が集まるチームを機能させるには、高度な調整が必要であることを私たちは知った。そして何より、地方にはその「チームを組む機会」さえ、構造的に不足している現実がある。
          </p>
          <p>
            「この知的な熱狂を、地方の隅々にまで届けたい」<br />
            「異能たちが場所を問わずに出会い、共鳴できる架け橋を作ろう」<br />
            僕らなら、あの熱い日々を仕組みとして再現できる。その確信とともに「まどい」は誕生した。
          </p>
        </div>
      </section>

      

    </main>
  );
}