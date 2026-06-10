import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';
import type { ChatMessage, Museum } from '@/types';

interface Props {
  museum: Museum;
}

export function ChatBot({ museum }: Props) {
  const welcome = `你好！我是${museum.name}的 AI 导览员。你可以问我关于展品、艺术家、门票、开放时间或游览路线的问题。`;

  const suggestions = [
    museum.artworks[0]?.title || '镇馆之宝',
    '门票怎么买',
    '开放时间',
    '推荐游览路线',
  ];

  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'assistant', content: welcome },
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) setTimeout(() => inputRef.current?.focus(), 300);
  }, [isOpen]);

  // Reset chat when museum changes
  useEffect(() => {
    setMessages([{ role: 'assistant', content: welcome }]);
  }, [museum.id]);

  const localAnswer = (q: string): string => {
    const lower = q.toLowerCase();
    for (const [key, ans] of Object.entries(museum.knowledge)) {
      if (lower.includes(key.toLowerCase())) return ans;
    }
    // Fallback: search artwork titles
    for (const art of museum.artworks) {
      if (lower.includes(art.title.toLowerCase())) {
        return `${art.title}是${art.artist}的作品，创作于${art.year}。${art.description}`;
      }
    }
    return `你可以问问我关于${museum.name}的展品、艺术家、门票、开放时间或游览路线的问题。`;
  };

  const sendMessage = async (text: string) => {
    if (!text.trim()) return;
    const userMsg: ChatMessage = { role: 'user', content: text.trim() };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    let answer = localAnswer(text.trim());
    try {
      const res = await fetch('/api/ai/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ question: text.trim() }),
      });
      if (res.ok) {
        const data = await res.json();
        if (data.success && data.answer) answer = data.answer;
      }
    } catch {
      // use local answer
    }

    setIsLoading(false);
    setMessages((prev) => [...prev, { role: 'assistant', content: answer }]);
  };

  return (
    <>
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#D4AF37] text-[#1A1714] shadow-[0_4px_20px_rgba(212,175,55,0.3)] transition-shadow hover:shadow-[0_6px_28px_rgba(212,175,55,0.4)]"
      >
        {isOpen ? <X size={22} /> : <MessageCircle size={24} />}
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-x-3 bottom-24 top-[15vh] z-40 sm:inset-x-auto sm:right-5 sm:left-auto sm:w-[380px]"
          >
            <div className="glass-panel-strong flex h-full flex-col overflow-hidden">
              <div className="flex items-center gap-3 border-b border-white/5 px-5 py-4">
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#D4AF37]/15">
                  <Bot size={18} className="text-[#D4AF37]" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-[#E8E3DE]">AI 导览员</h3>
                  <p className="text-[11px] text-[#A39E99]">{museum.name}</p>
                </div>
              </div>

              <div ref={scrollRef} className="flex-1 space-y-4 overflow-y-auto p-4">
                {messages.map((m, i) => (
                  <div key={i} className={`flex gap-2.5 ${m.role === 'user' ? 'flex-row-reverse' : ''}`}>
                    <div className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full ${m.role === 'user' ? 'bg-[#D44B23]/15' : 'bg-[#D4AF37]/15'}`}>
                      {m.role === 'user' ? <User size={13} className="text-[#D44B23]" /> : <Bot size={13} className="text-[#D4AF37]" />}
                    </div>
                    <div className={`max-w-[80%] rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${m.role === 'user' ? 'bg-[#D44B23]/15 text-[#E8E3DE]' : 'bg-[#E8E3DE]/[0.05] text-[#E8E3DE]/85'}`}>
                      {m.content}
                    </div>
                  </div>
                ))}
                {isLoading && (
                  <div className="flex gap-2.5">
                    <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#D4AF37]/15">
                      <Bot size={13} className="text-[#D4AF37]" />
                    </div>
                    <div className="flex items-center gap-1 rounded-2xl bg-[#E8E3DE]/[0.05] px-4 py-3">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#A39E99]" style={{ animationDelay: '0ms' }} />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#A39E99]" style={{ animationDelay: '150ms' }} />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-[#A39E99]" style={{ animationDelay: '300ms' }} />
                    </div>
                  </div>
                )}
                {messages.length === 1 && (
                  <div className="flex flex-wrap gap-2 pt-2">
                    {suggestions.map((s) => (
                      <button key={s} onClick={() => sendMessage(s)} className="rounded-full bg-[#D4AF37]/10 px-3 py-1.5 text-xs text-[#D4AF37] transition-colors hover:bg-[#D4AF37]/20">
                        {s}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div className="border-t border-white/5 px-4 py-3">
                <div className="flex items-center gap-2 rounded-full bg-[#E8E3DE]/[0.05] px-4 py-2.5">
                  <input
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && sendMessage(input)}
                    placeholder="输入你的问题..."
                    className="flex-1 bg-transparent text-sm text-[#E8E3DE] placeholder-[#A39E99]/40 outline-none"
                  />
                  <button
                    onClick={() => sendMessage(input)}
                    disabled={!input.trim() || isLoading}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#D4AF37] text-[#1A1714] transition-all hover:bg-[#D4AF37]/80 disabled:opacity-30"
                  >
                    <Send size={14} />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
