import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { PizzasContext } from "../context/PizzaProv";
// import { formatNumber } from "../helpers/formatNumber";

const Card = () => {
  // const [total, setTotal] = useState(0);
  const { pizzas, addToCart } = useContext(PizzasContext);

  const navigate = useNavigate();

  return (
    <>
      {pizzas.map((pizza) => (
        <div
          key={pizza.id}
          className="col"
        >
          <div className="card">
            <img
              className="card-img-top"
              src={pizza.img}
              alt=""
            />
            <div className="card-body">
              <h4 className="card-title text-capitalize">Pizza {pizza.name}</h4>
              <hr />
              <p className="card-text">
                <b>Ingredientes:</b>
              </p>

              <ul>
                {pizza.ingredients.map((ingredient, i) => (
                  <li key={i}> {ingredient}</li>
                ))}
              </ul>
            </div>

            <h2>
              {"$"}{pizza.price}</h2>

            <div className="d-flex justify-content-around mb-4">
              <button
                to={`pizza/${pizza.id}`}
                className="btn btn-info text-white"
                onClick={() => navigate(`/pizzas/${pizza.id}`)}
              >
                Ver Más
              </button>

              <button
                className="btn btn-danger"
                onClick={() => addToCart(pizza)}
                // onChange={() => setTotal(pizza.price)}
              >
                Añadir
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Card;
