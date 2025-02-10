import Container from "../Container";

export default function EconomizarSection() {
    return (
        <section id="economizar" className="economizar">
            <Container>
                <h2>Como economizar com o Pesquisa Ativa?</h2>
                <div className="boxes-economizar">
                    <div className="box-economizar">
                        <h4>Identificar o Público-Alvo Certo</h4>
                        <p> Insights sobre o público ajudam a direcionar campanhas de marketing para pessoas com maior probabilidade de conversão, reduzindo o desperdício com anúncios genéricos.</p>
                    </div>
                    <div className="box-economizar">
                        <h4>Prevenir Lançamentos Mal Planejados</h4>
                        <p>A Pesquisa Ativa identifica obstáculos ou problemas antes de um lançamento, permitindo ajustes que economizem recursos.</p>
                    </div>
                </div>
            </Container>
        </section>
    );
}
