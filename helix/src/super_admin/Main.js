import { Route, Routes } from "react-router-dom";
import Header from "../components/Header";
import AddTenant from "./AddTenant";
import Footer from "../components/Footer";
import EditTenant from "./EditTenant";
import LandingPage from "./LandingPage";
import Tenants from "./Tenants";

export default function Main(){
    return (
        <>
        <Header />
        <div className="mainContainer">
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/tenants" element={<Tenants />} />
            <Route path="/tenants/add" element={<AddTenant />} />
            <Route path="/tenants/:id" element={<EditTenant />} />
        </Routes>
        </div>
        
        <Footer />
        </>
    )
}