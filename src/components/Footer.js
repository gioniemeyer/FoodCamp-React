import React from 'react';

import Prato from './Prato';
import Bebida from './Bebida'
import Sobremesa from './Sobremesa'

export default function Footer(contadorPrato, contadorSobremesa, contadorBebida) {

    const [classe, setClasse] = React.useState("");
 
    if(contadorPrato && contadorSobremesa && contadorBebida) {
        return (
            <div class="footer">
                <button className="buying hidden"> 
                    <a className="wpp-pedido" href="https://wa.me/5521999999999?text=">
                        <p> <strong>Fechar pedido</strong> </p>
                    </a>
                </button>
            </div>
        )    
    } else {
        return (
            <div class="footer">
                <button className="on-hold">
                    <p>Selecione os 3 itens para fechar o pedido</p>
                </button>
            </div>
        )
        }
}