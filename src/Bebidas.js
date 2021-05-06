import Bebida from "./Bebida"

export default function Pratos() {

    const arrBebidas = [{
        imgUrl: "imagens/Mojito.PNG",
        nome: "Mojito",
        descricao: "Mojito Refrescante",
        preco: "19,00"},
    {
        imgUrl: "imagens/Margarita.PNG",
        nome: "Margarita",
        descricao: "Drink Margarita",
        preco: "20,00"},
    {
        imgUrl: "imagens/Coquetel.PNG",
        nome: "Coquetel",
        descricao: "Coquetel de Pitaya e Kiwi",
        preco: "15,50"},
    {
        imgUrl: "imagens/lagoa-azul.PNG",
        nome: "Lagoa Azul",
        descricao: "Drink com Curaçau Blue",
        preco: "13,00"},
    {
        imgUrl: "imagens/Gin.PNG",
        nome: "Gin Tônica",
        descricao: "Gin Tônica Refrescante",
        preco: "23,90"},
    {
        imgUrl: "imagens/pepsi.jpg",
        nome: "Pepsi Twist",
        descricao: "Pode ser PEPSI latinha",
        preco: "4,90"},
    ];

    return (
        <ul>

            {
            
            arrBebidas.map( (bebida) => {
                return(<Bebida imgUrl={bebida.imgUrl} nome={bebida.nome} descricao={bebida.descricao} preco={bebida.preco}/>)
            } )
            
            }

        </ul>
    )
}