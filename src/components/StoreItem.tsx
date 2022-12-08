import { useState } from "react";
import {Card, Button} from "react-bootstrap"
import { useShoppingCart } from "../context/ShoppingCartContext";
import {formatCurrency} from "../utilities/formatCurrency"


type StoreItemProps = {
    id: number,
    name: string,
    price: number,
    imgUrl: string
}
 

export function StoreItem({id, name, price, imgUrl }: StoreItemProps) {
     

    const { getItemQuantity, increaseCartQty, decreaseCartQty, removeFromCart } = useShoppingCart()

    const qty= getItemQuantity(id)

    return(<Card>
         
        <Card.Img 
            variant="top"
            src={imgUrl}
            height="200px" 
            style={{objectFit: "cover"} }
        />
        <Card.Body className="d-flex flex-column">
            <Card.Title className="d-flex justify-content-between align-items-baseline mb-4">
                <span className="fs-2">{name}</span>
                <span className="ms-2">{formatCurrency(price)}</span>
            </Card.Title>
            <div className="mt-auto"> {qty===0 ?  ( 
            <Button className="w-100" onClick={()=> increaseCartQty(id)} >
               + Add to bag
           </Button> ) : 
           (
                <div className="d-flex align-items-center flex-column" style={{gap: ".5rem"}}>
                    <div className="d-flex align-items-center  justify-content-center" style={{gap: ".5rem"}}> 
                        <Button onClick={()=> decreaseCartQty(id)}>-</Button> 
                        <div >
                            <span className="fs-3"> {qty} </span> item 
                        </div>
                        <Button onClick={()=> increaseCartQty(id)}>+</Button> 
                    </div>
                    <Button variant="danger" size="sm" onClick={()=> removeFromCart(id)}> Remove </Button> 
                
                </div>
              
            
            )
           }  </div>
         
           
        </Card.Body>

    </Card>)
}