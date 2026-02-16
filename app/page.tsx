'use client';

import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';

export default function MadoiReal() {
  return (
    <main className="bg-[#F9F8F6] text-[#1A2D42] min-h-screen selection:bg-[#7CFC00] selection:text-[#1A2D42]">
      
      {/* --- Section 01: HERO (まどいの中心) --- */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-8">
        {/* 背景：糸のアニメーション */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
            {[...Array(6)].map((_, i) => (
              <motion.path
                key={i}
                d={`M ${-20 + i * 20} 110 Q ${50} ${50} ${120 - i * 20} -10`}
                stroke="#1A2D42"
                strokeWidth="0.05"
                fill="none"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: 1, 
                  opacity: 1,
                  d: [
                    `M ${-20 + i * 20} 110 Q ${40 + i * 2} ${50 + i * 2} ${120 - i * 20} -10`,
                    `M ${-20 + i * 20} 110 Q ${60 - i * 2} ${50 - i * 2} ${120 - i * 20} -10`,
                    `M ${-20 + i * 20} 110 Q ${40 + i * 2} ${50 + i * 2} ${120 - i * 20} -10`,
                  ]
                }}
                transition={{ 
                  pathLength: { duration: 3, ease: "easeInOut" },
                  opacity: { duration: 2 },
                  d: { duration: 10 + i * 2, repeat: Infinity, ease: "easeInOut" }
                }}
              />
            ))}
          </svg>
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 0.05 }}
            transition={{ duration: 2 }}
            className="w-[70vw] h-[70vw] rounded-full border border-[#7CFC00]/30" 
          />
        </div>

        <div className="relative z-10 text-center space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-[10px] font-mono tracking-[0.5em] uppercase opacity-40 mb-6 block text-[#1A2D42]">
              Incubation Consortium
            </span>
            <h1 className="text-8xl md:text-[8rem] font-serif tracking-[0.05em] text-[#7CFC00] leading-none drop-shadow-[0_0_15px_rgba(124,252,0,0.3)]">
              まどい
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="space-y-4"
          >
            <p className="text-xl md:text-2xl font-serif tracking-[0.2em] text-[#1A2D42]">
              才能が混ざり、越境が始まる場所。
            </p>
            <div className="h-px w-16 bg-[#7CFC00] mx-auto my-10 shadow-[0_0_8px_#7CFC00]" />
            <p className="text-[10px] md:text-xs font-sans tracking-[0.4em] uppercase opacity-40 text-[#1A2D42]">
              Towards a society where intellectual border-crossing is the norm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* --- Section: STORY TEASER --- */}
      <section className="py-32 bg-[#F2F1EE] px-8 text-center border-y border-black/5">
        <div className="max-w-3xl mx-auto space-y-10">
          <p className="text-[10px] font-mono tracking-[0.4em] uppercase opacity-40">The Origin</p>
          <h2 className="text-3xl md:text-5xl font-serif leading-tight text-[#1A2D42]">
            1年半前、私たちは<br />「霧」の中で出会った。
          </h2>
          <Link href="/story" className="inline-block">
            <button className="mt-8 px-10 py-4 border border-[#1A2D42] rounded-full text-sm hover:bg-[#1A2D42] hover:text-white transition-all duration-500 font-serif tracking-widest">
              私たちの物語を読む
            </button>
          </Link>
        </div>
      </section>

      {/* --- Section 02: THE PROTOCOL (知のOS) --- */}
      <section className="py-40 bg-[#1A2D42] text-white px-8 relative overflow-hidden">
        <div className="absolute right-[-5%] top-1/2 -translate-y-1/2 text-[30vw] font-serif italic opacity-[0.03] pointer-events-none select-none">
          $$f$$
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-24 items-center relative z-10">
          <div className="space-y-12">
            <header>
              <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#7CFC00] mb-4">
                Mathematical Logic
              </h2>
              <p className="text-3xl md:text-4xl font-serif leading-snug">
                情熱を最適に加速させるための<br className="hidden md:block" />「論理の型」を共有する。
              </p>
            </header>
            
            <div className="p-10 border border-white/10 bg-white/5 backdrop-blur-sm rounded-sm">
              <div className="text-sm font-mono opacity-40 mb-6 tracking-widest uppercase">Protocol Equation</div>
              <div className="text-3xl md:text-5xl font-serif italic tracking-tighter text-white/90">
                Flight = <span className="text-[#7CFC00]">P</span>assion × <span className="text-[#7CFC00]">P</span>rotocol
              </div>
              <p className="mt-8 text-xs font-light opacity-40 leading-relaxed max-w-xs">
                まどいでは、属人的な熱量を再現可能な成果へと変換するための標準化されたDBを構築しています。
              </p>
            </div>
          </div>

          <div className="space-y-16">
            {[
              { title: "問いの純化", desc: "現場の痛みを、学生が挑める「問い」へと翻訳する。" },
              { title: "構造の構築", desc: "異能を掛け合わせ、論理的な事業計画書へと昇華させる。" },
              { title: "自走の支援", desc: "守られた環境での孵化を経て、社会という戦場へ放つ。" }
            ].map((item, i) => (
              <motion.div 
                whileInView={{ opacity: 1, x: 0 }}
                initial={{ opacity: 0, x: 20 }}
                transition={{ delay: i * 0.2 }}
                key={i} 
                className="group cursor-default"
              >
                <div className="flex items-baseline space-x-6">
                  <span className="font-mono text-xs opacity-30">0{i+1}</span>
                  <h3 className="text-2xl font-bold tracking-widest">{item.title}</h3>
                </div>
                <p className="mt-4 ml-10 text-sm font-light opacity-50 leading-relaxed group-hover:opacity-80 transition-opacity">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Section 03: PROJECTS --- */}
      <section className="py-40 px-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
            <h2 className="text-4xl md:text-5xl font-serif">産み落とされた卵たち</h2>
            <p className="text-xs font-mono tracking-[0.2em] opacity-40 uppercase border-b border-black/10 pb-2">
              Incubated Projects
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-[#0F0F0F] text-white p-12 aspect-[16/10] flex flex-col justify-between group hover:shadow-2xl transition-all duration-700">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <span className="text-[#7CFC00] font-mono text-[10px] tracking-[0.3em] uppercase">Phase 01: Social Implementation</span>
                  <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                </div>
                <h3 className="text-4xl font-bold tracking-tighter">HighBridge</h3>
                <p className="text-sm font-light opacity-50 leading-relaxed max-w-sm">
                  地方企業の経営課題（第2領域）をハックする、実戦型探究プラットフォーム。
                </p>
              </div>
              <div className="pt-8 border-t border-white/10 flex justify-between items-center">
                {/* ここも「まどい」へ修正 */}
                <span className="text-xs opacity-40">Powered by まどい Protocol</span>
                <span className="text-[10px] tracking-widest uppercase font-bold group-hover:tracking-[0.4em] transition-all">View Project</span>
              </div>
            </div>

            <div className="border border-black/5 bg-[#F2F1EE]/50 p-12 aspect-[16/10] flex flex-col justify-center items-center text-center opacity-40 grayscale hover:grayscale-0 transition-all">
              <span className="font-serif italic text-2xl opacity-60">次なる卵たち...</span>
              <p className="mt-4 text-[10px] font-mono uppercase tracking-[0.3em]">Logistics / Medical / Energy</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- Section 04: FOUNDERS --- */}
      <section className="py-40 bg-white px-8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-20 text-center">
            <h2 className="text-[10px] font-bold tracking-[0.4em] uppercase text-[#1A2D42] opacity-40 mb-4">Founders</h2>
            <p className="text-4xl md:text-5xl font-serif">異能を束ね、仕組みを編む。</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-stretch">
            {/* 宇山 学志 / CEO */}
            <div className="flex flex-col space-y-8">
              <div className="aspect-[4/5] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 bg-[#F2F1EE]">
                <Image src="/images/uyama.jpg" alt="宇山 学志" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2D42]/30 to-transparent" />
              </div>
              <div className="flex-grow space-y-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="text-3xl font-bold tracking-tighter text-[#1A2D42]">宇山 学志</h3>
                  <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest">CEO</span>
                </div>
                <p className="text-[10px] font-bold text-[#7CFC00] tracking-widest uppercase">島根大学</p>
                <p className="text-sm leading-relaxed opacity-60 font-light text-justify">
                  生物の進化に学ぶ「バイオミミクリー」の視点から、地方の現場に眠る課題を独自の解像度で拾い上げる。
                  現場の泥臭さと、生命の最適解を繋ぐフロントマン。
                </p>
              </div>
            </div>

            {/* 小泉 剛愼 / COO */}
            <div className="flex flex-col space-y-8">
              <div className="aspect-[4/5] overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700 bg-[#1A2D42]">
                <Image src="/images/koizumi.jpg" alt="小泉 剛愼" fill className="object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1A2D42]/30 to-transparent" />
              </div>
              <div className="flex-grow space-y-4">
                <div className="flex justify-between items-baseline border-b border-black/5 pb-2">
                  <h3 className="text-3xl font-bold tracking-tighter text-[#1A2D42]">小泉 剛愼</h3>
                  <span className="text-[10px] font-mono opacity-40 uppercase tracking-widest">COO</span>
                </div>
                <p className="text-[10px] font-bold text-[#7CFC00] tracking-widest uppercase">東京大学 理科一類</p>
                <p className="text-sm leading-relaxed opacity-60 font-light text-justify">
                  「表面物理」の論理構造をベースに、カオスな現場の情報を誰もが扱える「型（プロトコル）」へと再構築する。
                  名古屋生まれ静岡育ちの視点とロジックを融合させる軍師。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}