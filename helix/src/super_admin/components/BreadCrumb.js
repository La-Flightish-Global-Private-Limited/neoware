import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { useNavigate } from 'react-router-dom';



export default function BreadCrumb(props) {
  console.log("props",props)
  const navigate = useNavigate()
  function handleClick(event,link) {
    event.preventDefault();
    navigate(link.path)
    console.info('You clicked a breadcrumb.');
  }
  const breadcrumbs = () => {
    let arr = []
    props.links.map((link,index) => {
      if(props.links.length === index + 1) {
        arr.push(<Typography key={index.toString()} color="blue">
        <p style={{fontFamily:"Gotham"}}>{link.name}</p>
      </Typography>)
      }
      else{
        arr.push(<Link underline="hover" key={index.toString()} color="inherit" href={link.path}  onClick={(event)=>handleClick(event,link)}>
        <p style={{fontFamily:"Gotham"}}>{link.name}</p>
      </Link>)
      }
    } )
    return arr;
  };

  return (
    <Stack spacing={2}>
      <Breadcrumbs
        separator={<NavigateNextIcon fontSize="small" />}
        aria-label="breadcrumb"
      >
        {breadcrumbs()}
      </Breadcrumbs>
    </Stack>
  );
}