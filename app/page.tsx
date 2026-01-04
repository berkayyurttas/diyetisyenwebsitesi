import Image from "next/image";
import Link from "next/link";
import { FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaInstagram } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-gray-800 font-sans">
      
      {/* --- HEADER / NAVBAR --- */}
      <nav className="fixed w-full bg-white/90 backdrop-blur-md z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-green-600">Dyt. İsim Soyisim</div>
          <div className="hidden md:flex space-x-6 font-medium">
            <Link href="#hakkimda" className="hover:text-green-600 transition">Hakkımda</Link>
            <Link href="#hizmetler" className="hover:text-green-600 transition">Hizmetler</Link>
            <Link href="#blog" className="hover:text-green-600 transition">Blog</Link>
            <Link href="#iletisim" className="hover:text-green-600 transition">İletişim</Link>
          </div>
          <a href="https://wa.me/905555555555" className="bg-green-600 text-white px-5 py-2 rounded-full font-semibold hover:bg-green-700 transition shadow-lg animate-pulse">
            Randevu Al
          </a>
        </div>
      </nav>

      {/* --- HERO SECTION (GİRİŞ) --- */}
      <section className="pt-32 pb-20 md:pt-40 md:pb-32 container mx-auto px-4 flex flex-col-reverse md:flex-row items-center">
        {/* Sol Yazı Alanı */}
        <div className="w-full md:w-1/2 text-center md:text-left mt-10 md:mt-0">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            Ankara'da <span className="text-green-600">Sağlıklı Yaşam</span> Yolculuğuna Başla
          </h1>
          <p className="text-lg text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
            Kişiye özel beslenme programları ile yasaksız, sürdürülebilir ve bilimsel yöntemlerle ideal kilonuza ulaşın.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
             <a href="#iletisim" className="bg-green-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-green-700 transition shadow-xl text-center">
              Ücretsiz Ön Görüşme
            </a>
            <a href="#hizmetler" className="bg-gray-100 text-gray-800 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-200 transition text-center">
              Hizmetleri İncele
            </a>
          </div>
        </div>
        
        {/* Sağ Görsel Alanı */}
        <div className="w-full md:w-1/2 flex justify-center relative">
          {/* Arka plan süslemesi */}
          <div className="absolute w-[300px] h-[300px] bg-green-200 rounded-full blur-3xl opacity-30 -z-10 top-0 right-0"></div>
          {/* Buraya kendi fotoğrafını koyacaksın */}
          <div className="w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-gray-200 rounded-2xl border-4 border-white shadow-2xl flex items-center justify-center text-gray-400">
            Diyetisyen Fotoğrafı
          </div>
        </div>
      </section>

      {/* --- HİZMETLER --- */}
      <section id="hizmetler" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Uzmanlık Alanlarım</h2>
            <p className="text-gray-600">Size en uygun programı birlikte belirleyelim.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Hizmet Kartı 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-100">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl mb-6">🍎</div>
              <h3 className="text-xl font-bold mb-3">Yüz Yüze Diyet</h3>
              <p className="text-gray-600">Ofisimizde profesyonel vücut analizi ve haftalık görüşmelerle takipli program.</p>
            </div>
            
             {/* Hizmet Kartı 2 */}
             <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-100">
              <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl mb-6">💻</div>
              <h3 className="text-xl font-bold mb-3">Online Diyet</h3>
              <p className="text-gray-600">Dünyanın neresinde olursanız olun, görüntülü görüşme ile diyetisyeniniz yanınızda.</p>
            </div>

             {/* Hizmet Kartı 3 */}
             <div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition border border-gray-100">
              <div className="w-14 h-14 bg-orange-100 rounded-full flex items-center justify-center text-orange-600 text-2xl mb-6">🏢</div>
              <h3 className="text-xl font-bold mb-3">Kurumsal Beslenme</h3>
              <p className="text-gray-600">Şirket çalışanlarına özel menü planlama ve sağlıklı beslenme seminerleri.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER / İLETİŞİM ÖZETİ --- */}
      <footer id="iletisim" className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-xl font-bold mb-4 text-green-400">Dyt. İsim Soyisim</h4>
            <p className="text-gray-400">Ankara Çankaya'daki ofisimizde sağlıklı yarınlar için sizi bekliyoruz.</p>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">İletişim</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2"><FaMapMarkerAlt /> Çukurambar Mah. 1071 Plaza, Ankara</li>
              <li className="flex items-center gap-2"><FaPhoneAlt /> +90 312 000 00 00</li>
              <li className="flex items-center gap-2"><FaInstagram /> @diyetisyenhesabi</li>
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold mb-4">Çalışma Saatleri</h4>
            <p className="text-gray-400">Pazartesi - Cumartesi</p>
            <p className="text-gray-400">09:00 - 18:00</p>
          </div>
        </div>
      </footer>

      {/* --- SABİT WHATSAPP BUTONU --- */}
      <a 
        href="https://wa.me/905555555555" 
        target="_blank" 
        className="fixed bottom-6 right-6 bg-green-500 text-white p-4 rounded-full shadow-2xl hover:bg-green-600 transition z-50 flex items-center justify-center text-3xl"
      >
        <FaWhatsapp />
      </a>

    </main>
  );
}