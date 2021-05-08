import React from 'react';

export default function Footer(props) {

    const {arrPratos, arrBebidas, arrSobremesas} = props
    const [pratosSelecionados, setPratosSelecionados] = React.useState([])
    const [bebidasSelecionados, setBebidasSelecionados] = React.useState([])
    const [sobremesasSelecionados, setSobremesasSelecionados] = React.useState([])

    arrPratos.forEach( (prato) => { 
        if(prato.classe === "chosen") {pratosSelecionados.push(prato)};
        return(pratosSelecionados);
    } );
    arrBebidas.forEach( (prato) => { 
        if(prato.classe === "chosen") {bebidasSelecionados.push(prato)};
        return(bebidasSelecionados);
    } );
    arrSobremesas.forEach( (prato) => { 
        if(prato.classe === "chosen") {sobremesasSelecionados.push(prato)};
        return(sobremesasSelecionados);
    } );

    if(pratosSelecionados.length && bebidasSelecionados.length && sobremesasSelecionados.length) {
        return (
            <div class="footer">
                <button className="buying"> 
                    <a className="wpp-pedido" href="https://wa.me/5521999999999?text=">
                        <p> <strong>Fechar pedido</strong> </p>
                    </a>
                </button>
            </div>
        )    
    }
        return (
            <div class="footer">
                <button className="on-hold">
                    <p>Selecione os 3 itens para fechar o pedido</p>
                </button>
            </div>
        )
}