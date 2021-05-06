import React from 'react';

export default function Prato(props) {

    const [classe, setClasse] = React.useState("");

return (
    <li class={classe} onClick={() => EscolherPrato(props)}>
        <img src={props.imgUrl} alt={props.nome} />
        <p><strong>{props.nome}</strong></p>
        <p class="description">{props.descricao}</p>
        <p><strong>R$ <span> {props.preco} </span> </strong></p>
    </li>
)

    function EscolherPrato(props) {
        ({classe} === "") ? setClasse('chosen') : setClasse("");
        alert(props.nome)
    }
}