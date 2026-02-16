'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function StoryPage() {
  return (
    <main className="bg-[#F9F8F6] text-[#1A2D42] min-h-screen selection:bg-[#A8D08D] selection:text-white pb-40">
      

      {/* --- Section 01: THE FOG (霧の海) --- */}
      <header className="h-[80vh] flex flex-col justify-center items-center px-8 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.05 }}
          className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/p6.png')] pointer-events-none"
        />
        <div className="max-w-4xl text-center space-y-12">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-sm tracking-[0.4em] uppercase opacity-40"
          >
            The Origin Story
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1.2 }}
            className="text-4xl md:text-7xl font-serif leading-tight"
          >
            1年半前、私たちは<br />「霧」の前で出会った。
          </motion.h1>
        </div>
      </header>

      {/* --- Section 02: TWO APPROACHES (二つの異能) --- */}
      <section className="max-w-5xl mx-auto px-8 grid md:grid-cols-2 gap-24 items-start">
        <div className="space-y-8">
          <h2 className="text-xl font-serif border-l-2 border-[#1A2D42] pl-6 py-2">
            Surface Physics Architect<br />
            <span className="text-sm font-sans opacity-50 uppercase tracking-widest">小泉 剛愼 / Surface Structure</span>
          </h2>
          <p className="text-sm leading-relaxed opacity-70">
            一人は、表面の物理的な構造をナノレベルで調整することで、空気中の水分を捕捉する機能を引き出そうとしていた。
            緻密な計算と、規則正しい幾何学的なアプローチ。そこには論理という名の揺るぎない「型」があった。
          </p>
        </div>

        <div className="space-y-8 md:mt-40">
          <h2 className="text-xl font-serif border-l-2 border-[#A8D08D] pl-6 py-2">
            Biomimicry Researcher<br />
            <span className="text-sm font-sans opacity-50 uppercase tracking-widest">宇山 学志 / Biological Approach</span>
          </h2>
          <p className="text-sm leading-relaxed opacity-70">
            もう一人は、生物の進化に学ぶバイオミミクリーという視点から、自然界が何億年もかけて導き出した最適解を模索していた。
            生命のゆらぎと、環境への適応。そこには現場の熱量に裏打ちされた「生」の知恵があった。
          </p>
        </div>
      </section>

      {/* --- Section 03: THE COLLISION (衝突と共鳴) --- */}
      <section className="py-60 px-8 flex flex-col items-center">
        <div className="max-w-3xl space-y-20 relative">
          {/* 幾何学と有機の融合を象徴する数式 */}
          <div className="text-center space-y-6">
            <p className="text-xs font-mono opacity-30 tracking-widest uppercase">The Encounter Formula</p>
          </div>

          <p className="text-lg md:text-2xl font-serif leading-relaxed text-center">
            異なるバックグラウンドを持ちながら、<br className="hidden md:block" />
            同じ「霧」を見つめる仲間が増えていく。<br />
            そこにあったのは、単なる無機質な「生産性」ではなく、<br className="hidden md:block" />
            未知に挑む圧倒的な<span className="text-[#A8D08D]">「楽しさ」</span>と<span className="text-[#A8D08D]">「創造の熱量」</span>だった。
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