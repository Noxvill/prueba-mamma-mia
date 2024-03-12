import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Menubar from './components/Menubar'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
import Detalle from './views/Detalle'
import NotFound from './views/NotFound'
import Home from './components/home'
import DetallePedido from './views/DetallePedido'

function App() {
  

  return (
    <>

<div>
      <Routes>
     

        <Route path="/" element={<Home />} />
        <Route path="pizzas/">
        <Route path=":id" element={<Detalle />} /></Route>
        <Route path="/carrito" element={<DetallePedido />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
    </>
  )
}

export default App
