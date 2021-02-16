import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function ProduLista() {
  const [products, setProducts] = useState([]);
  const obternerProductos = async () => {
    const res = await axios.get("http://127.0.0.1:8000/api/");

    const data_products = await res.data;
    setProducts(data_products);
  };

  const deleteProduct = (id, e) => {
    e.preventDefault();
    console.log("El registro a borrar es " + id);
  };

  useEffect(() => {
    obternerProductos();
    console.log(products);
  }, []);

  return (
    <div>
      <h1>Producto Lista</h1>

      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Producto</th>
            <th scope="col">Descripcion</th>
            <th scope="col">Precio</th>
            <th scope="col">active</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr>
              <th>
                <Link to={`/${item.id}`}>{item.id}</Link>
              </th>
              <th>{item.name}</th>
              <th>{item.description}</th>
              <th>{item.price}</th>
              <th>{item.active}</th>
              <th>
                <div className="row">
                  <button
                    className="btn btn-outline-danger"
                    onClick={(e) => deleteProduct(item.id, e)}
                  >
                    Borrar
                  </button>
                  <Link to={`/${item.id}`}>
                    <button className="btn btn-outline-primary">Ver</button>
                  </Link>
                </div>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProduLista;
