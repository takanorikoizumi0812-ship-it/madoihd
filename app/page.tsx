export default function MadoiReal() {
  return (
    <div className="bg-white text-slate-900">
      
      {/* --- 1. FIRST VIEW: 意味の提示 --- */}
      <section className="min-h-screen flex flex-col justify-center px-6 max-w-5xl mx-auto">
        <div className="mb-12">
          {/* 名前と由来をセットで提示 */}
          <h1 className="text-8xl font-black tracking-tighter mb-4 text-madoi-navy">
            まどい <span className="text-2xl font-light text-gray-400 block mt-2 tracking-widest uppercase">Madoi: The Incubation Cradle</span>
          </h1>
          <p className="text-xl md:text-2xl font-bold leading-tight text-madoi-green">
            「蜘蛛のまどい（卵嚢）」のように、<br />
            才能を保護し、研ぎ澄まし、社会へ放流する。
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 border-t border-gray-100 pt-12">
          <div>
            <p className="text-sm leading-relaxed text-gray-600">
              まどいとは、生まれたばかりの仔蜘蛛が、ひとり立ちするまで寄り添い合う場所のこと。
              私たちは、東大理一の論理的思考（Logic）を共通言語に、
              未完成な才能が「構造」という武器を手に入れるための共同体です。
            </p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="bg-madoi-gray p-6 rounded-lg w-full">
              <span className="text-[10px] font-bold text-gray-400 uppercase">Current Status</span>
              <div className="flex justify-between items-end mt-2">
                <span className="text-3xl font-black">12</span>
                <span className="text-xs text-gray-400 pb-1">才能が孵化中（Incubating）</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 02: THE PROTOCOL */}
<section className="py-32 bg-madoi-navy text-white px-8">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-madoi text-[10px] font-bold tracking-[0.5em] mb-16 uppercase italic">
      Mathematical Logic
    </h2>
    <div className="grid md:grid-cols-2 gap-20 items-center">
      <div className="p-12 border border-madoi/30 bg-madoi/5 rounded-sm relative overflow-hidden">
        {/* 背景に薄く数式を散らす */}
        <div className="text-[200px] absolute -right-20 -bottom-20 font-serif opacity-5 select-none pointer-events-none text-madoi">
          $f$
        </div>
        <div className="relative z-10">
          <p className="text-sm font-light leading-relaxed mb-12">
            まどいの中で共有されるのは、情熱を最適に加速させるための物理法則です。
          </p>
          <div className="text-3xl font-serif italic text-madoi tracking-widest py-8">
            {"$$Flight = \\frac{Passion \\times Protocol}{Resistance}$$"}
          </div>
        </div>
      </div>
      <div>
        <ul className="space-y-12">
          {["問いの純化", "構造の構築", "自走の支援"].map((label, i) => (
            <li key={i} className="flex items-center gap-6 group">
              <span className="text-4xl font-thin text-madoi/40 group-hover:text-madoi transition-colors">0{i+1}</span>
              <span className="text-xl font-bold tracking-tight">{label}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
</section>

{/* メンバー紹介セクション（洗練版） */}
<section className="py-40 bg-white px-8">
  <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-px bg-gray-100 border-y border-gray-100">
    
    {/* 宇山 学志 / Satoshi Uyama */}
    <div className="bg-white p-12 group">
      <div className="aspect-[3/4] overflow-hidden bg-gray-50 mb-10">
        <img src="/images/uyama.jpg" alt="宇山 学志" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
      </div>
      <div className="space-y-6">
        <div>
          <p className="text-[10px] font-bold text-madoi-green tracking-[0.2em] mb-2">REPRESENTATIVE</p>
          <h4 className="text-3xl font-black tracking-tighter">Satoshi Uyama</h4>
          <p className="text-sm font-bold text-madoi-navy mt-1">宇山 学志 / 島根大学 2年</p>
        </div>
        <p className="text-xs leading-relaxed text-gray-500 font-light">
          ビジネスデベロップメントと地方ネットワーク構築を管轄。学生と企業の橋渡しを実務レベルで牽引。プロジェクトを高校生とコミュニケーションをとりながら現場で磨いてきた。
        </p>
      </div>
    </div>

    {/* 小泉 剛愼 / Takanori Koizumi */}
    <div className="bg-white p-12 group">
      <div className="aspect-[3/4] overflow-hidden bg-gray-50 mb-10">
        <img src="/images/koizumi.jpg" alt="小泉 剛愼" className="w-full h-full object-cover grayscale transition-all duration-1000 group-hover:grayscale-0" />
      </div>
      <div className="space-y-6">
        <div>
          <p className="text-[10px] font-bold text-madoi-green tracking-[0.2em] mb-2">INTEGRATOR</p>
          <h4 className="text-3xl font-black tracking-tighter">Takanori Koizumi</h4>
          <p className="text-sm font-bold text-madoi-navy mt-1">小泉 剛愼 / 東京大学 1年</p>
        </div>
        <p className="text-xs leading-relaxed text-gray-500 font-light">
          静岡市出身。地方と東京の双方の状況を理解し地域格差と地方の強さを肌で感じてきた。
          東京大学では探究学習を考えるゼミを主宰し、公教育と民間の双方から解決策を模索する。
        </p>
      </div>
    </div>

  </div>
</section>



      {/* --- 3. LIVE LOG: 熱量を伝える（ここがUXの肝） --- */}
     {/* SECTION 03: THE FLIGHT (飛翔の記録) 内での配置例 */}
<section id="flight" className="py-32 px-8 max-w-5xl mx-auto relative">
  
  {/* セクションの左上に「まどいロゴ」を薄く透過させて配置 */}
  <div className="absolute -top-10 left-8 opacity-[0.03] pointer-events-none">
    <img src="/madoi-logo.png" alt="" className="w-64 h-64 object-contain" />
  </div>

  <header className="mb-20 relative z-10">
    <div className="flex items-center gap-4 mb-4">
      <span className="text-[10px] font-bold tracking-[0.5em] text-gray-400 uppercase">Section 03</span>
      {/* ロゴを「アイコン」として小さく添える */}
      <img src="/madoi-logo.png" alt="" className="w-4 h-4 grayscale opacity-30" />
    </div>
    <h2 className="text-5xl font-thin tracking-tighter">Evidence of Flight.</h2>
  </header>
  
  {/* ...コンテンツ... */}
</section>
      <section className="py-32 px-6 max-w-5xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <h2 className="text-4xl font-black tracking-tighter">孵化の現場。</h2>
          <span className="text-xs font-bold text-gray-400 underline uppercase">View all logs</span>
        </div>

        <div className="space-y-6">
          {[
            { tag: "FIELD", text: "金村商店のTAM/SAM分析。理屈だけではない「商売」の重さを知る。" },
            { tag: "LOGIC", text: "深夜2時。ホワイトボードが数式と矢印で埋まり、プロジェクトの「骨格」が見えた。" },
            { tag: "COMMUNITY", text: "1年生PMが、初めてチームメンバーと本音で衝突し、和解した日。" }
          ].map((log, i) => (
            <div key={i} className="flex items-start space-x-6 p-6 border-b border-gray-50 hover:bg-gray-50 transition-colors">
              <span className="text-[10px] font-bold bg-madoi-navy text-white px-2 py-1 mt-1">{log.tag}</span>
              <p className="text-sm font-medium leading-relaxed">{log.text}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}
