import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { ProductItem } from '../../Store/state'


export const NavBar = () => {
    const products = useSelector((state: ProductItem[]) => state)
    let totalQ = products.filter(product => product.added).length
    return (
        <div>
            <Navbar bg="light" variant="light">
                <Navbar.Brand href="/">SHAIKH STORE</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/">Home</Nav.Link>
                    {/* <Nav.Link href="/products">Products</Nav.Link> */}
                    <Nav.Link> <Link to="/products"> Products</Link> </Nav.Link>
                    {/* <Nav.Link href="/cart">Cart ({totalQ}) </Nav.Link> */}
                    <Nav.Link> <Link to="/cart"> Cart ({totalQ})</Link> </Nav.Link>
                </Nav>
            </Navbar>
        </div>
    )
}
