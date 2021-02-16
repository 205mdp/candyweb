import React, { useState } from "react";
import MainService from "../services/MainService";

function ProductAdd() {
  const initialProductState = {
    id: null,
    name: "",
    description: "",
    price: "",
    group: 1,
    slug: "",
    notes: "",
    active: true,
    sale: true,
    image: null,
    created_at: "",
    updated_at: "",
  };

  const [product, setProduct] = useState(initialProductState);
  const [submitted, setSubmitted] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const saveProduct = () => {
    var data = {
      name: product.name,
      description: product.description,
      price: product.price,
      group: product.group,
      slug: product.slug,
      notes: product.notes,
      active: product.active,
      sale: product.sale,
      image: product.image,
    };
    MainService.create(data)
      .then((response) => {
        setProduct({
          id: response.data.id,
          name: response.data.name,
        });
        setSubmitted(true);
        console.log(response.data);
      })
      .catch((e) => {
        console.log("Ups Huston !!!")
        console.log(e);
      });
  };

  const newProduct = () => {
    setProduct(initialProductState);
    setSubmitted(false);
  };

  return (
    <div className="submit-form">
      {submitted ? (
        <div>
          <h4>You submitted successfully!</h4>
          <button className="btn btn-success" onClick={newProduct}>
            Add
          </button>
        </div>
      ) : (
        <div>
          <div className="form-group">
            <label htmlFor="name">Nombre</label>
            <input
              type="text"
              className="form-control"
              id="name"
              required
              value={product.name}
              onChange={handleInputChange}
              name="name"
            />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <input
              type="text"
              className="form-control"
              id="description"
              required
              value={product.description}
              onChange={handleInputChange}
              name="description"
            />
          </div>
         <div className="form-group">
            <label htmlFor="description">Price</label>
            <input
              type="text"
              className="form-control"
              id="price"
              required
              value={product.price}
              onChange={handleInputChange}
              name="price"
            />
          </div>
         <div className="form-group">
            <label htmlFor="description">Group</label>
            <input
              type="text"
              className="form-control"
              id="group"
              required
              value={product.group}
              onChange={handleInputChange}
              name="group"
            />
          </div>
         <div className="form-group">
            <label htmlFor="description">Slug</label>
            <input
              type="text"
              className="form-control"
              id="slug"
              required
              value={product.slug}
              onChange={handleInputChange}
              name="slug"
            />
          </div>
         <div className="form-group">
            <label htmlFor="description">Notes</label>
            <input
              type="text"
              className="form-control"
              id="notes"
              required
              value={product.notes}
              onChange={handleInputChange}
              name="notes"
            />
          </div>
         <div className="form-group">
            <label htmlFor="active">Active</label>
            <input 
                type="checkbox" 
                name="active" 
                id="active" 
                value={product.active} 
                onChange={handleInputChange}/>
          
          </div>
         <div className="form-group">
            <label htmlFor="sale">sale</label>
            <input 
                type="checkbox" 
                name="sale" 
                id="sale" 
                value={product.sale} 
                onChange={handleInputChange}/>
          
          </div>
          <button onClick={saveProduct} className="btn btn-success">
            Submit
          </button>
        </div>
      )}
    </div>
  );
}

export default ProductAdd;
