import './components/stylesheets/landingPage.scss';
import Header from "./components/Header";
import Tenant from "../components/assets/icons/tenant.svg"
import Footer from './components/Footer';
import { useNavigate } from 'react-router-dom';

export default function LandingPage() {
    const navigate = useNavigate()
    return (
        <div className="landingPageContainer">
            <Header />
            <div style={{ backgroundColor: "white", marginRight: 10, marginLeft: 10, marginTop: 20, borderRadius: 10, paddingTop: 5, paddingBottom: 5, paddingLeft: 10, borderLeft: "10px solid #009A44" }}>
                <div style={{ marginLeft: 10 }}>
                    <h1 style={{ fontSize: 20,lineHeight:1 }}>Welcome, Pankit patel</h1>
                    <p style={{ fontSize: 13, color: "#707372",lineHeight:1 }}>You are the super administrator for Helix self-service portal. Create and Manage tenants here. </p>
                </div>
            </div>
            <div onClick={()=>navigate('/tenants')} style={{
                backgroundColor:"white",
                padding:10,
                display:"flex",
                flexDirection:"column",
                alignItems:"center",
                justifyContent:"center",
                maxWidth:"392px",
                marginLeft:10,
                marginRight:10,
                marginTop:20,
                height:"207px",
                border: "1px solid #B2B4B2",
                cursor:"pointer"
                }}>
                    <img src={Tenant} />
                    <p style={{fontSize:20,fontWeight:"bold"}}>Tenants</p>
                    <p style={{fontSize:12,color:"#707372"}}>Tenants profile creation and access control</p>
            </div>
            <Footer />
        </div>
    )
}