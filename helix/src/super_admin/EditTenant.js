import './components/stylesheets/editTenant.scss';
import BreadCrumb from "./components/BreadCrumb";
import Header from "./components/Header";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import React from 'react';
import Footer from './components/Footer';

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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
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
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return <>
        <Header />
        <div style={{ marginTop: 20, marginLeft: 10, marginRight: 10, marginBottom: 10 }}>
            <BreadCrumb links={[{ name: "Home", path: '/' }, { name: "Tenants", path: "/tenants" }, { name: "Bon Secours Mercy Health", path: "/tenants" }]} />
        </div>
        <div className='suspendButton' >
            <p>Suspend Tenant</p>
        </div>
        <div style={{ backgroundColor:"white",margin:60,borderRadius:3 }}>
        <Box >
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Profile" {...a11yProps(0)} />
                    <Tab label="Access Control" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                Item One
            </TabPanel>
            <TabPanel value={value} index={1}>
                Item Two
            </TabPanel>
        </Box>
        </div>

        <Footer />

    </>
}