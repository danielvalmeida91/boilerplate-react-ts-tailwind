import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom'
import { Home } from './pages/home'
import { Contato } from './pages/contato'
export function App() {

    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/contato' element={<Contato />} />
            </Routes>
        </BrowserRouter>
    )
}