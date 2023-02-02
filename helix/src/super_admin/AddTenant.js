import './components/stylesheets/editTenant.scss';
import BreadCrumb from "./components/BreadCrumb";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import React, { useState } from 'react';
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
                <div style={{ padding: 10 }}>{children}</div>
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

export default function AddTenant() {
    const [value, setValue] = React.useState(0);
    const [accessControlEnabled, setAccessControlEnabled] = React.useState(false);
    const [add,setAdd] = useState(true)
  

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const onSaveProfile = () => {
        setAccessControlEnabled(true)
        setAdd(false)
    }

   
    return <>
        <div style={{ marginTop: 20, marginLeft: 20, marginRight: 20, marginBottom: 10 }}>
            <BreadCrumb links={[{ name: "Home", path: '/' }, { name: "Tenants", path: "/tenants" }, { name: "Add New Tenant", path: "/add" }]} />
        </div>
        <div style={{
            display: "flex",
            flexDirection: "column",
            // margin: "60px"
            marginLeft: 20,
            marginRight: 20,
            marginTop:50
        }}>
            <div style={{ backgroundColor: "white", borderRadius: 3 }}>
                <div style={{ borderBottomWidth: 1, borderTopWidth: 0, borderLeftWidth: 0, borderRightWidth: 0, borderStyle: "solid", borderColor: '#B2B4B2' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                        <Tab label="Profile" {...a11yProps(0)} />
                        <Tab disabled={!accessControlEnabled} label="Access Control" {...a11yProps(1)} />
                    </Tabs>
                </div>

                <TabPanel value={value} index={0}>
                    <ProfileTab add={add} onSave={onSaveProfile} />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <AccessControlTab add />
                </TabPanel>
            </div>
        </div>
    </>
}