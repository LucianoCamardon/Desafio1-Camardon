import "./styles.css"
import CartWidget from "./cartWidget"

function Navbar() {
    return <nav className="navbar">
        <div>
            <button className="navButtons">Productos</button>
            <button className="navButtons">Encontranos</button>
            <button className="navButtons">Contactanos</button>
        </div>
        <CartWidget/>
    </nav>
}

export default Navbar