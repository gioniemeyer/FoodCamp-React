import Sobremesa from "./Sobremesa"

export default function Sobremesas(props) {

    const {arrSobremesas, setArrSobremesas} = props;

    return (
        <ul>

            {
            
            arrSobremesas.map( (sobremesa, i) => {
                return(<Sobremesa sobremesa={sobremesa} arrSobremesas = {arrSobremesas} setArrSobremesas={setArrSobremesas} indice={i} imgUrl={sobremesa.imgUrl} nome={sobremesa.nome} descricao={sobremesa.descricao} preco={sobremesa.preco}/>)
            } )
            
            }

        </ul>
    )
}