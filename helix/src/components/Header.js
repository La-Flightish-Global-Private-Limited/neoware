import "./stylesheets/header.scss";
import "./assets/fonts/GothamLight.ttf";
import "./assets/fonts/GothamBold.ttf";
import userSwitch from "./assets/icons/user_switch.png"
import help from "./assets/icons/help.png"
import userIcon from "./assets/icons/user_icon.png"
import downArrow from "./assets/icons/down_arrow.png"
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React from "react"
export default function Header() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [profileMenu,setProfileMenu] = React.useState(null);
    const open = Boolean(anchorEl);
    const profileOpen = Boolean(profileMenu);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleProfileClick = (event) => {
        setProfileMenu(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
        setProfileMenu(null);
    };
    return (
        <div className="container">
            <div className="subContainer">
                <p style={{ color: "#0033A0",fontWeight:"bold" }}>HELIX <span style={{ color: "#009A44" }}>SELF SERVICE PORTAL</span></p>
                <div className="right">
                    <img className="icon" onClick={handleClick} src={userSwitch} />
                    <img className="icon" src={help} />
                    <div onClick={handleProfileClick} className="profile">
                        <img src={userIcon} />
                        <div className="profileData">
                            <div>
                                <p style={{ fontSize: "13px", lineHeight: "0px" }}>pankit patel</p>
                                <p style={{ fontSize: "10px", color: "#707372" }}>Super Admin</p>
                            </div>

                        </div>
                        <img style={{ marginLeft: "10px" }} src={downArrow} />
                    </div>
                </div>
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={handleClose}>User View</MenuItem>
                <MenuItem onClick={handleClose}>Admin View</MenuItem>
                <MenuItem onClick={handleClose}>Super Admin View</MenuItem>
            </Menu>
            <Menu
                id="profile-menu"
                anchorEl={profileMenu}
                open={profileOpen}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'profile-button',
                }}
            >
                <MenuItem onClick={handleClose}>Support</MenuItem>
                <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
        </div>
    )
}