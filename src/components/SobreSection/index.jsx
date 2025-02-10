import SobreCard from "./SobreCard";

export default function SobreSection() {
    return (
        <section id="#sobre" className="#sobre">
          <h2>O Pesquisa Ativa é para você que...</h2>
          <div className="boxcards-sobre"> 
            <SobreCard text={"Está enfrentando desafios para tomar decisões estratégicas e precisa de informações confiáveis para traçar o caminho certo para o sucesso."}></SobreCard>           
            <SobreCard text={"Quer identificar novas oportunidades de mercado e compreender as tendências que podem impulsionar seu negócio."}></SobreCard>           
            <SobreCard text={"Busca insights estratégicos que te ajudem a superar a concorrência e conquistar uma posição de destaque no mercado."}></SobreCard>           
            <SobreCard text={""}></SobreCard>           
          </div>
        </section>
    );
}