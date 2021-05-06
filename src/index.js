import ReactDom from 'react-dom';
import Header from './Header';
import Container from './Container';
import Footer from './Footer';
import ConfirmacaoCompra from './ConfirmacaoCompra';

function App() {
    return (
    <>
        <Header />

        <Container />

        <Footer />

        <ConfirmacaoCompra />
    </>
    )
}


ReactDom.render(<App />, document.querySelector('.App'));