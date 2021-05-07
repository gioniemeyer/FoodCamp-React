import React from 'react';

export default function Sobremesa(props) {

    const { sobremesa, indice, setArrSobremesas, arrSobremesas } = props;

    function EscolherPrato(indice) {
        if(arrSobremesas[indice].classe === "") {
            arrSobremesas[indice].classe = 'chosen';
            arrSobremesas[indice].contador = 1;
            arrSobremesas[indice].display = "qtdItem"
            const novaArrSobremesas = [ ...arrSobremesas];
            setArrSobremesas(novaArrSobremesas)
        };
    }

    function acrescer(indice, evento) {
        arrSobremesas[indice].contador++;
        const novaArrSobremesas = [ ...arrSobremesas];
        setArrSobremesas(novaArrSobremesas)
        evento.stopPropagation();
    }
 
    function decrescer(indice, evento) {
        arrSobremesas[indice].contador = arrSobremesas[indice].contador - 1
        if(arrSobremesas[indice].contador < 1) {
            console.log(arrSobremesas[indice].contador);
            arrSobremesas[indice].classe = "";
            arrSobremesas[indice].display = "hidden";
            console.log(arrSobremesas[indice]);
        }
        const novaArrSobremesas = [ ...arrSobremesas];
        setArrSobremesas(novaArrSobremesas)
        evento.stopPropagation();
    }

return (
    <li className={sobremesa.classe} onClick={() => EscolherPrato(indice)}>
        <img src={sobremesa.imgUrl} alt={sobremesa.nome} />
        <p><strong>{sobremesa.nome}</strong></p>
        <p className="description">{sobremesa.descricao}</p>
        <p><strong>R$ <span> {sobremesa.preco} </span> </strong></p>
        <div className={sobremesa.display}> <span className="vermelho" onClick={(evento) => decrescer(indice, evento)} >-</span>{sobremesa.contador}<span className="verde" onClick={(evento) => acrescer(indice, evento)}>+</span> </div>
    </li>
)
}