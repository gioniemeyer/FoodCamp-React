import Prato from "./Prato"

export default function Pratos() {

    const arrPratos = [{
        imgUrl: "imagens/Croquetinho-jaca.PNG",
        nome: "Croquetinho",
        descricao: "Croquetinho de Jaca",
        preco: "14,90", classe: ""},
    {
        imgUrl: "imagens/Feijoada-vegana.PNG",
        nome: "Feijoada Vegana",
        descricao: "Feijoada com vegetais",
        preco: "30,00", classe: ""},
    {
        imgUrl: "imagens/Salpicao-vegano.PNG",
        nome: "Salpicão",
        descricao: "Salpicão vegana com maionese caseira",
        preco: "25,00", classe: ""},
    {
        imgUrl: "imagens/Strogonoff-cogumelo.PNG",
        nome: "Strogonoff Veg",
        descricao: "Strogonoff de Cogumelo",
        preco: "27,90", classe: ""},
    {
        imgUrl: "imagens/Sushi.PNG",
        nome: "Sushi Vegano",
        descricao: "Prato de sushi 100% vegano",
        preco: "35,00", classe: ""},
    {
        imgUrl: "imagens/wrap-falafel.PNG",
        nome: "Wrap",
        descricao: "Wrap com falafel e salada",
        preco: "17,00", classe: ""},
    ];

    return (
        <ul>
            {
            arrPratos.map( (prato) => {
                    return(<Prato imgUrl={prato.imgUrl} nome={prato.nome} descricao={prato.descricao} preco={prato.preco}/>)
            } )
            }
        </ul>
    )

}

