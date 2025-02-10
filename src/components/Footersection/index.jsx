import React, { useState } from 'react';
import Modal from 'react-modal';

// Configuração do Modal
Modal.setAppElement('#root'); 

const Footer = () => {
  const [isLgpdOpen, setLgpdOpen] = useState(false);
  const [isPrivacyOpen, setPrivacyOpen] = useState(false);
  const [isTermsOpen, setTermsOpen] = useState(false);

  return (
    <footer className="footer">
      <div className="footer-content">
        <p>© 2023 Sua Empresa. Todos os direitos reservados.</p>
        <div className="footer-links">
          <button onClick={() => setLgpdOpen(true)}>LGPD</button>
          <span>|</span>
          <button onClick={() => setPrivacyOpen(true)}>Política de Privacidade</button>
          <span>|</span>
          <button onClick={() => setTermsOpen(true)}>Termos de Uso</button>
        </div>
      </div>

      {/* Pop-up LGPD */}
      <Modal isOpen={isLgpdOpen} onRequestClose={() => setLgpdOpen(false)} className="modal">
        <div className="modal-content">
          <button className="close-button" onClick={() => setLgpdOpen(false)}>✖</button>
          <h2>LGPD</h2>
          <p>Informações sobre a Lei Geral de Proteção de Dados.</p>
        </div>
      </Modal>

      {/* Pop-up Política de Privacidade */}
      <Modal isOpen={isPrivacyOpen} onRequestClose={() => setPrivacyOpen(false)} className="modal">
        <div className="modal-content">
          <button className="close-button" onClick={() => setPrivacyOpen(false)}>✖</button>
          <h2>Política de Privacidade</h2>
          <p>Detalhes sobre como coletamos e usamos seus dados.</p>
        </div>
      </Modal>

      {/* Pop-up Termos de Uso */}
      <Modal isOpen={isTermsOpen} onRequestClose={() => setTermsOpen(false)} className="modal">
        <div className="modal-content">
          <button className="close-button" onClick={() => setTermsOpen(false)}>✖</button>
          <h2>Termos de Uso</h2>
          <p>Condições de uso do nosso serviço.</p>
        </div>
      </Modal>
    </footer>
  );
};
export default Footer;