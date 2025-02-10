export default function MotivosItem ({number, text}) {
    return (
        <li className="motivo-lista">
            <strong>{number}</strong>
            <span>{text}</span>
        </li>
    );
}
