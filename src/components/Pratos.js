
import Prato from "./Prato"

export default function Pratos(props) {

    const {arrPratos, setArrPratos} = props;

    return (
        <ul>
            {
            arrPratos.map( (prato, i) => {
                    return(
                    <Prato prato={prato} arrPratos = {arrPratos} setArrPratos={setArrPratos} indice={i} imgUrl={prato.imgUrl} nome={prato.nome} descricao={prato.descricao} preco={prato.preco}/>)
            } )
            }
        </ul>
    )


}

