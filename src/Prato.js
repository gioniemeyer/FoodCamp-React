import React from 'react';

export default function Prato(props) {

const [classe, setClasse] = React.useState("");
const [contador, setContador] = React.useState(1);
const [display, setDisplay] = React.useState('hidden');

return (
    <li onClick={() => EscolherPrato(props)} class={classe}>
        <img src={props.imgUrl} alt={props.nome} />
        <p><strong>{props.nome}</strong></p>
        <p class="description">{props.descricao}</p>
        <p><strong>R$ <span> {props.preco} </span> </strong></p>
        <div class={display}> <span class="vermelho" onClick={decrescer}>-</span>{contador}<span class="verde" onClick={() => setContador(contador + 1)}>+</span> </div>
    </li>
)

    function EscolherPrato(props) {
        if(classe === "") {
            setClasse('chosen')
            setContador(1);
            setDisplay('qtdItem')
        };
    }

 
    function decrescer() {
        setContador(contador - 1);
        if(contador - 1 === 0) {
            setClasse("")
            setDisplay('hidden')
        };
    }
}
