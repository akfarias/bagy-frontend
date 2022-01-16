import { BrowserRouter, Route, Routes, } from "react-router-dom";

/* Pages */
import PageSideBar from '../components/PageSidebar';
import Home from '../pages/Home';
import Stores from '../pages/Stores';
import Settings from '../pages/Settings';
import Sales from "../pages/Sales";
import Clients from "../pages/Clients";
import Products from "../pages/Products";
import Plans from "../pages/Plans";

export default function App() {
    return (
        <BrowserRouter>
            <Route path="/" element={() => PageSideBar} />
            <Routes>
                <Route path="/" element={Home} />
                <Route path="/lojas" element={() => Stores} />
                <Route path="/vendas" element={() => Sales} />
                <Route path="/clientes" element={() => Clients} />
                <Route path="/produtos" element={() => Products} />
                <Route path="/planos" element={() => Plans} />
                <Route path="/configuracoes" element={() => Settings} />

                {/* 404 */}
                <Route path="*" element={() => <h1>Página não encontrada</h1>} />
            </Routes>
        </BrowserRouter>
    );
}