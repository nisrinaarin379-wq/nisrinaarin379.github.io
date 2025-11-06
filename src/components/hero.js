import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section
      className="relative text-center py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: "url('https://b.top4top.io/p_3591uolgy1.jpeg')",
      }}
    >
      {/* Gradasi gelap */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/70 z-[1]" />

      {/* Kabut tebal bergerak lambat */}
      <motion.div
        className="absolute inset-0 z-[2] bg-[url('https://i.ibb.co/7tYxP7W/fog-texture.png')] bg-cover mix-blend-lighten opacity-40"
        animate={{
          backgroundPosition: ["0px 0px", "300px 200px"],
        }}
        transition={{
          repeat: Infinity,
          duration: 40,
          ease: "linear",
        }}
      />

      {/* Kabut tipis depan */}
      <motion.div
        className="absolute inset-0 z-[3] bg-[url('https://i.ibb.co/9rP5f06/fog2.png')] bg-cover mix-blend-lighten opacity-25"
        animate={{
          backgroundPosition: ["200px 100px", "-100px -50px"],
        }}
        transition={{
          repeat: Infinity,
          duration: 60,
          ease: "linear",
        }}
      />

      {/* Konten utama */}
      <div className="relative z-[5] py-20">
        <motion.h1
          className="text-5xl font-bold mb-4 text-white drop-shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
        >
          Welcome to the Fog, Traveler
        </motion.h1>

        <motion.p
          className="text-lg text-gray-200"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Identity • Achievement
        </motion.p>

        <motion.a
          href="#projects"
          className="mt-6 inline-block bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white/20 transition backdrop-blur-sm border border-white/20"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          Lihat Proyek Saya
        </motion.a>
      </div>
    </section>
  );
}
