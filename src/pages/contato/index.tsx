import { NavLink } from "react-router-dom";

export function Contato() {

    return (
        <>
            <h1>Exemplo de página de contato</h1>
            <NavLink className='text-xs text-cyan-800 underline' to={'/'}>Link para página inicial</NavLink>
        </>
    )
}