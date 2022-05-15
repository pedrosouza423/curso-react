export default function Titulo(props) {
    return props.pequeno ? (
        <>
            <p>{props.title}</p>
            <p>{props.description}</p>
        </>
    ):(
        <>
            <h2>{props.title}</h2>
            <h2>{props.description}</h2>
        </>
    );
}