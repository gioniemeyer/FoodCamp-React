import React from 'react';

export default function Bebida(props) {

const [classe, setClasse] = React.useState("");
const [contadorBebida, setContadorBebida] = React.useState(0);
const [display, setDisplay] = React.useState('hidden');
    
return (
    <li onClick={() => EscolherBebida(props)} className={classe}>
        <img src={props.imgUrl} alt={props.nome} />
        <p><strong>{props.nome}</strong></p>
        <p className="description">{props.descricao}</p>
        <p><strong>R$ <span> {props.preco} </span> </strong></p>
        <div className={display}> <span class="vermelho" onClick={decrescer}>-</span>{contadorBebida}<span class="verde" onClick={() => setContadorBebida(contadorBebida + 1)}>+</span> </div>
    </li>
)

    function EscolherBebida(props) {
        if(classe === "") {
            setClasse('chosen')
            setContadorBebida(1);
            setDisplay('qtdItem')
        };
    }


    function decrescer() {
        setContadorBebida(contadorBebida - 1);
        if(contadorBebida - 1 === 0) {
            setClasse("")
            setDisplay('hidden')
        };
    }

}