export default function Projects() {
  const bgImage = "https://a.top4top.io/p_3596zikwz1.jpeg";
  const HORROR_ICON_URL = "https://a.top4top.io/p_3596xbvxm1.png"; 

  const identityData = { 
    name: "Nisrina Khalda Purwandi", 
    major: "PPLG 1 - SMKN 1 Probolinggo",
  };

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
      <div className="bg-black/50 py-20 min-h-screen flex flex-col items-center">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 drop-shadow-lg">🦇 Dokumen Identitas Terlarang</h2>

          <div className="flex justify-center px-4">
            <div id="horror-id-card" className="max-w-4xl w-full p-8 text-black shadow-2xl transition duration-500">
              <h3 className="text-3xl font-bold mb-6 text-center text-red-700">Kartu Identitas Siswa RPL(Danger Zone)</h3>
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                  
                  {/* KOLOM KIRI: FOTO + IDENTITY */}
                  <div className="flex-1">
                    <div className="id-photo-container mb-6">
                        <img 
                            src={HORROR_ICON_URL} 
                            alt="Foto Nisrina" 
                            className="id-photo" 
                        />
                    </div>
                    
                    <div className="id-details text-left">
                        <p className="text-lg mb-4">
                          <span className="font-semibold text-red-500">IDENTITY:</span> My name is Nisrina Khalda Purwandi, I'm 17 years old, i was born oct 21, 2008 and currently studying at SMKN 1 Probolinggo, majoring in Software Engineering 1 (RPL 1).
                        </p>
                    </div>
                  </div>

                  {/* KOLOM KANAN: ENGLISH JOURNEY + ACHIEVEMENT */}
                  <div className="flex-1 space-y-6">
                    <div className="id-details text-left">
                        <p className="text-lg mb-4">
                          <span className="font-semibold text-red-500">ENGLISH JOURNEY:</span> My interest in English started when I was in elementary school. I used to see my friends speaking English so fluently that it inspired me to learn too. At first, I felt challenged — I didn't want to be left behind. Over time, I studied harder and eventually fell in love with the language itself.
                        </p>
                        
                        <p className="text-lg">
                          <span className="font-semibold text-red-500">ACHIEVEMENT:</span> I have participated in several English competitions. I won medals and certificates at <span className="highlight">SMKN 2 Probolinggo</span>. I also joined competitions at <span className="highlight">SMP Luqman AlHakim</span> and <span className="highlight">Universitas Negeri Malang</span> — even though I didn't win, I reached the final round in both events.
                        </p>
                    </div>
                  </div>

              </div>
              
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}