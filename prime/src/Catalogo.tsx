import './App.css'
import vestidoFloral from './assets/productos/vestido-floral.jpeg'
import blusaRomantica from './assets/productos/camisa-romantica.jpeg'
import collarElegante from './assets/productos/collar-elegante.jpeg'
import bolsaRosa from './assets/productos/bolsa-rosa.jpeg'
import taconesNude from './assets/productos/tacones-nude.jpeg'
import aretesPerla from './assets/productos/aretes-perlas.jpeg'

const productos = [
  {
    id: 1,
    nombre: 'Vestido Floral Elegante',
    categoria: 'Vestidos',
    precio: 450,
    imagen: vestidoFloral,
  },
  {
    id: 2,
    nombre: 'Blusa Romántica Rosa',
    categoria: 'Blusas',
    precio: 320,
    imagen: blusaRomantica,
  },
  {
    id: 3,
    nombre: 'Collar Elegante',
    categoria: 'Joyería',
    precio: 280,
    imagen: collarElegante,
  },
  {
    id: 4,
    nombre: 'Bolsa Rosa Chica',
    categoria: 'Accesorios',
    precio: 350,
    imagen: bolsaRosa,
  },
  {
    id: 5,
    nombre: 'Tacones Nude Clásicos',
    categoria: 'Calzado',
    precio: 650,
    imagen: taconesNude,
  },
  {
    id: 6,
    nombre: 'Aretes De Perlas',
    categoria: 'Joyería',
    precio: 180,
    imagen: aretesPerla,
  },
]

function Catalogo() {
  const handleAgregar = (nombre: string) => {
    alert(`"${nombre}" agregado al carrito 🛒`)
  }

  return (
    <section className="catalogo-section">
      <div className="catalogo-header">
        <h2 className="catalogo-titulo">Nuestro Catálogo</h2>
      </div>

      <div className="catalogo-grid">
        {productos.map((producto) => (
          <div className="producto-card" key={producto.id}>
            <div className="producto-imagen-wrapper">
              <img
                src={producto.imagen}
                alt={producto.nombre}
                className="producto-imagen"
              />
            </div>
            <div className="producto-info">
              <h3 className="producto-nombre">{producto.nombre}</h3>
              <p className="producto-precio">${producto.precio}</p>
              <button
                className="btn-agregar"
                onClick={() => handleAgregar(producto.nombre)}
              >
                Comprar Ahora
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Catalogo