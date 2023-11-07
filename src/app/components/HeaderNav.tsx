import { FaFire } from "react-icons/fa";

export const HeaderNav = () => {
  return (
    <header className="fixed bg-white left-0 right-0">
      <div className="flex flex-col  global-container">
        <div className="flex gap-2 items-center justify-center">
            <FaFire/>
           <span className="text-2xl">TechMarket</span>
        </div>
        <nav className="mt-3">
          <ul className="flex gap-3 justify-center">
            <li>
              <a href="">Agregar productos</a>
            </li>
            {/* Controlar estado para mostrar salir o iniciar */}
            <li>
              <a href="">Salir</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
