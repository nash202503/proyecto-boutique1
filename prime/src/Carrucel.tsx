import { useState } from "react";

// ============================================
// TIPOS — TypeScript nos obliga a definir
// la forma de cada objeto que usamos
// ============================================
interface Slide {
  colorDesde: string;   // Color inicial del gradiente
  colorHasta: string;   // Color final del gradiente
  titulo: string;
  boton: string;
  img: string;
  alt: string;
}

// ============================================
// DATOS DE CADA SLIDE
// Para cambiar imágenes, edita los "img:"
// ============================================
const slides: Slide[] = [
  {
    colorDesde: "#e91e8c",
    colorHasta: "#f06aa8",
    titulo: "Nueva colección\ndisponible",
    boton: "Comprar ahora",
    img: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80",
    alt: "Vestido floral",
  },
  {
    colorDesde: "#c2185b",
    colorHasta: "#e91e8c",
    titulo: "Blusas de primavera\n¡Nuevos diseños!",
    boton: "Ver blusas",
    img: "https://images.unsplash.com/photo-1485462537746-965f33f7f6a7?w=500&q=80",
    alt: "Blusa elegante",
  },
  {
    colorDesde: "#ad1457",
    colorHasta: "#d81b60",
    titulo: "Joyería exclusiva\nBrilla con estilo",
    boton: "Ver joyería",
    img: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80",
    alt: "Joyería",
  },
];

// ============================================
// COMPONENTE CARRUSEL
// En React, un componente es una función que
// devuelve JSX (HTML dentro de JavaScript)
// ============================================
export default function Carrusel() {
  // useState guarda qué slide estamos viendo
  // actual = valor actual | setActual = función para cambiarlo
  const [actual, setActual] = useState<number>(0);

  // Función para ir al siguiente slide
  const siguiente = () => {
    setActual((prev) => (prev + 1) % slides.length);
    //                   ↑ prev es el valor anterior
    //                          ↑ % evita pasarse del último
  };

  // Función para ir al slide anterior
  const anterior = () => {
    setActual((prev) => (prev - 1 + slides.length) % slides.length);
  };

  // El slide que se muestra actualmente
  const slide = slides[actual];

  return (
    // Contenedor principal del carrusel
    <div className="relative w-full overflow-hidden">

      {/* ÁREA DEL SLIDE — el fondo cambia con cada slide */}
      <div
        className="flex items-center min-h-[380px] px-16 py-12 relative transition-all duration-500"
        style={{
          background: `linear-gradient(135deg, ${slide.colorDesde}, ${slide.colorHasta})`,
        }}
      >
        {/* TEXTO IZQUIERDA */}
        <div className="max-w-sm z-10 relative">
          <h1 className="text-4xl font-bold text-white leading-tight mb-6 whitespace-pre-line">
            {/* whitespace-pre-line respeta los saltos de línea \n */}
            {slide.titulo}
          </h1>
          <button className="bg-white text-pink-600 font-bold px-7 py-3 rounded-lg hover:shadow-lg hover:-translate-y-1 transition-all">
            {slide.boton}
          </button>
        </div>

        {/* IMAGEN DERECHA */}
        <img
          src={slide.img}
          alt={slide.alt}
          className="absolute right-16 bottom-0 h-[360px] object-contain drop-shadow-2xl"
        />
      </div>

      {/* FLECHA ANTERIOR */}
      <button
        onClick={anterior}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full w-11 h-11 flex items-center justify-center text-xl transition-all z-20"
        aria-label="Slide anterior"
      >
        ←
      </button>

      {/* FLECHA SIGUIENTE */}
      <button
        onClick={siguiente}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/30 hover:bg-white/50 text-white rounded-full w-11 h-11 flex items-center justify-center text-xl transition-all z-20"
        aria-label="Slide siguiente"
      >
        →
      </button>

      {/* PUNTITOS INDICADORES */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2 z-20">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setActual(i)}
            aria-label={`Ir al slide ${i + 1}`}
            className={`w-3 h-3 rounded-full border-2 border-white transition-all ${
              actual === i ? "bg-white" : "bg-transparent"
            }`}
          />
        ))}
      </div>

    </div>
  );
}
