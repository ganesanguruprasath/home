import { Routes, Route, Navigate } from "react-router-dom";
import Spapage from "../pages/spapage";
import Login from '../pages/Login';
import Register from '../pages/Register';

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Navigate to="/home" />} />
            <Route path="/home" element={<Spapage />} /> {/* Home Page */}
            <Route path="/login" element={<Login />} />  {/* Login Page */}
            <Route path="/register" element={<Register />} />  {/* Register Page */}
        </Routes>
    )
}

export default Routing;
