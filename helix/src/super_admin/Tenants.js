import './components/stylesheets/tenant.scss';
import { useEffect, useState } from "react";
import { TenantService } from "../services/TenantServices";
import BreadCrumb from "./components/BreadCrumb";
import SearchBar from "./components/SearchBar";
import TenantCard from "./components/TenantCard";
import { useNavigate } from 'react-router-dom';

export default function Tenants() {
    const [tenants, setTenants] = useState([
        {
          "tenanT_KEY": 0,
          "tenanT_NM": "string",
          "srvR_URL": "string",
          "actV_FLG": true
        }
      ])
    const tenantService = new TenantService()
    const navigate = useNavigate()
    useEffect(() => {
        tenantService.getTenants().then(res => setTenants(res)).catch(error => console.log("error", error))
    }, [])
    return (
        <div className='tenantCont'>
            <div style={{ marginTop: 20, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
                <BreadCrumb links={[{name:"Home",path:'/'},{name:"Tenants",path:"/tenants"}]} />
            </div>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginTop: 20, marginLeft: 10, marginRight: 10, marginBottom: 10, flexWrap: "wrap" }}>
                <SearchBar style={{ flex: 1, maxWidth: 807,marginRight:10 }} />
                <div onClick={()=>navigate('/tenants/add')} style={{ flex: 1, maxWidth: "124px", height: "38px", backgroundColor: "#009A44", borderRadius: 3, alignItems: "center", justifyContent: "center", cursor:"pointer",display:"flex" }}>
                    <p style={{ color: "white", textAlign: "center",lineHeight:1 }}><span>+</span> Add new</p>
                </div>
            </div>
            <div style={{ marginLeft: 10, marginRight: 10, }}>
                <hr></hr>
            </div>
            <div style={{ margin: 10 }}>
                <div className="tenantGrid">
                    {tenants.map((tenant) => <TenantCard tenant={tenant} />)}
                </div>
            </div>
        </div>
    )
}