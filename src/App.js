import './App.css'; // se estiver dentro de pages, ou './App.css' se estiver em src
import Modal from 'react-modal';

import BeneficiosSection from './components/BeneficiosSection';
import EconomizarSection from './components/EconomizarSection';
import FaturarSection from './components/FaturarSection';
import Header from './components/Header';
import SobreSection from './components/SobreSection';
import Container from './components/Container';
import SolucaoSection from './components/SolucaoSection'; // corrigido "Soluction" -> "Solucao"
import DataSecuritySection from './components/DataSecuritySection';
import ContatoForm from './components/ContatoSection';
import FooterSection from './components/Footersection';

function App() {
  return (
    <Container>
      <Header />
      <main>
        <SobreSection />
        <FaturarSection />
        <EconomizarSection />
        <BeneficiosSection />
        <SolucaoSection />
        <DataSecuritySection />
        <ContatoForm />    
        <FooterSection />   
        <Modal />
      </main>
    </Container>
  );
}

export default App;
