import SearchIcon from '@mui/icons-material/Search';
import { useEffect, useState } from 'react';
export default function SearchBar(props) {
    const [searchData,setSearchData] = useState('')
    useEffect(()=>{
        console.log(searchData)
    },[searchData])
    return (
        <div style={{...props.style,display:"flex",alignItems:"center",backgroundColor:"white",padding:5,border: "1px solid #B2B4B2",borderRadius:3}}>
            <div>
                <SearchIcon color='disabled' />
            </div>
            <input value={searchData} onChange={(event) => setSearchData(event.target.value)} style={{borderStyle:"none",flex:1}} type={"text"} placeholder="Search" />
        </div>
    )
}