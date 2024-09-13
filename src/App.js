// import React from 'react';
import NavBar from './components/nav-bar/navbar.js'
import Footer from './pages/footer/footer.js'
import HomeSection from './pages/HomeSection/HomeSection.js'
import AboutSection from './pages/AboutSection/AboutSection.js'
import ProductsSection from './pages/ProductsSection/ProductsSection.js'
import ServiceSection from './pages/ServiceSection/ServiceSection.js'
import ContactSection from './pages/ContactSection/ContactSection.js'
// import MarksClients from './components/marcas&clientes/marcas&clientes.js'
// import Login from './pages/Login/Login.js'


function App() {

  return (
    <>
    {/* <label>Assunto:</label>
      <input type="text" list='lista-de-assuntos' placeholder="" />

      <datalist id='lista-de-assuntos'>
        <option value="Agendar Consultoria"></option>
        <option value="Pedido de Cotação Serviço"></option>
        <option value="Pedir Serviço"></option>
        <option value="Info. Serviço"></option>
        <option value="Pedido de Cotação Produto"></option>
        <option value="Pedir Produto"></option>
        <option value="Info. Produto"></option>
      </datalist>
      <br />
      <br />

      <label>Servico ou produto:</label>
      <input type="tel" list='lista-de-servicos' placeholder="Produto ou Serviço" />

      <datalist id='lista-de-produtos'>
        <option value="Pedido de Cotação"></option>
        <option value="Agendar Consultoria"></option>
        <option value="Pedir Serviço"></option>
        <option value="Info. Serviço"></option>
        <option value="Pedir Produto"></option>
        <option value="Info. Produto"></option>
      </datalist>

      <datalist id='lista-de-servicos'>
        <option value="Serviços de Segurança digital"></option>
        <option value="Desenvolvimento de Softwares e Websites"></option>
        <option value="Implementação de segurança eletrónica e automação"></option>
        <option value="Serviços de impressão gráfica"></option>
      </datalist> */}
      <NavBar/> 
      {/* <Login/>  */}
      <HomeSection/>
      <AboutSection/>
      {/* <MarksClients/> */}
      <ProductsSection/>
      <ServiceSection/>
      <ContactSection/>
      <Footer/>

    </>
  );


}

export default App;
