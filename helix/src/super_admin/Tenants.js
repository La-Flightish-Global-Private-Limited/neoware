import './components/stylesheets/tenant.scss';
import { useEffect, useState } from "react";
import { TenantService } from "../services/TenantServices";
import BreadCrumb from "./components/BreadCrumb";
import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import TenantCard from "./components/TenantCard";
import Footer from './components/Footer';

export default function Tenants() {
    const [tenants, setTenants] = useState([])
    const tenantService = new TenantService()
    useEffect(() => {
        tenantService.getTenants().then(res => setTenants(res.data)).catch(error => console.log("error", error))
    }, [])
    return (
        <div className='tenantCont'>
            <Header />
            <div style={{ marginTop: 20, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
                <BreadCrumb links={[{name:"Home",path:'/'},{name:"Tenants",path:"/tenants"}]} />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 20, marginLeft: 10, marginRight: 10, marginBottom: 10, flexWrap: "wrap" }}>
                <SearchBar style={{ flex: 1, maxWidth: 807 }} />
                <div style={{ flex: 1, maxWidth: "124px", height: "38px", backgroundColor: "#009A44", borderRadius: 3, alignItems: "center", justifyContent: "center", display: "flex" }}>
                    <p style={{ color: "white", textAlign: "center" }}><span>+</span> Add new</p>
                </div>
            </div>
            <div style={{ marginLeft: 10, marginRight: 10, marginTop: 20, marginBottom: 20 }}>
                <hr></hr>
            </div>
            <div style={{ margin: 10 }}>
                <div className="tenantGrid">
                    {tenants.map((tenant) => <TenantCard tenant={tenant} />)}
                </div>
            </div>
            <Footer />
        </div>
    )
}