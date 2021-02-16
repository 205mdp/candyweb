import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

function ProduView() {

    const [product, setProduct] = useState([])
    const {id} = useParams()

    const obternerProducto = async() => {
        const res = await axios.get(`http://127.0.0.1:8000/api/?id=${id}`)
        const data_product = await res.data
        setProduct(data_product)
    }

    useEffect(() => {
        obternerProducto()
        console.log(product)
    },[])

    return (
        <div>
            <h1 >Producto</h1>
            {
                <div key={product.id}>
                    
                    <p>id: {product.id}</p>
                    <p>nombre: {product.name}</p>
                    <p>descripcion: {product.description}</p>
                    <p>Precio: {product.price}</p>
                </div>   
            }
        </div>
    )
}

export default ProduView
