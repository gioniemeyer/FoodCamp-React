import React from 'react';

export default function Sobremesa(props) {

const [classe, setClasse] = React.useState("");
const [contadorSobremesa, setContadorSobremesa] = React.useState(0);
const [display, setDisplay] = React.useState('hidden');

return (
    <li onClick={() => EscolherSobremesa(props)} className={classe}>
        <img src={props.imgUrl} alt={props.nome} />
        <p><strong>{props.nome}</strong></p>
        <p className="description">{props.descricao}</p>
        <p><strong>R$ <span> {props.preco} </span> </strong></p>
        <div className={display}> <span class="vermelho" onClick={decrescer}>-</span>{contadorSobremesa}<span class="verde" onClick={() => setContadorSobremesa(contadorSobremesa + 1)}>+</span> </div>
    </li>
)

    function EscolherSobremesa(props) {
        if(classe === "") {
            setClasse('chosen')
            setContadorSobremesa(1);
            setDisplay('qtdItem')
        };
    }


    function decrescer() {
        setContadorSobremesa(contadorSobremesa - 1);
        if(contadorSobremesa - 1 === 0) {
            setClasse("")
            setDisplay('hidden')
        };
    }
}