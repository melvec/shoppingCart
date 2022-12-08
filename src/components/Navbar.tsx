import { Navbar as NavbarBs } from "react-bootstrap"
import { Container, Nav, NavLink, Button } from "react-bootstrap";
import {Link } from "react-router-dom"
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useShoppingCart } from "../context/ShoppingCartContext";

export function Navbar() {

    const { openCart, cartQty } = useShoppingCart()

    return (
        <NavbarBs sticky="top" className="bg-white shadow-sm mb-3">
            <Container>
                <Nav className="me-auto">
                    <Link to="/" className="nav-link" >
                        Home
                    </Link>
                    <Link to="/store" className="nav-link" >
                        Store
                    </Link>
                    <Link to="/about" className="nav-link" >
                        About
                    </Link>
                    
                    

                </Nav>
                <Button 
                    onClick = {openCart}
                    style={{width: "3rem", height: "3rem", position: "relative"}}    
                    variant="outline-primary"
                    className="rounded-circle"><ShoppingCartIcon />
                    <div
                    className="rounded-circle bg-danger d-flex justify-content-center align-items-center"
                    style={{
                        color: "white",
                        width: "1.5rem",
                        height: "1.5rem",
                        position: "absolute",
                        bottom: 0,
                        right: 0,
                        transform: "translate(25%, 25%)"
                    }}>{cartQty}</div>
                    </Button>
                
            </Container>
        </NavbarBs>)
}