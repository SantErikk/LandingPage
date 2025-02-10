import Container from "../Container"
export default function FaturarSection() {
    return (
        <section className="#faturar">
            <Container>
                <h2>Como faturar mais com o Pesquisa Ativa?</h2>
                <div className="boxcards-faturar">
                    <div className="card-faturar">
                        <h4>Antecipar Tendências de Mercado</h4>
                        <p>Estar à frente das tendências garante um posicionamento estratégico, atraindo consumidores mais rapidamente.</p>
                        <div className="card-faturar">
                            <h4>Compreender as Necessidades do Cliente</h4>
                            <p>A Pesquisa Ativa permite identificar as reais necessidades, dores e desejos dos clientes. Com esses dados, é possível criar ou ajustar produtos que realmente atendam a essas demandas.</p>
                        </div><div className="card-faturar">
                            <h4> Desenvolver Produtos Lucrativos</h4>
                            <p>: Insights vindos da Pesquisa Ativa ajudam a identificar recursos ou características pelos quais os clientes estão dispostos a pagar mais.</p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}