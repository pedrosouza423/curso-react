import Titulo from "../../components/Titulo"

export default function usandoTitulo(){
    return (
        <>
            <h1>Usando Titulo:</h1>
            <Titulo 
                title="Titulo1" 
                description="Descrição1"
                pequeno
            />
        </>
    )
}