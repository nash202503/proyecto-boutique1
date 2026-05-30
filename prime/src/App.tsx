import Carrusel from "./carrucel";
 
// ============================================
// TIPOS
// ============================================
interface Producto {
  img: string;
  alt: string;
  nombre: string;
}
 
interface ItemCarrito {
  nombre: string;
  precio: number;
}
 
// ============================================
// DATOS
// ============================================
const productos: Producto[] = [
  {
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=400&q=80",
    alt: "Vestidos",
    nombre: "Vestidos",
  },
  {
    img: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=400&q=80",
    alt: "Blusas",
    nombre: "Blusas",
  },
  {
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&q=80",
    alt: "Joyería",
    nombre: "Joyería",
  },
];
 
const carrito: ItemCarrito[] = [
  { nombre: "Vestido", precio: 450 },
  { nombre: "Blusa",   precio: 250 },
];
 
// ============================================
// COMPONENTE PRINCIPAL
// ============================================
export default function App() {
  const total = carrito.reduce((sum, item) => sum + item.precio, 0);
  //            ↑ reduce suma todos los precios del array
 
  const mensajeWa = `Hola! Quiero hacer un pedido:\n${carrito
    .map((i) => `${i.nombre}: $${i.precio}`)
    .join("\n")}\nTotal: $${total}`;
 
  return (
    // min-h-screen = la página ocupa al menos toda la pantalla
    <div className="min-h-screen bg-white font-sans">
 
      {/* ======================================
          NAVBAR
      ======================================= */}
      <nav className="flex items-center justify-between px-10 py-4 bg-white shadow-sm sticky top-0 z-50">
        {/* Logo con fuente cursiva (cargada en index.css) */}
        <span className="text-3xl text-pink-600" style={{ fontFamily: "'Great Vibes', cursive" }}>
          Boutique Belle Rose
        </span>
 
        <div className="flex items-center gap-8">
          {["Inicio", "Catálogo", "Promociones", "Contacto"].map((link) => (
            <a
              key={link}
              href="#"
              className="text-gray-800 font-bold text-sm hover:text-pink-600 transition-colors"
            >
              {link}
            </a>
          ))}
          <span className="text-2xl cursor-pointer">🛒</span>
        </div>
      </nav>
 
      {/* ======================================
          CARRUSEL HERO
          Importado desde Carrusel.tsx
      ======================================= */}
      <Carrusel />
 
      {/* ======================================
          CATÁLOGO
      ======================================= */}
      <section className="py-16 px-10">
        {/* Título con líneas decorativas usando flex */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <span className="flex-1 max-w-[140px] h-px bg-pink-500" />
          <h2
            className="text-5xl text-pink-600 whitespace-nowrap"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Nuestro Catálogo
          </h2>
          <span className="flex-1 max-w-[140px] h-px bg-pink-500" />
        </div>
 
        {/* Grid de productos — 3 columnas */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto">
          {productos.map((p) => (
            <div key={p.nombre} className="text-center">
              {/* Caja de imagen con proporción 3:4 */}
              <div className="overflow-hidden rounded-lg mb-4 bg-pink-50 aspect-[3/4]">
                <img
                  src={p.img}
                  alt={p.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">{p.nombre}</h3>
              <button className="bg-pink-600 hover:bg-pink-700 text-white font-bold px-5 py-2 rounded-lg transition-all hover:-translate-y-0.5">
                Ver colección
              </button>
            </div>
          ))}
        </div>
      </section>
 
      {/* ======================================
          CARRITO + MAPA
      ======================================= */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto px-10 pb-16">
 
        {/* CARRITO */}
        <div>
          {/* Título con líneas */}
          <div className="flex items-center gap-3 mb-6">
            <span className="flex-1 h-px bg-pink-500" />
            <span className="font-bold text-gray-900 whitespace-nowrap">Tu carrito de compras</span>
            <span className="flex-1 h-px bg-pink-500" />
          </div>
 
          {/* Items del carrito */}
          {carrito.map((item) => (
            <div key={item.nombre} className="flex justify-between py-3 border-b border-gray-100 text-sm">
              <span>{item.nombre}</span>
              <span>${item.precio}</span>
            </div>
          ))}
 
          {/* Total */}
          <div className="flex justify-between py-4 font-bold text-pink-600">
            <span>Total:</span>
            <span>${total}</span>
          </div>
 
          {/* Botón WhatsApp */}
          <button
            onClick={() =>
              window.open(
                `https://wa.me/522200000000?text=${encodeURIComponent(mensajeWa)}`,
                "_blank"
              )
            }
            className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700 text-white font-bold px-5 py-3 rounded-lg w-full justify-center transition-all mt-2"
          >
            💬 Enviar pedido por WhatsApp
          </button>
        </div>
 
        {/* MAPA */}
        <div className="flex flex-col gap-3">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.5!2d-96.9!3d19.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDMwJzAwLjAiTiA5NsKwNTQnMDAuMCJX!5e0!3m2!1ses!2smx!4v1"
            className="w-full h-56 rounded-xl border-0"
            allowFullScreen
            loading="lazy"
            title="Ubicación de la boutique"
          />
          <button
            onClick={() => window.open("https://maps.google.com", "_blank")}
            className="flex items-center justify-center gap-2 bg-gray-900 hover:bg-gray-700 text-white font-bold py-3 rounded-lg transition-all"
          >
            📍 Ver ubicación
          </button>
        </div>
 
      </div>
 
      {/* ======================================
          CONTÁCTANOS
      ======================================= */}
      <section className="bg-pink-50 py-14 px-10">
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="flex-1 max-w-[140px] h-px bg-pink-500" />
          <h2
            className="text-5xl text-pink-600 whitespace-nowrap"
            style={{ fontFamily: "'Great Vibes', cursive" }}
          >
            Contáctanos
          </h2>
          <span className="flex-1 max-w-[140px] h-px bg-pink-500" />
        </div>
 
        <div className="flex flex-wrap justify-center items-center gap-10">
          {/* Cada dato de contacto */}
          {[
            { icono: "📞", texto: "+522200000000" },
            { icono: "📍", texto: "Calle Manuel Ávila C." },
            { icono: "✉️", texto: "boutiquebr@gmail.com" },
          ].map((c, i) => (
            // Fragment: agrupa el item y el separador sin agregar un <div> extra
            <div key={i} className="flex items-center gap-10">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-pink-600 text-white flex items-center justify-center text-xl">
                  {c.icono}
                </div>
                <span className="text-sm text-gray-700">{c.texto}</span>
              </div>
              {/* Separador vertical (no mostrar en el último) */}
              {i < 2 && <span className="w-px h-10 bg-pink-300 hidden sm:block" />}
            </div>
          ))}
        </div>
      </section>
 
      {/* ======================================
          FOOTER
      ======================================= */}
      <footer className="bg-pink-600 text-white px-10 py-8 flex flex-wrap justify-between items-center gap-6">
 
        <div>
          <p className="text-3xl" style={{ fontFamily: "'Great Vibes', cursive" }}>
            Boutique Belle Rose
          </p>
          <p className="text-xs opacity-80 mt-1">Moda que te hace sentir única</p>
        </div>
 
        <div className="text-center text-xs opacity-80">
          <p>© 2026 Rosa Boutique</p>
          <p className="mt-1">
            <a href="#" className="hover:underline mx-2">Aviso de Privacidad</a>|
            <a href="#" className="hover:underline mx-2">Términos y Condiciones</a>
          </p>
        </div>
 
        <div>
          <p className="text-sm mb-2">Síguenos:</p>
          <div className="flex gap-2">
            {["f", "📷", "♪"].map((red, i) => (
              <button
                key={i}
                className="w-9 h-9 rounded-full bg-white/20 hover:bg-white/40 text-white flex items-center justify-center transition-all"
              >
                {red}
              </button>
            ))}
          </div>
        </div>
 
      </footer>
 
    </div>
  );
}
 