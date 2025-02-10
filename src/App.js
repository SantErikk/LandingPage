import './App.css';
import Modal from 'react-modal'
import BeneficiosSection from './components/BeneficiosSection';
import EconomizarSection from './components/EconomizarSection';
import FaturarSection from './components/FaturarSection';
import Header from './components/Header';
import SobreSection from './components/SobreSection';
import Container from './components/Container';
import SoluctionSection from './components/SolucaoSection';
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
        <SoluctionSection />
        <DataSecuritySection />
        <ContatoForm />    
        <FooterSection />   
        <Modal />
      </main>
    </Container>
  );
}
export default App;