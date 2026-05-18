import Product from "./Product.jsx";
import "./Product.css";
import mouseImg from "./assets/image.png";
import pencilImg from "./assets/image copy.png";
import keyboardImg from "./assets/image copy 2.png";
import someImg from "./assets/image copy 3.png";

function ProductTab() {
    
    return (
        <>
        <h2 style={{textAlign:"center",}}>Blockbuster deals | Shop Now</h2>
        <div className="container">
            
    <Product title="Logitech MX Master" idx={0} img={mouseImg} />
    <Product title="Zebronics Zeb-transformer" idx={1} img={pencilImg} />
    <Product title="Apple Pencil (2nd Gen)" idx={2} img={keyboardImg} />
    <Product title="Petronics Toad 23" idx={3} img={someImg}/>

        </div></>
    );
}
export default ProductTab;
