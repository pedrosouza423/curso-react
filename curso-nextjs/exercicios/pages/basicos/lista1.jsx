const gerarLista = n => {
    const list = [];
    for (let i = 1; i <= n; i++) {
        list.push(
            <h2>{i}</h2>
        );
    }

    return list;
}

export default function lista1 (){
    return (
        <>
            <span>{gerarLista(10)}</span>
            <h2>Exemple</h2>
        </>
    );
}