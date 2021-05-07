import React from 'react';

export default function Prato(props) {

    const { prato, indice, setArrPratos, arrPratos } = props;

    function EscolherPrato(indice) {
        if(arrPratos[indice].classe === "") {
            arrPratos[indice].classe = 'chosen';
            arrPratos[indice].contador = 1;
            arrPratos[indice].display = "qtdItem"
            const novaArrPratos = [ ...arrPratos];
            setArrPratos(novaArrPratos)
        };
    }

    function acrescer(indice, evento) {
        arrPratos[indice].contador++;
        const novaArrPratos = [ ...arrPratos];
        setArrPratos(novaArrPratos)
        evento.stopPropagation();
    }
 
    function decrescer(indice, evento) {
        arrPratos[indice].contador = arrPratos[indice].contador - 1
        if(arrPratos[indice].contador < 1) {
            console.log(arrPratos[indice].contador);
            arrPratos[indice].classe = "";
            arrPratos[indice].display = "hidden";
            console.log(arrPratos[indice]);
        }
        const novaArrPratos = [ ...arrPratos];
        setArrPratos(novaArrPratos)
        evento.stopPropagation();
    }

return (
    <li className={prato.classe} onClick={() => EscolherPrato(indice)}>
        <img src={prato.imgUrl} alt={prato.nome} />
        <p><strong>{prato.nome}</strong></p>
        <p className="description">{prato.descricao}</p>
        <p><strong>R$ <span> {prato.preco} </span> </strong></p>
        <div className={prato.display}> <span className="vermelho" onClick={(evento) => decrescer(indice, evento)} >-</span>{prato.contador}<span className="verde" onClick={(evento) => acrescer(indice, evento)}>+</span> </div>
    </li>
)

}
