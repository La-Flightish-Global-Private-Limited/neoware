import SearchIcon from '@mui/icons-material/Search';
export default function SearchBar(props) {
    return (
        <div style={{...props.style,display:"flex",alignItems:"center",backgroundColor:"white",padding:5,border: "1px solid #B2B4B2",borderRadius:3}}>
            <div>
                <SearchIcon color='disabled' />
            </div>
            <input style={{borderStyle:"none",flex:1}} type={"text"} placeholder="Search" />
        </div>
    )
}