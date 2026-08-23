import { useState } from 'react'
import Home from './pages/Home'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return <Home />;
    /*  <div className="min-h-screen bg-[#f8f5f0] flex items-center justify-center">
        <h1 className="text-5xl font-bold text-[#5c4033]">
          Velas Aromáticas
        </h1>
      </div>
      <h1 className="text-[#5c4033] text-5xl font-bold">
        Aromas que transforman tus espacios
      </h1>
      <button className="bg-[#5c4033] text-white px-6 py-3 rounded-full hover:bg-[#463026] transition">
        Ver productos
      </button>
    </>*/
}

export default App
