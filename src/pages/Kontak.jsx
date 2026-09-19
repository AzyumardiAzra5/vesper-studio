const contacts = [
  {
    label: "WhatsApp",
    value: "0856-5988-1470",
    href: "https://wa.me/6285659881470?text=Halo%20VESPER%20Studio%2C%20saya%20mau%20tanya-tanya",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M17.6 6.3A8.9 8.9 0 0 0 12 4a8.9 8.9 0 0 0-7.9 13l-.9 3.3 3.4-.9A8.9 8.9 0 0 0 21 12a8.9 8.9 0 0 0-3.4-5.7ZM12 19.4a7.4 7.4 0 0 1-3.8-1l-.3-.2-2.3.6.6-2.2-.2-.3a7.4 7.4 0 1 1 6 3.1Zm4.2-5.5c-.2-.1-1.3-.7-1.5-.7-.2-.1-.4-.1-.5.1-.2.2-.6.7-.7.9-.1.1-.3.2-.5.1a6 6 0 0 1-1.8-1.1 6.7 6.7 0 0 1-1.2-1.5c-.1-.2 0-.4.1-.5l.4-.4c.1-.1.1-.2.2-.4a.4.4 0 0 0 0-.4c-.1-.1-.5-1.2-.7-1.6-.2-.4-.4-.4-.5-.4h-.5c-.2 0-.4.1-.6.3-.2.2-.8.8-.8 1.9s.8 2.2 1 2.4c.1.1 1.6 2.5 4 3.5.5.2 1 .4 1.3.5.6.2 1 .1 1.4-.1.4-.2 1.3-.5 1.5-1 .2-.5.2-.9.1-1Z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "@vesperstudio.id",
    href: "https://instagram.com/vesperstudio.id",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 2.2c3.2 0 3.6 0 4.8.1 1.2 0 2 .2 2.7.5.7.3 1.3.7 1.9 1.3.6.6 1 1.2 1.3 1.9.3.7.5 1.5.5 2.7.1 1.2.1 1.6.1 4.8s0 3.6-.1 4.8c0 1.2-.2 2-.5 2.7-.3.7-.7 1.3-1.3 1.9-.6.6-1.2 1-1.9 1.3-.7.3-1.5.5-2.7.5-1.2.1-1.6.1-4.8.1s-3.6 0-4.8-.1c-1.2 0-2-.2-2.7-.5a5 5 0 0 1-1.9-1.3 5 5 0 0 1-1.3-1.9c-.3-.7-.5-1.5-.5-2.7C2.2 15.6 2.2 15.2 2.2 12s0-3.6.1-4.8c0-1.2.2-2 .5-2.7.3-.7.7-1.3 1.3-1.9A5 5 0 0 1 6 1.3c.7-.3 1.5-.5 2.7-.5C9.9 2.2 10.3 2.2 12 2.2Zm0 1.8c-3.1 0-3.5 0-4.7.1-1 0-1.5.2-1.9.3-.5.2-.8.4-1.2.8-.4.4-.6.7-.8 1.2-.1.4-.3.9-.3 1.9C3 9.3 3 9.7 3 12s0 3.5.1 4.7c0 1 .2 1.5.3 1.9.2.5.4.8.8 1.2.4.4.7.6 1.2.8.4.1.9.3 1.9.3 1.2.1 1.6.1 4.7.1s3.5 0 4.7-.1c1 0 1.5-.2 1.9-.3.5-.2.8-.4 1.2-.8.4-.4.6-.7.8-1.2.1-.4.3-.9.3-1.9.1-1.2.1-1.6.1-4.7s0-3.5-.1-4.7c0-1-.2-1.5-.3-1.9a3.2 3.2 0 0 0-.8-1.2 3.2 3.2 0 0 0-1.2-.8c-.4-.1-.9-.3-1.9-.3-1.2-.1-1.6-.1-4.7-.1Zm0 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 1.8a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm5.7-2a1.1 1.1 0 1 1-2.1 0 1.1 1.1 0 0 1 2.1 0Z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "vesperstudio07@gmail.com",
    href: "mailto:vesperstudio07@gmail.com",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="w-5 h-5"
      >
        <path d="M3 6h18v12H3z" />
        <path d="m3 7 9 6 9-6" />
      </svg>
    ),
  },
  {
    label: "Lokasi",
    value: "Berbasis di Cirebon - melayani Cirebon, Kuningan & sekitarnya",
    href: null,
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="w-5 h-5"
      >
        <path d="M12 21s7-6.1 7-11a7 7 0 1 0-14 0c0 4.9 7 11 7 11Z" />
        <circle cx="12" cy="10" r="2.5" />
      </svg>
    ),
  },
];

export default function Kontak() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-20 animate-fade-up">
      <span className="font-mono text-xs uppercase tracking-widest text-maroon">
        Contact
      </span>
      <h1 className="font-display text-4xl mt-3 text-ink">
        Ngobrol dulu, yuk.
      </h1>
      <p className="text-ink-soft mt-3 max-w-lg">
        Ada pertanyaan soal paket, jadwal, atau lokasi pemotretan? Hubungi lewat
        salah satu ini.
      </p>

      <div className="grid sm:grid-cols-2 gap-4 mt-10">
        {contacts.map((c) => {
          const Wrapper = c.href ? "a" : "div";
          return (
            <Wrapper
              key={c.label}
              {...(c.href
                ? { href: c.href, target: "_blank", rel: "noopener" }
                : {})}
              className="flex items-start gap-4 rounded-2xl border border-line bg-paper p-5 hover:border-maroon/40 hover:-translate-y-0.5 hover:shadow-md transition-all duration-200"
            >
              <span className="flex-shrink-0 w-10 h-10 rounded-full bg-maroon/10 text-maroon flex items-center justify-center">
                {c.icon}
              </span>
              <span>
                <span className="block text-xs uppercase tracking-wide text-ink-soft/70 font-mono">
                  {c.label}
                </span>
                <span className="block text-ink font-medium mt-0.5">
                  {c.value}
                </span>
              </span>
            </Wrapper>
          );
        })}
      </div>
    </section>
  );
}
