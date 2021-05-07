import Bebida from "./Bebida"

export default function Pratos(props) {

    const {arrBebidas, setArrBebidas} = props;

    return (
        <ul>
            {
            arrBebidas.map( (bebida, i) => {
                return(<Bebida bebida={bebida} arrBebidas = {arrBebidas} setArrBebidas={setArrBebidas} indice={i} imgUrl={bebida.imgUrl} nome={bebida.nome} descricao={bebida.descricao} preco={bebida.preco}/>)
            } )
            
            }

        </ul>
    )
}