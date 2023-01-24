import "./stylesheets/header.css"
import userSwitch from "../../components/assets/icons/user_switch.png"
import help from "../../components/assets/icons/help.png"
import userIcon from "../../components/assets/icons/user_icon.png"
import downArrow from "../../components/assets/icons/down_arrow.png"
export default function Header(){
    return (
        <div className="container">
            <div className="subContainer">
                <p style={{color:"#0033A0"}}>HELIX <span style={{color:"#009A44"}}>SELF SERVICE PORTAL</span></p>
                <div className="right">
                    <img className="icon" src={userSwitch} />
                    <img className="icon" src={help} />
                    <div className="profile">
                        <img src={userIcon} />
                        <div className="profileData">
                            <div>
                                <p style={{fontSize:"13px",lineHeight:"0px"}}>pankit patel</p>
                                <p style={{fontSize:"10px",color:"#707372"}}>Super Admin</p>
                            </div>
                            {/* <img style={{marginLeft:"10px"}} src={downArrow} /> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}