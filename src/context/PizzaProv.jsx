import { createContext, useEffect, useState } from "react";

export const PizzasContext = createContext();
const PizzasProv = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);
  useEffect(() => {
    getPizzas();
  }, []);

  // consultar json pizzas
  const getPizzas = async () => {
    const res = await fetch("/pizzas.json");
    const pizzas = await res.json();
    setPizzas(pizzas);
  };

  // Agregar productos al carro
  const addToCart = ({ id, price, name, img }) => {
    const productoEcontradoIndex = carrito.findIndex((p) => p.id === id);
    const producto = { id, price, name, img, count: 1 };

    if (productoEcontradoIndex >= 0) {
      carrito[productoEcontradoIndex].count++;
      setCarrito([...carrito]);
    } else {
      setCarrito([...carrito, producto]);
    }
  };


 

  return (
    <PizzasContext.Provider
      value={{ pizzas, carrito, setCarrito, addToCart}}
    >
      {children}
    </PizzasContext.Provider>
  );
};

export default PizzasProv;
