import Pratos from "./Pratos";
import Bebidas from "./Bebidas";
import Sobremesas from "./Sobremesas";

export default function Container(props) {

    const {arrPratos, setArrPratos} = props;
    const {arrBebidas, setArrBebidas} = props;
    const {arrSobremesas, setArrSobremesas} = props;

    
    return (
        <>
            <div class="container">

            <div class="items">
                <h2>Primeiro seu prato</h2>
                <Pratos arrPratos = {arrPratos} setArrPratos={setArrPratos} />
            </div>

            <div class="items">
                <h2>Agora, sua bebida</h2>
                
                <Bebidas arrBebidas = {arrBebidas} setArrBebidas={setArrBebidas} />
            </div>

            <div class="items">
                <h2>Por fim, sua sobremesa</h2>

                <Sobremesas arrSobremesas = {arrSobremesas} setArrSobremesas={setArrSobremesas} />
            </div>
        </div>
    </>
    )
} 