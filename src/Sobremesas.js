import Sobremesa from "./Sobremesa"

export default function Sobremesas() {

    const arrSobremesas = [{
        imgUrl: "imagens/Brigadeiro.PNG",
        nome: "brigadeiro",
        descricao: "Brigadeiro Vegano",
        preco: "3,00"},
    {
        imgUrl: "imagens/brownie-cookie.PNG",
        nome: "Brownie e Cookir",
        descricao: "Brownie com massa de cookie",
        preco: "12,50"},
    {
        imgUrl: "imagens/mini-torta.PNG",
        nome: "Mini torta",
        descricao: "mini torta de Chocolate com Morango",
        preco: "17,90"},
    {
        imgUrl: "imagens/Ovo_de_colher.PNG",
        nome: "Ovo de colher",
        descricao: "Páscoa o ano todinho",
        preco: "50,00"},
    {
        imgUrl: "imagens/taça-sobremesa.PNG",
        nome: "Taça de Sobremesa",
        descricao: "Taça com morango e marshmallow",
        preco: "22,90"},
    {
        imgUrl: "imagens/tortelete-caramelo.PNG",
        nome: "Tortelete de Caramelo",
        descricao: "Tortelete com caramelo e flor de sal",
        preco: "20,00"},
    ];

    return (
        <ul>

            {
            
            arrSobremesas.map( (sobremesa) => {
                return(<Sobremesa imgUrl={sobremesa.imgUrl} nome={sobremesa.nome} descricao={sobremesa.descricao} preco={sobremesa.preco}/>)
            } )
            
            }

        </ul>
    )
}