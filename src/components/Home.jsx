import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios';
import {  useNavigate } from 'react-router-dom';
import { CartContext } from '../Context/CartContext';

function Home() {
    const {addToCart} = useContext(CartContext)
    const [data, setData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await axios.get('http://localhost:3000/productss')
                setData(response.data)
            }
            catch(error){
                console.error("error fetching",error)
            }
        }
        fetchData()
    },[])

  return (
    <div><h1>Home</h1>
        <button onClick={() => navigate("/cart")}>CART</button>
        {data.map((item) => (
            <div style={{border:"2px solid black",width:"3cm"}}><div>Id: {item.id}</div>
            <div>Name: {item.name}</div>
            <button onClick={() => addToCart(item)}>Add to Cart</button>
            </div>

        ))}
    </div>
  )
}

export default Home