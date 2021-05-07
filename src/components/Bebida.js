import React from 'react';

export default function Bebida(props) {

    const { bebida, indice, setArrBebidas, arrBebidas } = props;

    function EscolherPrato(indice) {
        if(arrBebidas[indice].classe === "") {
            arrBebidas[indice].classe = 'chosen';
            arrBebidas[indice].contador = 1;
            arrBebidas[indice].display = "qtdItem"
            const novaArrBebidas = [ ...arrBebidas];
            setArrBebidas(novaArrBebidas)
        };
    }

    function acrescer(indice, evento) {
        arrBebidas[indice].contador++;
        const novaArrBebidas = [ ...arrBebidas];
        setArrBebidas(novaArrBebidas)
        evento.stopPropagation();
    }
 
    function decrescer(indice, evento) {
        arrBebidas[indice].contador = arrBebidas[indice].contador - 1
        if(arrBebidas[indice].contador < 1) {
            console.log(arrBebidas[indice].contador);
            arrBebidas[indice].classe = "";
            arrBebidas[indice].display = "hidden";
            console.log(arrBebidas[indice]);
        }
        const novaArrBebidas = [ ...arrBebidas];
        setArrBebidas(novaArrBebidas)
        evento.stopPropagation();
    }

return (
    <li className={bebida.classe} onClick={() => EscolherPrato(indice)}>
        <img src={bebida.imgUrl} alt={bebida.nome} />
        <p><strong>{bebida.nome}</strong></p>
        <p className="description">{bebida.descricao}</p>
        <p><strong>R$ <span> {bebida.preco} </span> </strong></p>
        <div className={bebida.display}> <span className="vermelho" onClick={(evento) => decrescer(indice, evento)} >-</span>{bebida.contador}<span className="verde" onClick={(evento) => acrescer(indice, evento)}>+</span> </div>
    </li>
)

}