import Container from "../Container"
export default function SoluctionSection() {
    return (
        <section className="solutions-container">
      <h2>Conheça <strong>nossas soluções</strong>
      </h2>
      <div className="cards">
        <div className="card">
          <h3>Pesquisa de aceitação</h3>
          <p>
            Validação de serviços ou produtos, para mapear as reais necessidades
            do público.
          </p>
          <button>Falar com Consultor</button>
        </div>
        <div className="card">
          <h3>Pesquisa de público alvo</h3>
          <p>
            Definição do público alvo através de um levantamento segmentado
            para direcionar a oferta de produtos e serviços.
          </p>
          <button>Falar com Consultor</button>
        </div>
        <div className="card">
          <h3>Pesquisa de marketing</h3>
          <p>
            Estudo de produtos e serviços ofertados pela empresa, para traçar
            estratégias de marketing e gerar resultados mais efetivos.
          </p>
          <button>Falar com Consultor</button>
        </div>
      </div>
    </section>
    );
}