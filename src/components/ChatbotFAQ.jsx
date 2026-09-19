import { useState, useRef, useEffect } from "react";
import { faqList, waFallbackLink } from "../data/faq";
import chatbotLogo from "../assets/images/chatbot-icon.png";

// Chatbot FAQ murni client-side — nggak ada API, nggak ada biaya.
// Cara kerja: pengunjung klik salah satu pertanyaan cepat, ATAU ketik bebas
// lalu dicocokkan ke "keywords" di data/faq.js. Kalau nggak ketemu,
// fallback ke tombol WhatsApp langsung.

function matchFaq(text) {
  const lower = text.toLowerCase();
  return faqList.find((f) => f.keywords.some((k) => lower.includes(k)));
}

function CloseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
      <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
    </svg>
  );
}

export default function ChatbotFAQ() {
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(false); // controls mount for exit animation
  const [messages, setMessages] = useState([
    { from: "bot", text: "Halo! Ada yang bisa dibantu? Pilih pertanyaan di bawah, atau ketik langsung." },
  ]);
  const [input, setInput] = useState("");
  const scrollRef = useRef(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, open]);

  const toggle = () => {
    if (open) {
      setOpen(false);
      setTimeout(() => setVisible(false), 260); // tunggu animasi keluar selesai baru unmount
    } else {
      setVisible(true);
      requestAnimationFrame(() => setOpen(true));
    }
  };

  const respond = (userText, faq) => {
    setMessages((m) => [
      ...m,
      { from: "user", text: userText },
      faq
        ? { from: "bot", text: faq.answer, link: faq.link }
        : {
            from: "bot",
            text: "Aku belum punya jawaban pasti buat itu — coba tanya langsung ke admin ya.",
            link: { label: "Chat WhatsApp", href: waFallbackLink, external: true },
          },
    ]);
  };

  const handleQuickQuestion = (faq) => respond(faq.question, faq);

  const handleSubmit = (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    respond(text, matchFaq(text));
    setInput("");
  };

  return (
    <>
      {/* Tombol pembuka, fixed pojok kanan bawah, dengan efek glow berdenyut */}
      <div className="fixed bottom-5 right-5 z-[90]">
        <span
          aria-hidden
          className={`absolute inset-0 rounded-full bg-maroon transition-opacity duration-300 ${
            open ? "opacity-0" : "opacity-100 animate-chatbot-glow"
          }`}
        />
        <button
          onClick={toggle}
          aria-label={open ? "Tutup chatbot" : "Buka chatbot FAQ"}
          className="relative w-14 h-14 rounded-full bg-maroon hover:bg-maroon-deep text-cream shadow-lg flex items-center justify-center overflow-hidden transition-transform duration-200 hover:scale-105 active:scale-90"
        >
          <img
            src={chatbotLogo}
            alt=""
            className={`w-full h-full object-cover absolute transition-all duration-300 ${
              open ? "opacity-0 rotate-90 scale-50" : "opacity-100 rotate-0 scale-100"
            }`}
          />
          <CloseIcon
            className={`w-6 h-6 absolute transition-all duration-300 ${
              open ? "opacity-100 rotate-0 scale-100" : "opacity-0 -rotate-90 scale-50"
            }`}
          />
        </button>
      </div>

      {/* Panel chat */}
      {visible && (
        <div
          className={`fixed bottom-24 right-5 z-[90] w-[calc(100vw-2.5rem)] max-w-sm bg-paper border border-line rounded-2xl shadow-2xl overflow-hidden origin-bottom-right transition-all duration-300 ease-out ${
            open ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-90 translate-y-3 pointer-events-none"
          }`}
        >
          <div className="bg-maroon-deep text-cream px-4 py-3 flex items-center gap-2.5">
            <img src={chatbotLogo} alt="" className="w-8 h-8 rounded-full flex-shrink-0" />
            <div>
              <p className="font-display text-base leading-none">VESPER Studio</p>
              <p className="text-xs text-cream/70 mt-1">Tanya cepat, jawab otomatis</p>
            </div>
          </div>

          <div ref={scrollRef} className="max-h-80 overflow-y-auto px-4 py-3 space-y-3">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex animate-chatbot-msg-in ${m.from === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-xl px-3 py-2 text-sm ${
                    m.from === "user" ? "bg-maroon text-cream" : "bg-cream text-ink border border-line"
                  }`}
                >
                  <p>{m.text}</p>
                  {m.link && (
                    <a
                      href={m.link.href}
                      target={m.link.external ? "_blank" : undefined}
                      rel={m.link.external ? "noopener" : undefined}
                      className={`inline-block mt-1.5 text-xs font-semibold underline ${
                        m.from === "user" ? "text-cream" : "text-maroon"
                      }`}
                    >
                      {m.link.label} →
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          <div className="px-4 pb-2 flex flex-wrap gap-1.5">
            {faqList.slice(0, 6).map((f) => (
              <button
                key={f.id}
                onClick={() => handleQuickQuestion(f)}
                className="text-xs border border-line hover:border-maroon hover:text-maroon rounded-full px-3 py-1.5 transition-colors"
              >
                {f.question}
              </button>
            ))}
          </div>

          <form onSubmit={handleSubmit} className="flex gap-2 border-t border-line p-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ketik pertanyaan..."
              className="flex-1 rounded-full border border-line bg-cream px-4 py-2 text-sm focus:outline-none focus:border-maroon"
            />
            <button
              type="submit"
              className="bg-maroon hover:bg-maroon-deep text-cream rounded-full px-4 text-sm font-semibold transition-colors"
            >
              Kirim
            </button>
          </form>
        </div>
      )}
    </>
  );
}
