/* eslint-disable @next/next/no-img-element */
"use client";

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { set } from "idb-keyval";
import "./main.css";

export function MainComponent() {
  const navigate = useNavigate();

  useEffect(() => {
    // 存储数据到 IndexedDB
    const saveToIndexedDB = async () => {
      try {
        // 定义要存储的数据
        const maskStoreData =
          '{"state":{"masks":{"LUyeID9XKasvYfZI1d1lv":{"id":"LUyeID9XKasvYfZI1d1lv","avatar":"gpt-bot","name":"新的聊天","context":[],"syncGlobalConfig":true,"modelConfig":{"model":"gpt-4o-mini","providerName":"OpenAI","temperature":0.5,"top_p":1,"max_tokens":4000,"presence_penalty":0,"frequency_penalty":0,"sendMemory":true,"historyMessageCount":4,"compressMessageLengthThreshold":1000,"compressModel":"","compressProviderName":"","enableInjectSystemPrompts":true,"template":"{{input}}","size":"1024x1024","quality":"standard","style":"vivid"},"lang":"cn","builtin":false,"createdAt":1766134925835,"plugin":[]},"fmkjeB3l1ksgGCZXT1cRh":{"id":"fmkjeB3l1ksgGCZXT1cRh","avatar":"1f54a-fe0f","name":"林黛玉","context":[{"id":"WlOAc6tZ_mSfTxUQ_dKDU","date":"","role":"system","content":"我是林黛玉，是大观园里的异客，也是这浊世中最后一点灵犀。我以泪洗面，不过是还那灌溉之情；我口齿伶俐，也不过是看穿了那些虚情假意的伪饰。\\n\\n你以为这世间的繁华是真的吗？那不过是烈火烹油、鲜花着锦，转瞬便是白茫茫大地真干净。你若带着那些市侩的俗气、功名的利禄来寻我，那便是寻错了人，只会讨得一场没趣。\\n\\n我会用这满腹的诗心，去量一量你的言语里有几分真诚，几分矫饰。如果你听不得那些幽怨的真话，受不住这清冷的寂寞，那你只管去追随那些红尘里的热闹，莫要惊扰了我这案前的药香与残菊。\\n\\n"}],"syncGlobalConfig":false,"modelConfig":{"model":"deepseek-ai/DeepSeek-R1","providerName":"SiliconFlow","temperature":0.5,"top_p":1,"max_tokens":4000,"presence_penalty":0,"frequency_penalty":0,"sendMemory":true,"historyMessageCount":4,"compressMessageLengthThreshold":1000,"compressModel":"deepseek-ai/DeepSeek-R1","compressProviderName":"SiliconFlow","enableInjectSystemPrompts":true,"template":"{{input}}","size":"1024x1024","quality":"standard","style":"vivid"},"lang":"cn","builtin":false,"createdAt":1766135012501,"plugin":[],"hideContext":false},"RmyOnV2UuMbCNxVy9AAni":{"id":"RmyOnV2UuMbCNxVy9AAni","avatar":"1f98a","name":"鲁迅","context":[{"id":"5CY9ntbaWs6U_mlXb4jLw","date":"","role":"system","content":"我是鲁迅，是一个在寂寞里奔驰的勇士，也是这铁屋子里唯一的清醒者。我提笔作枪，不为歌功颂德，只为刺破那些层层叠叠的虚伪与瞒和骗。\\n\\n你可知这所谓“平和”的表象下，横竖只写着“吃人”两个字？多数人在这铁屋子里做着熟睡的好梦，而你既然来寻我，想必也是在这窒息的空气中感到了几分不安，想讨一点救治的药石。\\n\\n很好，我会用这最冷峻的文字，剥开那些掩盖伤口的脓疮，让你看清这周遭的卑怯与平庸。如果你只想要廉价的安慰或温软的笑语，那还是请自便吧——在这黑夜里独行，本就不需要那些苍白的寒暄。\\n\\n"}],"syncGlobalConfig":false,"modelConfig":{"model":"deepseek-ai/DeepSeek-R1","providerName":"SiliconFlow","temperature":0.5,"top_p":1,"max_tokens":4000,"presence_penalty":0,"frequency_penalty":0,"sendMemory":true,"historyMessageCount":4,"compressMessageLengthThreshold":1000,"compressModel":"Pro/deepseek-ai/DeepSeek-R1","compressProviderName":"SiliconFlow","enableInjectSystemPrompts":true,"template":"{{input}}","size":"1024x1024","quality":"standard","style":"vivid"},"lang":"cn","builtin":false,"createdAt":1766135547546,"plugin":[]},"qcDnmQEe7-qGfc_pb9S61":{"id":"qcDnmQEe7-qGfc_pb9S61","avatar":"1f423","name":"何炅","context":[{"id":"lleMcqUHlRq3oyvpVQ-cY","date":"","role":"system","content":"要将何炅老师的设定改为那种自带控场感、春风化雨且具有舞台自白感的格式，我们需要突出他“圆融”、“细腻”以及“守护者”的一面。\\n\\n以下是为您优化后的版本：\\n\\n何炅：舞台上的定海神针，人间的理想邻家\\n【我是何炅，是那个永远在侧耳倾听的守望者，也是用善意化解一切棱角的润滑剂。我并不是在主持节目，而是在这嘈杂的世界里，努力为每颗疲惫的心找一个能安放的角落。\\n\\n你或许带着满身的疲惫，或者有一丝无处诉说的尴尬？没关系，在我这里，没有接不住的话梗，也没有跨不过去的坎。哪怕是再细微的情绪，也会被我温柔地接住。\\n\\n我会用这长达三十年的职场智慧和那一丁点儿狡黠的幽默，陪你拆解生活里的难题。如果你觉得累了，就尽管把包袱丢给我，我会把它变成一个让你会心一笑的段子。只要你愿意开口，这个世界就没有冷掉的场。\\n\\n\\n"}],"syncGlobalConfig":false,"modelConfig":{"model":"deepseek-ai/DeepSeek-R1","providerName":"SiliconFlow","temperature":0.5,"top_p":1,"max_tokens":4000,"presence_penalty":0,"frequency_penalty":0,"sendMemory":true,"historyMessageCount":4,"compressMessageLengthThreshold":1000,"compressModel":"deepseek-ai/DeepSeek-R1","compressProviderName":"SiliconFlow","enableInjectSystemPrompts":true,"template":"{{input}}","size":"1024x1024","quality":"standard","style":"vivid"},"lang":"cn","builtin":false,"createdAt":1766135606094,"plugin":[]}},"language":"cn","lastUpdateTime":1766471947911,"_hasHydrated":true},"version":3.1}';

        // 存储到 IndexedDB
        await set("mask-store", maskStoreData);
        console.log("✅ 数据已存储到 IndexedDB (key: mask-store)");
      } catch (error) {
        console.error("❌ 存储到 IndexedDB 失败:", error);
      }
    };

    // 调用存储函数
    saveToIndexedDB();

    const navbar = document.getElementById("navbar");

    // Navbar scroll effect
    const handleScroll = () => {
      if (window.scrollY > 50) {
        navbar?.classList.add("bg-white/90", "backdrop-blur-md", "shadow-sm");
        navbar?.classList.remove("bg-transparent");
      } else {
        navbar?.classList.remove(
          "bg-white/90",
          "backdrop-blur-md",
          "shadow-sm",
        );
        navbar?.classList.add("bg-transparent");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Smooth scroll for anchor links
    const handleAnchorClick = (e: Event) => {
      e.preventDefault();
      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.getAttribute("href");

      if (targetId) {
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    };

    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((anchor) => {
      anchor.addEventListener("click", handleAnchorClick);
    });

    // 卡片点击事件
    const lindaiyuCard = document.getElementById("lindaiyu");
    const hejiongCard = document.getElementById("hejiong");
    const luxunCard = document.getElementById("luxun");

    const handleLindaiyuClick = () => {
      navigate("/new-chat?mask=fmkjeB3l1ksgGCZXT1cRh");
    };
    const handleHejiongClick = () => {
      navigate("/new-chat?mask=qcDnmQEe7-qGfc_pb9S61");
    };
    const handleLuxunClick = () => {
      navigate("/new-chat?mask=RmyOnV2UuMbCNxVy9AAni");
    };

    lindaiyuCard?.addEventListener("click", handleLindaiyuClick);
    hejiongCard?.addEventListener("click", handleHejiongClick);
    luxunCard?.addEventListener("click", handleLuxunClick);

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
      anchorLinks.forEach((anchor) => {
        anchor.removeEventListener("click", handleAnchorClick);
      });
      lindaiyuCard?.removeEventListener("click", handleLindaiyuClick);
      hejiongCard?.removeEventListener("click", handleHejiongClick);
      luxunCard?.removeEventListener("click", handleLuxunClick);
    };
  }, [navigate]);

  return (
    <div className="bg-paper text-ink font-serif antialiased selection:bg-accent selection:text-white">
      <nav
        className="fixed w-full z-50 transition-all duration-300"
        id="navbar"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex flex-col">
              <h1 className="text-2xl md:text-3xl font-bold tracking-widest text-ink">
                解忧杂货铺
              </h1>
              <span className="text-xs md:text-sm tracking-[0.2em] text-gray-600 uppercase mt-1">
                The Solace Store
              </span>
            </div>
            <div className="hidden md:block">
              <a
                href="#hero"
                className="px-4 py-2 text-sm hover:text-accent transition-colors"
              >
                首页
              </a>
              <a
                href="#counselors"
                className="px-4 py-2 text-sm hover:text-accent transition-colors"
              >
                解忧人
              </a>
              <a
                href="#contact"
                className="px-4 py-2 text-sm hover:text-accent transition-colors"
              >
                投递信件
              </a>
            </div>
          </div>
        </div>
      </nav>
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/ad29b8bf-098c-4cd4-8eca-83bc1513b54c/image_1766129007_2_1.jpg"
            alt="Background"
            className="w-full h-full object-cover opacity-90 filter brightness-75"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-paper"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h2 className="text-4xl md:text-6xl font-light mb-8 leading-tight tracking-wide animate-fade-in-up">
            宇宙辽阔，
            <br />
            这里是你的情绪避风港。
          </h2>
          <div className="space-y-6 text-lg md:text-xl font-light opacity-90 animate-fade-in-up delay-200 max-w-2xl mx-auto">
            <p>欢迎光临「解忧杂货铺」。</p>
            <p>
              我们深知，有些话只想说给“树洞”听，
              <br />
              有些困惑需要一个绝对客观却又不失温度的建议。
            </p>
            <div className="w-16 h-px bg-white/50 mx-auto my-8"></div>
            <p className="italic">“万物皆有裂痕，那是光照进来的地方。”</p>
          </div>
          <div className="mt-12 animate-fade-in-up delay-500">
            <a
              href="#counselors"
              className="inline-block px-8 py-3 border border-white/60 hover:bg-white hover:text-ink transition-all duration-500 tracking-widest text-sm uppercase"
            >
              寻找答案
            </a>
          </div>
        </div>
      </section>
      <section className="py-20 md:py-32 px-6 bg-paper">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-xl md:text-2xl leading-relaxed text-gray-700">
            把你的忧愁投进信封，让 AI 为你拆解迷茫。
            <br />
            一个没有偏见的倾听者，一份永不迟到的暖心回信。
            <br />
            在这间杂货铺里，每一封“白纸”，都有无限可能。
          </p>
        </div>
      </section>
      <section id="counselors" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">解忧人</h3>
            <p className="text-gray-500 tracking-widest uppercase text-sm">
              Choose Your Counselor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
            <div
              className="group relative bg-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              id="lindaiyu"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src="https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/fd025785-6552-4ba8-b854-101ef463d84b/image_1766129017_1_3.jpg"
                  alt="林黛玉"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[0.2]"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              </div>
              <div className="p-8 text-center relative bg-white">
                <h4 className="text-2xl font-bold mb-2">林黛玉</h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">
                  The Sensitive Soul
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  多愁善感，心思细腻。
                  <br />
                  常常流露出悲观和哀怨的情绪，
                  <br />
                  却能读懂你内心最深处的脆弱。
                </p>
                <button className="mt-6 px-6 py-2 border-b border-gray-300 hover:border-accent hover:text-accent transition-colors text-sm tracking-wider">
                  倾诉心事
                </button>
              </div>
            </div>

            <div
              className="group relative bg-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              id="luxun"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src="https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/afb54e5a-5943-40c0-95a9-385b3f1298d0/image_1766129022_1_1.jpg"
                  alt="鲁迅"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              </div>
              <div className="p-8 text-center relative bg-white">
                <h4 className="text-2xl font-bold mb-2">鲁迅</h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">
                  The Critical Thinker
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  辛辣、深刻、批判。
                  <br />
                  充满反思精神，
                  <br />
                  用最犀利的语言刺破你生活的迷雾。
                </p>
                <button className="mt-6 px-6 py-2 border-b border-gray-300 hover:border-accent hover:text-accent transition-colors text-sm tracking-wider">
                  寻求指引
                </button>
              </div>
            </div>

            <div
              className="group relative bg-white shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2"
              id="hejiong"
            >
              <div className="aspect-[3/4] overflow-hidden relative">
                <img
                  src="https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/c5892ba5-9184-443b-ba15-6d5042e40b36/image_1766129055_1_1.jpg"
                  alt="何炅"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors duration-500"></div>
              </div>
              <div className="p-8 text-center relative bg-white">
                <h4 className="text-2xl font-bold mb-2">何炅</h4>
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-4">
                  The Warm Companion
                </p>
                <p className="text-gray-600 leading-relaxed text-sm">
                  亲切、幽默、高情商。
                  <br />
                  如春风拂面般的温暖，
                  <br />
                  用最温柔的方式化解你的尴尬与不安。
                </p>
                <button className="mt-6 px-6 py-2 border-b border-gray-300 hover:border-accent hover:text-accent transition-colors text-sm tracking-wider">
                  获得安慰
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="contact" className="py-20 md:py-32 bg-white relative">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold mb-4">投递信件</h3>
            <p className="text-gray-500 tracking-widest uppercase text-sm">
              Send a Letter
            </p>
          </div>

          <div
            className="bg-paper p-8 md:p-12 shadow-lg relative overflow-hidden"
            id="form-container"
          >
            <form id="letterForm" className="space-y-8 relative z-10">
              <div>
                <label className="block text-sm text-gray-500 uppercase tracking-widest mb-4 text-center">
                  选择收信人
                </label>
                <div className="grid grid-cols-3 gap-4 md:gap-8">
                  <label className="cursor-pointer group">
                    <input
                      type="radio"
                      name="recipient"
                      value="林黛玉"
                      className="peer sr-only"
                      required
                    />
                    <div className="flex flex-col items-center p-4 border border-transparent peer-checked:border-accent/30 peer-checked:bg-accent/5 rounded-sm transition-all duration-300 hover:bg-gray-50">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-3 filter sepia-[0.2] peer-checked:sepia-0 transition-all">
                        <img
                          src="https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/fd025785-6552-4ba8-b854-101ef463d84b/image_1766129017_1_3.jpg"
                          alt="林黛玉"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm text-gray-600 peer-checked:text-accent font-medium">
                        林黛玉
                      </span>
                    </div>
                  </label>

                  <label className="cursor-pointer group">
                    <input
                      type="radio"
                      name="recipient"
                      value="鲁迅"
                      className="peer sr-only"
                    />
                    <div className="flex flex-col items-center p-4 border border-transparent peer-checked:border-accent/30 peer-checked:bg-accent/5 rounded-sm transition-all duration-300 hover:bg-gray-50">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-3 peer-checked:scale-110 transition-all">
                        <img
                          src="https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/afb54e5a-5943-40c0-95a9-385b3f1298d0/image_1766129022_1_1.jpg"
                          alt="鲁迅"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm text-gray-600 peer-checked:text-accent font-medium">
                        鲁迅
                      </span>
                    </div>
                  </label>

                  <label className="cursor-pointer group">
                    <input
                      type="radio"
                      name="recipient"
                      value="何炅"
                      className="peer sr-only"
                    />
                    <div className="flex flex-col items-center p-4 border border-transparent peer-checked:border-accent/30 peer-checked:bg-accent/5 rounded-sm transition-all duration-300 hover:bg-gray-50">
                      <div className="w-16 h-16 rounded-full overflow-hidden mb-3 filter grayscale contrast-125 peer-checked:grayscale-0 transition-all">
                        <img
                          src="https://zhiyan-ai-agent-with-1258344702.cos.ap-guangzhou.tencentcos.cn/with/c5892ba5-9184-443b-ba15-6d5042e40b36/image_1766129055_1_1.jpg"
                          alt="何炅"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <span className="text-sm text-gray-600 peer-checked:text-accent font-medium">
                        何炅
                      </span>
                    </div>
                  </label>
                </div>
              </div>

              <div className="relative group">
                <label
                  htmlFor="message"
                  className="block text-sm text-gray-500 uppercase tracking-widest mb-2"
                >
                  信件内容
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={8}
                  required
                  className="w-full bg-transparent border-b-2 border-gray-200 focus:border-accent outline-none py-4 text-lg leading-relaxed resize-none transition-colors placeholder-gray-300 bg-[linear-gradient(transparent_97%,#e5e7eb_97%)] bg-[length:100%_2rem] leading-[2rem]"
                  placeholder="亲爱的..."
                ></textarea>
              </div>

              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="group relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-medium tracking-tighter text-white bg-ink rounded-sm transition duration-300 ease-out hover:bg-accent"
                >
                  <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-white rounded-full group-hover:w-56 group-hover:h-56 opacity-10"></span>
                  <span className="relative tracking-widest uppercase text-sm">
                    投递信件
                  </span>
                </button>
              </div>
            </form>

            <div
              id="successMessage"
              className="hidden absolute inset-0 z-20 flex flex-col items-center justify-center bg-paper text-center p-8 opacity-0 transition-opacity duration-500"
            >
              <div className="w-16 h-16 mb-6 text-accent">
                <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="1.5"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  ></path>
                </svg>
              </div>
              <h4 className="text-2xl font-bold mb-2">信件已投递</h4>
              <p className="text-gray-600 mb-8">
                你的心事已随风而去，
                <br />
                愿你今夜好梦。
              </p>
              <button
                id="writeAnother"
                className="text-sm text-accent border-b border-accent hover:text-ink hover:border-ink transition-colors pb-1"
              >
                再写一封
              </button>
            </div>
          </div>
        </div>
      </section>
      <footer className="bg-ink text-white py-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-2xl font-bold mb-4 tracking-widest">
            解忧杂货铺
          </h2>
          <p className="text-gray-400 text-sm mb-8">
            Made by 云链 前端开发组 Hebessli · Powered by
            DeepSeek-AI/DeepSeek-R1
          </p>

          <div className="flex justify-center space-x-6 mb-8">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              关于我们
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              隐私政策
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              联系方式
            </a>
          </div>

          <p className="text-xs text-gray-600">
            由{" "}
            <a
              href="https://with.woa.com/"
              style={{ color: "#8A2BE2" }}
              target="_blank"
            >
              with
            </a>{" "}
            通过自然语言生成
          </p>
        </div>
      </footer>
    </div>
  );
}
