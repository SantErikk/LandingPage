import MotivosItem from "./MotivosItem";

export default function MotivosLista() {
    return (
        <ul className="motivos">
            <MotivosItem number={"01"} text={"Descobrir e melhoras as oportunidades de mercado"} />
            <MotivosItem number={"02"} text={"Desenvolver e testar produtos e serviços mais lucrativos"} />
            <MotivosItem number={"03"} text={"Monitorar os concorrentes e sair na frente deles"} />
            <MotivosItem number={"04"} text={"Tomar decisões baseadas em dados para alavancar vendas e faturar mais"} />
            <MotivosItem number={"05"} text={"Conhecer melhor os clientes e público-alvo para ter maior assertividade nas campanhas de marketing"} />
        </ul>
    );
}