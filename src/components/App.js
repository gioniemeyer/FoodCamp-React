import React from 'react';

import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import ConfirmacaoCompra from './ConfirmacaoCompra';

export default function App() {

    const [arrPratos, setArrPratos] = React.useState([{
        imgUrl: "imagens/Croquetinho-jaca.PNG", nome: "Croquetinho",
        descricao: "Croquetinho de Jaca", preco: "14,90", classe: "", contador: 0, display: 'hidden'},
    {
        imgUrl: "imagens/Feijoada-vegana.PNG", nome: "Feijoada Vegana",
        descricao: "Feijoada com vegetais", preco: "30,00", classe: "", contador: 0, display: 'hidden'},
    {
        imgUrl: "imagens/Salpicao-vegano.PNG", nome: "Salpicão",
        descricao: "Salpicão vegana com maionese caseira", preco: "25,00", classe: "", contador: 0, display: 'hidden'},
    {
        imgUrl: "imagens/Strogonoff-cogumelo.PNG", nome: "Strogonoff Veg",
        descricao: "Strogonoff de Cogumelo", preco: "27,90", classe: "", contador: 0, display: 'hidden'},
    {
        imgUrl: "imagens/Sushi.PNG", nome: "Sushi Vegano",
        descricao: "Prato de sushi 100% vegano", preco: "35,00", classe: "", contador: 0, display: 'hidden'},
    {
        imgUrl: "imagens/wrap-falafel.PNG", nome: "Wrap",
        descricao: "Wrap com falafel e salada", preco: "17,00", classe: "", contador: 0, display: 'hidden'},
    ]);

    return (
    <>
        <Header />

        <Container arrPratos = {arrPratos} setArrPratos={setArrPratos}/>

        <Footer />

        <ConfirmacaoCompra />
    </>
    )

}