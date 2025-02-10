import HeaderItem from "../HeaderItem"

export default function HeaderList() {
    return (
        <div className="header-content">
            <ul>
                <HeaderItem href={"#sobre"} text={"Sobre"} />
                <HeaderItem href={"#beneficios"} text={"Benefícios"} />
                <HeaderItem href={"#solucoes"} text={"Soluções"} />
                <HeaderItem href={"#economizar"} text={"Economia"} />
                <HeaderItem href={"contato"} text={"Entre em contato"} />
            </ul>
        </div>
    );
}