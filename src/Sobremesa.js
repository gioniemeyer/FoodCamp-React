export default function Sobremesa(props) {
return (
    <li>
        <img src={props.imgUrl} alt={props.nome} />
        <p><strong>{props.nome}</strong></p>
        <p class="description">{props.descricao}</p>
        <p><strong>R$ <span> {props.preco} </span> </strong></p>
    </li>
)
}