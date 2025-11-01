export default function Contact() {
  // 🔹 Ganti link di bawah ini dengan link gambar background anda
  const bgImage = "https://i.top4top.io/p_35912528c1.jpeg";

  return (
    <section
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
      className="text-center py-20 text-white"
    >
      <h2 className="text-3xl font-bold mb-4 drop-shadow-lg">Hubungi Saya</h2>
      <p className="text-gray-200 mb-6 drop-shadow-lg">
        Tertarik diskusi santai?
      </p>
      <a
        href="mailto:nisrinaarin5579@gmail.com"
        className="bg-white text-black px-6 py-2 rounded-full hover:bg-black hover:text-white transition shadow-lg"
      >
        Kirim Email
      </a>
    </section>
  );
}
