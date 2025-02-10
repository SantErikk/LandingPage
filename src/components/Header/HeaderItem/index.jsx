export default function HeaderItem({href, text}) {
    return (
        <li>
            <a href={href}>{text}</a>
        </li>
    );
}