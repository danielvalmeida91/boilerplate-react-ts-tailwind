import { NavLink } from "react-router-dom";

export function Home() {

    return (
        <>
            <h1>Exemplo de página inicial</h1>
            <NavLink className='text-xs text-cyan-800 underline' to={'/contato'}>Link para página de contato</NavLink>
        </>
    )
}