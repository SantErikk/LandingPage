import Container from '../components/Container';
import Header from '../components/Header';
import SobreSection from '../components/SobreSection';
import FaturarSection from '../components/FaturarSection';
import EconomizarSection from '../components/EconomizarSection';
import BeneficiosSection from '../components/BeneficiosSection';
import SolucaoSection from '../components/SolucaoSection';
import DataSecuritySection from '../components/DataSecuritySection';
import ContatoForm from '../components/ContatoSection';
import FooterSection from '../components/Footersection';

function Home() {
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
      </main>
    </Container>
  );
}

export default Home;
