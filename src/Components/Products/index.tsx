import React from 'react';
import { ProductItem } from '../../Store/state'
import { addProd, store } from '../../Store/index'
import { useSelector } from 'react-redux'
import { Card , Button} from 'react-bootstrap';
import './index.css'


export default function Products () {
    const products = useSelector((state: ProductItem[]) => state)
    const product = products.map((product, i) => {
        return(
            <div>
               <Card style={{ width: '18rem' }} key={i}>
                    <Card.Img variant="top" src={product.src} className="image"  />
                    <Card.Body>
                        <Card.Title> <h4 className="prod-name">{product.name}</h4> </Card.Title>
                        <Card.Text>
                            ${product.price}
                        </Card.Text>
                        <Button className="add-button" variant="primary" disabled={product.added} onClick={() => store.dispatch(addProd(product))}>Add to Cart </Button>
                    </Card.Body>
                </Card> 
                <br />
            </div>
            
        )
    })
    return(
        <div className="container">
            {product}
        </div>
    )
}
