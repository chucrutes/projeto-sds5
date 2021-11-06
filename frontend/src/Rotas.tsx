import Home from 'assets/pages/Home/home';
import Dashboard from 'assets/pages/Dashboard/dashboard';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
const Rotas = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>} />
                    
                <Route path="assets/pages/Dashboard" element={<Dashboard/>}/>
                 
            </Routes>
        </BrowserRouter>

    );
}

export default Rotas;