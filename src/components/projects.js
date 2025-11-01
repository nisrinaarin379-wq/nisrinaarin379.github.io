export default function Projects() {
  // 🔹 Ganti link di bawah ini dengan link gambar background anda
  const bgImage = "https://c.top4top.io/p_3591p2mww1.jpeg";

  const data = [
    { name: "My Identity", desc: "My name is Nisrina Khalda Purwandi, I’m 17 years old and currently studying at SMKN 1 Probolinggo, majoring in Software Engineering 1 (RPL 1).", link: "#" },
    { name: "My Journey with English", desc: "My interest in English started when I was in elementary school. I used to see my friends speaking English so fluently that it inspired me to learn too. At first, I felt challenged — I didn’t want to be left behind. Over time, I studied harder and eventually fell in love with the language itself.", link: "#" },
    { name: "My Achievements", desc: "I have participated in several English competitions. I won medals and certificates at SMKN 2 Probolinggo. I also joined competitions at Universitas Integral Hidayatullah and Universitas Negeri Malang — even though I didn’t win, I reached the final round in both events.", link: "#" },
  ];

  return (
    <section
      id="projects"
      className="py-20 text-white"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Lapisan transparan biar teks tetap kebaca */}
      <div className="bg-black/50 py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 drop-shadow-lg">🦇 Proyek Saya</h2>

          <div className="grid md:grid-cols-3 gap-6 px-4">
            {data.map((p, i) => (
              <div
                key={i}
                className="bg-white/10 border border-white/20 backdrop-blur-sm rounded-2xl shadow p-6 hover:bg-white/20 hover:shadow-lg transition"
              >
                <h3 className="text-xl font-semibold mb-2">{p.name}</h3>
                <p className="text-gray-200 mb-4">{p.desc}</p>
                <a href={p.link} className="text-red-400 hover:text-white">
                  Lihat Detail →
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
