import { useState } from "react"
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

export default function ProfileTab(props) {
    const [edit, setEdit] = useState(false)
    const [open, setOpen] = useState(false)
    const [name, setName] = useState(props.add ? '' : 'test')
    const [server, setServer] = useState(props.add ? '' : 'test')
    const [add,setAdd] = useState(props.add)
    const [submit,setSubmit] = useState(false)
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

    const onYes = () => {
        onNo()
        setEdit(true)
    }

    const onNo = () => {
        setOpen(false)
    }

    const onSave = () => {
        setSubmit(true)
        if(name.trim() && server.trim()){
            props.onSave()
            setAdd(false)
        }
    }
    return (
        <>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "flex-end" }}>
                {
                    add ?
                        <div onClick={() => onSave()} className="profileEdit">
                            <p>Save</p>
                        </div>
                        :

                        !props.disabled && (!edit ?
                            <div onClick={() => setOpen(true)} className="profileEdit">
                                <p>Edit</p>
                            </div>
                            :
                            <>
                                <div onClick={() => setEdit(false)} className="profileCancel">
                                    <p>Cancel</p>
                                </div>
                                <div onClick={() => setEdit(false)} className="profileEdit">
                                    <p>Save</p>
                                </div>
                            </>)
                }
            </div>
            <Modal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 20 }}>
                        <p style={{ textAlign: "center", fontWeight: "bold" }}>Edit Tenant Profile</p>
                        <p style={{ textAlign: "center", width: "80%" }}>You are about to edit the details of tenant. Do you want to proceed?</p>
                    </div>
                    <div style={{ margin: "auto", display: "flex" }}>
                        <div onClick={onNo} style={{ width: "50%", backgroundColor: "#ECECEC", cursor: "pointer" }}>
                            <p style={{ textAlign: "center" }}>No</p>
                        </div>
                        <div onClick={onYes} style={{ backgroundColor: "#009A44", width: "50%", cursor: "pointer" }}>
                            <p style={{ color: "white", textAlign: "center" }}>Yes</p>
                        </div>
                    </div>
                </Box>
            </Modal>
            <div className="inputContainer">
        
                <div style={{maxWidth: "335px"}}>
                    <p>Tenant Name</p>
                    <input
                        value={name}
                        placeholder="Name"
                        onChange={(event) => setName(event.target.value)}
                        disabled={!add && (props.disabled || !edit)}
                        className={`${(submit && !name) ? 'error' : ''}`}
                    />
                    {submit && !name && <p style={{margin:10,color:"red",fontSize:12}}>Name is required.</p>}
                </div>
                <div style={{maxWidth: "335px"}}>
                    <p>Server</p>
                    <input
                        value={server}
                        placeholder="Server"
                        onChange={(event) => setServer(event.target.value)}
                        disabled={!add && (props.disabled || !edit)}
                        className={`${(submit && !server) ? 'error' : ''}`}
                    />
                    {submit && !server && <p style={{margin:10,color:"red",fontSize:12}}>Server is required.</p>}
                </div>
            </div>
        </>
    )
}