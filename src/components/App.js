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

    const [arrBebidas, setArrBebidas] = React.useState([{
        iimgUrl: "imagens/Mojito.PNG", nome: "Mojito",
        descricao: "Mojito Refrescante", preco: "19,00", classe: "", contador: 0, display: 'hidden'},
    {
        imgUrl: "imagens/Margarita.PNG", nome: "Margarita",
        descricao: "Drink Margarita", preco: "20,00", classe: "", contador: 0, display: 'hidden'},
    {
        imgUrl: "imagens/Coquetel.PNG", nome: "Coquetel",
        descricao: "Coquetel de Pitaya e Kiwi", preco: "15,50", classe: "", contador: 0, display: 'hidden'},
    {
        imgUrl: "imagens/lagoa-azul.PNG", nome: "Lagoa Azul",
        descricao: "Drink com Curaçau Blue", preco: "13,00", classe: "", contador: 0, display: 'hidden'},
    {
        imgUrl: "imagens/Gin.PNG", nome: "Gin Tônica",
        descricao: "Gin Tônica Refrescante", preco: "23,90", classe: "", contador: 0, display: 'hidden'},
    {
        imgUrl: "imagens/pepsi.jpg", nome: "Pepsi Twist",
        descricao: "Pode ser PEPSI latinha", preco: "4,90", classe: "", contador: 0, display: 'hidden'},
    ]);

    const [arrSobremesas, setArrSobremesas] = React.useState([{
        imgUrl: "imagens/Brigadeiro.PNG", nome: "brigadeiro",
        descricao: "Brigadeiro Vegano", preco: "3,00", classe: "", contador: 0, display: 'hidden'},
    {
        imgUrl: "imagens/brownie-cookie.PNG", nome: "Brownie e Cookir",
        descricao: "Brownie com massa de cookie", preco: "12,50", classe: "", contador: 0, display: 'hidden'},
    {
        imgUrl: "imagens/mini-torta.PNG", nome: "Mini torta", descricao: "mini torta de Chocolate com Morango",
        preco: "17,90", classe: "", contador: 0, display: 'hidden'},
    {
        imgUrl: "imagens/Ovo_de_colher.PNG", nome: "Ovo de colher",
        descricao: "Páscoa o ano todinho",preco: "50,00", classe: "", contador: 0, display: 'hidden'},
    {
        imgUrl: "imagens/taça-sobremesa.PNG", nome: "Taça de Sobremesa",
        descricao: "Taça com morango e marshmallow", preco: "22,90", classe: "", contador: 0, display: 'hidden'},
    {
        imgUrl: "imagens/tortelete-caramelo.PNG", nome: "Tortelete de Caramelo",
        descricao: "Tortelete com caramelo e flor de sal", preco: "20,00", classe: "", contador: 0, display: 'hidden'},
    ]);

    return (
    <>
        <Header />

        <Container arrPratos = {arrPratos} setArrPratos={setArrPratos} arrBebidas = {arrBebidas} setArrBebidas={setArrBebidas} arrSobremesas = {arrSobremesas} setArrSobremesas={setArrSobremesas}/>

        <Footer arrPratos = {arrPratos} arrBebidas = {arrBebidas} arrSobremesas = {arrSobremesas}  />

        <ConfirmacaoCompra  arrPratos = {arrPratos} arrBebidas = {arrBebidas} arrSobremesas = {arrSobremesas} />
    </>
    )

}