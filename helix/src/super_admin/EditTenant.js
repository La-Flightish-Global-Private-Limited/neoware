import './components/stylesheets/editTenant.scss';
import BreadCrumb from "./components/BreadCrumb";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import React from 'react';
import ProfileTab from './components/ProfileTab';
import AccessControlTab from './components/AccessControlTab';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div style={{ paddingRight:10,
                    paddingLeft: 10 }}>{children}</div>
            )}
        </div>
    );
}


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function EditTenant() {
    const [value, setValue] = React.useState(0);
    const [suspend, setSuspend] = React.useState(false);
    const [open, setOpen] = React.useState(false);
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        // width: 400,
        bgcolor: 'background.paper',
        // border: '2px solid #000',
        border: '0px none #000 !important'
        // boxShadow: 24,
        // p: 4,
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const onYes = () => {
        onNo()
        setSuspend(true)
        setValue(0);
    }

    const onNo = () => {
        setOpen(false)
    }
    return <>
        <div style={{ marginTop: 20, marginLeft: 20, marginRight: 20, marginBottom: 10 }}>
            <BreadCrumb links={[{ name: "Home", path: '/' }, { name: "Tenants", path: "/tenants" }, { name: "Bon Secours Mercy Health", path: "/tenants" }]} />
        </div>
        <div style={{
            display: "flex",
            flexDirection: "column",
            // margin: "60px"
            marginLeft: 20,
            marginRight: 20
        }}>
            <div onClick={() => { suspend ? setSuspend(false) : setOpen(true) }} className='suspendButton' >
                <p>{suspend ? "Reinstate Tenant" : "Suspend Tenant"}</p>
            </div>
            <div style={{ backgroundColor: "white", borderRadius: 3 }}>
                <div style={{ borderBottomWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderStyle: "solid", borderColor: '#B2B4B2' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab disabled={suspend} label={<span style={{fontFamily:"Gotham"}}>Profile</span>} {...a11yProps(0)} />
                        <Tab disabled={suspend} label={<span style={{fontFamily:"Gotham"}}>Access Control</span>} {...a11yProps(1)} />
                    </Tabs>
                </div>

                <TabPanel value={value} index={0}>
                    <ProfileTab disabled={suspend} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <AccessControlTab />
                </TabPanel>
            </div>
        </div>

        <Modal
            open={open}
            onClose={() => setOpen(false)}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
                <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20 }}>
                    <p style={{ textAlign: "center", fontWeight: "bold" }}>Suspend Tenant</p>
                    <p style={{ textAlign: "center", width: "80%",lineHeight:1 }}>You are about to suspend the tenant.
                        This will disable all users of the tenant, they cant
                        be reinstated until the tenant is reinstated
                        Do you want to proceed?</p>
                </div>
                <div style={{ margin: "auto", display: "flex" }}>
                    <div onClick={onYes} style={{ backgroundColor: "#ECECEC", width: "50%", cursor: "pointer" }}>
                        <p style={{ textAlign: "center",lineHeight:1 }}>Yes</p>
                    </div>
                    <div onClick={onNo} style={{ width: "50%",backgroundColor: "#009A44",  cursor: "pointer" }}>
                        <p style={{ color: "white", textAlign: "center",lineHeight:1 }}>No</p>
                    </div>
                </div>
            </Box>
        </Modal>



    </>
}