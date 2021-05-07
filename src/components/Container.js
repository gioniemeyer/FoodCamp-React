import Pratos from "./Pratos";
import Bebidas from "./Bebidas";
import Sobremesas from "./Sobremesas";



export default function Container(props) {

    const {arrPratos, setArrPratos} = props;
    
    return (
        <>
            <div class="container">

            <div class="items">
                <h2>Primeiro seu prato</h2>
                <Pratos arrPratos = {arrPratos} setArrPratos={setArrPratos} />
            </div>

            <div class="items">
                <h2>Agora, sua bebida</h2>
                
                <Bebidas />
            </div>

            <div class="items">
                <h2>Por fim, sua sobremesa</h2>

                <Sobremesas />
            </div>
        </div>
    </>
    )
} 