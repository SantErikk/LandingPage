import HeaderList from "./HeaderList";
import { useEffect } from 'react';
export default function Header() {
    useEffect(() => {
        const button = document.getElementById('consultation-button');}, []);

    return (
        <header className="header">
            <section className="topo">
                <HeaderList />
                <div className="text-topo">
                    <h1>Descubra por que o Pesquisa Ativa está revolucionando o mundo dos negócios!</h1>
                    <p>Oferecemos métodos de pesquisa, rápidos, assertivos e personalizados para ajudar sua empresa a alcançar resultados estratégicos com base em dados reais.</p>
                </div>
                <button
                    id="consultation-button"
                    className="consultation-button"
                    onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                >
                    Quero agendar uma consultoria gratuita!
                </button>
            </section>
        </header>
    );
}