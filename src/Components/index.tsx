import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
export const Main = () => {
    return (
        <div>
            <h1 className="main">
                Welcome to Shaikh Store
            </h1>
            <div className="button-div">
                <Link to='/products'> <button className="button">View Products</button> </Link>
            </div>
            
        </div>
    )
}
